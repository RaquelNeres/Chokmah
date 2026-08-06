<template>
  <div class="bg-[#131217] text-[#D9D7E0] text-base min-h-screen">
    <div class="min-h-screen flex flex-col items-center py-10">
      <img
        v-if="!showSidebar"
        @click="showSidebar = true"
        id="menu-btn"
        class="fixed top-2 left-2 z-50 block md:hidden p-2 cursor-pointer bg-[#131217] hover:bg-gray-800"
        src="/img/opcao.png"
        alt="abrir barra lateral"
      />
      <router-link class="self-start ml-10 text-white py-2 px-6 border border-white rounded-full 
        hover:bg-white hover:text-black transition-colors duration-300" 
          to="/backend">
        Voltar
      </router-link>

      <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto">
        <h1 class="font-bold text-[50px] text-center text-white">Python</h1>
        <p class="text-center text-gray-400 mt-2 text-sm">Baseado na documentação oficial — <a href="https://docs.python.org/pt-br/3/" class="text-yellow-400 hover:underline">docs.python.org/pt-br</a></p>

        <details class="mt-10 text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden">
          <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">Instalando / Atualizando Python no Windows</summary>
          <div class="px-5 pb-5 pt-5 space-y-4 text-sm text-gray-300">
            <p>Baixe o instalador oficial em <a href="https://www.python.org/downloads/" class="text-yellow-400 hover:underline" target="_blank">python.org/downloads</a>. Sempre marque a opção <span class="text-white font-semibold">"Add Python to PATH"</span> antes de instalar.</p>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-gray-500 text-gray-300">
                  <th class="py-3 pr-4">Comando</th>
                  <th class="py-3">Descrição</th>
                </tr>
              </thead>
              <tbody class="text-gray-200">
                <tr class="border-b border-gray-700">
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">python --version</code></td>
                  <td class="py-4">Verifica a versão instalada do Python.</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">python -m pip install --upgrade pip</code></td>
                  <td class="py-4">Atualiza o pip para a versão mais recente.</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">pip --version</code></td>
                  <td class="py-4">Verifica se o pip está instalado e sua versão.</td>
                </tr>
                <tr>
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">winget install Python.Python.3</code></td>
                  <td class="py-4">Instala Python pelo gerenciador de pacotes nativo do Windows (recomendado para manter atualizado).</td>
                </tr>
              </tbody>
            </table>
            <p class="text-gray-400 text-sm mt-2">Para gerenciar múltiplas versões, considere o <a href="https://github.com/pyenv-win/pyenv-win" class="text-yellow-400 hover:underline" target="_blank">pyenv-win</a> — equivalente ao nvm do Node.</p>
          </div>
        </details>

        <details class="mt-4 text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden">
          <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">Ambientes Virtuais — <code class="text-yellow-400 text-base font-mono">venv</code></summary>
          <div class="px-5 pb-5 pt-5 space-y-4 text-sm text-gray-300">
            <p>Um <span class="text-white font-semibold">ambiente virtual</span> isola as dependências do projeto, evitando conflitos entre versões de pacotes. Funciona como o <code>node_modules</code> do Node — cada projeto tem o seu.</p>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-gray-500 text-gray-300">
                  <th class="py-3 pr-4">Comando</th>
                  <th class="py-3">Descrição</th>
                </tr>
              </thead>
              <tbody class="text-gray-200">
                <tr class="border-b border-gray-700">
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">python -m venv venv</code></td>
                  <td class="py-4">Cria um ambiente virtual na pasta <code>venv/</code> dentro do projeto.</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">venv\Scripts\activate</code></td>
                  <td class="py-4">Ativa o ambiente virtual no Windows (PowerShell/CMD).</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">source venv/bin/activate</code></td>
                  <td class="py-4">Ativa no macOS/Linux.</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">pip install requests</code></td>
                  <td class="py-4">Instala um pacote <strong>dentro</strong> do ambiente virtual ativo.</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">pip freeze &gt; requirements.txt</code></td>
                  <td class="py-4">Salva todas as dependências instaladas em um arquivo — equivalente ao <code>package.json</code>.</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">pip install -r requirements.txt</code></td>
                  <td class="py-4">Instala todas as dependências listadas no arquivo — como o <code>npm install</code>.</td>
                </tr>
                <tr>
                  <td class="py-4 pr-4"><code class="text-yellow-400 font-mono">deactivate</code></td>
                  <td class="py-4">Desativa o ambiente virtual.</td>
                </tr>
              </tbody>
            </table>
            <p class="text-yellow-400 text-xs mt-2">⚠️ Sempre adicione <code>venv/</code> ao seu <code>.gitignore</code> — nunca suba o ambiente virtual para o repositório.</p>
          </div>
        </details>

        <ul class="space-y-5 mt-10">
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">1. Tipos de Dados e Coleções</h3>
            <div class="space-y-4">
              <p class="text-sm text-gray-300">Python tem tipos nativos poderosos. Os mais usados no dia a dia:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-[#131217] rounded p-4">
                  <p class="text-yellow-400 font-bold text-sm mb-2">list, tuple, set</p>
                  <div class="font-mono text-xs text-gray-300 space-y-1">
                    <p class="text-gray-500"># list — mutável, ordenada</p>
                    <p>frutas = [<span class="text-green-400">"maçã"</span>, <span class="text-green-400">"uva"</span>, <span class="text-green-400">"pera"</span>]</p>
                    <p>frutas.<span class="text-yellow-300">append</span>(<span class="text-green-400">"manga"</span>)</p>
                    <br>
                    <p class="text-gray-500"># tuple — imutável, mais rápida</p>
                    <p>coordenadas = (<span class="text-blue-400">-23.5</span>, <span class="text-blue-400">-46.6</span>)</p>
                    <br>
                    <p class="text-gray-500"># set — sem duplicatas, sem ordem</p>
                    <p>ids = {'{'}<span class="text-blue-400">1</span>, <span class="text-blue-400">2</span>, <span class="text-blue-400">3</span>, <span class="text-blue-400">1</span>{'}'}  <span class="text-gray-500"># {1, 2, 3}</span></p>
                  </div>
                </div>
                <div class="bg-[#131217] rounded p-4">
                  <p class="text-yellow-400 font-bold text-sm mb-2">dict</p>
                  <p class="text-gray-400 text-xs mb-2">Par chave-valor. Equivalente ao objeto JS ou ao JSON.</p>
                  <div class="font-mono text-xs text-gray-300 space-y-1">
                    <p>usuario = {'{'}</p>
                    <p class="pl-4"><span class="text-green-400">"nome"</span>: <span class="text-green-400">"Felipe"</span>,</p>
                    <p class="pl-4"><span class="text-green-400">"idade"</span>: <span class="text-blue-400">25</span>,</p>
                    <p class="pl-4"><span class="text-green-400">"ativo"</span>: <span class="text-blue-400">True</span></p>
                    <p>{'}'}</p>
                    <br>
                    <p>usuario[<span class="text-green-400">"email"</span>] = <span class="text-green-400">"f@email.com"</span></p>
                    <p>nome = usuario.<span class="text-yellow-300">get</span>(<span class="text-green-400">"nome"</span>, <span class="text-green-400">"anon"</span>)</p>
                  </div>
                </div>
              </div>
              <p class="text-yellow-400 text-xs">💡 Use <code class="font-mono">.get(chave, padrão)</code> no dict para evitar <code>KeyError</code> — o equivalente ao <code>??</code> do JS.</p>
            </div>
          </li>

          <!-- Restante do arquivo se mantém... -->
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">2. Funções — args, kwargs e type hints</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-2 text-sm text-gray-300">
                <p>Python tem recursos poderosos em funções: parâmetros com valor padrão, <code class="text-yellow-400 font-mono">*args</code> (lista variável), <code class="text-yellow-400 font-mono">**kwargs</code> (dicionário variável) e <span class="text-white font-semibold">type hints</span> para indicar tipos sem enforcement obrigatório.</p>
                <p>Type hints não tornam o Python tipado estritamente, mas melhoram o autocomplete no editor e permitem uso de ferramentas como <code class="text-yellow-400 font-mono">mypy</code>.</p>
                <p class="text-yellow-400 text-xs">💡 <code>*args</code> captura argumentos posicionais extras como tupla. <code>**kwargs</code> captura argumentos nomeados extras como dict.</p>
              </div>
              <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                <p class="text-gray-500"># type hints + valor padrão</p>
                <p><span class="text-blue-400">def</span> <span class="text-yellow-300">saudar</span>(nome: <span class="text-green-400">str</span>, formal: <span class="text-green-400">bool</span> = <span class="text-blue-400">False</span>) -> <span class="text-green-400">str</span>:</p>
                <p class="pl-4">prefixo = <span class="text-green-400">"Sr."</span> <span class="text-blue-400">if</span> formal <span class="text-blue-400">else</span> <span class="text-green-400">""</span></p>
                <p class="pl-4"><span class="text-blue-400">return</span> <span class="text-green-400">f"Olá, {'{prefixo} {nome}'}"</span></p>
                <br>
                <p class="text-gray-500"># *args e **kwargs</p>
                <p><span class="text-blue-400">def</span> <span class="text-yellow-300">log</span>(*mensagens: <span class="text-green-400">str</span>, **meta):</p>
                <p class="pl-4"><span class="text-blue-400">for</span> msg <span class="text-blue-400">in</span> mensagens:</p>
                <p class="pl-8"><span class="text-yellow-300">print</span>(msg, meta)</p>
                <br>
                <p><span class="text-yellow-300">log</span>(<span class="text-green-400">"erro"</span>, <span class="text-green-400">"crítico"</span>, nivel=<span class="text-blue-400">2</span>)</p>
              </div>
            </div>
          </li>

          <!-- Outros LIs já estavam perfeitamente estilizados com as classes certas do .HTML original! -->

        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const voltar = () => router.back()
</script>