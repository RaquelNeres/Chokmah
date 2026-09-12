## 📌 Índice
1. [Manipulação da DOM e HTML](#1-manipulação-da-dom-e-html)
2. [Eventos e Interações](#2-eventos-e-interações)
3. [Manipulação e Transformação de Dados](#3-manipulação-e-transformação-de-dados)
4. [Armazenamento Local (LocalStorage & SessionStorage)](#4-armazenamento-local-localstorage--sessionstorage)
5. [Requisições Assíncronas (Fetch API & Async/Await)](#5-requisições-assíncronas-fetch-api--asyncawait)
6. [Manipulação de Formulários](#6-manipulação-de-formulários)
7. [Trabalhando com URLs e Navegação](#7-trabalhando-com-urls-e-navegação)
8. [Utilitários Modernos (Debounce, Throttle, Clipboard)](#8-utilitários-modernos-debounce-throttle-clipboard)

## 1. Manipulação da DOM e HTML

### 1.1 Selecionando Elementos
```javascript
// Seleciona o primeiro elemento correspondente
const titulo = document.querySelector('#titulo-principal');
const botao = document.querySelector('.btn-primary');

// Seleciona todos os elementos correspondentes (retorna NodeList)
const itens = document.querySelectorAll('ul.lista > li');

// Métodos legados rápidos
const elementoPorId = document.getElementById('meu-id');
const elementosPorClasse = document.getElementsByClassName('item');
```

### 1.2 Modificando Texto e Conteúdo HTML
```javascript
const box = document.querySelector('.box');

// Texto puro (seguro contra XSS)
box.textContent = 'Texto atualizado com sucesso!';

// Inserção de HTML dinâmico
box.innerHTML = `
  <h3>Subtítulo</h3>
  <p class="destaque">Parágrafo gerado dinamicamente.</p>
`;

// Inserção eficiente de HTML sem recriar toda a árvore
box.insertAdjacentHTML('beforeend', '<span class="tag">Novo</span>');
// Opções de posição: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
```

### 1.3 Classes e Atributos
```javascript
const card = document.querySelector('.card');

// Manipulação de Classes (classList)
card.classList.add('ativo', 'destaque');
card.classList.remove('oculto');
card.classList.toggle('selecionado'); // Adiciona se não tiver, remove se tiver
const temClasse = card.classList.contains('ativo'); // Retorna boolean

// Atributos HTML
card.setAttribute('data-id', '1024');
const dataId = card.getAttribute('data-id');
card.removeAttribute('disabled');

// Dataset (data-attributes)
card.dataset.status = 'pendente'; // cria data-status="pendente"
console.log(card.dataset.id);
```

### 1.4 Estilos Inline
```javascript
const painel = document.querySelector('.painel');

painel.style.backgroundColor = '#1e293b';
painel.style.color = '#ffffff';
painel.style.display = 'none'; // Esconde
painel.style.display = 'block'; // Exibe
```

### 1.5 Criando e Removendo Elementos
```javascript
// Criar novo elemento
const novoItem = document.createElement('li');
novoItem.className = 'lista-item';
novoItem.textContent = 'Elemento criado via JS';

// Adicionar à lista existente
const lista = document.querySelector('#minha-lista');
lista.appendChild(novoItem);

// Inserir antes de um elemento específico
lista.insertBefore(novoItem, lista.firstChild);

// Remover elemento
novoItem.remove(); // Remove diretamente o próprio nó

// Limpar todos os filhos de um container
const container = document.querySelector('#container');
container.replaceChildren(); // Forma moderna e rápida de esvaziar
```

<br>

## 2. Eventos e Interações

### 2.1 Listeners Básicos
```javascript
const btn = document.querySelector('#btn-salvar');

btn.addEventListener('click', (event) => {
  console.log('Botão clicado!', event.target);
});

// Remover listener (requer referência da função)
function handleClick() {
  console.log('Executou uma vez');
  btn.removeEventListener('click', handleClick);
}
btn.addEventListener('click', handleClick);

// Ou utilizar a flag { once: true }
btn.addEventListener('click', () => console.log('Só roda 1 vez!'), { once: true });
```

### 2.2 Delegação de Eventos (Event Delegation)
Ideal para gerenciar listas dinâmicas sem adicionar múltiplos listeners.
```javascript
const listaTarefas = document.querySelector('#lista-tarefas');

listaTarefas.addEventListener('click', (event) => {
  // Verifica se o elemento clicado (ou ancestral) é um botão de exclusão
  const btnExcluir = event.target.closest('.btn-excluir');
  if (!btnExcluir) return;

  const item = btnExcluir.closest('li');
  item.remove();
});
```

### 2.3 Eventos Comuns de Entrada e Teclado
```javascript
const campoBusca = document.querySelector('#input-busca');

// Evento disparado a cada caractere digitado
campoBusca.addEventListener('input', (e) => {
  console.log('Valor atual:', e.target.value);
});

// Eventos de teclado
campoBusca.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    console.log('Pesquisando por:', e.target.value);
  } else if (e.key === 'Escape') {
    campoBusca.value = '';
    campoBusca.blur();
  }
});
```

<br>

## 3. Manipulação e Transformação de Dados

### 3.1 Métodos Essenciais de Array
```javascript
const produtos = [
  { id: 1, nome: 'Teclado Mecânico', preco: 250, categoria: 'Periféricos', estoque: 15 },
  { id: 2, nome: 'Mouse sem Fio', preco: 120, categoria: 'Periféricos', estoque: 0 },
  { id: 3, nome: 'Monitor 27"', preco: 1200, categoria: 'Monitores', estoque: 5 },
  { id: 4, nome: 'Headset Gamer', preco: 300, categoria: 'Áudio', estoque: 8 }
];

// MAP: Transforma itens mantendo o mesmo tamanho
const nomesFormatados = produtos.map(p => p.nome.toUpperCase());

// FILTER: Filtra elementos por condição
const disponiveis = produtos.filter(p => p.estoque > 0);

// FIND & FINDINDEX: Encontra o primeiro correspondente
const mouse = produtos.find(p => p.id === 2);
const indexMouse = produtos.findIndex(p => p.id === 2);

// SOME & EVERY: Validações booleanas
const temEsgotado = produtos.some(p => p.estoque === 0); // true
const todosCaros = produtos.every(p => p.preco > 50); // true

// REDUCE: Acumula valores em um resultado único
const totalValorEstoque = produtos.reduce((acumulador, item) => {
  return acumulador + (item.preco * item.estoque);
}, 0);

// SORT: Ordenação (Atenção: modifica o array original ou use toSorted)
const ordenadosPorPreco = [...produtos].sort((a, b) => a.preco - b.preco);
```

### 3.2 Desestruturação e Spread / Rest
```javascript
// Desestruturação de Objeto com renomeação e valor padrão
const usuario = { nome: 'Lucas', idade: 28, cidade: 'São Paulo' };
const { nome: nomeCompleto, idade, papel = 'Usuário' } = usuario;

// Desestruturação de Array
const coordenadas = [-23.5505, -46.6333];
const [latitude, longitude] = coordenadas;

// Spread Operator (Clonagem rasa e merge)
const perfilBase = { tema: 'dark', idioma: 'pt-BR' };
const perfilAtualizado = { ...perfilBase, idioma: 'en-US', notificacoes: true };

// Array com itens únicos usando Set
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5];
const unicos = [...new Set(numerosRepetidos)]; // [1, 2, 3, 4, 5]
```

### 3.3 Agrupamento de Dados (`Object.groupBy`)
```javascript
// Agrupa elementos por categoria
const porCategoria = Object.groupBy(produtos, (p) => p.categoria);
/*
{
  "Periféricos": [...],
  "Monitores": [...],
  "Áudio": [...]
}
*/
```

<br>

## 4. Armazenamento Local (LocalStorage & SessionStorage)

### 4.1 Utilizando `localStorage`
```javascript
// Salvar string simples
localStorage.setItem('tema', 'dark');

// Salvar Objeto ou Array (Necessário serializar com JSON)
const configuracoes = { som: true, volume: 80, visualizacao: 'grade' };
localStorage.setItem('config_app', JSON.stringify(configuracoes));

// Recuperar dados
const temaSalvo = localStorage.getItem('tema');

const configRaw = localStorage.getItem('config_app');
const configRecuperada = configRaw ? JSON.parse(configRaw) : null;

// Remover chave específica
localStorage.removeItem('tema');

// Limpar todo o storage do domínio
localStorage.clear();
```

### 4.2 Helper Reutilizável de Storage
```javascript
const storage = {
  get(chave, valorPadrao = null) {
    try {
      const item = localStorage.getItem(chave);
      return item ? JSON.parse(item) : valorPadrao;
    } catch (err) {
      console.error(`Erro ao ler localStorage [${chave}]:`, err);
      return valorPadrao;
    }
  },
  set(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (err) {
      console.error(`Erro ao salvar no localStorage [${chave}]:`, err);
    }
  },
  remove(chave) {
    localStorage.removeItem(chave);
  }
};

// Uso:
storage.set('carrinho', [{ id: 1, qtd: 2 }]);
const carrinho = storage.get('carrinho', []);
```

<br>

## 5. Requisições Assíncronas (Fetch API & Async/Await)

### 5.1 GET com Tratamento de Erros
```javascript
async function buscarUsuarios() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    console.error('Falha na requisição:', erro.message);
    throw erro;
  }
}
```

### 5.2 POST Enviando Dados em JSON
```javascript
async function cadastrarProduto(novoProduto) {
  try {
    const resposta = await fetch('https://api.exemplo.com/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer MEU_TOKEN_AQUI'
      },
      body: JSON.stringify(novoProduto)
    });

    if (!resposta.ok) {
      throw new Error(`Erro ao cadastrar: ${resposta.status}`);
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro no cadastro:', erro);
  }
}
```

<br>

## 6. Manipulação de Formulários

### 6.1 Captura com `FormData`
```javascript
const formulario = document.querySelector('#form-cadastro');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recarregamento da página

  const formData = new FormData(formulario);

  // Converte todos os campos (name="campo") para um objeto simples
  const dados = Object.fromEntries(formData.entries());
  console.log('Dados submetidos:', dados);

  // Exemplo de envio:
  // await enviarParaApi(dados);

  // Limpar formulário após envio bem-sucedido
  formulario.reset();
});
```

<br>

## 7. Trabalhando com URLs e Navegação

### 7.1 Lendo e Modificando Query Params (`URLSearchParams`)
```javascript
// URL atual: https://meusite.com/busca?filtro=teclados&pagina=2

const params = new URLSearchParams(window.location.search);

// Ler parâmetros
const filtro = params.get('filtro'); // 'teclados'
const pagina = params.get('pagina'); // '2'

// Alterar ou Adicionar parâmetros na URL sem recarregar a página
params.set('filtro', 'mouses');
params.set('pagina', '1');

const novaUrl = `${window.location.pathname}?${params.toString()}`;
window.history.pushState({}, '', novaUrl);
```

<br>

## 8. Utilitários Modernos

### 8.1 Debounce (Otimização de Buscas em Tempo Real)
```javascript
function debounce(funcao, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => funcao.apply(this, args), delay);
  };
}

// Uso no input de pesquisa:
const inputPesquisa = document.querySelector('#campo-pesquisa');

const executarPesquisa = debounce((termo) => {
  console.log('Realizando consulta para:', termo);
}, 400);

inputPesquisa.addEventListener('input', (e) => {
  executarPesquisa(e.target.value);
});
```

### 8.2 Copiar para Área de Transferência (Clipboard API)
```javascript
async function copiarTexto(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    console.log('Copiado para a área de transferência!');
  } catch (err) {
    console.error('Falha ao copiar:', err);
  }
}
```

### 8.3 Formatação de Moedas e Datas (Intl API Nativa)
```javascript
// Formatação de Dinheiro (BRL)
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});
console.log(formatadorMoeda.format(1249.9)); // "R$ 1.249,90"

// Formatação de Datas
const formatadorData = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long',
  timeStyle: 'short'
});
console.log(formatadorData.format(new Date())); // "11 de setembro de 2026 às 22:52"
```
