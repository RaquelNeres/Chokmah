<template>
  <div class="-apple-system bg-[#131217] text-base min-h-screen">
    <div class="max-w-[1070px] mx-auto flex justify-between items-start">

          <!-- Mobile menu button -->
          <img
            v-if="!showSidebar"
            @click="showSidebar = true"
            id="menu-btn"
            class="fixed top-2 left-2 z-50 block md:hidden p-2 cursor-pointer bg-[#131217] hover:bg-gray-800"
            src="/img/opcao.png"
            alt="abrir barra lateral"
          />

      <div class="text-[#D9D7E0] text-justify grid gap-7 justify-between w-full max-w-[703px] mx-auto px-5 ml-2 mr-5">
        <h1 class="mt-16 text-[50px]">Home</h1>
        <p class="mt-8 mb-3">Seja muito bem-vindo,</p>
        <section>
          <p>
            Meu nome é Raquel Neres e sou estudante de Sistemas de Informação.
            Me intrigo com a ideia de pegar algo abstrato e ver funcionando no mundo real através da programação
          </p>

          <p>
            Estudo no Ifes Serra e tive a oportunidade de passar um ano como pesquisadora em Machine Learning, trabalhando com classificação de imagens médicas e tentando entender como, de fato, a IA toma decisões.
          </p>

          <p>
            Hoje sigo explorando o desenvolvimento full stack com Vue, React, JavaScript e Python. Gosto de projetos que desafiam, código bem pensado e da sensação muito específica de quando alguma coisa finalmente funciona depois de várias tentativas.
          </p>

          <p>
            Este espaço é onde registro essa jornada, os aprendizados e as ideias que vão surgindo pelo caminho.
          </p>
        </section>

        <p><b>Conhecimentos</b></p>
        <ul class="list-disc pl-10 space-y-1">
          <li><strong>Linguagens:</strong> JavaScript, Java, Python, SQL;</li>
          <li><strong>Bibliotecas e Frameworks:</strong> Bootstrap, Tailwind, Flask, Vue, React;</li>
          <li><strong>Ferramentas:</strong> Command Line Interface, Visual Studio, Git, Docker, IntelliJ IDEA, Microsoft Excel;</li>
          <li><strong>Sistemas Operacionais:</strong> Ubuntu, Windows Systems;</li>
          <li><strong>Campos de Interesse:</strong> Engenharia de Software, Ciência de Dados;</li>
        </ul>

        <p><b>Projeto</b></p>
        <p>
          Chokmah é a palavra hebraica para "sabedoria" (חכמה), representando a segunda sephirah na Árvore da Vida da Cabala, situada no topo do pilar da força/masculino. É o intelecto celestial primordial, o ponto inicial de sabedoria divina que emana da vontade de Deus antes de ser moldado pela compreensão (Binah).
        </p>

        <img src="/img/peixe.png" alt="peixes" />

        <p class="mb-20">01000100 01100101 01110101 01110011 00100000 01110011 01110000 01100101 01110011 00100000 01101110 01101111 01110011 01110100 01110010 01100001</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const showSidebar = inject('showSidebar') || { value: false }
</script>
