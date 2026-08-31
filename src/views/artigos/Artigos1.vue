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

      <div class="text-[#D9D7E0] text-justify items-start h-full flex flex-col gap-7 w-full max-w-[590px] mx-auto ml-7">
        <h1 class="mt-16 text-[50px] mb-1 text-amber-700">Artigos</h1>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl w-full">
          <p class="text-[12px] mb-1">log</p>
          <router-link class="flex" to="/artigos/log">
            <h2 class="text-[24px] mb-5">O(log n)</h2>
          </router-link>
          <p class="text-[14px]">texto</p>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl w-full">
          <p class="text-[12px] mb-1">BD</p>
          <router-link class="flex" to="/artigos/database">
            <h2 class="text-[24px] mb-5">Fundamentos de Banco de Dados (router.js)</h2>
          </router-link>
          <p class="text-[14px]">Banco de Dados no projeto</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const showSidebar = inject('showSidebar') || { value: false }

const router = useRouter()
const voltar = () => router.back()
</script> 

