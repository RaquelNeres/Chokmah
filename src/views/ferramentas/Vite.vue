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
      
      <router-link class="self-start ml-10 text-white py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300" to="/ferramentas">
        Voltar
      </router-link>

      <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto">
        <a target="_blank" href="https://vite.dev/">
          <h1 class="font-bold text-[50px] text-center text-white hover:text-gray-300 transition-colors">Vite</h1>
        </a>
        <p class="text-center text-gray-400 mt-2 text-sm">Ferramenta moderna de build e desenvolvimento com HMR instantâneo.</p>

        <ul class="space-y-5 mt-10">
          <details class="text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden" open>
            <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">
              Baixar e Iniciar
            </summary>
            <div class="px-5 pb-5 pt-5">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-gray-500 text-gray-300">
                    <th class="py-3 pr-4">Comando</th>
                    <th class="py-3">Uso</th>
                  </tr>
                </thead>
                <tbody class="text-gray-200 text-sm">
                  <tr class="border-b border-gray-700">
                    <td class="py-4 pr-4"><code class="text-pink-400 font-mono">node -v</code></td>
                    <td class="py-4">Checando se o node está instalado</td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <td class="py-4 pr-4"><code class="text-pink-400 font-mono">npm / npx</code></td>
                    <td class="py-4">Instalar de forma global / Cria o projeto de forma temporária</td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <td class="py-4 pr-4"><code class="text-pink-400 font-mono">npm install -g vite</code></td>
                    <td class="py-4">Instalar o vite de forma global</td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <td class="py-4 pr-4"><code class="text-pink-400 font-mono">npm create vite@latest</code></td>
                    <td class="py-4">Criando o projeto vite</td>
                  </tr>
                  <tr>
                    <td class="py-4 pr-4"><code class="text-pink-400 font-mono">npm run dev</code></td>
                    <td class="py-4">Rodar o projeto vite</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Por que Vite?</h3>
            <ul class="text-sm text-gray-300 space-y-2 list-disc pl-5">
              <li><strong class="text-white">Desenvolvimento rápido:</strong> Reload em milissegundos (HMR)</li>
              <li><strong class="text-white">Build otimizado:</strong> Saída pequena e altamente otimizada</li>
              <li><strong class="text-white">Agnóstico:</strong> Funciona com Vue, React, Svelte, Vanilla JS, etc.</li>
              <li><strong class="text-white">Moderno:</strong> Usa ES modules nativos durante dev</li>
            </ul>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Criando um Projeto (Templates)</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code># Com Vue
npm create vite@latest meu-projeto -- --template vue

# Com React
npm create vite@latest meu-projeto -- --template react

# Com vanilla JavaScript
npm create vite@latest meu-projeto -- --template vanilla</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Configuração (vite.config.js)</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true  // Abre navegador automaticamente
  },
  build: {
    outDir: 'dist',  // Pasta de saída
    minify: 'terser' // Minificador
  }
})</code></pre>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const showSidebar = inject('showSidebar') || { value: false }
</script>