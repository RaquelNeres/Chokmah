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
        <h1 class="font-bold text-[50px] text-center text-green-600">
          <a href="https://youtu.be/LGpJuDUaHXY?si=Su7SkPZN37BocrE5" target="_blank" class="text-green-600">Docker</a>
        </h1>

        <ul class="space-y-5 mt-10">

          <details class="mt-10 text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden">
            <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">
              Instalação
            </summary>

            <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
              <p class="text-sm text-gray-300 mb-3">Baixe do site oficial: <a href="https://www.docker.com/products/docker-desktop" target="_blank" class="text-blue-400 hover:underline">docker.com</a></p>
              <p class="text-sm text-gray-300">Depois de instalar, verifique com: <code class="text-pink-400 font-mono">docker --version</code></p>
            </li>
          </details>

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

          <!-- Comandos Práticos -->
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Referência Rápida: Comandos Essenciais</h3>
            <ul class="text-sm text-gray-300 space-y-3">
              <li><code class="text-pink-400 font-mono bg-[#131217] px-1 py-0.5 rounded">docker ps</code> / <code class="text-pink-400 font-mono bg-[#131217] px-1 py-0.5 rounded">docker ps -a</code>: Lista os contêineres que estão rodando agora / ou a lista completa (incluindo os já parados).</li>
              <li><code class="text-pink-400 font-mono bg-[#131217] px-1 py-0.5 rounded">docker images</code>: Lista as imagens baixadas/criadas localmente no seu host.</li>
              <li><code class="text-pink-400 font-mono bg-[#131217] px-1 py-0.5 rounded">docker run -d -p 8080:80 --name server nginx</code>: Cria, nomeia e inicia o contêiner em background (detach), mapeando as portas.</li>
              <li><code class="text-pink-400 font-mono bg-[#131217] px-1 py-0.5 rounded">docker stop &lt;id&gt;</code> / <code class="text-pink-400 font-mono bg-[#131217] px-1 py-0.5 rounded">docker rm -f &lt;id&gt;</code>: Para o contêiner graciosamente / força a remoção total.</li>
              <li><code class="text-pink-400 font-mono bg-[#131217] px-1 py-0.5 rounded">docker exec -it &lt;id&gt; bash</code>: Abre um terminal interativo por dentro do contêiner para debugar.</li>
              <li><code class="text-pink-400 font-mono bg-[#131217] px-1 py-0.5 rounded">docker compose down</code>: Derruba com segurança todos os contêineres e redes orquestrados no arquivo compose.</li>
            </ul>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Dockerfile</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code># Use uma imagem base
FROM node:20-alpine

# Define a pasta de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos do projeto
COPY . .
# Ou arquivos específicos:
COPY main.py /app 

# Instala dependências
RUN npm install
# Ou as dependencias especificadas em um requirements.txt (Python):
RUN pip install -r requirements.txt

# Expõe a porta
EXPOSE 3000

# Comando padrão ao iniciar
CMD ["npm", "run", "dev"]
# Ou para Python FastAPI:
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
          </code></pre>
            <p class="text-xs text-gray-400 mt-3">Para construir, dando um nome para a imagem: <code class="text-pink-400 font-mono">docker build -t meu-app</code></p>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">
              <a href="https://youtu.be/9a0QRHO3yFU?si=62U7x6gu6J-t1niF" target="_blank">
                Compose
              </a> 
            </h3>
            <p class="text-sm text-gray-300 mb-3">Quando a sua aplicação cresce e precisa de múltiplos contêineres (Frontend + Backend + Database, por exemplo), rodar cada <code class="text-pink-400 font-mono">docker run</code> separadamente vira uma dor de cabeça. Centraliza toda a infraestrutura em um único arquivo YAML (<code class="text-pink-400 font-mono">docker-compose.yml</code>):</p>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>version: '3.8'
services:
  app:
    build: .                   # Constrói a imagem baseada no Dockerfile local
    ports:
      - "8000:8000"            # Mapeia a porta do Host para a do Contêiner (HOST:CONTAINER)
    depends_on:
      - db                     # Ordem de inicialização: o App só sobe se o DB subir
  
  db:
    image: postgres:15-alpine  # Puxa imagem oficial direto do Docker Hub
    environment:
      POSTGRES_PASSWORD: root  # Injeta variáveis de ambiente no serviço
    volumes:
      - dados-db:/var/lib/postgresql/data  # Configura persistência com Named Volume

volumes:
  dados-db:                    # Declaração do volume nomeado</code></pre>
            <p class="text-xs text-gray-400 mt-3">Depois execute: <code class="text-pink-400 font-mono">docker compose up -d</code></p>
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