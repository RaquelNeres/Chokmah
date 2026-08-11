<template>
    <div class="text-[#D9D7E0] min-h-screen flex flex-col items-center py-10">
        <button class="self-start ml-10 text-white py-2 px-6
                border border-white rounded-full
                hover:bg-white hover:text-black transition-colors duration-300"
          @click="voltar">
           Voltar
        </button>

        <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto">
            <a target="_blank" href="https://pt.vuejs.org/guide/essentials/template-syntax.html">
                <h1 class="font-bold text-[50px] text-center text-white hover:text-green-400 transition-colors">
                    Sintaxe do Template (Vue)
                </h1>
            </a>
            
            <ul class="space-y-5 mt-10">
                
                <!-- 1. Atributos Dinâmicos -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6 shadow-lg">
                    <h3 class="text-xl font-bold mb-4 text-white">1. Atributos e Estilos Reativos (<code class="text-green-400">v-bind</code> / <code class="text-green-400">:</code>)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p><code class="text-pink-400">:class</code>: Ativa ou desativa classes CSS com base em valores booleanos do script.</p>
                            <p><code class="text-pink-400">:style</code>: Aplica estilos CSS inline que reagem e mudam conforme suas variáveis.</p>
                            <p><code class="text-pink-400">:href</code>: Torna atributos padrão do HTML (como links e imagens) reativos.</p>
                        </div>
                        
                        <div v-pre class="flex flex-col justify-center p-4 border border-gray-700 rounded bg-[#131217] text-xs font-mono text-gray-300 space-y-3">
                            <p><span class="text-green-400">&lt;p</span> <span class="text-yellow-300">:class=</span><span class="text-pink-400">"{ 'text-red': error, 'text-green': success }"</span><span class="text-green-400">&gt;</span>Classes Objeto<span class="text-green-400">&lt;/p&gt;</span></p>
                            
                            <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">:style=</span><span class="text-pink-400">"{ color: corAtiva, fontSize: tamanhoFonte + 'px' }"</span><span class="text-green-400">&gt;</span>Estilo Dinâmico<span class="text-green-400">&lt;/div&gt;</span></p>
                            
                            <p><span class="text-green-400">&lt;a</span> <span class="text-yellow-300">:href=</span><span class="text-pink-400">"linkPerfil"</span><span class="text-green-400">&gt;</span>Link Reativo<span class="text-green-400">&lt;/a&gt;</span></p>
                        </div>
                    </div>
                </li>

                <!-- 2. Eventos -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6 shadow-lg">
                    <h3 class="text-xl font-bold mb-4 text-white">2. Manipulação de Eventos (<code class="text-green-400">v-on</code> / <code class="text-green-400">@</code>)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-3 text-sm text-gray-300">
                            <p><code class="text-pink-400">@click</code>: Escuta cliques do usuário para disparar uma função.</p>
                            <p><code class="text-pink-400">@keyup.enter</code>: Modificador de tecla. Só dispara a função quando o usuário apertar a tecla "Enter".</p>
                            <p><code class="text-pink-400">@submit.prevent</code>: Modificador de evento. Previne o comportamento padrão (equivalente a <code>e.preventDefault()</code> no JS puro).</p>
                        </div>
                        
                        <div v-pre class="flex flex-col justify-center p-4 border border-gray-700 rounded bg-[#131217] text-xs font-mono text-gray-300 space-y-3">
                            <p><span class="text-green-400">&lt;button</span> <span class="text-yellow-300">@click=</span><span class="text-pink-400">"salvar"</span><span class="text-green-400">&gt;</span>Salvar<span class="text-green-400">&lt;/button&gt;</span></p>
                            
                            <p><span class="text-green-400">&lt;input</span> <span class="text-yellow-300">@keyup.enter=</span><span class="text-pink-400">"pesquisar"</span> <span class="text-green-400">/&gt;</span></p>
                            
                            <p><span class="text-green-400">&lt;form</span> <span class="text-yellow-300">@submit.prevent=</span><span class="text-pink-400">"salvarDados"</span><span class="text-green-400">&gt;</span>...<span class="text-green-400">&lt;/form&gt;</span></p>
                        </div>
                    </div>
                </li>

                <!-- 3. Condicionais -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6 shadow-lg">
                    <h3 class="text-xl font-bold mb-4 text-white">3. Renderização Condicional</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p><code class="text-pink-400">v-if / v-else-if / v-else</code>: Destrói ou cria elementos no HTML real dependendo da condição.</p>
                            <p><code class="text-pink-400">v-show</code>: Apenas aplica <code>display: none</code> via CSS. O elemento continua existindo no HTML (melhor para elementos que aparecem/somem com muita frequência).</p>
                        </div>

                        <div v-pre class="flex flex-col justify-center p-4 border border-gray-700 rounded bg-[#131217] text-xs font-mono text-gray-300 space-y-2">
                            <p class="text-gray-500 mb-1">// Renderização Condicional Completa</p>
                            <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">v-if=</span><span class="text-pink-400">"logado"</span><span class="text-green-400">&gt;</span>Bem-vindo!<span class="text-green-400">&lt;/div&gt;</span></p>
                            <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">v-else-if=</span><span class="text-pink-400">"carregando"</span><span class="text-green-400">&gt;</span>Carregando...<span class="text-green-400">&lt;/div&gt;</span></p>
                            <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">v-else</span><span class="text-green-400">&gt;</span>Faça login<span class="text-green-400">&lt;/div&gt;</span></p>
                            
                            <p class="text-gray-500 mb-1 mt-3">// Alternância de Visibilidade CSS</p>
                            <p><span class="text-green-400">&lt;div</span> <span class="text-yellow-300">v-show=</span><span class="text-pink-400">"carregando"</span><span class="text-green-400">&gt;</span>Loading apenas oculto via CSS<span class="text-green-400">&lt;/div&gt;</span></p>
                        </div>
                    </div>
                </li>

                <!-- 4. Laços de Repetição & Data Binding -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6 shadow-lg">
                    <h3 class="text-xl font-bold mb-4 text-white">4. Laços de Repetição & Two-Way Binding</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-4 text-sm text-gray-300">
                            <div>
                                <p><code class="text-pink-400">v-for</code>: Itera sobre arrays ou objetos. Sempre deve vir acompanhado de <code class="text-pink-400">:key</code> para o Vue identificar os itens de forma única na performance.</p>
                            </div>
                            <div>
                                <p><code class="text-pink-400">v-model</code>: Cria um link de "mão dupla" entre o input e o estado. O que você digita atualiza a variável, e se a variável mudar no código, o input atualiza na hora.</p>
                            </div>
                        </div>

                        <div v-pre class="flex flex-col justify-center p-4 border border-gray-700 rounded bg-[#131217] text-xs font-mono text-gray-300 space-y-4">
                            <div>
                                <p class="text-gray-500 mb-1">// Renderizando Listas</p>
                                <p><span class="text-green-400">&lt;li</span> <span class="text-yellow-300">v-for=</span><span class="text-pink-400">"item in lista"</span> <span class="text-yellow-300">:key=</span><span class="text-pink-400">"item.id"</span><span class="text-green-400">&gt;</span></p>
                                <p class="pl-4"><span class="text-pink-400">{{ item.nome }}</span></p>
                                <p><span class="text-green-400">&lt;/li&gt;</span></p>
                            </div>

                            <div>
                                <p class="text-gray-500 mb-1">// Two-Way Data Binding (Inputs)</p>
                                <p><span class="text-green-400">&lt;input</span> <span class="text-yellow-300">v-model=</span><span class="text-pink-400">"nome"</span> <span class="text-green-400">/&gt;</span></p>
                            </div>
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