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
        <h1 class="font-bold text-[50px] text-center text-white">Git & GitHub</h1>
        <p class="text-center text-gray-400 mt-2 text-sm">Sistema de controle de versão distribuído que permite rastrear mudanças e colaborar com o time.</p>

        <ul class="space-y-5 mt-10">
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Configuração Inicial</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code># Configurar identidade (primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Verificar configuração
git config --list</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Começando um Repositório</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code># Novo repositório local
git init

# Clonar repositório existente
git clone https://github.com/usuario/repo.git</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Workflow Básico (Commit & Push)</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>git status           # Ver arquivos modificados
git add .            # Preparar todos os arquivos
git add arquivo.js   # Preparar arquivo específico
git commit -m "msg"  # Confirmar mudanças com mensagem
git push             # Enviar para repositório remoto
git pull             # Trazer mudanças do remoto</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Branches (Ramificações)</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>git branch                  # Lista branches locais
git branch minha-feature    # Cria nova branch
git checkout minha-feature  # Muda para a branch
git checkout -b nova        # Cria e muda de uma vez
git merge minha-feature     # Mescla branch no atual
git branch -d minha-feature # Deleta branch</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Histórico e Desfazendo</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>git log                 # Ver histórico de commits
git log --oneline       # Versão resumida
git diff                # Ver mudanças não preparadas
git show id-commit      # Ver detalhes do commit
git restore arquivo.js  # Descartar mudanças
git reset --hard HEAD   # Desfazer último commit (cuidado!)</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Boas Práticas</h3>
            <ul class="text-sm text-gray-300 space-y-2 list-none">
              <li>✅ Faça commits pequenos e frequentes</li>
              <li>✅ Escreva mensagens de commit claras e descritivas</li>
              <li>✅ Crie branches para features e correções</li>
              <li>✅ Não commitir arquivos sensíveis (senhas, tokens) - use <code class="text-pink-400 font-mono">.gitignore</code></li>
              <li>✅ Sempre faça <code class="text-pink-400 font-mono">git pull</code> antes de <code class="text-pink-400 font-mono">git push</code></li>
            </ul>
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