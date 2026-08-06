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
          <p class="text-[12px] mb-1">FEVEREIRO 2026</p>
          <router-link class="flex" to="/frontend/tailwind">
            <h2 class="text-[24px] mb-5">Tailwind</h2>
            <img class="h-4 ml-2 mt-1" src="/img/tailwindcss.png" alt="" />
          </router-link>
          <p class="text-[14px]">Resumo simples dos elementos mais usados do tailwind para relembrar de facil modo.</p>
          <a class="text-[#FFC107] hover:text-[#FFC107]/80" href="https://tailwindcss.com/docs/installation/using-vite" target="_blank" rel="noopener noreferrer">Tailwind Learn</a>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">FEVEREIRO 2026</p>
          <router-link class="flex" to="/frontend/vue">
            <h2 class="text-[24px] mb-5">Vue</h2>
            <img class="h-4 ml-2 mt-1" src="/img/vuejs.png" alt="" />
          </router-link>
          <p class="text-[14px]">Brilha nas aplicações que tem uma interação mais simples, poucas interações do usuario (blog, ecommerce)</p>
          <a class="text-[#FFC107] hover:text-[#FFC107]/80" href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener noreferrer">Vue Learn</a>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">FEVEREIRO 2026</p>
          <router-link class="flex" to="/frontend/react">
            <h2 class="text-[24px] mb-5">React</h2>
            <img class="h-5 ml-2 mt-1" src="/img/react.png" alt="" />
          </router-link>
          <p class="text-[14px]">Brilha nas aplicações extremamente interativa, varias interações possiveis do usuario (instagram, youtube)</p>
          <a class="text-[#FFC107] hover:text-[#FFC107]/80" href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">React Learn</a>
        </div>

        <div class="bg-[#070808] p-5 border-2 border-solid rounded-xl">
          <p class="text-[12px] mb-1">FEVEREIRO 2026</p>
          <router-link class="flex" to="/frontend/html">
            <h2 class="text-[24px] mb-5">Html</h2>
            <img class="h-4 ml-2 mt-1" src="/img/html.png" alt="" />
          </router-link>
          <p class="text-[14px]">Elementos html pouco falados, mas que são muito uteis para o dia a dia, como o details, summary, progress, meter, etc.</p>
          <a class="text-[#FFC107] hover:text-[#FFC107]/80" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML Learn</a>
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
