<template>
  <div class="-apple-system bg-[#131217] text-base min-h-screen">
    <div class="max-w-[1070px] mx-auto flex justify-between items-start">

      <img 
        v-if="!showSidebar"
        @click="showSidebar = true"
        id="menu-btn"
        class="fixed top-2 left-2 z-50 block md:hidden p-2 cursor-pointer bg-[#131217] hover:bg-gray-800"
        src="../../public/img/opcao.png" 
        alt="abrir barra lateral"
      />

      <div class="text-[#D9D7E0] text-justify items-start h-full grid gap-7 justify-between w-full max-w-[703px] mx-auto px-5 ml-2 mr-10">
        <h1 class="mt-16 text-[50px] mb-1">Ferramentas</h1>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">FEVEREIRO 2026</p>
          <router-link class="flex" to="/ferramentas/docker">
            <h2 class="text-[24px] mb-5">Docker</h2>
                    <img class="h-4 ml-2 mt-1" src="../../public/img/docker.png" alt="Docker">
          </router-link>
          <p class="text-[14px]">Empacotador de software em unidades padronizadas chamadas contêineres , que contêm tudo o que o software precisa para ser executado, incluindo bibliotecas, ferramentas de sistema, código e ambiente de execução.</p>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">FEVEREIRO 2026</p>
          <router-link class="flex" to="/ferramentas/vite">
            <h2 class="text-[24px] mb-5">Vite</h2>
            <img class="h-4 ml-2 mt-1" src="../../public/img/vite.png" alt="Vite">
          </router-link>
          <p class="text-[14px]">Ferramenta de construção de projetos de frontend para oferecer uma experiência de desenvolvimento mais rápida e leve para projetos de web modernos.</p>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">FEVEREIRO 2026</p>
          <router-link class="flex" to="/ferramentas/ferramentas1">
            <h2 class="text-[24px] mb-5">Geral</h2>
          </router-link>
          <p class="text-[14px]">Exemplos de ferramentas que não se encaixam em nenhuma categoria especifica, mas que são uteis para ter de facil acesso.</p>
        </div>
        
        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">FEVEREIRO 2026</p>
          <router-link class="flex" to="/ferramentas/git">
            <h2 class="text-[24px] mb-5">Git/GitHub</h2>
            <img class="h-4 ml-2 mt-1" src="../../public/img/git.png" alt="Git/GitHub">
          </router-link>
          <p class="text-[14px]">Resumo rapido de comandos basicos do git e github, para ter de facil acesso quando for necessario.</p>
        </div>

        <div class="flex justify-between w-full mt-1 mb-10">
          <img src="../../public/img/seta.png" alt="Anterior" />
          <router-link to="/ferramentas/ferramentas1" class="flex items-center">
            <img class="-scale-x-100" src="../../public/img/seta.png" alt="Próximo" />
          </router-link>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const showSidebar = inject('showSidebar') || { value: false }
</script>
