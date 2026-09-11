<h1 style="border-bottom: none;">JavaScript Assíncrono</h1>

Este documento resume como o JavaScript lida com tarefas demoradas e como a comunicação entre sistemas funciona na vida real.

## 1. Promises e Async/Await
O JavaScript é *single-threaded* (faz uma coisa por vez). Se uma tarefa demorar (como buscar dados na internet), o sistema travaria. A solução é a programação **assíncrona**.

*   [**Promises:**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) São "recibos" de uma tarefa. Você não tem o dado ainda, mas tem a *promessa* de que ele chegará no futuro (com sucesso ou erro).
*   [**Async / Await:**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await) É a forma moderna de lidar com Promises. O `async` avisa que a função é assíncrona, e o `await` "pausa" a execução daquela função até a Promise ser resolvida.

```javascript
async function buscarDados() {
  try {
    const resultado = await umaFuncaoQueDemora(); // Pausa aqui
    console.log(resultado);
  } catch (erro) {
    console.error("Algo deu errado:", erro); // Captura falhas
  }
}
```

## 2. Consumindo APIs (O Fetch) 
Usamos `async/await` principalmente com o [`fetch`](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) para buscar dados do Backend da empresa ou de outras APIs na internet.

> **Fetch:** Quase sempre exige **dois** `awaits`. O primeiro para contactar o servidor, o segundo para extrair os dados (geralmente em formato JSON).

```javascript
async function carregarDashboard() {
  try {
    // 1º Await: Fazemos o fetch para a API
    const resposta = await fetch('https://api.empresa.com/pedidos', {
      headers: { 'Authorization': 'Bearer token-do-usuario' }
    });
    
    if (!resposta.ok) throw new Error("Erro ao buscar dados");
    
    // 2º Await: Extrai o JSON
    const dados = await resposta.json(); 
    
    // Atualiza a tela (HTML) com os dados
    document.getElementById("vendas").innerText = dados.total;
  } catch (erro) {
    console.error("Erro na tela:", erro.message);
  }
}
```

## 3. O Diálogo da Web: `req` e `res` (O Backend)
O Backend (feito em Node.js, por exemplo) recebe as requisições do Frontend, valida regras e acessa o Banco de Dados. A comunicação é baseada no modelo Cliente-Servidor através dos objetos **Request** e **Response**.

### 1. req (Request / A Requisição)
O `req` contém tudo que o Cliente enviou para o Servidor. É a pergunta, o pedido.
Quando o Frontend faz um `fetch`, o Node.js empacota todas as informações daquele `fetch` dentro do `req`.

**O que você encontra dentro do `req`?**
*   **A Rota (URL):** Que página ou dado o cliente quer acessar? (ex: `/api/pedidos-de-hoje`)
*   **O Corpo (Body):** Se o cliente está enviando dados (como preenchendo um formulário de cadastro), os dados vêm aqui (ex: `req.body.nome`, `req.body.senha`).
*   **Os Cabeçalhos (Headers):** Informações ocultas, como o tipo de navegador (Chrome ou Firefox?), de qual país o pedido veio, e os Tokens de Autenticação (ex: "Aqui está meu crachá digital provando que estou logado").
*   **Parâmetros (Params):** Se a URL for algo específico como `/api/usuarios/5`, o número 5 vem aqui (ex: `req.params.id`).

### 2. res (Response / A Resposta)
O `res` é a sua ferramenta para responder ao Cliente. O servidor usa os métodos desse objeto para montar o "pacote" que vai ser enviado de volta pela internet.

**Como você usa o `res`?**
Você usa o `res` para finalizar a conversa. O cliente fica "travado" (aguardando a Promise do fetch resolver) até que você chame algum método do `res` no backend.

**Os usos mais comuns são:**
*   `res.status(200)`: Define o código HTTP. 200 significa "OK, deu certo!". 404 é "Não encontrei", 500 é "Deu erro no meu servidor", 401 é "Você não está logado".
*   `res.json({ ... })`: Pega um objeto JavaScript, converte para o formato JSON (o idioma universal da web) e envia de volta para o cliente.
*   `res.send("Texto simples")`: Envia um texto puro, sem formato.
*   `res.redirect("/login")`: Força o navegador do cliente a ir para outra página.

### Exemplo de Backend (Node.js) aplicando req e res
```javascript
app.post('/api/comprar', async (req, res) => {
  // 1. Usando o 'req' para ler informações do Cliente
  const produto = req.body.produto;
  const usuarioLogado = req.headers.authorization;

  // 2. Verificando acesso
  if (!usuarioLogado) {
    // Se não tiver logado, forçamos o navegador a ir para a tela de login
    return res.redirect("/login");
  }

  // 3. Finalizando a conversa com o 'res'
  if (produto === "Pizza") {
    res.status(200).json({ mensagem: "Compra aprovada!" });
  } else {
    res.status(400).json({ erro: "Produto inválido." });
  }
});
```
