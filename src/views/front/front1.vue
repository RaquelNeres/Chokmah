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
        <h1 class="mt-16 text-[50px] mb-1">FrontEnd</h1>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">SETEMBRO 2026</p>
          <router-link class="flex" to="/frontend/quasar">
            <h2 class="text-[24px] mb-5">Quasar</h2>
            <img class="h-4 ml-2 mt-1" src="/img/Quasar.png" alt="" />
          </router-link>
          <p class="text-[14px]">Resumo simples dos elementos mais usados do quasar.</p>
          <a class="text-[#FFC107] hover:text-[#FFC107]/80" href="https://quasar.dev/start" target="_blank" rel="noopener noreferrer">Quasar Learn</a>
        </div>

        <div class="flex justify-between w-full mt-1 mb-10">
          <button @click="voltar" class="flex items-center">
            <img src="/img/seta.png" alt="Anterior" />
          </button>
          <img class="-scale-x-100" src="/img/seta.png" alt="Próximo" />
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
