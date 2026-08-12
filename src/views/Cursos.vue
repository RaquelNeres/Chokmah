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
        <h1 class="mt-16 text-[50px] mb-1">Cursos</h1>

        <div class="bg-[#070808] p-5 
            border-2 border-solid rounded-xl">
            <p class="text-[12px] mb-1">
                FEVEREIRO 2026
            </p>
            <a class="flex" target="_blank" href="https://cs50.harvard.edu/x/2025/">
                <h2 class="text-[24px] mb-5">CS50</h2>
                <img class="h-4 ml-2 mt-1" src="../../public/img/cs50.png" alt="CS50">
            </a>
            <p class="text-[14px]">
                Pra mim o melhor curso introdutorio que tem na area da programação, consegue unir uma base boa e solida de tanto do frontend quanto do backend e ainda por cima de dados.
            </p>
        </div>
        <div class="bg-[#070808] p-5 
        border-2 border-solid rounded-xl">
            <p class="text-[12px] mb-1">
                FEVEREIRO 2026
            </p>
            <a class="flex" target="_blank" href="https://www.udemy.com/share/10dVHR3@GRZlZDlPvIN8_P_Z3cTPVX64RaZF8LSxqRxEyqhsddlXeEHO8mGJIa_RGk6SNI0lBQ==/">
                <h2 class="text-[24px] mb-5">Python Automatico</h2>
                <img class="h-4 ml-2 mt-1" src="../../public/img/py.png" alt="Python Automatico">
            </a>
            <p class="text-[14px]">
                Curso pago (valor simbolico) mas que tem muito a agragar, possui diversos projetos interessantes para por no seu curriculo.
            </p>
        </div>
        <div class="bg-[#070808] p-5 
        border-2 border-solid rounded-xl">
            <p class="text-[12px] mb-1">
                FEVEREIRO 2026
            </p>
            <a class="flex" target="_blank" href="https://www.freecodecamp.org/portuguese/news/como-criar-uma-aplicacao-da-web-usando-o-flask-e-implanta-la-na-nuvem/">
                <h2 class="text-[24px] mb-5">Como criar uma aplicação da web usando o Flask e implantá-la na nuvem</h2>
            </a>
            <p class="text-[14px]">
                Um simples tutorial inicial de Flask, possui uma dinamica/didatica bem instigante onde nem ve a hora passar.
            </p>
        </div>
        <div class="bg-[#070808] p-5 
        border-2 border-solid rounded-xl">
            <p class="text-[12px] mb-1">
                AGOSTO 2026
            </p>
            <a class="flex" target="_blank" href="https://www.freecodecamp.org/portuguese/news/como-criar-uma-aplicacao-da-web-usando-o-flask-e-implanta-la-na-nuvem/">
                <h2 class="text-[24px] mb-5">akira アキラ</h2>
            </a>
            <p class="text-[14px]">
                <b>Simplesmente a inspiração desse projeto</b>, a lenda tem explicações de diversos temas como: programação, filosofia, vida, sociedade e etc. Recomendo fortemente a leitura.
            </p>
        </div>

        <div class="flex justify-between w-full mt-1 mb-10">
            <a href="">
                <img src="../../public/img/seta.png" alt="Anterior">
            </a>
            
            <a href="">
                <img class="-scale-x-100" src="../../public/img/seta.png" alt="Próximo">
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const showSidebar = inject('showSidebar') || { value: false }
</script>
