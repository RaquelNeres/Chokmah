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
          <p class="text-gray-400 text-sm mt-4">O Vue usa o <span class="text-green-400">create-vue</span> (baseado em Vite) como ferramenta oficial de scaffolding, assim como o React usa o Vite.</p>
        </div>
      </details>

      <ul class="space-y-5 mt-10">

        <!-- 2. SFC -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">2. Exemplos Componentes — <code class="text-green-400 text-lg">.vue</code></h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

            <!-- EXEMPLO 1: Esquerda (Novo exemplo de Props) -->
            <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
              <p class="text-gray-500">// Filho.vue (Exemplo recebendo Props)</p>
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
            
            <!-- EXEMPLO 2: Direita (Original Contador) -->
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
            <p class="text-sm text-gray-300">No Vue, o equivalente ao <code class="text-pink-400">useState</code> do React é o <code class="text-green-400">ref()</code>. Quando o valor muda, a interface atualiza automaticamente.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-[#131217] rounded p-4">
                <p class="text-green-400 font-bold text-sm mb-2">ref()</p>
                <p class="text-gray-400 text-xs mb-3">Para valores simples (string, number, boolean). Para alterar, use <code>.value</code> no script — no template, o Vue acessa automaticamente sem o <code>.value</code>.</p>
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
                <p class="text-gray-400 text-xs mb-3">Para objetos completos. Não precisa de <code>.value</code> — acessa as propriedades diretamente. Melhor para agrupar estados relacionados.</p>
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
            <p class="text-sm text-gray-300">O template do Vue usa HTML com diretivas especiais. No React você usa JSX com JavaScript puro — no Vue você usa atributos prefixados com <code class="text-green-400">v-</code> ou símbolos como <code class="text-green-400">@</code> e <code class="text-green-400">:</code>.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm text-gray-400">
                <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                  <tr>
                    <th class="px-4 py-3 min-w-[150px]">Sintaxe</th>
                    <th class="px-4 py-3 min-w-[200px]">React equivalente</th>
                    <th class="px-4 py-3">Descrição</th>
                  </tr>
                </thead>
                <tbody v-pre class="divide-y divide-gray-700">
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">{{ valor }}</td>
                    <td class="px-4 py-3 font-mono text-pink-400">{valor}</td>
                    <td class="px-4 py-3">Interpola um valor reativo no HTML.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-bind:href ou :href</td>
                    <td class="px-4 py-3 font-mono text-pink-400">href={valor}</td>
                    <td class="px-4 py-3">Vincula um atributo a um valor reativo.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-on:click ou @click</td>
                    <td class="px-4 py-3 font-mono text-pink-400">onClick={fn}</td>
                    <td class="px-4 py-3">Escuta eventos do DOM (como o clique do usuário).</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">@keyup.enter</td>
                    <td class="px-4 py-3 font-mono text-pink-400">onKeyDown={e => e.key === 'Enter' && fn()}</td>
                    <td class="px-4 py-3">Aciona a função <strong>somente</strong> quando o usuário apertar a tecla "Enter" (muito útil para campos de busca).</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-if / v-else</td>
                    <td class="px-4 py-3 font-mono text-pink-400">{cond &amp;&amp; &lt;El /&gt;}</td>
                    <td class="px-4 py-3">Renderização condicional. Remove o elemento completamente do HTML se a condição for falsa.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-show</td>
                    <td class="px-4 py-3 font-mono text-pink-400">style={ {display: cond ? 'block' : 'none'} }</td>
                    <td class="px-4 py-3">Esconde o elemento usando CSS (<code>display: none</code>), mas ele <strong>continua existindo</strong> no código HTML. Melhor para elementos que aparecem e somem o tempo todo.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-for</td>
                    <td class="px-4 py-3 font-mono text-pink-400">{arr.map(...)}</td>
                    <td class="px-4 py-3">Renderiza uma lista de elementos (loop).</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">v-model</td>
                    <td class="px-4 py-3 font-mono text-pink-400">value + onChange</td>
                    <td class="px-4 py-3">Two-way binding: o que você digita no input atualiza a variável, e se a variável mudar, o input atualiza na hora.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">@submit.prevent</td>
                    <td class="px-4 py-3 font-mono text-pink-400">e.preventDefault()</td>
                    <td class="px-4 py-3">Usado em formulários (<code>&lt;form&gt;</code>). Ele <strong>impede que a página recarregue inteira</strong> (comportamento padrão) quando você clica no botão de enviar.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">:class="{ativo: isAtivo}"</td>
                    <td class="px-4 py-3 font-mono text-pink-400">className={isAtivo ? 'ativo' : ''}</td>
                    <td class="px-4 py-3">Adiciona ou remove classes CSS dependendo se a variável é verdadeira ou falsa.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
              <!-- CÓDIGO -->
              <div v-pre class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300 border border-transparent">
                <p class="text-gray-500 mb-2">// exemplos no template</p>
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

        <!-- 6. PROPS -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">6. Props</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2 text-sm text-gray-300">
              <p>Assim como no React, props passam dados do componente pai para o filho. No Vue com Composition API, você as declara com <code class="text-green-400">defineProps()</code>.</p>
              <p>Para emitir eventos de volta ao pai (como um callback), usa-se <code class="text-green-400">defineEmits()</code> — o equivalente de passar uma função como prop no React.</p>
              <p class="text-yellow-400 text-xs">⚠️ Props são <strong>somente leitura</strong> — nunca altere uma prop diretamente no filho.</p>
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
            <p class="text-sm text-gray-300">O equivalente ao <code class="text-pink-400">useEffect(fn, [])</code> do React (executar ao montar) é o <code class="text-green-400">onMounted()</code> do Vue.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm text-gray-400">
                <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                  <tr>
                    <th class="px-4 py-3">Hook Vue</th>
                    <th class="px-4 py-3">React equivalente</th>
                    <th class="px-4 py-3">Quando é chamado</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">onMounted()</td>
                    <td class="px-4 py-3 font-mono text-pink-400">useEffect(fn, [])</td>
                    <td class="px-4 py-3">Após o componente ser inserido no DOM.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">onUpdated()</td>
                    <td class="px-4 py-3 font-mono text-pink-400">useEffect(fn, [dep])</td>
                    <td class="px-4 py-3">Após uma atualização reativa re-renderizar o componente.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">onUnmounted()</td>
                    <td class="px-4 py-3 font-mono text-pink-400">useEffect(() =&gt; () =&gt; cleanup, [])</td>
                    <td class="px-4 py-3">Quando o componente é removido do DOM. Ideal para limpar timers e listeners.</td>
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
            <p class="text-yellow-400 text-xs">💡 Diferente do React, dentro do <code>onMounted</code> você pode usar <code>async</code> diretamente — sem precisar criar uma função interna.</p>
          </div>
        </li>

        <!-- 8. COMPUTED -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">8. Propriedades Computadas — <code class="text-green-400 text-lg">computed</code></h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2 text-sm text-gray-300">
              <p>Um valor derivado de um estado reativo. O Vue recalcula automaticamente quando a dependência muda — e armazena em cache até que mude de fato.</p>
              <p>Equivale a um <code class="text-pink-400">useMemo()</code> do React, mas sem precisar declarar dependências manualmente.</p>
              <p class="text-yellow-400 text-xs">⚠️ Não use <code>computed</code> para ações com efeito colateral (chamadas de API, alterar estado). Para isso, use <code class="text-green-400">watch</code>.</p>
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
              <p>O <code class="text-green-400">watch</code> executa uma função toda vez que um valor reativo muda — o equivalente ao <code class="text-pink-400">useEffect(fn, [dep])</code> do React.</p>
              <p>Use quando precisa reagir a mudanças com efeitos colaterais: salvar no localStorage, chamar APIs, iniciar animações.</p>
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
          <p class="text-yellow-400 text-xs mt-4">💡 O <code>{ deep: true }</code> faz o Vue observar mudanças dentro de objetos e arrays aninhados.</p>
        </li>

        <!-- 10. ROTEAMENTO -->
        <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
          <h3 class="text-xl font-bold mb-4">10. Roteamento — Vue Router</h3>
          <div class="space-y-4">
            <div class="text-sm text-gray-300 space-y-2">
              <p>O equivalente ao React Router Dom é o <span class="text-white font-semibold">Vue Router</span> — a biblioteca oficial de roteamento do Vue.</p>
              <p>Instale com: <code class="text-green-400">npm install vue-router@4</code></p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm text-gray-400">
                <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                  <tr>
                    <th class="px-4 py-3">Vue Router</th>
                    <th class="px-4 py-3">React Router equivalente</th>
                    <th class="px-4 py-3">Uso</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">createRouter()</td>
                    <td class="px-4 py-3 font-mono text-pink-400">createBrowserRouter()</td>
                    <td class="px-4 py-3">Cria o roteador com a lista de rotas.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">&lt;RouterView /&gt;</td>
                    <td class="px-4 py-3 font-mono text-pink-400">RouterProvider</td>
                    <td class="px-4 py-3">Onde a página/componente da rota atual é renderizado.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">&lt;RouterLink /&gt;</td>
                    <td class="px-4 py-3 font-mono text-pink-400">&lt;Link /&gt;</td>
                    <td class="px-4 py-3">Link de navegação sem recarregar a página.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">useRouter()</td>
                    <td class="px-4 py-3 font-mono text-pink-400">useNavigate()</td>
                    <td class="px-4 py-3">Navega programaticamente entre rotas.</td>
                  </tr>
                  <tr class="hover:bg-gray-700/30">
                    <td class="px-4 py-3 font-mono text-green-400">useRoute()</td>
                    <td class="px-4 py-3 font-mono text-pink-400">useSearchParams()</td>
                    <td class="px-4 py-3">Acessa params e query da rota atual.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- EXEMPLO PRÁTICO: ROUTER.JS -->
            <div class="mt-4 bg-[#131217] rounded p-4 text-xs font-mono text-gray-300" v-pre>
              <p class="text-gray-500">// router.js (Exemplo visual prático e reduzido)</p>
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