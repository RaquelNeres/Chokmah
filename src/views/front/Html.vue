<template>
    <div class="min-h-screen flex flex-col items-center py-10">
        <button class="self-start ml-10 text-white py-2 px-6
                border border-white rounded-full
                hover:bg-white hover:text-black transition-colors duration-300"
          @click="voltar">
           Voltar
        </button>

        <div class="mt-10 max-w-[945px] px-6 w-full mx-auto">
            <h1 class="font-bold text-[50px] text-center text-white">HTML</h1>

            <ul class="space-y-5 mt-10">

                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-xl font-bold mb-4"><code class="text-pink-400">&lt;details&gt;</code> <j class="text-[#D9D7E0]">e</j> <code class="text-pink-400">&lt;summary&gt;</code></h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>Cria um acordeão colapsável nativo do HTML, sem JavaScript. O <code class="text-pink-400">&lt;summary&gt;</code> é o título clicável; o restante dentro do <code class="text-pink-400">&lt;details&gt;</code> é o conteúdo oculto.
                            </p>
                            <p>
                                O atributo <code class="text-pink-400">open</code> faz o elemento começar expandido.
                            </p>
                            <div class="bg-[#131217] rounded p-3 font-mono text-xs text-gray-300 mt-2">
                                <p><span class="text-blue-400">&lt;details</span> <span class="text-yellow-300">open</span><span class="text-blue-400">&gt;</span></p>
                                <p class="pl-4"><span class="text-blue-400">&lt;summary&gt;</span>Clique aqui<span class="text-blue-400">&lt;/summary&gt;</span></p>
                                <p class="pl-4"><span class="text-blue-400">&lt;p&gt;</span>Conteúdo oculto<span class="text-blue-400">&lt;/p&gt;</span></p>
                                <p><span class="text-blue-400">&lt;/details&gt;</span>
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center bg-[#131217] rounded p-6">
                            <details class="w-full border border-gray-600 rounded overflow-hidden" open>
                                <summary class="cursor-pointer px-4 py-3 bg-[#2a2738] text-white font-semibold select-none">Clique para expandir</summary>
                                <p class="px-4 py-3 text-gray-300 text-sm">Este é o conteúdo escondido que aparece ao abrir o details. Tudo nativo, sem JS.</p>
                            </details>
                        </div>
                    </div>
                </li>

                <!-- DIALOG -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-xl font-bold mb-4"><code class="text-pink-400">&lt;dialog&gt;</code></h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>Modal nativo do HTML. Controlado via JavaScript com <code class="text-pink-400">.showModal()</code> e <code class="text-pink-400">.close()</code>. O atributo <code class="text-pink-400">open</code> o exibe inline (sem backdrop).</p>
                            <p>Quando aberto com <code class="text-pink-400">.showModal()</code>, cria um backdrop automático estilizável via <code class="text-pink-400">::backdrop</code> no CSS.</p>
                            <div class="bg-[#131217] rounded p-3 font-mono text-xs text-gray-300 mt-2">
                                <p><span class="text-blue-400">&lt;dialog</span> <span class="text-yellow-300">id=</span><span class="text-green-400">"modal"</span><span class="text-blue-400">&gt;</span></p>
                                <p class="pl-4"><span class="text-blue-400">&lt;p&gt;</span>Conteúdo do modal<span class="text-blue-400">&lt;/p&gt;</span></p>
                                <p class="pl-4"><span class="text-blue-400">&lt;button</span> <span class="text-yellow-300">onclick=</span><span class="text-green-400">"modal.close()"</span><span class="text-blue-400">&gt;</span>Fechar<span class="text-blue-400">&lt;/button&gt;</span></p>
                                <p><span class="text-blue-400">&lt;/dialog&gt;</span></p>
                                <br>
                                <p>modal.<span class="text-yellow-300">showModal</span>()</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center gap-3 bg-[#131217] rounded p-6">
                            <button onclick="document.getElementById('demo-dialog').showModal()"
                                class="px-5 py-2 bg-[#2a2738] border border-gray-600 rounded text-white text-sm hover:bg-[#3a3550] transition-colors">
                                Abrir Modal
                            </button>
                            <dialog id="demo-dialog" class="rounded-lg bg-[#1e1b29] text-white border border-gray-600 p-6 backdrop:bg-black/60 w-64">
                                <p class="text-sm text-gray-300 mb-4">Este é um <code class="text-pink-400">&lt;dialog&gt;</code> nativo do HTML!</p>
                                <button onclick="document.getElementById('demo-dialog').close()"
                                    class="px-4 py-1 bg-pink-600 rounded text-white text-sm hover:bg-pink-500 transition-colors">
                                    Fechar
                                </button>
                            </dialog>
                            <span class="text-xs text-gray-500">Clique no botão acima</span>
                        </div>
                    </div>
                </li>

                <!-- DATALIST -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-xl font-bold mb-4"><code class="text-pink-400">&lt;datalist&gt;</code></h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>Adiciona sugestões de autocomplete a um <code class="text-pink-400">&lt;input&gt;</code>. O usuário ainda pode digitar livremente — não é um select obrigatório.</p>
                            <p>Vinculado ao input via atributo <code class="text-pink-400">list</code> que aponta para o <code class="text-pink-400">id</code> do datalist.</p>
                            <div class="bg-[#131217] rounded p-3 font-mono text-xs text-gray-300 mt-2">
                                <p><span class="text-blue-400">&lt;input</span> <span class="text-yellow-300">list=</span><span class="text-green-400">"frutas"</span> <span class="text-blue-400">/&gt;</span></p>
                                <br>
                                <p><span class="text-blue-400">&lt;datalist</span> <span class="text-yellow-300">id=</span><span class="text-green-400">"frutas"</span><span class="text-blue-400">&gt;</span></p>
                                <p class="pl-4"><span class="text-blue-400">&lt;option</span> <span class="text-yellow-300">value=</span><span class="text-green-400">"Maçã"</span> <span class="text-blue-400">/&gt;</span></p>
                                <p class="pl-4"><span class="text-blue-400">&lt;option</span> <span class="text-yellow-300">value=</span><span class="text-green-400">"Banana"</span> <span class="text-blue-400">/&gt;</span></p>
                                <p><span class="text-blue-400">&lt;/datalist&gt;</span></p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center gap-2 bg-[#131217] rounded p-6">
                            <label class="text-xs text-gray-400 self-start">Digite uma fruta:</label>
                            <input list="demo-frutas" placeholder="Ex: Maçã..."
                                class="w-full bg-[#2a2738] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400" />
                            <datalist id="demo-frutas">
                                <option value="Maçã" />
                                <option value="Banana" />
                                <option value="Manga" />
                                <option value="Morango" />
                                <option value="Melancia" />
                            </datalist>
                            <span class="text-xs text-gray-500">Tente digitar "m"</span>
                        </div>
                    </div>
                </li>

                <!-- PROGRESS / METER -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4"><code class="text-pink-400">&lt;progress&gt;</code> <j class="text-[#D9D7E0]">e</j> <code class="text-pink-400">&lt;meter&gt;</code></h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-3 text-sm text-gray-300">
                            <p><code class="text-pink-400">&lt;progress&gt;</code> — barra de progresso de uma tarefa. Use <code class="text-pink-400">value</code> e <code class="text-pink-400">max</code>. Sem <code>value</code>, fica em estado indeterminado (animado).</p>
                            <p><code class="text-pink-400">&lt;meter&gt;</code> — representa um valor dentro de um intervalo conhecido (ex: uso de disco). Muda de cor conforme <code class="text-pink-400">low</code>, <code class="text-pink-400">high</code> e <code class="text-pink-400">optimum</code>.</p>
                            <div class="bg-[#131217] rounded p-3 font-mono text-xs text-gray-300 mt-1">
                                <p><span class="text-blue-400">&lt;progress</span> <span class="text-yellow-300">value=</span><span class="text-green-400">"70"</span> <span class="text-yellow-300">max=</span><span class="text-green-400">"100"</span><span class="text-blue-400">&gt;&lt;/progress&gt;</span></p>
                                <br>
                                <p><span class="text-blue-400">&lt;meter</span> <span class="text-yellow-300">value=</span><span class="text-green-400">"0.8"</span> <span class="text-yellow-300">low=</span><span class="text-green-400">"0.3"</span> <span class="text-yellow-300">high=</span><span class="text-green-400">"0.7"</span> <span class="text-yellow-300">optimum=</span><span class="text-green-400">"0.5"</span><span class="text-blue-400">&gt;&lt;/meter&gt;</span></p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center gap-4 bg-[#131217] rounded p-6">
                            <div class="space-y-1">
                                <p class="text-xs text-gray-400">progress (70%)</p>
                                <progress value="70" max="100" class="w-full h-3 rounded"></progress>
                            </div>
                            <div class="space-y-1">
                                <p class="text-xs text-gray-400">progress (indeterminado)</p>
                                <progress class="w-full h-3 rounded"></progress>
                            </div>
                            <div class="space-y-1">
                                <p class="text-xs text-gray-400">meter (0.8 — fora do otimum, fica vermelho)</p>
                                <meter value="0.8" low="0.3" high="0.7" optimum="0.5" class="w-full h-3"></meter>
                            </div>
                            <div class="space-y-1">
                                <p class="text-xs text-gray-400">meter (0.5 — no otimum, fica verde)</p>
                                <meter value="0.5" low="0.3" high="0.7" optimum="0.5" class="w-full h-3"></meter>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- ABBR / TIME / MARK -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-[#D9D7E0] text-xl font-bold mb-4">Tags Semânticas de Texto</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm text-gray-400">
                            <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                                <tr>
                                    <th class="px-4 py-3">Tag</th>
                                    <th class="px-4 py-3">Uso</th>
                                    <th class="px-4 py-3">Exemplo visual</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-700">
                                <tr class="hover:bg-gray-700/30">
                                    <td class="px-4 py-3 font-mono text-pink-400">&lt;abbr&gt;</td>
                                    <td class="px-4 py-3">Abreviação com tooltip ao passar o mouse (atributo <code>title</code>).</td>
                                    <td class="px-4 py-3"><abbr title="HyperText Markup Language" class="underline decoration-dotted cursor-help text-white">HTML</abbr></td>
                                </tr>
                                <tr class="hover:bg-gray-700/30">
                                    <td class="px-4 py-3 font-mono text-pink-400">&lt;time&gt;</td>
                                    <td class="px-4 py-3">Data/hora legível para máquinas via atributo <code>datetime</code>.</td>
                                    <td class="px-4 py-3"><time datetime="2025-01-01" class="text-white">1º de Janeiro de 2025</time></td>
                                </tr>
                                <tr class="hover:bg-gray-700/30">
                                    <td class="px-4 py-3 font-mono text-pink-400">&lt;mark&gt;</td>
                                    <td class="px-4 py-3">Destaca texto com fundo amarelo (relevância/busca).</td>
                                    <td class="px-4 py-3">Resultado da <mark class="bg-yellow-400 text-black px-0.5 rounded-sm">busca</mark> aqui.</td>
                                </tr>
                                <tr class="hover:bg-gray-700/30">
                                    <td class="px-4 py-3 font-mono text-pink-400">&lt;kbd&gt;</td>
                                    <td class="px-4 py-3">Representa uma tecla do teclado.</td>
                                    <td class="px-4 py-3">Pressione <kbd class="bg-gray-700 border border-gray-500 rounded px-1.5 py-0.5 text-xs text-white font-mono">Ctrl</kbd> + <kbd class="bg-gray-700 border border-gray-500 rounded px-1.5 py-0.5 text-xs text-white font-mono">C</kbd></td>
                                </tr>
                                <tr class="hover:bg-gray-700/30">
                                    <td class="px-4 py-3 font-mono text-pink-400">&lt;sub&gt; / &lt;sup&gt;</td>
                                    <td class="px-4 py-3">Texto subscrito e sobrescrito.</td>
                                    <td class="px-4 py-3 text-white">H<sub>2</sub>O &nbsp;|&nbsp; x<sup>2</sup></td>
                                </tr>
                                <tr class="hover:bg-gray-700/30">
                                    <td class="px-4 py-3 font-mono text-pink-400">&lt;del&gt; / &lt;ins&gt;</td>
                                    <td class="px-4 py-3">Texto removido (riscado) e inserido (sublinhado). Semântico, não apenas visual.</td>
                                    <td class="px-4 py-3"><del class="text-red-400">R$ 99,90</del> <ins class="text-green-400 no-underline ml-2">R$ 59,90</ins></td>
                                </tr>
                                <tr class="hover:bg-gray-700/30">
                                    <td class="px-4 py-3 font-mono text-pink-400">&lt;figure&gt; / &lt;figcaption&gt;</td>
                                    <td class="px-4 py-3">Envolve imagens, gráficos ou blocos de código com uma legenda semântica.</td>
                                    <td class="px-4 py-3">
                                        <figure class="inline-block">
                                            <div class="w-12 h-8 bg-gray-700 rounded flex items-center justify-center text-gray-400 text-xs">img</div>
                                            <figcaption class="text-gray-400 text-xs mt-1 text-center">Legenda</figcaption>
                                        </figure>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <!-- INPUT TYPES -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-[#D9D7E0] text-xl font-bold mb-2">Tipos do <code class="text-pink-400">&lt;input&gt;</code></h3>
                    <p class="text-sm text-gray-400 mb-6">O atributo <code class="text-pink-400">type</code> muda completamente o comportamento e a aparência do input — validação, teclado mobile, UI nativa do navegador.</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <!-- text -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="text"</p>
                            <p class="text-xs text-gray-400">Texto livre. Padrão quando o type é omitido.</p>
                            <input type="text" placeholder="Digite algo..." class="w-full bg-[#1e1b29] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400" />
                        </div>

                        <!-- password -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="password"</p>
                            <p class="text-xs text-gray-400">Oculta os caracteres digitados.</p>
                            <input type="password" placeholder="••••••••" class="w-full bg-[#1e1b29] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400" />
                        </div>

                        <!-- email -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="email"</p>
                            <p class="text-xs text-gray-400">Valida formato de e-mail nativamente. Teclado mobile inclui <code>@</code>.</p>
                            <input type="email" placeholder="voce@email.com" class="w-full bg-[#1e1b29] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400" />
                        </div>

                        <!-- number -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="number"</p>
                            <p class="text-xs text-gray-400">Apenas números. Suporta <code>min</code>, <code>max</code> e <code>step</code>.</p>
                            <input type="number" min="0" max="100" step="5" placeholder="0–100 (step 5)" class="w-full bg-[#1e1b29] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400" />
                        </div>

                        <!-- range -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="range"</p>
                            <p class="text-xs text-gray-400">Slider de intervalo. Atributos <code>min</code>, <code>max</code> e <code>step</code>.</p>
                            <input type="range" min="0" max="100" value="40" class="w-full accent-pink-400" />
                        </div>

                        <!-- date -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="date"</p>
                            <p class="text-xs text-gray-400">Seletor de data nativo do navegador.</p>
                            <input type="date" class="w-full bg-[#1e1b29] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400 [color-scheme:dark]" />
                        </div>

                        <!-- time -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="time"</p>
                            <p class="text-xs text-gray-400">Seletor de horário nativo (hh:mm).</p>
                            <input type="time" class="w-full bg-[#1e1b29] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400 [color-scheme:dark]" />
                        </div>

                        <!-- color -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="color"</p>
                            <p class="text-xs text-gray-400">Seletor de cor nativo. Retorna valor hexadecimal.</p>
                            <div class="flex items-center gap-3">
                                <input type="color" value="#ec4899" class="w-12 h-10 rounded cursor-pointer border-0 bg-transparent" />
                                <span class="text-gray-400 text-xs">Clique para abrir o color picker</span>
                            </div>
                        </div>

                        <!-- file -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="file"</p>
                            <p class="text-xs text-gray-400">Upload de arquivo. Use <code>accept</code> para filtrar tipos e <code>multiple</code> para vários arquivos.</p>
                            <input type="file" accept="image/*" class="w-full text-gray-300 text-sm file:bg-[#2a2738] file:border file:border-gray-600 file:rounded file:px-3 file:py-1.5 file:text-white file:text-xs file:cursor-pointer file:mr-3" />
                        </div>

                        <!-- checkbox -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="checkbox"</p>
                            <p class="text-xs text-gray-400">Caixa de seleção. <code>checked</code> define o estado inicial. Pode ter vários com o mesmo <code>name</code>.</p>
                            <div class="flex flex-col gap-2 mt-1">
                                <label class="flex items-center gap-2 text-sm text-gray-300 cursor-pointer"><input type="checkbox" checked class="accent-pink-400 w-4 h-4" /> Opção marcada</label>
                                <label class="flex items-center gap-2 text-sm text-gray-300 cursor-pointer"><input type="checkbox" class="accent-pink-400 w-4 h-4" /> Opção desmarcada</label>
                            </div>
                        </div>

                        <!-- radio -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="radio"</p>
                            <p class="text-xs text-gray-400">Seleção única dentro de um grupo. Mesmo <code>name</code> = mesmo grupo.</p>
                            <div class="flex flex-col gap-2 mt-1">
                                <label class="flex items-center gap-2 text-sm text-gray-300 cursor-pointer"><input type="radio" name="demo-radio" checked class="accent-pink-400 w-4 h-4" /> Opção A</label>
                                <label class="flex items-center gap-2 text-sm text-gray-300 cursor-pointer"><input type="radio" name="demo-radio" class="accent-pink-400 w-4 h-4" /> Opção B</label>
                                <label class="flex items-center gap-2 text-sm text-gray-300 cursor-pointer"><input type="radio" name="demo-radio" class="accent-pink-400 w-4 h-4" /> Opção C</label>
                            </div>
                        </div>

                        <!-- search -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="search"</p>
                            <p class="text-xs text-gray-400">Igual ao text, mas o navegador adiciona um botão de limpar (×) e otimiza para buscas.</p>
                            <input type="search" placeholder="Pesquisar..." class="w-full bg-[#1e1b29] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400" />
                        </div>

                        <!-- tel -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="tel"</p>
                            <p class="text-xs text-gray-400">Campo de telefone. Não valida formato, mas abre teclado numérico no mobile.</p>
                            <input type="tel" placeholder="(11) 99999-9999" class="w-full bg-[#1e1b29] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400" />
                        </div>

                        <!-- url -->
                        <div class="bg-[#131217] rounded p-4 space-y-2">
                            <p class="font-mono text-pink-400 text-sm">type="url"</p>
                            <p class="text-xs text-gray-400">Valida formato de URL nativamente (precisa ter http/https).</p>
                            <input type="url" placeholder="https://exemplo.com" class="w-full bg-[#1e1b29] border border-gray-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-pink-400" />
                        </div>

                        <!-- hidden -->
                        <div class="bg-[#131217] rounded p-4 space-y-2 md:col-span-2">
                            <p class="font-mono text-pink-400 text-sm">type="hidden"</p>
                            <p class="text-xs text-gray-400">Invisível para o usuário. Usado para enviar dados extras junto ao formulário (ex: IDs, tokens). Não tem representação visual.</p>
                            <div class="bg-[#2a2738] rounded px-3 py-2 text-gray-500 text-xs font-mono border border-dashed border-gray-600">
                                &lt;input type="hidden" name="user_id" value="42" /&gt; &nbsp;← invisível na tela
                            </div>
                        </div>

                    </div>

                    <!-- Atributos úteis -->
                    <div class="mt-6 pt-5 border-t border-gray-700">
                        <h4 class="text-base font-bold mb-4 text-white">Atributos Úteis do <code class="text-pink-400">&lt;input&gt;</code></h4>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-sm text-gray-400">
                                <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                                    <tr>
                                        <th class="px-4 py-3">Atributo</th>
                                        <th class="px-4 py-3">Descrição</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-700">
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">required</td>
                                        <td class="px-4 py-3">Torna o campo obrigatório — o form não envia sem ele preenchido.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">disabled</td>
                                        <td class="px-4 py-3">Desativa o campo — não pode ser editado nem enviado no form.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">readonly</td>
                                        <td class="px-4 py-3">Campo visível e enviado no form, mas não editável pelo usuário.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">placeholder</td>
                                        <td class="px-4 py-3">Texto de dica exibido quando o campo está vazio.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">autofocus</td>
                                        <td class="py-3 px-4">Foca automaticamente nesse campo ao carregar a página.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">pattern</td>
                                        <td class="px-4 py-3">Valida o valor com uma expressão regular. Ex: <code>pattern="[0-9]{"{5}"}"</code> para CEP.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">maxlength / minlength</td>
                                        <td class="px-4 py-3">Limita o número máximo/mínimo de caracteres permitidos.</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-pink-400">autocomplete</td>
                                        <td class="px-4 py-3">Controla o autopreenchimento do navegador. Ex: <code>"off"</code>, <code>"email"</code>, <code>"new-password"</code>.</td>
                                    </tr>
                                </tbody>
                            </table>
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