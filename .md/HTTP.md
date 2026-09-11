# Protocolo HTTP

<div align="center">
  
  <h2>1. O Ciclo Básico: Cliente e Servidor</h2>
  <p style="max-width: 70%; line-height: 1.6;">
    Toda comunicação na web se baseia no modelo Cliente-Servidor. O navegador (cliente) envia uma requisição e aguarda a resposta do host (servidor) para renderizar a página ou atualizar os dados.
  </p>
  <img src="imgs/image-1.png" alt="image-1" style="width: 70%; border-radius: 8px;">

  <h2>2. Anatomia de uma Requisição</h2>
  <p style="max-width: 70%; line-height: 1.6;">
    Durante esse trajeto, a mensagem possui componentes distintos. Os <strong>Headers</strong> descrevem a requisição (como o tipo de conteúdo), enquanto o <strong>Body</strong> carrega o payload principal, viajando até que o servidor retorne um código de status, como <code>200 OK</code>.
  </p>
  <img src="imgs/image-3.png" alt="image" style="width: 70%; border-radius: 8px;">

  <h2>3. Idempotência no Design de APIs</h2>
  <p style="max-width: 70%; line-height: 1.6;">
    No consumo de APIs REST, entender a idempotência é crucial. Métodos como <strong>GET</strong>, <strong>PUT</strong> e <strong>DELETE</strong> são idempotentes: repetir a chamada não altera o estado do servidor além da primeira vez. Já o <strong>POST</strong> não é idempotente; repeti-lo pode causar efeitos colaterais indesejados, como duplicar o processamento de um pagamento.
  </p>
  <img src="imgs/image-2.png" alt="image-2" style="width: 70%; border-radius: 8px;">

  <h2>4. O Papel dos Headers</h2>
  <p style="max-width: 70%; line-height: 1.6;">
    Os cabeçalhos funcionam como os metadados da transação. Eles são responsáveis por passar credenciais de segurança (<code>Authorization</code>), definir os formatos de dados aceitos (<code>Accept</code>) e lidar com o cache, garantindo que o back-end e o front-end "falem a mesma língua".
  </p>
  <img src="imgs/image-5.png" alt="image" style="width: 70%; border-radius: 8px;">

  <h2>5. Do Código para a Rede</h2>
  <p style="max-width: 70%; line-height: 1.6;">
    Quando você utiliza funções nativas no front-end, como o <code>fetch()</code> em aplicações Vue.js ou React, muita complexidade é abstraída. O navegador pega sua chamada simples e a converte internamente na estrutura rigorosa do protocolo HTTP/1.1 antes de despachá-la para o servidor.
  </p>
  <img src="imgs/image-4.png" alt="image-2" style="width: 70%; border-radius: 8px;">

</div>



## 🛠️ Endpoints & Métodos HTTP

<details>
<summary>
🟩 <code>GET</code> <code>/api/v1/produtos</code> Quero obter
</summary>

### 🟩 `GET` `/api/v1/produtos`

**Obter Todos os Produtos**

Solicita o envio do recurso especificado do servidor para o cliente. Não altera dados no servidor (método seguro e de leitura pura).

#### 📥 Parâmetros de Consulta (Query Parameters)
* `limit` *(integer - query)*: Quantidade máxima de itens a retornar (ex: `?limit=5`).
* `category` *(string - query)*: Filtra os itens por uma categoria específica.

#### 📇 Cabeçalhos da Requisição (Request Headers)
```http
Host: localhost:8000
Accept: application/json
Accept-Language: pt-BR
```
*(Cabeçalhos funcionam como pares de `nome: valor` que fornecem metadados de contexto)*

#### 📤 Resposta Esperada (Response)
**Status**: `200 OK`  
**Response Headers**:
```http
Content-Type: application/json
Content-Length: 138
```

**Response Body**:
```json
[
  {
    "id": 1,
    "nome": "Notebook",
    "preco": 4500.00,
    "quantidade": 10
  }
]
```

#### 🌐 Implementação do Cliente (JavaScript - Fetch API)
```javascript
async function listarProdutos() {
  const url = new URL("http://localhost:8000/api/v1/produtos");
  url.search = new URLSearchParams({ limit: "5" });

  const headers = {
    "Accept": "application/json",
    "Accept-Language": "pt-BR"
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const produtos = await response.json();
    console.log("Produtos cadastrados:", produtos);
    return produtos;
    
  } catch (error) {
    console.error("Falha ao conectar na API:", error.message);
  }
}

listarProdutos();
```

*Servidor (Definindo a Rota no FastAPI)*:
```python
from fastapi import FastAPI, Query
from typing import Optional

app = FastAPI()

# Banco de dados simulado (em memória)
PRODUTOS_DB = [
    {"id": 1, "nome": "Notebook", "preco": 4500.00, "quantidade": 10},
    {"id": 2, "nome": "Smartphone", "preco": 2500.00, "quantidade": 15}
]

@app.get("/api/v1/produtos", status_code=200)
def listar_produtos(limit: Optional[int] = Query(None, description="Limite de itens")):
    return PRODUTOS_DB[:limit] if limit else PRODUTOS_DB
```

</details>

<details>
<summary>
🟦 <code>POST</code> <code>/api/v1/produtos</code> Quero enviar
</summary>

### 🟦 `POST` `/api/v1/produtos`
**Criar Novo Produto**

Solicita que o servidor aceite a entidade incluída no corpo da requisição para criar um novo recurso sob o caminho especificado.

#### 📥 Corpo da Requisição (Request Body)
**Content-Type**: `application/json`
```json
{
  "nome": "Teclado Mecânico",
  "preco": 350.00,
  "quantidade": 20
}
```

#### 📤 Resposta Esperada (Response)
**Status**: `201 Created`  
**Response Body**:
```json
{
  "id": 3,
  "nome": "Teclado Mecânico",
  "preco": 350.00,
  "quantidade": 20
}
```

#### 🌐 Implementação do Cliente (JavaScript - Fetch API)
```javascript
async function criarProduto() {
  const url = "http://localhost:8000/api/v1/produtos";
  
  const payload = {
    nome: "Teclado Mecânico",
    preco: 350.00,
    quantidade: 20
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log(`Status Code: ${response.status}`); // Esperado: 201

    if (!response.ok) {
      throw new Error(`Erro ao criar recurso: ${response.status} ${response.statusText}`);
    }

    const novoProduto = await response.json();
    console.log("Produto criado com sucesso:", novoProduto);
    return novoProduto;
  } catch (error) {
    console.error("Erro ao criar produto:", error.message);
  }
}

criarProduto();
```

*Servidor (Definindo a Rota no FastAPI)*:
```python
from fastapi import FastAPI, status
from pydantic import BaseModel

app = FastAPI()

class ProdutoSchema(BaseModel):
    nome: str
    preco: float
    quantidade: int

PRODUTOS_DB = []

@app.post("/api/v1/produtos", status_code=status.HTTP_201_CREATED)
def criar_produto(produto: ProdutoSchema):
    novo_id = len(PRODUTOS_DB) + 1
    novo_produto = {"id": novo_id, **produto.model_dump()}
    PRODUTOS_DB.append(novo_produto)
    return novo_produto
```

</details>

<details>
<summary>
🟨 <code>PUT</code> <code>/api/v1/produtos/{id}</code> Quero alterar
</summary>

### 🟨 `PUT` `/api/v1/produtos/{id}`
**Atualizar Produto Completamente**

Requisita que o recurso correspondente ao `{id}` seja modificado ou completamente substituído pelas informações enviadas no corpo (idempotente).

#### 📥 Parâmetros de Caminho (Path Parameters)
* `id` *(integer - path)*: Identificador único do produto.

#### 📥 Corpo da Requisição (Request Body)
**Content-Type**: `application/json`
```json
{
  "nome": "Notebook Pro",
  "preco": 5500.00,
  "quantidade": 8
}
```

#### 📤 Resposta Esperada (Response)
**Status**: `200 OK`  
**Response Body**:
```json
{
  "id": 1,
  "nome": "Notebook Pro",
  "preco": 5500.00,
  "quantidade": 8
}
```

#### 🌐 Implementação do Cliente (JavaScript - Fetch API)
```javascript
async function atualizarProduto(produtoId) {
  const url = `http://localhost:8000/api/v1/produtos/${produtoId}`;
  
  const payload = {
    nome: "Notebook Pro",
    preco: 5500.00,
    quantidade: 8
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log(`Status Code: ${response.status}`); // Esperado: 200

    if (!response.ok) {
      throw new Error(`Erro na atualização: ${response.status} ${response.statusText}`);
    }

    const produtoAtualizado = await response.json();
    console.log("Produto atualizado:", produtoAtualizado);
    return produtoAtualizado;
  } catch (error) {
    console.error("Erro na atualização:", error.message);
  }
}

atualizarProduto(1);
```

*Servidor (Definindo a Rota no FastAPI)*:
```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

PRODUTOS_DB = [{"id": 1, "nome": "Notebook", "preco": 4500.00, "quantidade": 10}]

class ProdutoSchema(BaseModel):
    nome: str
    preco: float
    quantidade: int

@app.put("/api/v1/produtos/{id}", status_code=200)
def atualizar_produto(id: int, produto: ProdutoSchema):
    for idx, item in enumerate(PRODUTOS_DB):
        if item["id"] == id:
            PRODUTOS_DB[idx] = {"id": id, **produto.model_dump()}
            return PRODUTOS_DB[idx]
    raise HTTPException(status_code=404, detail="Produto não encontrado")
```

</details>

<details>
<summary>
🟧 <code>PATCH</code> <code>/api/v1/produtos/{id}</code> Quero atualizar parcialmente
</summary>

### 🟧 `PATCH` `/api/v1/produtos/{id}`
**Atualizar Parcialmente um Produto**

Aplica modificações parciais a um recurso existente. Ao contrário do `PUT`, que substitui a entidade inteira, o `PATCH` altera apenas os campos enviados no corpo da requisição (por exemplo, atualizar apenas o preço ou estoque), mantendo os demais dados inalterados.

#### 📥 Parâmetros de Caminho (Path Parameters)
* `id` *(integer - path)*: Identificador único do produto.

#### 📥 Corpo da Requisição (Request Body)
**Content-Type**: `application/json`
```json
{
  "preco": 4200.00
}
```

#### 📤 Resposta Esperada (Response)
**Status**: `200 OK`  
**Response Body**:
```json
{
  "id": 1,
  "nome": "Notebook",
  "preco": 4200.00,
  "quantidade": 10
}
```

#### 🌐 Implementação do Cliente (JavaScript - Fetch API)
```javascript
async function atualizarPrecoProduto(produtoId, novoPreco) {
  const url = `http://localhost:8000/api/v1/produtos/${produtoId}`;
  
  const payload = {
    preco: novoPreco
  };

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log(`Status Code: ${response.status}`); // Esperado: 200

    if (!response.ok) {
      throw new Error(`Erro na atualização parcial: ${response.status} ${response.statusText}`);
    }

    const produtoAtualizado = await response.json();
    console.log("Produto atualizado parcialmente:", produtoAtualizado);
    return produtoAtualizado;
  } catch (error) {
    console.error("Erro na atualização parcial:", error.message);
  }
}

atualizarPrecoProduto(1, 4200.00);
```

*Servidor (Definindo a Rota no FastAPI)*:
```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

PRODUTOS_DB = [{"id": 1, "nome": "Notebook", "preco": 4500.00, "quantidade": 10}]

class ProdutoPatchSchema(BaseModel):
    nome: Optional[str] = None
    preco: Optional[float] = None
    quantidade: Optional[int] = None

@app.patch("/api/v1/produtos/{id}", status_code=200)
def atualizar_produto_parcial(id: int, produto_update: ProdutoPatchSchema):
    for idx, item in enumerate(PRODUTOS_DB):
        if item["id"] == id:
            # exclude_unset=True ignora campos que não foram enviados na requisição
            campos_atualizados = produto_update.model_dump(exclude_unset=True)
            if not campos_atualizados:
                return PRODUTOS_DB[idx]
            PRODUTOS_DB[idx].update(campos_atualizados)
            return PRODUTOS_DB[idx]
    raise HTTPException(status_code=404, detail="Produto não encontrado")
```

</details>

<details>
<summary>
🟥 <code>DELETE</code> <code>/api/v1/produtos/{id}</code> Quero remover
</summary>

### 🟥 `DELETE` `/api/v1/produtos/{id}`
**Remover um Produto**

Solicita a exclusão do recurso mapeado na URI especificada.

#### 📥 Parâmetros de Caminho (Path Parameters)
* `id` *(integer - path)*: Identificador único do produto.

#### 📤 Resposta Esperada (Response)
**Status**: `200 OK` ou `204 No Content`

**Response Body**:
```json
{
  "message": "Produto deletado com sucesso!"
}
```

#### 🌐 Implementação do Cliente (JavaScript - Fetch API)
```javascript
async function deletarProduto(produtoId) {
  const url = `http://localhost:8000/api/v1/produtos/${produtoId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Accept": "application/json"
      }
    });

    console.log(`Status Code: ${response.status}`); // Esperado: 200 ou 204

    if (!response.ok) {
      throw new Error(`Erro ao deletar: ${response.status} ${response.statusText}`);
    }

    // Se o backend retornar 204 No Content, não há corpo JSON a converter
    const resultado = response.status !== 204 ? await response.json() : null;
    console.log("Resposta:", resultado ?? "Recurso removido com sucesso.");
    return resultado;
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
  }
}

deletarProduto(1);
```

*Servidor (Definindo a Rota no FastAPI)*:
```python
from fastapi import FastAPI, HTTPException

app = FastAPI()

PRODUTOS_DB = [{"id": 1, "nome": "Notebook", "preco": 4500.00, "quantidade": 10}]

@app.delete("/api/v1/produtos/{id}", status_code=200)
def deletar_produto(id: int):
    global PRODUTOS_DB
    inicial_len = len(PRODUTOS_DB)
    PRODUTOS_DB = [item for item in PRODUTOS_DB if item["id"] != id]
    if len(PRODUTOS_DB) < inicial_len:
        return {"message": "Produto deletado com sucesso!"}
    raise HTTPException(status_code=404, detail="Produto não encontrado")
```

</details>

<details>
<summary>
⬜ <code>HEAD</code> <code>/api/v1/produtos</code>
</summary>

### ⬜ `HEAD` `/api/v1/produtos`
**Obter Metadados dos Recursos**

Solicita uma resposta idêntica à de uma requisição `GET`, mas sem o corpo da resposta. É altamente útil para testar a existência de arquivos, analisar cabeçalhos de cache ou verificar o tamanho de um recurso grande (`Content-Length`) antes de realizar o download real.

#### 📤 Resposta Esperada (Response)
**Status**: `200 OK` 

**Response Headers**:
```http
Content-Type: application/json
Content-Length: 138
```
*(Nota: O corpo da resposta está vazio, sem tráfego de dados adicionais)*

#### 🌐 Implementação do Cliente (JavaScript - Fetch API)
```javascript
async function checarMetadadosProdutos() {
  const url = "http://localhost:8000/api/v1/produtos";

  try {
    const response = await fetch(url, {
      method: "HEAD"
    });

    console.log(`Status Code: ${response.status}`); // Esperado: 200

    if (!response.ok) {
      throw new Error(`Falha na consulta: ${response.status}`);
    }

    console.log("Cabeçalhos recebidos (Metadata):");
    for (const [chave, valor] of response.headers.entries()) {
      console.log(`  ${chave}: ${valor}`);
    }

    const tamanhoCorpo = (await response.text()).length;
    console.log(`Tamanho do corpo retornado: ${tamanhoCorpo} bytes`); // Sempre 0
  } catch (error) {
    console.error("Erro ao verificar metadados:", error.message);
  }
}

checarMetadadosProdutos();
```

</details>

<details>
<summary>
🟪 <code>OPTIONS</code> <code>/api/v1/produtos</code>
</summary>

### 🟪 `OPTIONS` `/api/v1/produtos`
**Consultar Métodos Suportados**

Retorna a lista de métodos HTTP que o servidor aceita e suporta para a URI especificada. Frequentemente disparado automaticamente por navegadores como uma consulta "Preflight" para políticas de segurança de compartilhamento de recursos entre origens diferentes (CORS).

#### 📤 Resposta Esperada (Response)
**Status**: `200 OK`  
**Response Headers**:
```http
Allow: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
Content-Length: 0
```

#### 🌐 Implementação do Cliente (JavaScript - Fetch API)
```javascript
async function consultarMetodosPermitidos() {
  const url = "http://localhost:8000/api/v1/produtos";

  try {
    const response = await fetch(url, {
      method: "OPTIONS"
    });

    console.log(`Status Code: ${response.status}`); // Esperado: 200

    if (!response.ok) {
      throw new Error(`Falha na consulta: ${response.status}`);
    }

    const metodosPermitidos = response.headers.get("Allow");
    console.log("Métodos suportados:", metodosPermitidos);
    return metodosPermitidos;
  } catch (error) {
    console.error("Erro ao consultar métodos permitidos:", error.message);
  }
}

consultarMetodosPermitidos();
```

</details>

<br>

## Códigos de Resposta HTTP (Status Codes)
Toda resposta contém um código de status para indicar o resultado final da solicitação:

| Categoria | Exemplo de Código | Significado Teórico & Prático |
| :--- | :--- | :--- |
| **`2xx` (Sucesso)** | **`200 OK`** | A requisição foi processada com sucesso absoluto. |
| | **`201 Created`** | A requisição teve sucesso e um recurso novo foi criado. |
| | **`204 No Content`** | Sucesso, mas não há corpo de mensagem para retornar (comum em `DELETE`). |
| **`4xx` (Erro do Cliente)** | **`400 Bad Request`** | O servidor não conseguiu entender a requisição devido à sintaxe inválida. |
| | **`401 Unauthorized`** | O cliente precisa se autenticar para obter a resposta solicitada. |
| | **`403 Forbidden`** | O cliente é conhecido, mas não tem permissões para esse recurso específico. |
| | **`404 Not Found`** | O recurso solicitado não pôde ser encontrado no servidor. |
| **`5xx` (Erro do Servidor)**| **`500 Internal Server`** | O servidor encontrou uma situação inesperada que o impediu de processar. |  

<br/>

## Anatomia Estruturada de Mensagens HTTP
O tráfego de dados consiste puramente em texto estruturado:

### 1. Linha de Requisição (*Request Line*)
Composta por: `Método` + `URI do Recurso` + `Versão do Protocolo` 
```http
GET /api/v1/produtos HTTP/1.1
```

### 2. Linha de Status (*Status Line*)
Composta por: `Versão do Protocolo` + `Código do Status` + `Texto de Motivo` 
```http
HTTP/1.1 200 OK
```
