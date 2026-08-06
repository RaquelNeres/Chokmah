<template>
  <div class="bg-[#131217] text-[#D9D7E0] min-h-screen">
    <div class="max-w-[900px] mx-auto p-8">
      <img
        v-if="!showSidebar"
        @click="showSidebar = true"
        id="menu-btn"
        class="fixed top-2 left-2 z-50 block md:hidden p-2 cursor-pointer bg-[#131217] hover:bg-gray-800"
        src="/img/opcao.png"
        alt="abrir barra lateral"
      />

      <h1 class="text-[50px] mb-4">Geral</h1>
      <p class="text-gray-300 mb-6">Notas gerais e anotações soltas — espaço para conteúdo que não se encaixa nas categorias específicas.</p>

      <section class="mt-6 space-y-4">
        <div class="bg-[#0f0f12] p-4 rounded">Exemplo de nota geral.</div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const showSidebar = inject('showSidebar') || { value: false }
</script>
