<template>
  <div class="-apple-system bg-[#131217] text-base min-h-screen">
    <div class="max-w-[1070px] mx-auto flex justify-between items-start">

      <img 
        v-if="!showSidebar"
        @click="showSidebar = true"
        id="menu-btn"
        class="fixed top-2 left-2 z-50 block md:hidden p-2 cursor-pointer bg-[#131217] hover:bg-gray-800"
        src="/img/opcao.png" 
        alt="abrir barra lateral"
      />

      <!-- Alterado de 'grid justify-between' para 'flex flex-col w-full' -->
      <div class="text-[#D9D7E0] text-justify items-start h-full flex flex-col gap-7 w-full max-w-[590px] mx-auto ml-7">
        <h1 class="mt-16 text-[50px] mb-1 text-amber-700">Artigos</h1>
        <p class="text-amber-200">Totalmente autorais</p>

        <div class="bg-[#070808] p-5 
        border-2 border-solid rounded-xl">
            <a class="flex" target="_blank" href="https://akiradev.netlify.app/sobre/">
                <h2 class="text-[24px] mb-5">📍 akira アキラ</h2>
            </a>
            <p class="text-[14px]">
                <b>Simplesmente a inspiração desse projeto</b>, a lenda tem explicações de diversos temas como: programação, filosofia, vida, sociedade e etc. Recomendo fortemente a leitura.
            </p>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl w-full">
          <p class="text-[12px] mb-1">GIT</p>
          <router-link class="flex" to="/artigos/git-practices">
            <h2 class="text-[24px] mb-5">Boas práticas de Git</h2>
          </router-link>
          <p class="text-[14px]">Fluxos de trabalho, commits, branches, merge e rebase.</p>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl w-full">
          <p class="text-[12px] mb-1">Engineering Software</p>
          <router-link class="flex" to="/artigos/engenharia-software">
            <h2 class="text-[24px] mb-5">Fundamentos de Engenharia de Software</h2>
          </router-link>
          <p class="text-[14px]">Introdução aos princípios e práticas de desenvolvimento de software.</p>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl w-full">
          <p class="text-[12px] mb-1">BD</p>
          <router-link class="flex" to="/artigos/database">
            <h2 class="text-[24px] mb-5">Fundamentos de Banco de Dados (router.js)</h2>
          </router-link>
          <p class="text-[14px]">Banco de Dados no projeto</p>
        </div>

        <div class="flex justify-between w-full mt-1 mb-10">
          <img src="/img/seta.png" alt="Anterior" />
          <router-link to="/artigos/artigos1" class="flex items-center">
            <img class="-scale-x-100" src="/img/seta.png" alt="Próximo" />
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

