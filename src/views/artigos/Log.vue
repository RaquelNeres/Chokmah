<template>
    <div class="text-[#D9D7E0] min-h-screen flex flex-col items-center py-10">
        <button class="self-start ml-10 text-white py-2 px-6
                border border-white rounded-full
                hover:bg-white hover:text-black transition-colors duration-300"
          @click="voltar">
           Voltar
        </button>

        <div class="mt-10 max-w-[945px] px-6 text-justify ml-[10%] mr-[10%]">
            <a target="_blank" href="https://youtu.be/hT4Vh44eKpU?si=i1f8b-197Eqj6Pn5">
                <h1 class="font-bold text-[50px] text-center">
                    Analise Logaritmica
                </h1>
            </a>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const voltar = () => router.back()
</script>