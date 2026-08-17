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
        <h1 class="mt-16 text-[50px] mb-1">BackEnd</h1>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl w-full">
          <p class="text-[12px] mb-1">
              AGOSTO 2026
          </p>
          <router-link class="flex" to="/backend/javascript">
              <h2 class="text-[24px] mb-5">JavaScript</h2>
              <img class="h-5 ml-2 mt-1" src="/img/js.png" alt="">
          </router-link>
          <p class="text-[14px]">
              Conceitos aprofundados sobre javascript
          </p>
          <a class="text-[#FFC107] hover:text-[#FFC107]/80"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            JavaScript Docs
          </a >
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl w-full">
          <p class="text-[12px] mb-1">
              FEVEREIRO 2026
          </p>
          <router-link class="flex" to="/backend/python">
              <h2 class="text-[24px] mb-5">Python</h2>
              <img class="h-5 ml-2 mt-1" src="/img/python.png" alt="">
          </router-link>
          <p class="text-[14px]">
              Codigos voltados para automação com python.
          </p>
          <a class="text-[#FFC107] hover:text-[#FFC107]/80" href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Python Docs</a >
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl w-full">
            <p class="text-[12px] mb-1">
                FEVEREIRO 2026
            </p>
            <router-link class="flex" to="/backend/fastapi">
                <h2 class="text-[24px] mb-5">FastAPI</h2>
                <img class="h-4 ml-2 mt-1" src="/img/fastapi.svg" alt="">
            </router-link>
            <router-link target="_blank" to="https://fastapi.tiangolo.com/pt/tutorial/#install-fastapi">
                <p class="text-[14px]">
                    Tutorial completinho do proprio site do FastAPI
                </p>
            </router-link>
        </div>
        

        <div class="flex justify-between w-full mt-1 mb-10">
          <img src="/img/seta.png" alt="Anterior" />
          
          <router-link to="/backend/backend1" class="flex items-center">
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
