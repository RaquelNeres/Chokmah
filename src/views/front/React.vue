<template>
<div class="min-h-screen flex flex-col items-center py-10">
        <button class="self-start ml-10 text-white py-2 px-6
                border border-white rounded-full
                hover:bg-white hover:text-black transition-colors duration-300"
          @click="voltar">
           FrontEnd
        </button>

        <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto">
            <h1 class="font-bold text-[50px] text-center text-white">React</h1>

            <details class="mt-10 text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden">
                <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">
                    Vite
                </summary>
                <div class="px-5 pb-5 pt-5">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="border-b border-gray-500 text-gray-300">
                                <th class="py-3 pr-4">Comando</th>
                                <th class="py-3">Descrição</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-200">
                            <tr class="border-b border-gray-700">
                                <td class="py-4 pr-4"><code class="text-pink-400">node -v</code></td>
                                <td class="py-4">Chegando se o node está instalado.</td>
                            </tr>
                            <tr class="border-b border-gray-700">
                                <td class="py-4 pr-4"><code class="text-pink-400">npm/npx</code ></td>
                                <td class="py-4">Instalar de forma global/Cria o projeto de forma temporaria</td>
                            </tr>
                            <tr class="border-b border-gray-700">
                                <td class="py-4 pr-4"><code class="text-pink-400">npm install</code></td>
                                <td class="py-4">Instala as dependências do projeto.</td>
                            </tr>
                            <tr class="border-b border-gray-700">
                                <td class="py-4 pr-4"><code class="text-pink-400">npm install -g vite</code ></td>
                                <td class="py-4">Instalar o vite de forma global</td>
                            </tr>
                            <tr class="border-b border-gray-700">
                                <td class="py-4 pr-4"><code class="text-pink-400">npm create vite@latest .</code ></td>
                                <td class="py-4">Criando o projeto vite</td>
                            </tr>
                            <tr>
                                <td class="py-4 pr-4"><code class="text-pink-400">npm run dev</code ></td>
                                <td class="py-4">Rodar o projeto vite</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="text-gray-400 text-sm mt-4">O ponto <code class="text-pink-400">.</code> no comando cria o projeto dentro da pasta atual, sem criar uma subpasta.</p>
                </div>
            </details>

            <ul class="space-y-5 mt-10">

                <!-- 1. O QUE É REACT -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">1. O que é React?</h3>
                    <div class="space-y-3 text-sm text-gray-300">
                        <p>React é uma <span class="text-white font-semibold">biblioteca JavaScript</span> usada para criar interfaces de usuário <span class="text-white font-semibold">interativas</span>. Foi criado pelo Facebook/Meta e é hoje o padrão da indústria para desenvolvimento frontend.</p>
                        <p>Ele brilha em aplicações com muitas interações possíveis do usuário — como Instagram, YouTube, Netflix, Spotify e LinkedIn, que todos usam React.</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                            <div class="bg-[#131217] rounded p-3 text-center">
                                <p class="text-purple-400 font-bold text-base">Web</p>
                                <p class="text-gray-400 text-xs mt-1">React para aplicações web</p>
                            </div>
                            <div class="bg-[#131217] rounded p-3 text-center">
                                <p class="text-purple-400 font-bold text-base">Mobile</p>
                                <p class="text-gray-400 text-xs mt-1">React Native para iOS e Android</p>
                            </div>
                            <div class="bg-[#131217] rounded p-3 text-center">
                                <p class="text-purple-400 font-bold text-base">Desktop</p>
                                <p class="text-gray-400 text-xs mt-1">Electron para apps desktop</p>
                            </div>
                        </div>
                        <p class="text-yellow-400 text-xs mt-2">💡 Aprenda React uma vez e use em qualquer plataforma.</p>
                    </div>
                </li>

                <!-- 2. SINGLE PAGE APPLICATION -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">2. Single Page Application (SPA)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>O React gera uma <span class="text-white font-semibold">SPA</span> — o HTML da aplicação é praticamente vazio.</p>
                            <p>O conteúdo é inserido dinamicamente por meio de JavaScript. Por isso, se você desabilitar o JS no navegador, não verá nada.</p>
                            <p>Em vez de ter um arquivo HTML por página, o React gerencia todas as páginas via JavaScript com apenas um HTML base.</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300 flex flex-col justify-center">
                            <p class="text-gray-500">&lt;!-- index.html (vazio) --&gt;</p>
                            <p><span class="text-blue-400">&lt;div</span> <span class="text-yellow-300">id=</span><span class="text-green-400">"root"</span><span class="text-blue-400">&gt;&lt;/div&gt;</span></p>
                            <br>
                            <p class="text-gray-500">/* React injeta o conteúdo aqui */</p>
                            <p><span class="text-blue-400">&lt;div</span> <span class="text-yellow-300">id=</span><span class="text-green-400">"root"</span><span class="text-blue-400">&gt;</span></p>
                            <p class="pl-4"><span class="text-blue-400">&lt;h1&gt;</span>Olá Mundo<span class="text-blue-400">&lt;/h1&gt;</span></p>
                            <p><span class="text-blue-400">&lt;/div&gt;</span></p>
                        </div>
                    </div>
                </li>

                <!-- 3. COMPONENTES -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">3. Componentes</h3>
                    <div class="space-y-4">
                        <div class="text-sm text-gray-300 space-y-2">
                            <p>No React, a aplicação é dividida em <span class="text-white font-semibold">componentes</span> — pense neles como peças de LEGO que se juntam para formar páginas completas.</p>
                            <p>Cada componente é uma <span class="text-white font-semibold">função JavaScript</span> que retorna <span class="text-white font-semibold">JSX</span>. Por convenção, use <span class="text-pink-400">PascalCase</span> para nomeá-los (ex: <code class="text-pink-400">AddTask</code>, <code class="text-pink-400">TaskList</code>).</p>
                            <p>Arquivos de componentes usam a extensão <code class="text-pink-400">.jsx</code>, criados dentro da pasta <code class="text-pink-400">src/components/</code>.</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-blue-400">function</span> <span class="text-yellow-300">MeuComponente</span>() {</p>
                            <p class="pl-4"><span class="text-blue-400">return</span> (</p>
                            <p class="pl-8"><span class="text-green-400">&lt;div&gt;</span></p>
                            <p class="pl-12"><span class="text-green-400">&lt;h1&gt;</span>Olá Mundo<span class="text-green-400">&lt;/h1&gt;</span></p>
                            <p class="pl-8"><span class="text-green-400">&lt;/div&gt;</span></p>
                            <p class="pl-4">);</p>
                            <p>}</p>
                            <br>
                            <p><span class="text-blue-400">export default</span> MeuComponente;</p>
                        </div>
                        <p class="text-yellow-400 text-xs">⚠️ O <code>return</code> de um componente só pode ter <code >um elemento raiz</code >. Use uma <code>&lt;div&gt;</code> ou um Fragment (<code>&lt;&gt;&lt;/&gt;</code>) para envolver múltiplos elementos.</p>
                    </div>
                </li>

                <!-- 4. JSX -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">4. JSX</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>JSX é uma sintaxe especial: <span class="text-white font-semibold">HTML misturado com JavaScript</span>.</p>
                            <p>Para usar JavaScript dentro do JSX, envolva com <code class="text-pink-400">{"{}"}</code> (chaves).</p>
                            <p>Use <code class="text-pink-400">className</code> em vez de <code>class</code> para definir classes CSS.</p>
                            <p>Eventos como <code class="text-pink-400">onClick</code> e <code class="text-pink-400">onChange</code> recebem funções JavaScript dentro de chaves.</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-blue-400">const</span> nome = <span class="text-green-400">"Felipe"</span>;</p>
                            <br>
                            <p><span class="text-blue-400">return</span> (</p>
                            <p class="pl-4"><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">className=</span><span class="text-green-400">"container"</span><span class="text-green-400">&gt;</span></p>
                            <p class="pl-8"><span class="text-green-400">&lt;h1&gt;</span>Olá, <span class="text-pink-400">{"{nome}"}</span><span class="text-green-400">&lt;/h1&gt;</span></p>
                            <p class="pl-8"><span class="text-green-400">&lt;button</span> <span class="text-yellow-300">onClick=</span><span class="text-pink-400">{"{() => alert('clicou!')}"}</span><span class="text-green-400">&gt;</span></p>
                            <p class="pl-12">Clique aqui</p>
                            <p class="pl-8"><span class="text-green-400">&lt;/button&gt;</span></p>
                            <p class="pl-4"><span class="text-green-400">&lt;/div&gt;</span></p>
                            <p>);</p>
                        </div>
                    </div>
                </li>

                <!-- 5. STATE (useState) -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">5. State — <code class="text-pink-400 text-lg">useState</code></h3>
                    <div class="space-y-4">
                        <div class="text-sm text-gray-300 space-y-2">
                            <p>State é uma variável especial do React: <span class="text-white font-semibold">quando você altera o state, a interface é automaticamente atualizada</span> (re-renderização).</p>
                            <p>É criado com o Hook <code class="text-pink-400">useState</code>, importado do React. Retorna um array com <code >[valor, função de atualização]</code >.</p>
                            <p>Use state sempre que quiser <code >reagir a interações do usuário</code > — daí vem o nome "React".</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-blue-400">import</span> {"{ useState }"} <span class="text-blue-400">from</span> <span class="text-green-400">'react'</span>;</p>
                            <br>
                            <p><span class="text-blue-400">function</span> <span class="text-yellow-300">App</span>() {"{"}</p>
                            <p class="pl-4"><span class="text-blue-400">const</span> [mensagem, setMensagem] = <span class="text-yellow-300">useState</span>(<span class="text-green-400">'Olá Mundo'</span>);</p>
                            <br>
                            <p class="pl-4"><span class="text-blue-400">return</span> (</p>
                            <p class="pl-8"><span class="text-green-400">&lt;div&gt;</span></p>
                            <p class="pl-12"><span class="text-green-400">&lt;h1&gt;</span><span class="text-pink-400">{"{mensagem}"}</span><span class="text-green-400">&lt;/h1&gt;</span></p>
                            <p class="pl-12"><span class="text-green-400">&lt;button</span> <span class="text-yellow-300">onClick=</span><span class="text-pink-400">{"{() => setMensagem('Clicado!')}"}</span><span class="text-green-400">&gt;</span></p>
                            <p class="pl-16">Mudar</p>
                            <p class="pl-12"><span class="text-green-400">&lt;/button&gt;</span></p>
                            <p class="pl-8"><span class="text-green-400">&lt;/div&gt;</span></p>
                            <p class="pl-4">);</p>
                            <p>{"}"}</p>
                        </div>
                    </div>
                </li>

                <!-- 6. PROPS -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">6. Props</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>Props são a forma de <span class="text-white font-semibold">passar dados de um componente pai para um componente filho</span>.</p>
                            <p>Você passa props como atributos HTML e as recebe no componente filho via o parâmetro <code class="text-pink-400">props</code>.</p>
                            <p>Tudo que você passa como atributo fica disponível dentro de <code class="text-pink-400">props.nomeDaProps</code>.</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p class="text-gray-500">{"// Componente pai (App)"}</p>
                            <p><span class="text-green-400">&lt;Tasks</span> <span class="text-yellow-300">tasks=</span><span class="text-pink-400">{"{listaDeTarefas}"}</span> <span class="text-green-400">/&gt;</span></p>
                            <br>
                            <p class="text-gray-500">{"// Componente filho (Tasks)"}</p>
                            <p><span class="text-blue-400">function</span> <span class="text-yellow-300">Tasks</span>(props) {"{"}</p>
                            <p class="pl-4"><span class="text-blue-400">return</span> (</p>
                            <p class="pl-8"><span class="text-green-400">&lt;ul&gt;</span></p>
                            <p class="pl-12">{"{props.tasks.map(task => ("}</p>
                            <p class="pl-16"><span class="text-green-400">&lt;li&gt;</span>{"{task.title}"}<span class="text-green-400">&lt;/li&gt;</span></p>
                            <p class="pl-12">{""))}"}</p>
                            <p class="pl-8"><span class="text-green-400">&lt;/ul&gt;</span></p>
                            <p class="pl-4">);</p>
                            <p>{"}"}</p>
                        </div>
                    </div>
                </li>

                <!-- 7. USE EFFECT -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">7. Efeitos Colaterais — <code class="text-pink-400 text-lg">useEffect</code></h3>
                    <div class="space-y-4">
                        <div class="text-sm text-gray-300 space-y-2">
                            <p>O <code class="text-pink-400">useEffect</code> executa uma função sempre que um valor da lista de dependências (segundo parâmetro) for alterado.</p>
                            <p>Lista de dependências <span class="text-white font-semibold">vazia <code>[]</code></span>: função executada apenas <code >uma vez</code >, quando o componente é montado pela primeira vez.</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                                <p class="text-yellow-400 mb-2">{"// Executa quando 'tasks' mudar"}</p>
                                <p><span class="text-yellow-300">useEffect</span>(() => {"{"}</p>
                                <p class="pl-4">localStorage.<span class="text-yellow-300">setItem</span>(</p>
                                <p class="pl-8"><span class="text-green-400">'tasks'</span>,</p>
                                <p class="pl-8">JSON.<span class="text-yellow-300">stringify</span>(tasks)</p>
                                <p class="pl-4">);</p>
                                <p>{"}"}, [tasks]);</p>
                            </div>
                            <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                                <p class="text-yellow-400 mb-2">{"// Executa só uma vez (on mount)"}</p>
                                <p><span class="text-yellow-300">useEffect</span>(() => {"{"}</p>
                                <p class="pl-4"><span class="text-blue-400">async function</span> <span class="text-yellow-300">fetchTasks</span>() {"{"}</p>
                                <p class="pl-8"><span class="text-blue-400">const</span> res = <span class="text-blue-400">await</span> <span class="text-yellow-300">fetch</span>(url);</p>
                                <p class="pl-8"><span class="text-blue-400">const</span> data = <span class="text-blue-400">await</span> res.<span class="text-yellow-300">json</span>();</p>
                                <p class="pl-8"><span class="text-yellow-300">setTasks</span>(data);</p>
                                <p class="pl-4">{"}"}</p>
                                <p class="pl-4"><span class="text-yellow-300">fetchTasks</span>();</p>
                                <p>{"}"}, []);</p>
                            </div>
                        </div>
                        <p class="text-yellow-400 text-xs">⚠️ Não use <code>async</code> diretamente na função do <code>useEffect</code>. Crie uma função assíncrona interna e a chame.</p>
                    </div>
                </li>

                <!-- 8. LOCAL STORAGE -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">8. Persistência com localStorage</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>O <code class="text-pink-400">localStorage</code> persiste dados no navegador mesmo após fechar a aba ou o navegador.</p>
                            <p>Armazena apenas <code >strings</code >, então use <code class="text-pink-400">JSON.stringify()</code> para salvar e <code class="text-pink-400">JSON.parse()</code> para recuperar.</p>
                            <p>Use em conjunto com o <code class="text-pink-400">useState</code> (para atualizar a tela) e o <code class="text-pink-400">useEffect</code> (para salvar ao mudar).</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p class="text-gray-500">{"// Inicializar state com dados do storage"}</p>
                            <p><span class="text-blue-400">const</span> [tasks, setTasks] = <span class="text-yellow-300">useState</span>(</p>
                            <p class="pl-4">JSON.<span class="text-yellow-300">parse</span>(localStorage.<span class="text-yellow-300">getItem</span>(<span class="text-green-400">'tasks'</span>)) || []</p>
                            <p>);</p>
                            <br>
                            <p class="text-gray-500">{"// Salvar no storage quando tasks mudar"}</p>
                            <p><span class="text-yellow-300">useEffect</span>(() => {"{"}</p>
                            <p class="pl-4">localStorage.<span class="text-yellow-300">setItem</span>(<span class="text-green-400">'tasks'</span>, JSON.<span class="text-yellow-300">stringify</span>(tasks));</p>
                            <p>{"}"}, [tasks]);</p>
                        </div>
                    </div>
                </li>

                <!-- 9. REACT ROUTER -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">9. Roteamento — React Router Dom</h3>
                    <div class="space-y-4">
                        <div class="text-sm text-gray-300 space-y-2">
                            <p>O React Router gerencia rotas (páginas) numa SPA usando JavaScript, sem múltiplos HTMLs.</p>
                            <p>Instale com: <code class="text-pink-400">npm install react-router-dom@6.26.1</code></p>
                            <p>Crie uma pasta <code class="text-pink-400">src/pages/</code> para os componentes de página. Pages são componentes comuns — o nome é apenas semântico.</p>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-sm text-gray-400">
                                <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                                    <tr>
                                        <th class="px-4 py-3">Hook / Componente</th>
                                        <th class="px-4 py-3">Uso</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-700">
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">createBrowserRouter</td>
                                        <td class="px-4 py-3">Cria o roteador com a lista de rotas (path + element).</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">RouterProvider</td>
                                        <td class="px-4 py-3">Componente que envolve a aplicação e injeta o roteador.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">useNavigate()</td>
                                        <td class="px-4 py-3">Hook para navegar entre rotas. <code>navigate('/rota')</code> ou <code>navigate(-1)</code> para voltar.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">useSearchParams()</td>
                                        <td class="px-4 py-3">Hook para ler query params da URL. Ex: <code>?title=foo&desc=bar</code>.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="text-yellow-400 text-xs">⚠️ Ao passar funções para <code>onClick</code>, nunca as chame diretamente (<code>onClick={"{funcao()}"}</code>). Passe a referência (<code>onClick={"{funcao}"}</code>) ou use uma arrow function (<code>onClick={"{() => funcao(param)}"}</code>).</p>
                    </div>
                </li>

                <!-- 10. CONSUMO DE API -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">10. Consumindo APIs com <code class="text-pink-400 text-lg">fetch</code></h3>
                    <div class="space-y-4">
                        <div class="text-sm text-gray-300 space-y-2">
                            <p>O fluxo mais comum para APIs no React:</p>
                            <div class="flex items-center gap-2 flex-wrap mt-2">
                                <span class="bg-purple-900/50 border border-purple-700 text-purple-300 text-xs px-3 py-1 rounded-full">1. Componente é montado</span>
                                <span class="text-gray-500">→</span>
                                <span class="bg-purple-900/50 border border-purple-700 text-purple-300 text-xs px-3 py-1 rounded-full">2. useEffect chama a API</span>
                                <span class="text-gray-500">→</span>
                                <span class="bg-purple-900/50 border border-purple-700 text-purple-300 text-xs px-3 py-1 rounded-full">3. Dados salvos no state</span>
                                <span class="text-gray-500">→</span>
                                <span class="bg-purple-900/50 border border-purple-700 text-purple-300 text-xs px-3 py-1 rounded-full">4. Interface atualizada</span>
                            </div>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-yellow-300">useEffect</span>(() => {"{"}</p>
                            <p class="pl-4"><span class="text-blue-400">async function</span> <span class="text-yellow-300">fetchTasks</span>() {"{"}</p>
                            <p class="pl-8"><span class="text-blue-400">const</span> response = <span class="text-blue-400">await</span> <span class="text-yellow-300">fetch</span>(</p>
                            <p class="pl-12"><span class="text-green-400">'https://jsonplaceholder.typicode.com/todos?_limit=10'</span>,</p>
                            <p class="pl-12">{"{"} method: <span class="text-green-400">'GET'</span> {"}"}</p>
                            <p class="pl-8">);</p>
                            <p class="pl-8"><span class="text-blue-400">const</span> data = <span class="text-blue-400">await</span> response.<span class="text-yellow-300">json</span>();</p>
                            <p class="pl-8"><span class="text-yellow-300">setTasks</span>(data);</p>
                            <p class="pl-4">{"}"}</p>
                            <p class="pl-4"><span class="text-yellow-300">fetchTasks</span>();</p>
                            <p>{"}"}, []);</p>
                        </div>
                    </div>
                </li>

                <!-- 11. PRÓXIMOS PASSOS -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">11. Próximos Passos no React</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                        <div class="space-y-2">
                            <p class="text-white font-semibold">Data Fetching</p>
                            <p class="text-gray-400 text-xs">React Query (mais popular) ou SWR para gerenciar chamadas de API.</p>
                            <p class="text-white font-semibold mt-3">Formulários</p>
                            <p class="text-gray-400 text-xs">React Hook Form + Zod para validação de formulários complexos.</p>
                            <p class="text-white font-semibold mt-3">Estado Global</p>
                            <p class="text-gray-400 text-xs">Context API + useReducer → depois Zustand e Redux.</p>
                        </div>
                        <div class="space-y-2">
                            <p class="text-white font-semibold">Testes</p>
                            <p class="text-gray-400 text-xs">Jest / Vitest + React Testing Library + Cypress (e2e).</p>
                            <p class="text-white font-semibold mt-3">React no Servidor</p>
                            <p class="text-gray-400 text-xs">Server Components + Next.js (padrão do mercado) ou Remix.</p>
                            <p class="text-white font-semibold mt-3">GraphQL</p>
                            <p class="text-gray-400 text-xs">Apollo Client para consumir APIs GraphQL no React.</p>
                        </div>
                    </div>
                </li>

            </ul>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const voltar = () => router.back()
</script>
