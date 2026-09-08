<h1 style="border-bottom: none;">Variaveis</h1>

* **let**: Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.
* **const**: A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

> Ignore o `var` para garantir a segurança e previsibilidade do escopo.

<br>
<br>

<h1 style="border-bottom: none;">Objetos e Arrays</h1>

## Objetos (A Entidade)
Um Objeto no JavaScript é uma coleção de pares chave-valor. Ele serve para agrupar informações que pertencem a uma mesma entidade. Pense nele como uma ficha de cadastro, onde cada campo tem um nome (a chave) e uma resposta (o valor).

```javascript
// Criando um objeto que representa um usuário
const usuario = {
  nome: "Raquel",
  cargo: "Desenvolvedora",
  ativo: true
};

// Acessando os dados (lendo a propriedade)
console.log(usuario.nome); // Saída: "Raquel"

// Modificando um dado
usuario.cargo = "Engenheira de Software";
```

### Alguns métodos úteis para Objetos

#### 1. Object.keys(): Validação e Contagem
Descobrir quantas propriedades um objeto tem ou iterar sobre as chaves. No dia a dia, usamos muito para verificar se uma API nos devolveu um objeto vazio antes de tentar renderizar algo na tela e quebrar a aplicação.

```javascript
const usuarioAPI = {}; // Simulando uma resposta vazia do back-end

// Verificando se o objeto veio sem propriedades
if (Object.keys(usuarioAPI).length === 0) {
    console.log("Erro: Nenhum dado de usuário retornado da API!");
} else {
    console.log("Dados carregados com sucesso, pronto para renderizar.");
}
```

#### 2. Object.values(): Cálculos e Agrupamentos
Extrair apenas os dados de um objeto. Imagine que você quer calcular a média das suas notas nas disciplinas. Os nomes das matérias não importam para o cálculo matemático, apenas os valores numéricos.

```javascript
const notasSemestre = {
    calculo: 8.5,
    programacao: 10.0,
    bancoDeDados: 9.0
};

// Extrai apenas os números: [8.5, 10.0, 9.0]
const notas = Object.values(notasSemestre);

// Soma tudo e calcula a média
const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const media = soma / notas.length;

console.log(`Sua média atual é: ${media.toFixed(1)}`);
```

#### 3. Object.entries(): Array de pares
Ele transforma o objeto num array de pares `[chave, valor]`. Quando você precisa iterar sobre um objeto para montar uma interface (como uma tabela ou uma lista de detalhes de um usuário), o `.entries()` transforma o objeto em um formato perfeito para o mapeamento.

```javascript
const perfilDev = {
    nome: "Raquel",
    tecnologia: "React",
    estado: "Espírito Santo"
};

// Retorna uma matriz de arrays: [['nome', 'Raquel'], ['tecnologia', 'React'], ...]
const pares = Object.entries(perfilDev);

// Iterando sobre chave e valor ao mesmo tempo
pares.forEach(([chave, valor]) => {
    console.log(`Propriedade: ${chave.toUpperCase()} | Valor: ${valor}`);
});
```

#### 4. Object.fromEntries(): Reconstrução e Filtros
Faz o caminho inverso do `entries()`. Se você transformou um objeto em array para usar um `.filter()` e remover algumas informações, você usa o `fromEntries` para transformar o resultado de volta em objeto.
Também imagine que o usuário preencheu um formulário, mas deixou campos em branco. Antes de enviar isso para o seu banco de dados no Supabase, você quer remover tudo o que for `null` ou `undefined`.

```javascript
const dadosFormulario = {
    nome: "Raquel Nascimento",
    idade: 22,
    telefone: null,
    github: "raquelnascimento",
    site: undefined
};

// 1. Transforma em array de pares
// 2. Filtra removendo o que for null ou undefined
const arrayFiltrado = Object.entries(dadosFormulario)
    .filter(([chave, valor]) => valor !== null && valor !== undefined);

// 3. Reconstrói o objeto apenas com os dados válidos
const dadosLimposParaOBanco = Object.fromEntries(arrayFiltrado);

console.log(dadosLimposParaOBanco);
// Resultado: { nome: 'Raquel Nascimento', idade: 21, github: 'RaquelNeres' }
```

#### 5. Object.freeze(): Controle e Segurança
Garantir a imutabilidade no sistema. Quando temos um objeto com configurações críticas (como variáveis de ambiente ou configs do Supabase) e não queremos que ninguém da equipe altere os valores acidentalmente durante a execução do código.

```javascript
const user = {
    name: "Alice",
    age: 28
};

// Freeze the object
Object.freeze(user);

// These operations will fail
user.age = 30; // Fails to change value
user.role = "admin"; // Fails to add property 
delete user.name; // Fails to delete property

console.log(user);
// Output: { name: "Alice", age: 28 }
```

## Arrays (A Lista)
Um Array é uma lista ordenada de valores. Ele serve para agrupar múltiplos itens em uma única variável, mantendo a ordem em que foram inseridos. Pense nele como uma lista de compras ou uma fila de pessoas.

```javascript
const tecnologias = ["JavaScript", "Python", "TypeScript", "SQL"];

console.log(tecnologias[0]); // Saída: "JavaScript"
console.log(tecnologias[2]); // Saída: "TypeScript"

// Adicionando um novo item ao final da lista
tecnologias.push("React");
```

<br>
<br>

Na vida real, ao lidar com APIs e Bancos de Dados, você quase nunca usa essas estruturas isoladas. O padrão mais comum no desenvolvimento de software é o **Array de Objetos** — ou seja, uma lista onde cada item da lista é uma entidade independente.

```javascript
// Uma resposta típica de uma API de produtos:
const produtos = [
  { id: 1, nome: "Notebook", preco: 4500, emEstoque: true },
  { id: 2, nome: "Mouse", preco: 150, emEstoque: false },
  { id: 3, nome: "Teclado", preco: 300, emEstoque: true }
];

// Acessando o preço do segundo produto da lista:
console.log(produtos[1].preco); // Saída: 150
```
