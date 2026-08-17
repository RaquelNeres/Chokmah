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
        <h1 class="mt-16 text-[50px] mb-1">BackEnd</h1>

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
            <a class="text-[#FFC107] hover:text-[#FFC107]/80" href="https://flask.palletsprojects.com/en/2.3.x/" target="_blank" rel="noopener noreferrer">Flask Docs</a >
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
            <a class="text-[#FFC107] hover:text-[#FFC107]/80" href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">Java Docs</a >
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

