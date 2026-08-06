<template>
  <nav id="sidebar" 
       :class="[
         showSidebar ? 'block' : 'hidden', 
         'md:block pl-5 fixed inset-y-0 left-0 z-40 w-[85%] max-w-[330px] h-full bg-[#131217] overflow-y-auto md:relative md:h-[960px] md:ml-10 md:w-full md:bg-transparent md:overflow-visible border-r border-[rgba(255,193,7,0.5)] py-[5%] shadow-2xl md:shadow-none transition-all duration-300'
       ]">

    <div class="flex justify-between items-center pr-4">
      <img class="rounded-full mt-6 mb-5 ml-10 h-[200px]" src="/img/anjo.png" alt="profile" />
      
    </div>

    <div class="text-left px-4">
      <h1 class="font-lobster text-[#d9d7e0] text-[36px] transition-all duration-300 ease-in-out hover:text-[#3c3c3c] hover:scale-105">
        <router-link to="/">Chokmah (חָכְמָה)</router-link>
      </h1>
    </div>

    <p class="text-[#ffffff] ml-2.5 text-right mr-7 mb-10 mt-1">
      O Chokmah foi criado com o objetivo de servir como um segundo cerebro; armazenando alguns elementos de cada assunto que eu gostaria de ter de facil acesso.
    </p>

    <div class="flex flex-col items-start text-left w-full">
      <router-link to="/frontend" class="text-[#d9d7e0] no-underline text-xl py-3 px-4 transition-all duration-300 ease-in-out w-full hover:border-l-4 hover:border-l-[#FFC107] hover:border-t-0 block">
        Frontend
      </router-link>
      
      <router-link to="/backend" class="text-[#d9d7e0] no-underline text-xl py-3 px-4 transition-all duration-300 ease-in-out w-full hover:border-l-4 hover:border-l-[#FFC107] hover:border-t-0 block">
        Backend
      </router-link>
      
      <router-link to="/artigos" class="text-[#D9D7E0] no-underline text-xl py-3 px-4 transition-all duration-300 ease-in-out w-full hover:border-l-4 hover:border-l-[#FFC107] hover:border-t-0 block">
        Artigos
      </router-link>
      
      <router-link to="/cursos" class="text-[#D9D7E0] no-underline text-xl py-3 px-4 transition-all duration-300 ease-in-out w-full hover:border-l-4 hover:border-l-[#FFC107] hover:border-t-0 block">
        Cursos
      </router-link>
      
      <router-link to="/ferramentas" class="text-[#D9D7E0] no-underline text-xl py-3 px-4 transition-all duration-300 ease-in-out w-full hover:border-l-4 hover:border-l-[#FFC107] hover:border-t-0 block">
        Ferramentas
      </router-link>

      <div class="flex gap-5 ml-4 mt-3">
        <a href="https://github.com/RaquelNeres" target="_blank" rel="noopener noreferrer">
          <img src="/img/github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/raqueneres/" target="_blank" rel="noopener noreferrer">
          <img src="/img/linkedind.png" alt="linkedin" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { inject } from 'vue'

// Injetando o estado global do menu para que ele saiba quando abrir
const showSidebar = inject('showSidebar')
</script>