<template>
  <div class="min-h-screen w-full flex flex-col items-center py-10">

        <button class="self-start ml-10 text-white py-2 px-6 
                border border-white rounded-full 
                hover:bg-white hover:text-black transition-colors duration-300" 
        @click="voltar">
            BackEnd
        </button>

        <div class="mt-10 max-w-[945px] px-6 text-[#D9D7E0] text-center">

            <h1 class="text-[50px]">
                Flask
            </h1>
            
            <p class="mt-10 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aut. Temporibus aperiam rem quia quam itaque animi recusandae, quaerat maiores corporis iste nesciunt explicabo neque aspernatur mollitia dolor nobis tenetur.
            </p>
            
        </div>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const voltar = () => router.back()
</script>