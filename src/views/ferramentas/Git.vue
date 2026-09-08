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
# Conectar a um repositório no github
git remote add origin https://github.com/usuario/repo.git

# CLONAR repositório existente
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
            <h3 class="text-xl font-bold mb-4">Branches</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>git branch                  # Lista branches locais
git branch minha-feature    # Cria nova branch
git checkout minha-feature  # Muda para a branch
git checkout -b nova        # Cria e muda de uma vez
git merge minha-feature     # Mescla branch no atual
git branch -d minha-feature # Deleta branch</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Commits</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>git log                 # Ver histórico de commits
git log --oneline       # Versão resumida
git show id-commit      # Ver detalhes do commit
git checkout id-commit     # Voltar para um commit específico (modo detached HEAD)
git checkout --arquivo.js  # volta para a versão do arquivo no último commit

git restore arquivo.js  # Descartar mudanças
git reset --hard HEAD   # Desfazer último commit (cuidado!)</code></pre>
          </li>

          <img class="rounded h-64 justify-self-center" src="/img/git_commits.png" alt="Exemplo de mensagem de commit convencional">

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Stash (Trabalho Temporário)</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>git stash               # Guarda alterações não commitadas temporariamente
git stash save "msg"    # Guarda alterações com mensagem
git stash push "msg"    # Guarda alterações com mensagem e envia para remoto

git stash list          # Lista todos os stashes guardados
git stash pop           # Aplica o último stash e remove da lista
git stash apply         # Aplica o último stash, mas o mantém na lista
git stash apply stash@{2}  # Aplica um stash específico
git stash clear         # Apaga todos os stashes</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Sincronizando um Fork</h3>
            <p class="text-sm text-gray-300 mb-3">Se o repositório original sofreu alterações e você precisa atualizar o seu fork local. <br><br><strong>Pré-requisito:</strong> Adicionar o repo original como "upstream" apenas uma vez com <code class="text-pink-400 font-mono">git remote add upstream URL_DO_ORIGINAL</code>.</p>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code># 1. Busca todas as atualizações e novas branches do repositório original
git fetch upstream

# 2. Garante que você está na sua branch principal local
git checkout main

# 3. Mescla as alterações do original (upstream/main) na sua branch local
git merge upstream/main</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">GitHub Issues</h3>
            <ul class="text-sm text-gray-300 space-y-3 list-none">
              <li>Ferramenta do GitHub para rastrear bugs, mudanças, sugestões de melhorias ou tarefas de um projeto.</li>
              
              <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>git checkout -b nova-funcionalidade     # Cria e muda de uma vez
git add .     
git commit -m "Adiciona nova funcionalidade. Closes #42"  # Fecha a Issue #42

git checkout main    # Muda para a branch principal
git merge nova-funcionalidade         # Mescla branch no atual
git push</code></pre>
            </ul>
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