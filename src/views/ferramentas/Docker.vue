<template>
  <div class="bg-[#131217] text-[#D9D7E0] text-base min-h-screen">
    <div class="min-h-screen flex flex-col items-center py-10">
      <img
        v-if="!showSidebar"
        @click="showSidebar = true"
        id="menu-btn"
        class="fixed top-2 left-2 z-50 block md:hidden p-2 cursor-pointer bg-[#131217] hover:bg-gray-800"
        src="/img/opcao.png"
        alt="abrir barra lateral"
      />
      <router-link class="self-start ml-10 text-white py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300" to="/ferramentas">
        Voltar
      </router-link>

      <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto">
        <h1 class="font-bold text-[50px] text-center text-white">Docker</h1>
        <p class="text-center text-gray-400 mt-2 text-sm">Plataforma que empacota aplicações e dependências em contêineres isolados e reutilizáveis.</p>

        <ul class="space-y-5 mt-10">
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Instalação</h3>
            <p class="text-sm text-gray-300 mb-3">Baixe do site oficial: <a href="https://www.docker.com/products/docker-desktop" target="_blank" class="text-blue-400 hover:underline">docker.com</a></p>
            <p class="text-sm text-gray-300">Depois de instalar, verifique com: <code class="text-pink-400 font-mono">docker --version</code></p>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Conceitos Principais</h3>
            <ul class="text-sm text-gray-300 space-y-2 list-disc pl-5">
              <li><strong class="text-white">Imagem:</strong> Modelo (blueprint) que descreve como montar um contêiner</li>
              <li><strong class="text-white">Contêiner:</strong> Instância rodando isoladamente da imagem</li>
              <li><strong class="text-white">Dockerfile:</strong> Arquivo de script que define como construir uma imagem</li>
              <li><strong class="text-white">Registry:</strong> Repositório remoto de imagens (Docker Hub é o padrão)</li>
            </ul>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Comandos Essenciais</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>docker build -t meu-app:1.0 .        # Cria imagem a partir do Dockerfile
docker run -p 3000:3000 meu-app:1.0 # Inicia um contêiner
docker ps                             # Lista contêineres rodando
docker ps -a                          # Lista todos os contêineres
docker stop id-do-conteiner          # Para um contêiner
docker rm id-do-conteiner            # Remove um contêiner
docker logs id-do-conteiner          # Vê os logs do contêiner
docker pull ubuntu                    # Baixa uma imagem do registry
docker push meu-app:1.0              # Envia uma imagem ao registry</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Dockerfile Exemplo</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code># Use uma imagem base
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala dependências
RUN npm install

# Expõe a porta
EXPOSE 3000

# Comando padrão ao iniciar
CMD ["npm", "run", "dev"]</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Docker Compose</h3>
            <p class="text-sm text-gray-300 mb-3">Orquestra múltiplos contêineres em um arquivo YAML (<code class="text-pink-400 font-mono">docker-compose.yml</code>):</p>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret</code></pre>
            <p class="text-xs text-gray-400 mt-3">Depois execute: <code class="text-pink-400 font-mono">docker compose up</code></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const showSidebar = inject('showSidebar') || { value: false }
</script>