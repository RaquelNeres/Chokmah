<template>
  <div class="bg-[#131217] text-[#D9D7E0] min-h-screen p-8">
    <div class="max-w-2xl mx-auto">
      <router-link to="/artigos" class="text-blue-400 hover:underline mb-6 inline-block">
        ← Voltar
      </router-link>

      <h1 class="text-4xl font-bold mb-2">Boas Práticas de Git</h1>
      <p class="text-gray-300 mb-8">Fluxos de trabalho, padrões de commit, branching e colaboração eficiente com Git.</p>

      <div class="space-y-4">
        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">1. Mensagens de Commit Claras</h2>
          <p class="text-sm text-gray-300 mb-3">Commits bem documentados facilitam o entendimento do histórico.</p>
          <pre class="text-sm text-gray-300 bg-[#0f0f12] p-3 rounded overflow-x-auto"><code>❌ RUIM:
git commit -m "fix"
git commit -m "update"
git commit -m "stuff"

✅ BOM:
git commit -m "feat: adicionar validação de email no formulário"
git commit -m "fix: corrigir bug de renderização em mobile"
git commit -m "docs: atualizar README com instruções de setup"</code></pre>
          <p class="text-xs text-gray-400 mt-3"><strong>Padrão Convencional:</strong> type(scope): description</p>
          <p class="text-xs text-gray-400">Types: feat, fix, docs, style, refactor, perf, test, chore</p>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">2. Git Flow - Fluxo de Branches</h2>
          <div class="text-sm text-gray-300">
            <p class="mb-3 font-semibold text-white">Estrutura recomendada para projetos em equipe:</p>
            <div class="space-y-2">
              <div class="border-l-2 border-blue-500 pl-3">
                <p class="font-semibold">main</p>
                <p class="text-xs">Produção estável. Só merges de release branches.</p>
              </div>
              <div class="border-l-2 border-green-500 pl-3">
                <p class="font-semibold">develop</p>
                <p class="text-xs">Próxima versão. Merges de feature branches.</p>
              </div>
              <div class="border-l-2 border-yellow-500 pl-3">
                <p class="font-semibold">feature/nome-da-feature</p>
                <p class="text-xs">Desenvolvimento de funcionalidade. Cria de: develop</p>
              </div>
              <div class="border-l-2 border-red-500 pl-3">
                <p class="font-semibold">bugfix/nome-do-bug</p>
                <p class="text-xs">Correção de bug. Cria de: develop</p>
              </div>
              <div class="border-l-2 border-purple-500 pl-3">
                <p class="font-semibold">hotfix/nome-da-correção</p>
                <p class="text-xs">Correção urgente em produção. Cria de: main</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">3. Workflow Típico</h2>
          <pre class="text-sm text-gray-300 bg-[#0f0f12] p-3 rounded overflow-x-auto"><code># 1. Atualize o develop
git checkout develop
git pull origin develop

# 2. Crie uma feature branch
git checkout -b feature/adicionar-login

# 3. Faça commits pequenos e focados
git add .
git commit -m "feat: adicionar campo de email"
git commit -m "feat: adicionar validação de email"

# 4. Envie para remoto
git push origin feature/adicionar-login

# 5. Abra um Pull Request (PR) no GitHub/GitLab

# 6. Após aprovação, faça merge
git checkout develop
git pull origin develop
git merge feature/adicionar-login
git push origin develop

# 7. Delete a branch
git branch -d feature/adicionar-login
git push origin --delete feature/adicionar-login</code></pre>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">4. Merge vs Rebase</h2>
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

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">5. Commits Atômicos</h2>
          <p class="text-sm text-gray-300 mb-3">Cada commit deve representar uma mudança lógica e independente.</p>
          <div class="text-xs text-gray-300 space-y-2">
            <p class="text-yellow-400">❌ RUIM: Um commit gigante com tudo</p>
            <p class="text-green-400">✅ BOM: Vários commits pequenos:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Commit 1: Adiciona nova função</li>
              <li>Commit 2: Adiciona testes</li>
              <li>Commit 3: Atualiza documentação</li>
            </ul>
          </div>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">6. .gitignore - Arquivos a Ignorar</h2>
          <pre class="text-sm text-gray-300 bg-[#0f0f12] p-3 rounded overflow-x-auto"><code># Dependências
node_modules/
venv/
__pycache__/

# Variáveis de ambiente (NUNCA commitar!)
.env
.env.local

# IDE
.vscode/
.idea/
*.swp

# Builds
dist/
build/

# Logs
*.log
npm-debug.log*</code></pre>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">7. Desfazendo Mudanças</h2>
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

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">8. Colaboração - Pull Requests</h2>
          <ul class="text-sm text-gray-300 space-y-2">
            <li>✅ Sempre trabalhe em branches separadas</li>
            <li>✅ Crie um Pull Request (PR) para revisão de código</li>
            <li>✅ Peça feedback de colegas</li>
            <li>✅ Faça pequenas mudanças em resposta aos comentários</li>
            <li>✅ Só faça merge após aprovação</li>
            <li>❌ Não faça push direto em main/develop</li>
          </ul>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">9. Checklist para Um Bom Commit</h2>
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
const showSidebar = inject('showSidebar') || { value: false }
</script>
