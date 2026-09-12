# Mês 3: Construção de Software de Verdade (DOM, Eventos e Local Storage)


## 1. Manipulação do DOM (A Ponte)
O Document Object Model (DOM) é a representação estruturada do seu HTML. O JavaScript não entende tags HTML diretamente; ele entende o DOM, que transforma cada tag em um objeto manipulável.

**No mundo real:** Empresas evitam recriar o DOM inteiro a cada atualização (usando `innerHTML = string` de forma excessiva) por questões de performance e segurança (prevenção de ataques XSS). A preferência é usar a API de criação de nós ou fragmentos para atualizações em lote.

## 2. Eventos (O Porteiro)
Eventos são os gatilhos da sua aplicação. Um clique, o envio de um formulário ou a digitação de uma tecla disparam funções específicas.

## 3. Local Storage (A Persistência Local)

**No mundo real:** O `localStorage` salva **apenas strings**. Por isso, usamos `JSON.stringify()` para guardar objetos/arrays e `JSON.parse()` para recuperá-los. Além disso, chaves de armazenamento são guardadas em constantes para evitar erros de digitação.

```javascript
// Salvando ( etiqueta, dado )
localStorage.setItem("minhasNotas", "comprar leite");
localStorage.setItem('usuario', 'Raquel');
localStorage.setItem('tarefas', JSON.stringify(minhasTarefas));

// Pegando da gaveta com a etiqueta "minhasNotas"
localStorage.getItem("minhasNotas");
```

<br>

## Exemplo: Gerenciador de Notas / Tarefas
Este código demonstra como essas três tecnologias interagem em uma arquitetura limpa (baseada em classes), semelhante ao que você encontraria no núcleo de um projeto ou extensão de navegador.

### `index.html`
```html
<body>
    <h1>Minhas Anotações</h1>
    <form id="note-form">
        <input type="text" id="note-input" placeholder="Nova anotação..." required />
        <button type="submit">Salvar</button>
    </form>
    <ul id="note-list"></ul>
    
    <script src="app.js"></script>
</body>
```

### `app.js`
```javascript
// Aguarda o HTML carregar completamente antes de rodar o JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = '@NotesApp:data';  // chave geral
    let notas = [];

    // Seleção de elementos do DOM
    const form = document.querySelector('#note-form');
    const input = document.querySelector('#note-input');
    const list = document.querySelector('#note-list');


    // LOCAL STORAGE 
    function carregarDados() {
        const savedData = localStorage.getItem(STORAGE_KEY);
        notas = savedData ? JSON.parse(savedData) : [];
    }

    function salvarDados() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notas));
    }


    // FUNÇÕES DE AÇÃO 
    function adicionarNota(texto) {
        if (!texto) return;

        const novaNota = {
            id: crypto.randomUUID(), // Gera um ID único nativo
            text: texto,
            createdAt: new Date().toISOString() // para salvar a data de criação
        };

        notas.push(novaNota);
        
        salvarDados();
        renderizarLista();
    }

    function deletarNota(id) {
        notas = notas.filter(nota => nota.id !== id);
        
        salvarDados();
        renderizarLista();
    }


    // FUNÇÕES DE EVENTO (Interação do Usuário) - ta ouvindo os eventos que tao acontecendo
    function configurarEventos() {
        
        // Evento de envio do formulário
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita recarregar a página (F5)
            
            const texto = input.value.trim();
            adicionarNota(texto);
            
            // Limpa o input e devolve o foco para digitar a próxima
            form.reset();
            input.focus();
        });

        // Event Delegation: Ouve os cliques na lista <ul> inteira
        list.addEventListener('click', (event) => {
            // Verifica se o que foi clicado realmente tem a classe de botão de deletar
            if (event.target.classList.contains('delete-btn')) {
                const id = event.target.dataset.id;
                deletarNota(id);
            }
        });
    }
    

    // FUNÇÕES DE DOM (Renderização) - desenhar na tela oque ta guardado na memoria do js
    function renderizarLista() {
        // Limpa a lista atual na tela, pra não duplicar
        list.innerHTML = '';

        // Cria o DocumentFragment ( atualiza tudo de uma vez )
        const fragment = document.createDocumentFragment();  // temporario 

        notas.forEach(nota => {  // criando das tags e passando seus nomes
            const li = document.createElement('li');
            li.className = 'note-item';
            
            const span = document.createElement('span');
            span.textContent = nota.text; // Impede XSS
            
            const btn = document.createElement('button');
            btn.textContent = 'Apagar';  // .innerHTML so que seguro
            btn.className = 'delete-btn';
            btn.dataset.id = nota.id; // Pendura o ID no botão para sabermos quem deletar

            li.appendChild(span);  // Coloca o texto dentro do <li>
            li.appendChild(btn);   // Coloca o botão dentro do <li>
            fragment.appendChild(li); // Coloca o <li> montado dentro da sacola (fragment)
        });

        // Injeta o fragmento no DOM (tela)
        list.appendChild(fragment);
    }


    function iniciarApp() {
        carregarDados();
        configurarEventos();
        renderizarLista();
    }

    iniciarApp();
});
```
