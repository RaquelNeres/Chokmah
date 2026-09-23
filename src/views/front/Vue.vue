<template>
  <div class="min-h-screen flex flex-col items-center py-10">
    <button
      class="self-start ml-10 text-white py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
      @click="voltar"
    >
      Voltar
    </button>

    <div class="text-[#D9D7E0] mt-10 max-w-[945px] px-6 text-justify w-full mx-auto">
      <h1 class="font-bold text-[50px] text-center text-white">Vue</h1>
      <p class="text-center text-gray-400 mt-2 text-sm">
        Baseado na documentação oficial — 
        <a href="https://pt.vuejs.org/guide/introduction.html" class="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">pt.vuejs.org</a>
      </p>

      <!-- SETUP -->
      <details class="mt-10 text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden">
        <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">
          Criando um Projeto com Vite
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
                <td class="py-4 pr-4"><code class="text-green-400">node -v</code></td>
                <td class="py-4">Verifica se o Node está instalado.</td>
              </tr>
              <tr class="border-b border-gray-700">
                <td class="py-4 pr-4"><code class="text-green-400">npm create vue@latest</code></td>
                <td class="py-4">Cria um projeto Vue com o instalador oficial (create-vue). Permite escolher TypeScript, Router, Pinia, etc.</td>
              </tr>
              <tr class="border-b border-gray-700">
                <td class="py-4 pr-4"><code class="text-green-400">npm install</code></td>
                <td class="py-4">Instala as dependências do projeto.</td>
              </tr>
              <tr>
                <td class="py-4 pr-4"><code class="text-green-400">npm run dev</code></td>
                <td class="py-4">Inicia o servidor de desenvolvimento.</td>
              </tr>
            </tbody>
          </table>
          <p class="text-gray-400 text-sm mt-4">O Vue utiliza o <span class="text-green-400">create-vue</span> (baseado em Vite) como ferramenta oficial de scaffolding para iniciar projetos rapidamente.</p>
        </div>
      </details>

      <ul class="space-y-5 mt-10">

        <!-- 2. SFC -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">2. Exemplos de Componentes — <code class="text-green-400 text-lg">.vue</code></h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

            <!-- EXEMPLO 1: Esquerda (Exemplo de Props) -->
            <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
              <p class="text-gray-500">// Filho.vue (Recebendo Props)</p>
              <br>
              <p><span class="text-blue-400">&lt;script setup&gt;</span></p>
              <p class="pl-4"><span class="text-blue-400">const</span> props = <span class="text-yellow-300">defineProps</span>({</p>
              <p class="pl-8">nome: String</p>
              <p class="pl-4">})</p>
              <p><span class="text-blue-400">&lt;/script&gt;</span></p>
              <br>
              <p><span class="text-green-400">&lt;template&gt;</span></p>
              <p class="pl-4"><span class="text-green-400">&lt;h1&gt;</span>Olá, <span class="text-pink-400">{{ nome }}</span>!<span class="text-green-400">&lt;/h1&gt;</span></p>
              <p><span class="text-green-400">&lt;/template&gt;</span></p>
              <br>
              <p><span class="text-yellow-300">&lt;style scoped&gt;</span></p>
              <p class="pl-4">h1 { color: #38bdf8; }</p>
              <p><span class="text-yellow-300">&lt;/style&gt;</span></p>
            </div>
            
            <!-- EXEMPLO 2: Direita (Contador Reativo) -->
            <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
              <p class="text-gray-500">// MeuComponente.vue (Exemplo de Estado)</p>
              <br>
              <p><span class="text-blue-400">&lt;script setup&gt;</span></p>
              <p class="pl-4"><span class="text-blue-400">import</span> { ref } <span class="text-blue-400">from</span> <span class="text-green-400">'vue'</span></p>
              <p class="pl-4"><span class="text-blue-400">const</span> count = <span class="text-yellow-300">ref</span>(0)</p>
              <p><span class="text-blue-400">&lt;/script&gt;</span></p>
              <br>
              <p><span class="text-green-400">&lt;template&gt;</span></p>
              <p class="pl-4"><span class="text-green-400">&lt;button</span> <span class="text-yellow-300">@click=</span><span class="text-pink-400">"count++"</span><span class="text-green-400">&gt;</span></p>
              <p class="pl-8">Cliques: <span class="text-pink-400">{{ count }}</span></p>
              <p class="pl-4"><span class="text-green-400">&lt;/button&gt;</span></p>
              <p><span class="text-green-400">&lt;/template&gt;</span></p>
              <br>
              <p><span class="text-yellow-300">&lt;style scoped&gt;</span></p>
              <p class="pl-4">button { font-weight: bold; }</p>
              <p><span class="text-yellow-300">&lt;/style&gt;</span></p>
            </div>
          </div>
        </li>

        <!-- 4. REATIVIDADE -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">4. Reatividade — <code class="text-green-400 text-lg">ref</code> e <code class="text-green-400 text-lg">reactive</code></h3>
          <div class="space-y-4">
            <p class="text-sm text-gray-300">O sistema de reatividade do Vue rastreia alterações automaticamente e atualiza o DOM quando os dados sofrem mudanças.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-[#131217] rounded p-4">
                <p class="text-green-400 font-bold text-sm mb-2">ref()</p>
                <p class="text-gray-400 text-xs mb-3">Para qualquer tipo de dado (especialmente primitivos como string, number, boolean). No script, acesse ou altere com <code>.value</code>; no template, o desembrulho é automático sem o <code>.value</code>.</p>
                <div v-pre class="font-mono text-xs text-gray-300">
                  <p><span class="text-blue-400">const</span> nome = <span class="text-yellow-300">ref</span>(<span class="text-green-400">'Felipe'</span>)</p>
                  <p><span class="text-blue-400">const</span> count = <span class="text-yellow-300">ref</span>(0)</p>
                  <br>
                  <p class="text-gray-500">// no script: use .value</p>
                  <p>count.value++</p>
                  <br>
                  <p class="text-gray-500">// no template: sem .value</p>
                  <p><span class="text-pink-400">{{ count }}</span></p>
                </div>
              </div>
              <div class="bg-[#131217] rounded p-4">
                <p class="text-green-400 font-bold text-sm mb-2">reactive()</p>
                <p class="text-gray-400 text-xs mb-3">Apenas para objetos e coleções. Torna o objeto profundamente reativo sem exigir <code>.value</code>. Ideal para agrupar estados relacionados.</p>
                <div v-pre class="font-mono text-xs text-gray-300">
                  <p><span class="text-blue-400">const</span> user = <span class="text-yellow-300">reactive</span>({</p>
                  <p class="pl-4">nome: <span class="text-green-400">'Felipe'</span>,</p>
                  <p class="pl-4">idade: 25</p>
                  <p>})</p>
                  <br>
                  <p class="text-gray-500">// altera direto, sem .value</p>
                  <p>user.idade = 26</p>
                  <br>
                  <p><span class="text-pink-400">{{ user.nome }}</span></p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- 5. TEMPLATE SYNTAX -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">5. Sintaxe do Template</h3>
          <div class="space-y-4">
            <p class="text-sm text-gray-300">Os templates do Vue estendem a sintaxe HTML com interpolações e diretivas especiais com prefixo <code class="text-green-400">v-</code> ou atalhos como <code class="text-green-400">@</code> e <code class="text-green-400">:</code>.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm text-gray-400">
                <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                  <tr>
                    <th class="px-4 py-3 min-w-[220px]">Diretiva / Sintaxe</th>
                    <th class="px-4 py-3">Descrição</th>
                  </tr>
                </thead>
                <tbody v-pre class="divide-y divide-gray-700">
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">{{ valor }}</td>
                    <td class="px-4 py-3">Interpolação de texto: exibe o valor reativo renderizado no HTML.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-bind:href ou :href</td>
                    <td class="px-4 py-3">Vincula dinamicamente um atributo do HTML a uma expressão ou variável reativa.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-on:click ou @click</td>
                    <td class="px-4 py-3">Escuta eventos nativos do DOM (como clique de botão) e executa métodos.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">@keyup.enter</td>
                    <td class="px-4 py-3">Modificador de evento de teclado: dispara a ação <strong>somente</strong> ao pressionar "Enter".</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-if / v-else-if / v-else</td>
                    <td class="px-4 py-3">Renderização condicional estrutural: insere ou desmonta completamente o elemento do DOM.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-show</td>
                    <td class="px-4 py-3">Alterna a visibilidade via CSS (<code>display: none</code>). O elemento continua montado no DOM.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-for</td>
                    <td class="px-4 py-3">Itera sobre arrays ou objetos para renderizar listas repetidas (requer o uso de <code>:key</code>).</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-model</td>
                    <td class="px-4 py-3">Two-way data binding: sincroniza automaticamente o valor do input com a variável reativa.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">@submit.prevent</td>
                    <td class="px-4 py-3">Modificador de formulário que executa <code>preventDefault()</code> para evitar o recarregamento da página.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">:class="{ ativo: isAtivo }"</td>
                    <td class="px-4 py-3">Vinculação dinâmica de classes CSS condicionadas a variáveis booleanas.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
              <!-- CÓDIGO -->
              <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300 border border-transparent">
                <p class="text-gray-500 mb-2">// Exemplos de uso no template</p>
                <p><span class="text-green-400">&lt;p</span> <span class="text-yellow-300">:class=</span><span class="text-pink-400">"{ 'text-red': error, 'text-green': success }"</span><span class="text-green-400">&gt;</span>Classes Objeto<span class="text-green-400">&lt;/p&gt;</span></p>
                <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">:style=</span><span class="text-pink-400">"{ color: corAtiva, fontSize: tamanhoFonte + 'px' }"</span><span class="text-green-400">&gt;</span>Estilo Dinâmico<span class="text-green-400">&lt;/div&gt;</span></p>
                <p><span class="text-green-400">&lt;a</span> <span class="text-yellow-300">:href=</span><span class="text-pink-400">"linkPerfil"</span><span class="text-green-400">&gt;</span>Link Reativo<span class="text-green-400">&lt;/a&gt;</span></p>
                <p><span class="text-green-400">&lt;input</span> <span class="text-yellow-300">v-model=</span><span class="text-pink-400">"nome"</span> <span class="text-green-400" />&gt;</p>
                <p><span class="text-green-400">&lt;input</span> <span class="text-yellow-300">@keyup.enter=</span><span class="text-pink-400">"pesquisar"</span> <span class="text-green-400" />&gt;</p>
                <p><span class="text-green-400">&lt;li</span> <span class="text-yellow-300">v-for=</span><span class="text-pink-400">"item in lista"</span> <span class="text-yellow-300">:key=</span><span class="text-pink-400">"item.id"</span><span class="text-green-400">&gt;</span><span class="text-pink-400">{{ item.nome }}</span><span class="text-green-400">&lt;/li&gt;</span></p>
                <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">v-if=</span><span class="text-pink-400">"logado"</span><span class="text-green-400">&gt;</span>Bem-vindo!<span class="text-green-400">&lt;/div&gt;</span></p>
                <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">v-else-if=</span><span class="text-pink-400">"carregando"</span><span class="text-green-400">&gt;</span>Carregando...<span class="text-green-400">&lt;/div&gt;</span></p>
                <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">v-else</span><span class="text-green-400">&gt;</span>Faça login<span class="text-green-400">&lt;/div&gt;</span></p>
                <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">v-show=</span><span class="text-pink-400">"carregando"</span><span class="text-green-400">&gt;</span>Loading apenas oculto via CSS<span class="text-green-400">&lt;/div&gt;</span></p>
                <p><span class="text-green-400">&lt;form</span> <span class="text-yellow-300">@submit.prevent=</span><span class="text-pink-400">"salvarDados"</span><span class="text-green-400">&gt;</span>...<span class="text-green-400">&lt;/form&gt;</span></p>
                <p><span class="text-green-400">&lt;button</span> <span class="text-yellow-300">@click=</span><span class="text-pink-400">"salvar"</span><span class="text-green-400">&gt;</span>Salvar<span class="text-green-400">&lt;/button&gt;</span></p>
              </div>

              <!-- RESULTADO VISUAL -->
              <div class="flex flex-col justify-center p-4 border border-gray-600 rounded bg-[#131217] gap-4 text-sm">
                <p class="text-gray-500 font-mono text-xs">// Resultado Visual</p>
                
                <div class="flex items-center gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono">:class</span>
                    <p class="text-green-400 font-semibold w-2/3">Classes Objeto</p>
                </div>
                
                <div class="flex items-center gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono">:style</span>
                    <div style="color: #38bdf8; font-size: 16px;" class="w-2/3">Estilo Dinâmico</div>
                </div>

                <div class="flex items-center gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono">:href</span>
                    <a href="#" class="w-2/3 text-blue-400 hover:underline">Link Reativo</a>
                </div>

                <div class="flex items-center gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono">v-model</span>
                    <input type="text" placeholder="Digite algo..." class="w-2/3 bg-[#374151] border border-slate-500 rounded px-2 py-1 text-white focus:outline-none">
                </div>

                <div class="flex items-center gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono">@keyup</span>
                    <input type="text" placeholder="Aperte Enter..." class="w-2/3 bg-[#374151] border border-slate-500 rounded px-2 py-1 text-white focus:outline-none">
                </div>

                <div class="flex gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono mt-1">v-for</span>
                    <ul class="w-2/3 list-disc pl-4 text-gray-300 text-xs space-y-1">
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                </div>

                <div class="flex items-center gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono">v-if / else</span>
                    <div class="w-2/3 flex gap-2">
                        <span class="bg-green-900/50 text-green-400 px-2 py-0.5 rounded text-xs border border-green-700">Bem-vindo!</span>
                        <span class="bg-gray-800 text-gray-500 px-2 py-0.5 rounded text-xs border border-gray-700 line-through">Faça login</span>
                    </div>
                </div>
                
                <div class="flex items-center gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono">v-show</span>
                    <div class="w-2/3 text-gray-500 text-xs italic">
                        <span class="border border-dashed border-gray-600 p-1">Oculto (display: none)</span>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono">@submit</span>
                    <form class="w-2/3 flex gap-2" @submit.prevent>
                        <input type="text" placeholder="..." class="bg-[#374151] border border-slate-500 rounded px-2 py-1 text-white focus:outline-none w-16">
                        <button class="bg-slate-600 text-white px-2 py-1 rounded text-xs hover:bg-slate-500 transition-colors">Enviar sem recarregar</button>
                    </form>
                </div>

                <div class="flex items-center gap-3">
                    <span class="w-1/3 text-gray-500 text-xs text-right font-mono">@click</span>
                    <div class="w-2/3">
                        <button class="bg-sky-600 hover:bg-sky-500 transition-colors text-white px-4 py-1 rounded">
                            Salvar
                        </button>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </li>

        <!-- 6. PROPS E EVENTOS -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">6. Props e Eventos</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2 text-sm text-gray-300">
              <p>Props passam dados unidirecionalmente do componente pai para o componente filho. Na Composition API (com <code>&lt;script setup&gt;</code>), são declaradas via macro <code class="text-green-400">defineProps()</code>.</p>
              <p>Para comunicar mudanças ou ações de volta ao pai, o filho emite eventos customizados declarados por <code class="text-green-400">defineEmits()</code>.</p>
              <p class="text-yellow-400 text-xs">⚠️ Props são <strong>somente leitura</strong> — nunca modifique o valor de uma prop diretamente no componente filho.</p>
            </div>
            <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
              <p class="text-gray-500">// Filho: TaskItem.vue</p>
              <p><span class="text-blue-400">const</span> props = <span class="text-yellow-300">defineProps</span>({</p>
              <p class="pl-4">title: String,</p>
              <p class="pl-4">done: Boolean</p>
              <p>})</p>
              <br>
              <p><span class="text-blue-400">const</span> emit = <span class="text-yellow-300">defineEmits</span>(['delete'])</p>
              <br>
              <p class="text-gray-500">// Pai: App.vue</p>
              <p><span class="text-green-400">&lt;TaskItem</span></p>
              <p class="pl-4"><span class="text-yellow-300">:title=</span><span class="text-pink-400">"task.title"</span></p>
              <p class="pl-4"><span class="text-yellow-300">:done=</span><span class="text-pink-400">"task.done"</span></p>
              <p class="pl-4"><span class="text-yellow-300">@delete=</span><span class="text-pink-400">"removeTask"</span></p>
              <p><span class="text-green-400">/&gt;</span></p>
            </div>
          </div>
          
          <!-- EXEMPLO ADICIONAL: AVÔ, PAI E FILHO -->
          <div class="mt-8 space-y-4 pt-4 border-t border-gray-700">
            <p class="text-sm text-gray-300"><strong>Exemplo Prático:</strong> Passando <code>props</code> em cadeia do <strong>Avô</strong>, para o <strong>Pai</strong>, e finalmente para o <strong>Filho</strong>.</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <!-- AVO -->
              <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300 border border-gray-700">
                <p class="text-gray-500 mb-2">👵 AVÔ (App.vue)</p>
                <p><span class="text-blue-400">&lt;script setup&gt;</span></p>
                <p class="pl-2"><span class="text-blue-400">import</span> { reactive } <span class="text-blue-400">from</span> <span class="text-green-400">'vue'</span></p>
                <p class="pl-2"><span class="text-blue-400">import</span> NavBar <span class="text-blue-400">from</span> <span class="text-green-400">'./NavBar.vue'</span></p>
                <br>
                <p class="pl-2"><span class="text-blue-400">const</span> state = <span class="text-yellow-300">reactive</span>({</p>
                <p class="pl-4">pastas: [{ id: 1, title: <span class="text-green-400">'Pasta 0'</span> }]</p>
                <p class="pl-2">})</p>
                <p><span class="text-blue-400">&lt;/script&gt;</span></p>
                <br>
                <p><span class="text-green-400">&lt;template&gt;</span></p>
                <p class="pl-2"><span class="text-gray-500">&lt;!-- Passa o Array de pastas --&gt;</span></p>
                <p class="pl-2"><span class="text-green-400">&lt;NavBar</span> <span class="text-yellow-300">:pastas=</span><span class="text-pink-400">"state.pastas"</span> <span class="text-green-400">/&gt;</span></p>
                <p><span class="text-green-400">&lt;/template&gt;</span></p>
              </div>

              <!-- PAI -->
              <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300 border border-gray-700">
                <p class="text-gray-500 mb-2">👨 PAI (NavBar.vue)</p>
                <p><span class="text-blue-400">&lt;script setup&gt;</span></p>
                <p class="pl-2"><span class="text-blue-400">import</span> Folders <span class="text-blue-400">from</span> <span class="text-green-400">'./Folders.vue'</span></p>
                <br>
                <p class="pl-2"><span class="text-gray-500">// Recebe pastas do Avô</span></p>
                <p class="pl-2"><span class="text-blue-400">const</span> props = <span class="text-yellow-300">defineProps</span>({</p>
                <p class="pl-4">pastas: Array</p>
                <p class="pl-2">})</p>
                <p><span class="text-blue-400">&lt;/script&gt;</span></p>
                <br>
                <p><span class="text-green-400">&lt;template&gt;</span></p>
                <p class="pl-2"><span class="text-green-400">&lt;Folders</span></p>
                <p class="pl-4"><span class="text-yellow-300">v-for=</span><span class="text-pink-400">"pasta in props.pastas"</span></p>
                <p class="pl-4"><span class="text-gray-500">&lt;!-- Envia dados para o Filho --&gt;</span></p>
                <p class="pl-4"><span class="text-yellow-300">:id=</span><span class="text-pink-400">"pasta.id"</span></p>
                <p class="pl-4"><span class="text-yellow-300">:title=</span><span class="text-pink-400">"pasta.title"</span></p>
                <p class="pl-2"><span class="text-green-400">/&gt;</span></p>
                <p><span class="text-green-400">&lt;/template&gt;</span></p>
              </div>

              <!-- FILHO -->
              <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300 border border-gray-700">
                <p class="text-gray-500 mb-2">👦 FILHO (Folders.vue)</p>
                <p><span class="text-blue-400">&lt;script setup&gt;</span></p>
                <p class="pl-2"><span class="text-gray-500">// Recebe dados únicos do Pai</span></p>
                <p class="pl-2"><span class="text-blue-400">const</span> props = <span class="text-yellow-300">defineProps</span>({</p>
                <p class="pl-4">id: Number,</p>
                <p class="pl-4">title: String</p>
                <p class="pl-2">})</p>
                <p><span class="text-blue-400">&lt;/script&gt;</span></p>
                <br>
                <p><span class="text-green-400">&lt;template&gt;</span></p>
                <p class="pl-2"><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">class=</span><span class="text-pink-400">"p-3 rounded-xl"</span><span class="text-green-400">&gt;</span></p>
                <p class="pl-4"><span class="text-green-400">&lt;span&gt;</span><span class="text-pink-400">{{ title }}</span><span class="text-green-400">&lt;/span&gt;</span></p>
                <p class="pl-2"><span class="text-green-400">&lt;/div&gt;</span></p>
                <p><span class="text-green-400">&lt;/template&gt;</span></p>
              </div>
            </div>
          </div>
        </li>

        <!-- 7. LIFECYCLE -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">7. Ciclo de Vida — <code class="text-green-400 text-lg">onMounted</code> e outros</h3>
          <div class="space-y-4">
            <p class="text-sm text-gray-300">Hooks do ciclo de vida permitem executar lógica em estágios específicos da vida de um componente no DOM.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm text-gray-400">
                <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                  <tr>
                    <th class="px-4 py-3 min-w-[200px]">Hook Vue</th>
                    <th class="px-4 py-3">Quando é chamado</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">onMounted()</td>
                    <td class="px-4 py-3">Após o componente ser inserido no DOM. Ideal para requisições iniciais e acesso a nós do DOM.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">onUpdated()</td>
                    <td class="px-4 py-3">Após uma alteração de estado reativo fazer a árvore de componentes re-renderizar o DOM.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">onUnmounted()</td>
                    <td class="px-4 py-3">Quando o componente é destruído e removido do DOM. Utilizado para limpar timers e event listeners globais.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
              <p><span class="text-blue-400">import</span> { ref, onMounted } <span class="text-blue-400">from</span> <span class="text-green-400">'vue'</span></p>
              <br>
              <p><span class="text-blue-400">const</span> tasks = <span class="text-yellow-300">ref</span>([])</p>
              <br>
              <p><span class="text-yellow-300">onMounted</span>(<span class="text-blue-400">async</span> () => {</p>
              <p class="pl-4"><span class="text-blue-400">const</span> res = <span class="text-blue-400">await</span> <span class="text-yellow-300">fetch</span>(<span class="text-green-400">'https://jsonplaceholder.typicode.com/todos?_limit=10'</span>)</p>
              <p class="pl-4">tasks.value = <span class="text-blue-400">await</span> res.<span class="text-yellow-300">json</span>()</p>
              <p>})</p>
            </div>
            <p class="text-yellow-400 text-xs">💡 A função passada para <code>onMounted</code> pode ser declarada como <code>async</code> diretamente.</p>
          </div>
        </li>

        <!-- 8. COMPUTED -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">8. Propriedades Computadas — <code class="text-green-400 text-lg">computed</code></h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2 text-sm text-gray-300">
              <p>Valores derivados de um estado reativo. O Vue rastreia automaticamente suas dependências reativas e armazena o resultado em cache, recalculando apenas quando as dependências forem modificadas.</p>
              <p class="text-yellow-400 text-xs">⚠️ Não realize efeitos colaterais (como requisições assíncronas ou mutação de estados) dentro de um <code>computed</code>. Para efeitos colaterais, utilize <code class="text-green-400">watch</code>.</p>
            </div>
            <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
              <p><span class="text-blue-400">import</span> { ref, computed } <span class="text-blue-400">from</span> <span class="text-green-400">'vue'</span></p>
              <br>
              <p><span class="text-blue-400">const</span> tasks = <span class="text-yellow-300">ref</span>([...])</p>
              <br>
              <p class="text-gray-500">// recalcula só quando tasks mudar</p>
              <p><span class="text-blue-400">const</span> concluidas = <span class="text-yellow-300">computed</span>(() => {</p>
              <p class="pl-4"><span class="text-blue-400">return</span> tasks.value.<span class="text-yellow-300">filter</span>(t => t.done)</p>
              <p>})</p>
              <br>
              <p class="text-gray-500">// no template</p>
              <p><span class="text-pink-400">{{ concluidas.length }}</span> tarefas concluídas</p>
            </div>
          </div>
        </li>

        <!-- 9. WATCH -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">9. Observadores — <code class="text-green-400 text-lg">watch</code></h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2 text-sm text-gray-300">
              <p>O <code class="text-green-400">watch</code> observa fontes reativas e dispara uma função de callback quando o valor sofre alteração.</p>
              <p>É indicado para lidar com efeitos colaterais decorrentes de mudanças de estado: persistência em <code>localStorage</code>, requisições a APIs ou disparo de animações.</p>
            </div>
            <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
              <p><span class="text-blue-400">import</span> { ref, watch } <span class="text-blue-400">from</span> <span class="text-green-400">'vue'</span></p>
              <br>
              <p><span class="text-blue-400">const</span> tasks = <span class="text-yellow-300">ref</span>([])</p>
              <br>
              <p class="text-gray-500">// executa toda vez que tasks mudar</p>
              <p><span class="text-yellow-300">watch</span>(tasks, (novoValor) => {</p>
              <p class="pl-4">localStorage.<span class="text-yellow-300">setItem</span>(</p>
              <p class="pl-8"><span class="text-green-400">'tasks'</span>,</p>
              <p class="pl-8">JSON.<span class="text-yellow-300">stringify</span>(novoValor)</p>
              <p class="pl-4">)</p>
              <p>}, { deep: <span class="text-blue-400">true</span> })</p>
            </div>
          </div>
          <p class="text-yellow-400 text-xs mt-4">💡 O modificador <code>{ deep: true }</code> força o rastreamento profundo de propriedades dentro de objetos e arrays aninhados.</p>
        </li>

        <!-- 10. ROTEAMENTO -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">10. Roteamento — Vue Router</h3>
          <div class="space-y-4">
            <div class="text-sm text-gray-300 space-y-2">
              <p>O <span class="text-white font-semibold">Vue Router</span> é a biblioteca oficial de roteamento do ecossistema Vue para gerenciar páginas em Single Page Applications (SPAs).</p>
              <p>Instalação: <code class="text-green-400">npm install vue-router@4</code></p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm text-gray-400">
                <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                  <tr>
                    <th class="px-4 py-3 min-w-[200px]">Recurso do Vue Router</th>
                    <th class="px-4 py-3">Uso e Finalidade</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">createRouter()</td>
                    <td class="px-4 py-3">Instancia o roteador com histórico e mapeamento das rotas da aplicação.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">&lt;RouterView /&gt;</td>
                    <td class="px-4 py-3">Componente funcional que atua como ponto de saída (outlet) onde a view da rota ativa é renderizada.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">&lt;RouterLink /&gt;</td>
                    <td class="px-4 py-3">Componente de link para navegar entre páginas sem recarregar o navegador.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">useRouter()</td>
                    <td class="px-4 py-3">Composable para navegação programática (ex.: redirecionamentos com <code>router.push()</code> ou histórico com <code>router.back()</code>).</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">useRoute()</td>
                    <td class="px-4 py-3">Composable para ler os metadados da rota atual, como parâmetros (<code>params</code>), queries e caminho.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- EXEMPLO PRÁTICO: ROUTER.JS -->
            <div class="mt-4 bg-[#131217] rounded p-4 text-xs font-mono text-gray-300" v-pre>
              <p class="text-gray-500">// router.js (Configuração de rotas)</p>
              <p><span class="text-blue-400">import</span> { createRouter, createWebHistory } <span class="text-blue-400">from</span> <span class="text-green-400">'vue-router'</span></p>
              <br>
              <p class="text-gray-500">// Lazy loading dos componentes (Carrega apenas quando acessar a rota)</p>
              <p><span class="text-blue-400">const</span> Home = () => <span class="text-yellow-300">import</span>(<span class="text-green-400">'./views/Home.vue'</span>)</p>
              <p><span class="text-blue-400">const</span> Frontend = () => <span class="text-yellow-300">import</span>(<span class="text-green-400">'./views/Frontend.vue'</span>)</p>
              <br>
              <p><span class="text-blue-400">const</span> routes = [</p>
              <p class="pl-4">{ path: <span class="text-green-400">'/'</span>, component: Home },</p>
              <p class="pl-4">{ path: <span class="text-green-400">'/frontend'</span>, component: Frontend }</p>
              <p>]</p>
              <br>
              <p class="text-gray-500">// Criação da instância do roteador</p>
              <p><span class="text-blue-400">const</span> router = <span class="text-yellow-300">createRouter</span>({</p>
              <p class="pl-4">history: <span class="text-yellow-300">createWebHistory</span>(),</p>
              <p class="pl-4">routes</p>
              <p>})</p>
              <br>
              <p><span class="text-blue-400">export default</span> router</p>
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