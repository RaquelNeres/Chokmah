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

      <div class="text-[#D9D7E0] text-justify items-start h-full grid gap-7 justify-between w-full max-w-[703px] mx-auto px-5 ml-2 mr-10">
        <h1 class="mt-16 text-[50px] mb-1">Artigos</h1>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">HTTP</p>
          <router-link class="flex" to="/artigos/introducao-http">
            <h2 class="text-[24px] mb-5">Introdução ao HTTP</h2>
          </router-link>
          <p class="text-[14px]">Resumo sobre métodos, status codes, cabeçalhos e fluxo de requisições.</p>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">GIT</p>
          <router-link class="flex" to="/artigos/git-practices">
            <h2 class="text-[24px] mb-5">Boas práticas de Git</h2>
          </router-link>
          <p class="text-[14px]">Fluxos de trabalho, commits, branches, merge e rebase em um guia rápido.</p>
        </div>

        <div class="flex justify-between w-full mt-1 mb-10">
          <img src="/img/seta.png" alt="Anterior" />
          <img class="-scale-x-100" src="/img/seta.png" alt="Próximo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const showSidebar = inject('showSidebar') || { value: false }
</script>
