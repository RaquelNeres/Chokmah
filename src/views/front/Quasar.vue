<template>
    <div class="text-[#D9D7E0] min-h-screen flex flex-col items-center py-10">
        <button class="self-start ml-10 text-white py-2 px-6
                border border-white rounded-full
                hover:bg-white hover:text-black transition-colors duration-300"
          @click="voltar">
           Voltar
        </button>

        <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto pb-20">
            <a target="_blank" href="https://quasar.dev/introduction-to-quasar">
                <h1 class="font-bold text-[50px] text-center text-blue-400 hover:text-blue-300 transition-colors">
                    Quasar Framework
                </h1>
            </a>
            
            <ul class="space-y-5 mt-10">
                
                <!-- USO / INSTALAÇÃO -->
                <details class="mt-10 text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden">
                    <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">
                        Uso (CLI)
                    </summary>
                    
                    <div class="px-5 pb-5 pt-5 space-y-2">
                        <p><code class="text-blue-300">npm init quasar</code>: Inicia o assistente de criação</p>
                        <p><code class="text-blue-300">npm install</code>: Instala as dependências</p>
                        <p><code class="text-blue-300">quasar dev</code>: Roda o servidor local</p>
                        <br>
                        <p><code class="text-blue-300">npm install quasar @quasar/extras</code>: Instala o Quasar e os ícones extras.</p>
                        <p><code class="text-blue-300">npm install -D @quasar/vite-plugin</code>: Instala o plugin do Vite para o Quasar.</p>
                    </div>
                </details>

                <!-- 1. COMPONENTES PRONTOS (BOTÕES) -->
                <li class="bg-[#1a1824] rounded-lg p-6 border border-gray-800">
                    <h3 class="text-xl font-bold mb-4 text-white">1. Botões (q-btn)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm">
                            <p><code class="text-blue-300">&lt;q-btn&gt;</code>: Cria um botão estilizado (Material Design).</p>
                            <p><code class="text-blue-300">color="primary"</code>: Define a cor do tema.</p>
                            <p><code class="text-blue-300">icon="mail"</code>: Adiciona um ícone.</p>
                            <p><code class="text-blue-300">rounded / flat / outline</code>: Estilos do botão.</p>
                        </div>
                        
                        <div class="flex flex-col gap-4 items-center justify-center p-4 border border-gray-600 rounded bg-[#131217]">
                            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-[0_1px_5px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_3px_1px_-2px_rgba(0,0,0,0.12)] flex items-center gap-2 font-medium uppercase text-sm tracking-wider transition-colors w-32 justify-center">Enviar</button>
                            <button class="border border-teal-500 text-teal-500 hover:bg-teal-500/10 px-4 py-2 rounded-full flex items-center gap-2 font-medium uppercase text-sm tracking-wider transition-colors w-32 justify-center">Foto</button>
                            <button class="text-red-500 hover:bg-red-500/10 px-4 py-2 rounded flex items-center gap-2 font-medium uppercase text-sm tracking-wider transition-colors w-32 justify-center">Deletar</button>
                        </div>
                    </div>
                </li>

                <!-- 2. INPUTS -->
                <li class="bg-[#1a1824] rounded-lg p-6 border border-gray-800">
                    <h3 class="text-xl font-bold mb-4 text-white">2. Inputs (q-input)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm">
                            <p><code class="text-blue-300">&lt;q-input&gt;</code>: Campo de texto com animações.</p>
                            <p><code class="text-blue-300">outlined</code>: Estilo com borda contornando.</p>
                            <p><code class="text-blue-300">label="Nome"</code>: Texto flutuante (floating label).</p>
                        </div>
                        
                        <div class="flex flex-col gap-4 items-center justify-center p-4 border border-gray-600 rounded bg-[#131217]">
                            <div class="relative w-full max-w-[200px]">
                                <input type="text" id="q-input-sim" class="peer w-full bg-transparent text-white border border-gray-500 rounded px-3 pt-5 pb-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-transparent" placeholder="Nome" />
                                <label for="q-input-sim" class="absolute left-3 top-1 text-xs text-blue-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-400 bg-[#131217] px-1 pointer-events-none">Nome</label>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- 3. CARDS -->
                <li class="bg-[#1a1824] rounded-lg p-6 border border-gray-800">
                    <h3 class="text-xl font-bold mb-4 text-white">3. Cards (q-card)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm">
                            <p><code class="text-blue-300">&lt;q-card&gt;</code>: O container principal.</p>
                            <p><code class="text-blue-300">&lt;q-card-section&gt;</code>: Sessões de conteúdo.</p>
                            <p><code class="text-blue-300">&lt;q-card-actions&gt;</code>: Área para botões de ação.</p>
                        </div>
                        
                        <div class="flex items-center justify-center p-4 border border-gray-600 rounded bg-[#131217]">
                            <div class="bg-[#1d1d1d] rounded shadow-[0_1px_5px_rgba(0,0,0,0.2),0_2px_2px_rgba(0,0,0,0.14),0_3px_1px_-2px_rgba(0,0,0,0.12)] max-w-[250px] w-full text-white">
                                <div class="p-4 text-lg font-medium">Título do Card</div>
                                <div class="px-4 pb-4 text-sm text-gray-400">Exibindo informações agrupadas.</div>
                                <div class="p-2 flex justify-end gap-1 border-t border-white/10">
                                    <button class="text-blue-400 hover:bg-blue-400/10 px-2 py-1 rounded uppercase text-sm font-medium transition-colors">Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- 4. CHIPS & BADGES & TOGGLES -->
                <li class="bg-[#1a1824] rounded-lg p-6 border border-gray-800">
                    <h3 class="text-xl font-bold mb-4 text-white">4. Chips, Badges & Toggles</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm">
                            <p><code class="text-blue-300">&lt;q-chip&gt;</code>: Elementos em formato de pílula.</p>
                            <p><code class="text-blue-300">&lt;q-badge&gt;</code>: Pequenos indicadores numéricos.</p>
                            <p><code class="text-blue-300">&lt;q-toggle&gt;</code>: Interruptor estilo switch.</p>
                        </div>
                        
                        <div class="flex flex-col gap-6 items-center justify-center p-4 border border-gray-600 rounded bg-[#131217]">
                            <div class="flex gap-3">
                                <div class="flex items-center bg-[#2d2d2d] rounded-full pl-1 pr-3 py-1 text-sm text-white shadow-sm">
                                    <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold text-white">V</div>Vue.js
                                </div>
                            </div>
                            <div class="flex items-center gap-8">
                                <button class="relative bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-600 transition text-sm">
                                    Mensagens
                                    <span class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">99+</span>
                                </button>
                                <div class="flex items-center gap-2 cursor-pointer">
                                    <div class="relative inline-flex items-center">
                                        <div class="w-9 h-4 bg-blue-300/30 rounded-full"></div>
                                        <div class="absolute left-4 w-5 h-5 bg-blue-500 rounded-full shadow-md"></div>
                                    </div>
                                    <span class="text-sm text-gray-300">Ativo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- ================= NOVO CONTEÚDO ADICIONADO ABAIXO ================= -->

                <!-- 5. STYLE & IDENTITY: CORES E TIPOGRAFIA -->
                <li class="bg-[#1a1824] rounded-lg p-6 border border-gray-800">
                    <h3 class="text-xl font-bold mb-4 text-white">5. Style & Identity (Cores e Tipografia)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm">
                            <p class="font-bold text-gray-300">Cores:</p>
                            <p><code class="text-blue-300">bg-primary</code> / <code class="text-blue-300">text-negative</code></p>
                            <p class="font-bold text-gray-300 mt-2">Tipografia (Material):</p>
                            <p><code class="text-blue-300">text-h6</code>: Título de seção.</p>
                            <p><code class="text-blue-300">text-subtitle1</code>: Subtítulo.</p>
                            <p><code class="text-blue-300">text-body2</code>: Texto padrão.</p>
                            <p><code class="text-blue-300">text-weight-bold</code>: Negrito.</p>
                        </div>

                        <div class="flex flex-col gap-2 p-4 border border-gray-600 rounded bg-[#131217] text-white">
                            <div class="text-[1.25rem] font-medium tracking-[0.0125em] leading-loose">Isso é um text-h6</div>
                            <div class="text-[1rem] font-normal tracking-[0.00937em]">Isso é um text-subtitle1</div>
                            <div class="text-[0.875rem] font-normal tracking-[0.01786em] text-gray-400">Isso é um text-body2 com text-grey.</div>
                        </div>
                    </div>
                </li>

                <!-- 6. STYLE & IDENTITY: ESPAÇAMENTO E SOMBRAS -->
                <li class="bg-[#1a1824] rounded-lg p-6 border border-gray-800">
                    <h3 class="text-xl font-bold mb-4 text-white">6. Style & Identity (Espaçamento e Sombras)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm">
                            <p>O Quasar tem classes utilitárias iguais ao Tailwind:</p>
                            <p><code class="text-blue-300">q-pa-md</code>: Padding All Medium.</p>
                            <p><code class="text-blue-300">q-mt-lg</code>: Margin Top Large.</p>
                            <p><code class="text-blue-300">q-px-sm</code>: Padding Eixo X Small.</p>
                            <br>
                            <p><code class="text-blue-300">shadow-1</code> a <code class="text-blue-300">shadow-24</code>: Elevação Material Design.</p>
                        </div>

                        <div class="flex items-center justify-center p-4 border border-gray-600 rounded bg-[#131217]">
                            <!-- Simulação de shadow-4 q-pa-md q-ma-sm -->
                            <div class="bg-[#2a2738] text-white p-4 m-2 rounded shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2),0_4px_5px_rgba(0,0,0,0.14),0_1px_10px_rgba(0,0,0,0.12)]">
                                Div com q-pa-md e shadow-4
                            </div>
                        </div>
                    </div>
                </li>

                <!-- 7. GRID SYSTEM (Flexbox do Quasar) -->
                <li class="bg-[#1a1824] rounded-lg p-6 border border-gray-800">
                    <h3 class="text-xl font-bold mb-4 text-white">7. Layout & Grid (Linhas e Colunas)</h3>
                    <div class="space-y-4">
                        <div class="text-sm space-y-1">
                            <p><code class="text-blue-300">class="row"</code>: Flexbox row container.</p>
                            <p><code class="text-blue-300">class="col-1 a col-12"</code>: Grid de 12 colunas.</p>
                            <p><code class="text-blue-300">q-col-gutter-md</code>: Adiciona gap entre as colunas.</p>
                        </div>

                        <div class="p-4 bg-[#131217] border border-gray-600 rounded">
                            <div class="flex w-full gap-2 text-center text-xs text-white">
                                <div class="w-2/3 bg-teal-900/50 border border-teal-500/50 p-2 rounded">.col-8</div>
                                <div class="w-1/3 bg-teal-900/50 border border-teal-500/50 p-2 rounded">.col-4</div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- 8. LAYOUT DRAWER & HEADER -->
                <li class="bg-[#1a1824] rounded-lg p-6 border border-gray-800">
                    <h3 class="text-xl font-bold mb-4 text-white">8. O "Layout Builder" (Header & Drawer)</h3>
                    <div class="space-y-4">
                        <div class="text-sm space-y-2">
                            <p>Um app Quasar padrão usa o componente <code class="text-blue-300">&lt;q-layout&gt;</code> para construir a casca do app.</p>
                            <p><code class="text-blue-300">&lt;q-header&gt;</code>: A barra de navegação no topo.</p>
                            <p><code class="text-blue-300">&lt;q-drawer&gt;</code>: O menu lateral expansível.</p>
                            <p><code class="text-blue-300">&lt;q-page-container&gt; & &lt;q-page&gt;</code>: Onde o conteúdo das rotas é injetado.</p>
                        </div>

                        <!-- Simulação Visual do q-layout -->
                        <div class="relative w-full h-[300px] border border-gray-600 rounded bg-[#131217] flex flex-col overflow-hidden text-sm">
                            
                            <!-- Simulação q-header -->
                            <div class="h-12 bg-blue-600 w-full flex items-center px-4 shadow-md z-10 shrink-0 text-white">
                                <svg class="w-6 h-6 mr-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                <span class="font-medium text-lg">Meu App (q-header)</span>
                            </div>
                            
                            <div class="flex flex-1 overflow-hidden relative">
                                <!-- Simulação q-drawer (Menu Lateral) -->
                                <div class="w-48 bg-white text-gray-800 border-r border-gray-300 flex flex-col shrink-0 shadow-[1px_0_5px_rgba(0,0,0,0.1)]">
                                    <div class="p-3 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase">q-drawer</div>
                                    <ul class="flex flex-col py-2">
                                        <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"><svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Início</li>
                                        <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"><svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Configurações</li>
                                    </ul>
                                </div>
                                
                                <!-- Simulação q-page-container / q-page -->
                                <div class="flex-1 bg-gray-100 text-black p-4 overflow-y-auto">
                                    <div class="border-2 border-dashed border-gray-400 rounded h-full flex flex-col items-center justify-center text-gray-500">
                                        <p class="font-bold text-lg">&lt;q-page&gt;</p>
                                        <p class="text-xs text-center px-4">Aqui o Vue Router renderiza suas views dependendo da URL (ex: IndexPage.vue)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- 9. ROUTING WITH LAYOUT AND PAGES -->
                <li class="bg-[#1a1824] rounded-lg p-6 border border-gray-800" >
                    <a href="https://quasar.dev/layout/routing-with-layouts-and-pages" target="_blank" 
                        class="text-xl font-bold mb-4 text-white">9. Routing com Layouts e Páginas</a>
                    <div class="space-y-4">
                        <p class="text-sm">
                            No Quasar, as rotas agrupam as <strong>Páginas</strong> (q-page) dentro de um <strong>Layout</strong> pai (q-layout). Assim, o menu e cabeçalho não recarregam ao mudar de página.
                        </p>
                        
                        
<pre class="bg-[#0d1117] text-gray-300 p-4 rounded text-sm font-mono overflow-x-auto border border-gray-700"><code>/user/profile                   /user/posts
+------------------+            +-----------------+
| User             |            | User            |
| +--------------+ |            | +-------------+ |
| | Profile      | |  +------>  | | Posts       | |
| |              | |            | |             | |
| +--------------+ |            | +-------------+ |
+------------------+            +-----------------+</code></pre>

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