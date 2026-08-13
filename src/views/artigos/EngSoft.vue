<template>
  <div class="bg-[#131217] text-[#D9D7E0] text-base min-h-screen font-sans antialiased pb-20">
    <div class="min-h-screen flex flex-col items-center py-10">
      
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

      <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto leading-relaxed">
        
        <header class="text-center mb-16">
          <h1 class="font-bold text-[50px] text-center mb-10">
            Engenharia de Software
          </h1>
          <p class="text-gray-400 text-lg md:text-xl mt-4 font-light max-w-2xl mx-auto">
            A Ciência da Resolução de Problemas que Antecede a Escrita de Código
          </p>
          
          <div class="flex items-center justify-center gap-4 mt-6 text-xs text-gray-500 font-mono">
            <span>Publicado em: 13 Ago 2026</span>
            <span>•</span>
            <span>Estilo de Leitura: AkiraDev</span>
          </div>
        </header>

        <div class="bg-[#1e1b29] border-l-4 border-[#BD34FE] rounded-r-lg p-6 mb-12 shadow-xl">
          <p class="text-lg italic text-white font-medium mb-3">
            “Engenharia de software é o processo de diminuir a chance de construir soluções erradas para o problema certo. Programar a coisa errada de forma excelente continua sendo um erro.”
          </p>
          <cite class="text-xs font-mono text-[#41D1FF] block text-right">— Engenharia de Software - Anotação</cite>
        </div>

        <section class="mb-12">
          <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="text-[#41D1FF]">#</span> 01. O Paradoxo do Teclado
          </h2>
          <p class="text-gray-300 mb-4">
            Na cultura atual de desenvolvimento rápido, somos inundados por promessas de 
            <span class="text-white font-semibold">"Aprenda um Framework em 15 minutos"</span>. No entanto, o software profissional não recompensa a velocidade bruta de escrita, mas sim a qualidade das decisões tomadas. Como engenheiros, nossa responsabilidade principal é lidar com a complexidade e garantir que os sistemas sejam sustentáveis a longo prazo.
          </p>
          
          <div class="bg-[#1e1b29] rounded-lg p-5 my-6 border border-gray-800">
            <h4 class="text-[#41D1FF] font-mono text-xs uppercase mb-3 tracking-wider">A Diferença Fundamental</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm">
                <thead>
                    <tr class="border-b border-gray-700 text-white font-mono">
                    <th class="pb-3 pr-6">Abordagem</th>
                    <th class="pb-3 pr-6">Foco Principal</th>
                    <th class="pb-3">Visão de Sucesso</th>
                    </tr>
                </thead>
                <tbody class="text-gray-300">
                    <tr class="border-b border-gray-800">
                    <!-- O py-4 define o espaçamento vertical entre as linhas -->
                    <!-- O pr-6 garante que o texto de uma coluna não cole na outra -->
                    <td class="py-4 pr-6 font-semibold text-pink-400">Programador Ad-Hoc</td>
                    <td class="py-4 pr-6">Fazer o sistema funcionar (Escrever código rápido).</td>
                    <td class="py-4">"Funciona na minha máquina."</td>
                    </tr>
                    <tr>
                    <td class="py-4 pr-6 font-semibold text-[#41D1FF]">Engenheiro de Software</td>
                    <td class="py-4 pr-6">Descobrir o problema real, garantir manutenibilidade e evolução do código.</td>
                    <td class="py-4">O sistema é sustentável, legível e robusto frente a mudanças.</td>
                    </tr>
                </tbody>
                </table>

            </div>
          </div>
        </section>

        <!-- Tópico Central das Etapas (Sprints) de Software -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span class="text-[#BD34FE]">#</span> 02. O Ciclo de Desenvolvimento Prático
          </h2>
          <p class="text-gray-300 mb-8">
            Para tornar o aprendizado tangível, analisaremos o processo de construção de um 
            <span class="text-white font-semibold">Sistema de Gerenciamento de Academia</span>. Cada aba interativa abaixo representa uma etapa obrigatória antes do desenvolvimento lógico.
          </p>

          <div class="space-y-6">

            <!-- ETAPA 1: Levantamento de Requisitos -->
            <details class="group text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden border border-white/5 shadow-md">
              <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-4 transition-all flex justify-between items-center pr-5 select-none">
                <span>1. Levantamento de Requisitos (Elicitação)</span>
                <span class="text-[#41D1FF] transition-transform duration-300 group-open:rotate-180">↓</span>
              </summary>
              <div class="px-5 pb-6 pt-4 border-t border-gray-800/50 bg-[#171521] space-y-4 text-gray-300">
                
                <p>
                  Um requisito representa uma <span class="text-[#41D1FF] font-semibold">necessidade que o sistema deve atender</span>. Em vez de perguntar "qual tecnologia usaremos?", a primeira pergunta de um engenheiro de software é: <span class="text-white font-medium">"Qual problema real estamos tentando resolver?"</span>.
                </p>

                <!-- Divisão de Requisitos -->
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                  <div class="bg-[#131217] p-4 rounded-lg border border-gray-800">
                    <h5 class="text-white font-semibold font-mono text-sm mb-2 text-[#41D1FF]">Requisitos Funcionais (RF)</h5>
                    <p class="text-xs text-gray-400 mb-3">Define o que o software deve executar (ações diretas).</p>
                    <ul class="text-xs space-y-2 list-disc list-inside text-gray-300 font-mono">
                      <li>RF1: Permitir o cadastro de novos alunos.</li>
                      <li>RF2: Registrar pagamentos de mensalidades.</li>
                      <li>RF3: Bloquear catraca em caso de inadimplência.</li>
                    </ul>
                  </div>

                  <div class="bg-[#131217] p-4 rounded-lg border border-gray-800">
                    <h5 class="text-white font-semibold font-mono text-sm mb-2 text-[#BD34FE]">Requisitos Não Funcionais (RNF)</h5>
                    <p class="text-xs text-gray-400 mb-3">Define restrições de qualidade, segurança e performance.</p>
                    <ul class="text-xs space-y-2 list-disc list-inside text-gray-300 font-mono">
                      <li>RNF1: O sistema deve responder em até 1.5 segundos.</li>
                      <li>RNF2: Os dados financeiros dos alunos devem ser criptografados (LGPD).</li>
                      <li>RNF3: O banco de dados deve ter backup incremental diário.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            <!-- ETAPA 2: Casos de Uso -->
            <details class="group text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden border border-white/5 shadow-md">
              <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-4 transition-all flex justify-between items-center pr-5 select-none">
                <span>2. Casos de Uso (Modelagem Comportamental)</span>
                <span class="text-[#41D1FF] transition-transform duration-300 group-open:rotate-180">↓</span>
              </summary>
              <div class="px-5 pb-6 pt-4 border-t border-gray-800/50 bg-[#171521] space-y-4 text-gray-300">
                <p>
                  A modelagem de <span class="text-white font-semibold">Casos de Uso</span> serve para unificar o entendimento de toda a equipe técnico-comercial. Ela responde de forma gráfica: <span class="text-[#41D1FF]">Quem interage com o sistema e quais ações eles podem realizar?</span>
                </p>

                <!-- Simulador de Diagrama de Casos de Uso em CSS -->
                <div class="bg-[#131217] p-6 rounded-lg border border-gray-800 font-mono text-xs text-center space-y-6">
                  <div class="text-gray-400 border-b border-gray-800 pb-2 uppercase tracking-widest text-[10px]">
                    Representação Visual (Caso de Uso Simplificado)
                  </div>
                  
                  <div class="grid grid-cols-3 gap-4 items-center">
                    
                    <!-- Atores -->
                    <div class="space-y-4">
                      <div class="p-3 bg-[#1e1b29] rounded-lg border border-pink-500/20 text-pink-400">
                        👥 Ator: Administrador
                      </div>
                      <div class="p-3 bg-[#1e1b29] rounded-lg border-dashed border-gray-700 text-gray-500">
                        👥 Ator: Aluno
                      </div>
                    </div>

                    <!-- Fluxos de Ação (Conectores) -->
                    <div class="flex flex-col justify-around h-full py-2">
                      <div class="text-[#41D1FF] text-lg">── (Inicia) ──▶</div>
                      <div class="text-[#BD34FE] text-lg">── (Inicia) ──▶</div>
                    </div>

                    <!-- Sistema / Fronteira -->
                    <div class="bg-[#1e1b29] p-4 rounded-lg border border-[#BD34FE]/30 text-left space-y-3">
                      <div class="text-[10px] text-gray-400 text-center border-b border-gray-800 pb-1">SISTEMA ACADEMIA</div>
                      <div class="p-2 bg-[#131217] rounded text-center text-white border border-[#41D1FF]/10">
                        [UC01] Cadastrar Aluno
                      </div>
                      <div class="p-2 bg-[#131217] rounded text-center text-white border border-[#41D1FF]/10">
                        [UC02] Registrar Pagamento
                      </div>
                    </div>

                  </div>
                </div>

                <p class="text-xs text-gray-400 italic">
                  *Nota: Organizar os fluxos evita retrabalho de desenvolvimento em regras de permissão lógica (ex.: garantir que somente o Administrador possa excluir dados sensíveis).
                </p>
              </div>
            </details>

            <!-- ETAPA 3: Modelagem de Domínio -->
            <details class="group text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden border border-white/5 shadow-md">
              <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-4 transition-all flex justify-between items-center pr-5 select-none">
                <span>3. Modelagem de Domínio (Abstração da Realidade)</span>
                <span class="text-[#41D1FF] transition-transform duration-300 group-open:rotate-180">↓</span>
              </summary>
              <div class="px-5 pb-6 pt-4 border-t border-gray-800/50 bg-[#171521] space-y-4 text-gray-300">
                <p>
                  Antes do código ou de qualquer escolha de banco de dados, o engenheiro observa a realidade física do negócio e a traduz em <span class="text-[#41D1FF] font-semibold">Entidades</span>, <span class="text-[#BD34FE] font-semibold">Atributos</span> e <span class="text-white font-semibold">Relacionamentos</span>.
                </p>

                <!-- Cards de Entidades do Domínio -->
                <div class="grid md:grid-cols-3 gap-4 mt-4 font-mono text-xs">
                  
                  <!-- Entidade Aluno -->
                  <div class="bg-[#131217] rounded-lg border border-gray-800 overflow-hidden">
                    <div class="bg-[#2a1b3d] px-3 py-2 text-white font-bold border-b border-gray-800 flex justify-between">
                      <span>class Aluno</span>
                      <span class="text-[#41D1FF]">Entity</span>
                    </div>
                    <div class="p-3 space-y-2 text-gray-400">
                      <div>id: <span class="text-pink-400">UUID</span></div>
                      <div>nome: <span class="text-pink-400">String</span></div>
                      <div>email: <span class="text-pink-400">String</span></div>
                      <div>dataCadastro: <span class="text-pink-400">Date</span></div>
                    </div>
                  </div>

                  <!-- Entidade Plano -->
                  <div class="bg-[#131217] rounded-lg border border-gray-800 overflow-hidden">
                    <div class="bg-[#1b2b3d] px-3 py-2 text-white font-bold border-b border-gray-800 flex justify-between">
                      <span>class Plano</span>
                      <span class="text-[#41D1FF]">Entity</span>
                    </div>
                    <div class="p-3 space-y-2 text-gray-400">
                      <div>id: <span class="text-pink-400">UUID</span></div>
                      <div>nome: <span class="text-pink-400">String</span></div>
                      <div>precoMensal: <span class="text-pink-400">Float</span></div>
                    </div>
                  </div>

                  <!-- Entidade Pagamento -->
                  <div class="bg-[#131217] rounded-lg border border-gray-800 overflow-hidden">
                    <div class="bg-[#2a1b3d] px-3 py-2 text-white font-bold border-b border-gray-800 flex justify-between">
                      <span>class Pagamento</span>
                      <span class="text-[#41D1FF]">Entity</span>
                    </div>
                    <div class="p-3 space-y-2 text-gray-400">
                      <div>id: <span class="text-pink-400">UUID</span></div>
                      <div>valor: <span class="text-pink-400">Float</span></div>
                      <div>status: <span class="text-pink-400">Enum</span></div>
                      <div>vencimento: <span class="text-pink-400">Date</span></div>
                    </div>
                  </div>

                </div>

                <div class="bg-[#131217] p-4 rounded-lg border border-gray-800 text-xs font-mono">
                  <h5 class="text-[#BD34FE] font-bold mb-2">Relacionamentos Lógicos:</h5>
                  <ul class="space-y-1 text-gray-400">
                    <li>• Um <span class="text-white">Aluno</span> possui associação com um único <span class="text-white">Plano</span> (relação 1:1)</li>
                    <li>• Um <span class="text-white">Aluno</span> gera múltiplos registros de <span class="text-white">Pagamento</span> (relação 1:N)</li>
                  </ul>
                </div>
              </div>
            </details>

            <!-- ETAPA 4: Arquitetura de Software -->
            <details class="group text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden border border-white/5 shadow-md">
              <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-4 transition-all flex justify-between items-center pr-5 select-none">
                <span>4. Arquitetura de Software (Fluxo de Responsabilidades)</span>
                <span class="text-[#41D1FF] transition-transform duration-300 group-open:rotate-180">↓</span>
              </summary>
              <div class="px-5 pb-6 pt-4 border-t border-gray-800/50 bg-[#171521] space-y-4 text-gray-300">
                <p>
                  A arquitetura de software é responsável pela <span class="text-white font-semibold">organização estruturada das responsabilidades</span> de um ecossistema de dados. Ela evita que alterações em regras de persistência venham a quebrar fluxos lógicos de negócio.
                </p>

                <!-- Fluxograma de Arquitetura -->
                <div class="bg-[#131217] p-5 rounded-lg border border-gray-800 space-y-4 text-xs font-mono">
                  <h5 class="text-center text-gray-400 uppercase tracking-wider text-[10px] mb-4">Fluxo de Dados de uma Requisição</h5>
                  
                  <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    
                    <!-- Controller -->
                    <div class="w-full md:w-1/4 p-3 bg-[#1e1b29] rounded border border-[#41D1FF]/30 text-center">
                      <div class="text-[#41D1FF] font-bold">1. Controller</div>
                      <p class="text-[10px] text-gray-500 mt-1">Valida protocolo e recebe os dados (HTTP/JSON).</p>
                    </div>

                    <div class="text-gray-600 hidden md:block">▶</div>

                    <!-- Service -->
                    <div class="w-full md:w-1/4 p-3 bg-[#1e1b29] rounded border border-[#BD34FE]/30 text-center">
                      <div class="text-[#BD34FE] font-bold">2. Service</div>
                      <p class="text-[10px] text-gray-500 mt-1">Aplica as Regras de Negócio (ex: Aluno inadimplente?).</p>
                    </div>

                    <div class="text-gray-600 hidden md:block">▶</div>

                    <!-- Repository -->
                    <div class="w-full md:w-1/4 p-3 bg-[#1e1b29] rounded border border-pink-500/20 text-center">
                      <div class="text-pink-400 font-bold">3. Repository</div>
                      <p class="text-[10px] text-gray-500 mt-1">Garante a abstração de persistência no Banco.</p>
                    </div>

                    <div class="text-gray-600 hidden md:block">▶</div>

                    <!-- Database -->
                    <div class="w-full md:w-1/4 p-3 bg-[#1e1b29] rounded border border-gray-700 text-center">
                      <div class="text-gray-300 font-bold">4. Database</div>
                      <p class="text-[10px] text-gray-500 mt-1">Armazenamento Físico e Seguro (PostgreSQL/SQL).</p>
                    </div>

                  </div>
                </div>

                <p class="text-xs text-gray-400 italic">
                  *Importante: Ao estruturar o código nessas camadas, se houver alteração de Banco de Dados de PostgreSQL para MongoDB futuramente, apenas a camada de Repository precisará ser ajustada. A lógica do negócio (Service) permanece intacta.
                </p>
              </div>
            </details>

          </div>
        </section>

        <!-- Seção 03: Conclusão -->
        <section class="mt-16 pt-10 border-t border-gray-800">
          <h2 class="text-2xl font-bold text-white mb-4">Conclusão</h2>
          <p class="text-gray-300">
            A engenharia de software não limita a criatividade do desenvolvedor; pelo contrário, ela garante que as soluções construídas permaneçam de pé e utilizáveis ao longo dos anos. Ao transformar requisitos verbais em artefatos abstratos (casos de uso, domínio, arquitetura), o processo técnico torna-se previsível, elegante e limpo.
          </p>
        </section>

        <footer class="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 space-y-2 font-mono">
            <h4 class="text-gray-400 font-bold uppercase tracking-wider text-[10px] mb-2">Referências e Materiais de Apoio</h4>
            <p>• PRESSMAN, R. S.; MAXIM, B. R. <span class="italic">Engenharia de software: uma abordagem profissional</span>. 9. ed. Porto Alegre: AMGH, 2021.</p>
            <p>• Transcrições de roteiros estruturados sobre Engenharia de Software.</p>
            <a href="https://youtube.com/playlist?list=PLUrWRAAfHLis&si=0iZw1HbQyd7UPgCu" class="block text-gray-500 no-underline hover:text-gray-400 transition-colors">
                • Video aulas de Loid Padre
            </a>
        </footer>

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

<style scoped>
/* Efeito de abertura suave nos detalhes */
details[open] summary ~ * {
  animation: sweep 0.3s ease-in-out;
}

@keyframes sweep {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>