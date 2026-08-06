<template>
  <link rel="icon" type="image/png" href="../public/img/grego.png">
  <div class="bg-[#131217] min-h-screen [zoom:1.1]">
    <!-- Mobile sidebar overlay -->
    <div v-if="showSidebar" class="fixed inset-0 z-50 md:hidden">
      <div class="absolute inset-0 bg-black/50" @click="showSidebar = false"></div>
      <div class="absolute left-0 top-0 bottom-0 w-4/5 max-w-[330px] bg-[#131217] overflow-auto">
        <Sidebar />
      </div>
    </div>

    <div class="max-w-[1070px] mx-auto flex justify-between items-start md:gap-6">
      <!-- Desktop sidebar -->
      <div v-if="showSidebarFlag" class="hidden md:block">
        <Sidebar />
      </div>

      <main class="flex-1">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const showSidebar = ref(false)
const route = useRoute()

// Esconder sidebar em rotas de ferramentas e artigos detalhados
const showSidebarFlag = computed(() => {
  const hiddenPaths = [
    '/ferramentas/docker',
    '/ferramentas/vite',
    '/ferramentas/git',
    '/ferramentas/sql',
    '/frontend/react',
    '/frontend/html',
    '/frontend/tailwind',
    '/frontend/vue',
    '/backend/python',
    '/backend/flask',
    '/backend/fastapi',
    '/artigos/git-practices',
    '/artigos/introducao-http',
    '/geral'
  ]
  return !hiddenPaths.includes(route.path)
})

watch(
  () => route.path,
  () => {
    showSidebar.value = false
  }
)

provide('showSidebar', showSidebar)
</script>
