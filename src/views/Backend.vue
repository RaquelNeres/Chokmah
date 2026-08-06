<template>
  <div class="-apple-system bg-[#131217] text-base min-h-screen">
    <div class="ax-w-[1070px] mx-auto flex justify-between items-start">
      
      <img
        v-if="!showSidebar"
        @click="showSidebar = true"
        id="menu-btn"
        class="fixed top-2 left-2 z-50 block md:hidden p-2 cursor-pointer bg-[#131217] hover:bg-gray-800"
        src="../../public/img/opcao.png"
        alt="abrir barra lateral"
      />

      <div class="text-[#D9D7E0] text-justify items-start h-full grid gap-7 justify-between w-full max-w-[703px] mx-auto px-5 ml-2 mr-10">
        <h1 class="mt-16 text-[50px] mb-1">BackEnd</h1>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">
              FEVEREIRO 2026
          </p>
          <router-link class="flex" to="/backend/python">
              <h2 class="text-[24px] mb-5">Python</h2>
              <img class="h-5 ml-2 mt-1" src="../../public/img/python.png" alt="">
          </router-link>
          <p class="text-[14px]">
              Codigos voltados para automação com python.
          </p>
          <router-link class="text-[#FFC107] hover:text-[#FFC107]/80" to="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Python Docs</router-link >
        </div>
        <div class="bg-[#070808] p-5 
          border-2 border-solid rounded-xl">
            <p class="text-[12px] mb-1">
                FEVEREIRO 2026
            </p>
            <router-link class="flex" to="/backend/fastapi">
                <h2 class="text-[24px] mb-5">FastAPI</h2>
                <img class="h-4 ml-2 mt-1" src="../../public/img/fastapi.svg" alt="">
            </router-link>
            <router-link target="_blank" to="https://fastapi.tiangolo.com/pt/tutorial/#install-fastapi">
                <p class="text-[14px]">
                    Tutorial completinho do proprio site do FastAPI
                </p>
            </router-link>
        </div>
        <div class="bg-[#070808] p-5 
          border-2 border-solid rounded-xl">
            <p class="text-[12px] mb-1">
                FEVEREIRO 2026
            </p>
            <router-link class="flex" to="/backend/flask">
                <h2 class="text-[24px] mb-5">Flask</h2>
                <img class="h-5 ml-2 mt-1" src="../../public/img/flask.png" alt="">
                <p class="ml-4 text-[24px]">(Em Breve)</p>
            </router-link>
            <p class="text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quis tempora doloribus quam voluptat
            </p>
            <router-link class="text-[#FFC107] hover:text-[#FFC107]/80" to="https://flask.palletsprojects.com/en/2.3.x/" target="_blank" rel="noopener noreferrer">Flask Docs</router-link >
        </div>
        <div class="bg-[#070808] p-5 
        border-2 border-solid rounded-xl">
            <p class="text-[12px] mb-1">
                FEVEREIRO 2026
            </p>
            <router-link class="flex" to="/backend/java">
                <h2 class="text-[24px] mb-5">Java</h2>
                <img class="h-5 ml-2 mt-1" src="../../public/img/java.png" alt="">
                <p class="ml-4 text-[24px]">(Em Breve)</p>
            </router-link>
            <p class="text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quis tempora doloribus quam volup
            </p>
            <router-link class="text-[#FFC107] hover:text-[#FFC107]/80" to="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">Java Docs</router-link >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const showSidebar = inject('showSidebar') || { value: false }
</script>
