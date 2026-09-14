## Explicação

**Manipulação do DOM:**
O Document Object Model (DOM) é a árvore inteira de objetos que o navegador cria na memória ao interpretar o arquivo HTML. Ele representa todo o documento estruturado (a raiz document, a tag `<html>, <head>, <body>` e todos os seus filhos). 

**Eventos:**
Eventos são os gatilhos da sua aplicação. Um clique, o envio de um formulário ou a digitação de uma tecla disparam funções específicas.

**Local Storage:**
O `localStorage` salva **apenas strings**. Por isso, usamos `JSON.stringify()` para guardar objetos/arrays e `JSON.parse()` para recuperá-los. Além disso, chaves de armazenamento são guardadas em constantes para evitar erros de digitação.

<br>

## 📌 Índice
1. [Manipulação da DOM e HTML](#1-manipulação-da-dom-e-html)
2. [Eventos e Interações](#2-eventos-e-interações)
3. [Armazenamento Local (LocalStorage & SessionStorage)](#4-armazenamento-local-localstorage--sessionstorage)
4. [Manipulação de Formulários](#6-manipulação-de-formulários)
5. [Trabalhando com URLs e Navegação](#7-trabalhando-com-urls-e-navegação)

## 1. Manipulação da DOM e HTML

### 1.1 Selecionando Elementos
```javascript
// Seleciona o primeiro elemento correspondente
const titulo = document.querySelector('#titulo-principal'); // ID
const botao = document.querySelector('.btn-primary');  // CLASS

// primeiro <input name="login"/> dentro de um <div> cuja classe é "user-panel main"
const el = document.querySelector("div.user-panel.main input[name='login']");

// NEGAÇÃO: div pai que tenha a user-panelclasse, mas não a mainclasse.
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);

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

// Manipulação de Classes (CSS)
card.classList.add('ativo', 'destaque');
card.classList.remove('oculto');
card.classList.toggle('selecionado'); // Adiciona se não tiver, remove se tiver
const temClasse = card.classList.contains('ativo'); // Retorna boolean

// Atributos HTML
// <div class="card" data-id="1024">...</div>
card.setAttribute('data-id', '1024');
const dataId = card.getAttribute('data-id');  // retorna o valor do atributo
card.removeAttribute('disabled');
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
novoItem.remove(); 

// Limpar todos os filhos de um container
const container = document.querySelector('#container');
container.replaceChildren(); 
```

<br>

## 2. Eventos e Interações

### 2.1 Listeners Básicos
```javascript
const btn = document.querySelector('#btn-salvar');

btn.addEventListener('click', (event) => {
  console.log('Botão clicado!', event.target);  // elemento exato que disparou a ação
  funcao()
}, { once: true }); // pra so clicar 1 vez
```

### 2.2 Delegação de Eventos (Event Delegation)
Ideal para gerenciar listas dinâmicas sem adicionar múltiplos listeners.

```html
<ul id="lista-tarefas">
  <li>
    Comprar pão 
    <button class="btn-excluir">❌</button>
  </li>
  <li>
    Estudar JavaScript 
    <button class="btn-excluir">❌</button>
  </li>
</ul>
```

```javascript
const listaTarefas = document.querySelector('#lista-tarefas');

listaTarefas.addEventListener('click', (event) => { // esta escutando um evento em todo o ul
  // Como o usuario pode ter clicado em qualquer lugar
  // procura/pesquisa se é '.btn-excluir'
  const btnExcluir = event.target.closest('.btn-excluir');
  if (!btnExcluir) return;

  const item = btnExcluir.closest('li'); // procura o 'li' mais proximo
  item.remove();
});
```

### 2.3 Entrada e Teclado
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

## 3. Armazenamento Local (LocalStorage & SessionStorage)

```javascript
const STORAGE_KEY = '@NotesApp:data';  // chave geral

// Carregar dados
const savedData = localStorage.getItem(STORAGE_KEY);
notas = savedData ? JSON.parse(savedData) : [];   

// Salvar string simples ( etiqueta, dado )
localStorage.setItem('tema', 'dark');

// Salvar Objeto ou Array 
const configuracoes = { som: true, volume: 80, visualizacao: 'grade' };
localStorage.setItem('config_app', JSON.stringify(configuracoes));

// Recuperar dados, com a etiqueta
const temaSalvo = localStorage.getItem('tema');

const configRaw = localStorage.getItem('config_app');
const configRecuperada = configRaw ? JSON.parse(configRaw) : null;

// Remover chave específica
localStorage.removeItem('tema');

// Limpar todo o storage do domínio
localStorage.clear();
```

<br>

## 4. Manipulação de Formulários

```html
<form id="form-cadastro">
  <input type="text" name="nome" value="Carlos" />
  <input type="email" name="email" value="carlos@email.com" />
  <button type="submit">Cadastrar</button>
</form>
```

```javascript
const formulario = document.querySelector('#form-cadastro');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recarregamento da página

  // extrai automaticamente todos os valores dos campos que possuem o atributo name
  const formData = new FormData(formulario);
  // [ ['nome', 'Carlos'], ['email', 'carlos@email.com'] ].

  // Converte todos os campos (name="campo") para um objeto simples
  const dados = Object.fromEntries(formData.entries());
  console.log('Dados submetidos:', dados);

  // Exemplo de envio:
  // await enviarParaApi(dados);
  localStorage.setItem('formulario', JSON.stringify(dados));

  // Limpar formulário após envio bem-sucedido
  formulario.reset();
});
```

<br>

## 5. Trabalhando com URLs e Navegação

```javascript
// Site atual: https://meusite.com/busca?filtro=teclados&pagina=2

const params = new URLSearchParams(window.location.search);

// Ler parâmetros
const filtro = params.get('filtro'); // 'teclados'
const pagina = params.get('pagina'); // '2'

// Alterar ou Adicionar parâmetros na URL sem recarregar a página
params.set('filtro', 'mouses');
params.set('pagina', '1');

//                 rota do site "/busca"       parametros "filtro=mouses&pagina=1"
const novaUrl = `${window.location.pathname}?${params.toString()}`;
window.history.pushState({}, '', novaUrl);  // "/busca?filtro=mouses&pagina=1"
```