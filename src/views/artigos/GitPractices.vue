<template>
  <div class="bg-[#131217] text-[#D9D7E0] min-h-screen p-8">
    <img
      v-if="!showSidebar"
      @click="showSidebar = true"
      id="menu-btn"
      class="fixed top-2 left-2 z-50 block md:hidden p-2 cursor-pointer bg-[#131217] hover:bg-gray-800 rounded-lg transition-colors"
      src="/img/opcao.png"
      alt="abrir barra lateral"
    />

    <button class="self-start ml-10 text-white py-2 px-6
            border border-white rounded-full
            hover:bg-white hover:text-black transition-colors duration-300"
      @click="voltar">
        Voltar
    </button>

    <div class="max-w-2xl mx-auto mt-10">
      <header class="text-center mb-16">
          <h1 class="font-bold text-[50px] text-center mb-3">
            Boas Práticas de Git
          </h1>

          <div class="flex items-center justify-center gap-4 text-xs text-gray-500 font-mono">
            <span>•••</span>
            <span>Publicado em: 31 Ago 2026</span>
            <span>•••</span>
          </div>
        </header>

      <div class="space-y-4">
        <div class="rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Mensagens de Commit Claras</h2>
          <p class="text-sm text-gray-300 mb-3">Commits bem documentados facilitam o entendimento do histórico.</p>

          <img class="mt-3 rounded" src="/img/git_commits.png" alt="Exemplo de mensagem de commit convencional">
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Git Flow - Fluxo de Branches</h2>
          <div class="text-sm text-gray-300">
            <p class="mb-3 font-semibold text-white">Estrutura recomendada para projetos em equipe:</p>
            <div class="space-y-2">
              <div class="border-l-2 border-blue-500 pl-3">
                <p class="font-semibold">main</p>
                <p class="text-xs">Produção estáveSó merges de release branches.</p>
              </div>
              <div class="border-l-2 border-green-500 pl-3">
                <p class="font-semibold">develop</p>
                <p class="text-xs">Próxima versãMerges de feature branches.</p>
              </div>
              <div class="border-l-2 border-yellow-500 pl-3">
                <p class="font-semibold">feature/nome-da-feature</p>
                <p class="text-xs">Desenvolvimento de funcionalidadCria de: develop</p>
              </div>
              <div class="border-l-2 border-red-500 pl-3">
                <p class="font-semibold">bugfix/nome-do-bug</p>
                <p class="text-xs">Correção de buCria de: develop</p>
              </div>
              <div class="border-l-2 border-purple-500 pl-3">
                <p class="font-semibold">hotfix/nome-da-correção</p>
                <p class="text-xs">Correção urgente em produçãCria de: main</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Workflow Típico</h2>
          <pre class="text-sm text-gray-300 bg-[#0f0f12] p-3 rounded overflow-x-auto"><code># Atualize o develop
git checkout develop
git pull origin develop

# Crie uma feature branch
git checkout -b feature/adicionar-login

# Faça commits pequenos e focados
git add .
git commit -m "feat: adicionar campo de email"
git commit -m "feat: adicionar validação de email"

# Envie para remoto
git push origin feature/adicionar-login

# Abra um Pull Request (PR) no GitHub/GitLab

# Após aprovação, faça merge
git checkout develop
git pull origin develop
git merge feature/adicionar-login
git push origin develop

# Delete a branch
git branch -d feature/adicionar-login
git push origin --delete feature/adicionar-login</code></pre>
        </div>

        <div class="rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Merge vs Rebase</h2>
          <div class="text-sm text-gray-300 space-y-4">
            <div>
              <p class="font-bold text-white mb-2">MERGE (mais seguro, recomendado)</p>
              <pre class="bg-[#0f0f12] p-3 rounded text-xs overflow-x-auto"><code>git merge feature/nome
# Cria um commit de merge que une os históricos
# Histórico completo é preservado
# Melhor para workflows em equipe</code></pre>
            </div>
            <div>
              <p class="font-bold text-white mb-2">REBASE (histórico linear)</p>
              <pre class="bg-[#0f0f12] p-3 rounded text-xs overflow-x-auto"><code>git rebase develop
# Reaplica commits da branch no topo de develop
# Histórico fica linear e "limpo"
# Perigo: não faça rebase em branches públicas!</code></pre>
            </div>
            <p class="text-xs text-yellow-400">⚠️ REGRA: Merge em branches públicas (shared), Rebase em branches privadas (suas).</p>
          </div>
        </div>

        <div class="rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Desfazendo Mudanças</h2>
          <div class="text-sm text-gray-300 space-y-2 font-mono text-xs">
            <div class="bg-[#0f0f12] p-3 rounded">
              <p class="text-pink-400">git restore arquivo.js</p>
              <p class="text-gray-400">Descartar mudanças não commitadas</p>
            </div>
            <div class="bg-[#0f0f12] p-3 rounded">
              <p class="text-pink-400">git reset --soft HEAD~1</p>
              <p class="text-gray-400">Desfazer último commit (manter mudanças)</p>
            </div>
            <div class="bg-[#0f0f12] p-3 rounded">
              <p class="text-pink-400">git reset --hard HEAD~1</p>
              <p class="text-gray-400">Desfazer último commit (descartar mudanças) ⚠️</p>
            </div>
            <div class="bg-[#0f0f12] p-3 rounded">
              <p class="text-pink-400">git revert id-commit</p>
              <p class="text-gray-400">Cria novo commit desfazendo o especificado (seguro)</p>
            </div>
          </div>
        </div>

        <div class="rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Colaboração - Pull Requests</h2>
          <ul class="text-sm text-gray-300 space-y-2">
            <li>✅ Sempre trabalhe em branches separadas</li>
            <li>✅ Crie um Pull Request (PR) para revisão de código</li>
            <li>✅ Peça feedback de colegas</li>
            <li>✅ Faça pequenas mudanças em resposta aos comentários</li>
            <li>✅ Só faça merge após aprovação</li>
            <li>❌ Não faça push direto em main/develop</li>
          </ul>
        </div>

        <div class="rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Checklist para Um Bom Commit</h2>
          <ul class="text-sm text-gray-300 space-y-2">
            <li>☐ Uma mudança lógica por commit</li>
            <li>☐ Mensagem clara seguindo convenção</li>
            <li>☐ Código passa em testes locais</li>
            <li>☐ Sem arquivos desnecessários (console.log, etc)</li>
            <li>☐ Sem alterações acidentais</li>
            <li>☐ Pronto para ser revertido facilmente</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showSidebar = inject('showSidebar') || { value: false }

const voltar = () => {
  router.back()
}
</script>