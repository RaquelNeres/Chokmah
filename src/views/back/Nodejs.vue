<template>
    <div class="text-[#D9D7E0] min-h-screen flex flex-col items-center py-10">
        <button class="self-start ml-10 text-white py-2 px-6
                border border-white rounded-full
                hover:bg-white hover:text-black transition-colors duration-300"
          @click="voltar">
           Voltar
        </button>

        <div class="mt-10 max-w-[945px] px-6 text-justify ml-[10%] mr-[10%]">
            <a target="_blank" href="https://nodejs.org/docs/">
                <h1 class="font-bold text-[50px] text-center hover:text-green-400 transition-colors duration-300">
                    Node.js (APIs)
                </h1>
            </a>
            
            <ul class="space-y-5 mt-10">
                
                <details class="mt-10 text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden">
                    <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">
                        Instalação & Setup Básico (Express)
                    </summary>
                    
                    <div class="px-5 pb-5 pt-5">
                        <p><code class="text-green-400">npm init -y</code>: Inicializa o projeto Node (cria o package.json).</p>
                        
                        <p><code class="text-green-400">npm install express</code>: Instala o framework padrão para criar APIs.</p>

                        <p><code class="text-green-400">npm install -D nodemon</code>: Instala o Nodemon para reiniciar o servidor automaticamente ao salvar.</p>

                        <p class="mt-5"><code class="text-green-400">const express = require('express')</code></p>
                        <p><code class="text-green-400">const app = express()</code>: Importa e inicializa o app no seu arquivo principal (ex: server.js).</p>
                    </div>
                </details>

                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-xl font-bold mb-4">1. Roteamento (Endpoints)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm">
                            <p><code class="text-green-400">app.get('/users', ...)</code>: Cria uma rota para buscar dados.</p>
                            <p><code class="text-green-400">req (Request)</code>: Traz os dados do cliente (body, params, headers).</p>
                            <p><code class="text-green-400">res (Response)</code>: Usado para devolver a resposta ao cliente.</p>
                            <p><code class="text-green-400">res.json({...})</code>: Retorna os dados em formato JSON.</p>
                            <p><code class="text-green-400">app.listen(3000)</code>: Faz a API rodar e "escutar" a porta 3000.</p>
                        </div>
                        
                        <div class="flex flex-col items-center justify-center p-4 border-gray-600 rounded bg-[#131217]">
                            <button class="bg-green-600 text-white font-bold py-2 px-6 rounded hover:bg-green-400 hover:text-black transition-all">
                                GET /users
                            </button>
                            <span class="text-xs text-gray-500 mt-2 font-mono">{ "status": 200, "data": [] }</span>
                        </div>
                    </div>
                </li>

                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-xl font-bold mb-4">2. Recebendo Dados (Request)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm">
                            <p><code class="text-green-400">req.body</code>: Dados sensíveis ou longos enviados no corpo (POST/PUT).</p>
                            <p><code class="text-green-400">req.params</code>: Parâmetros direto na URL. Ex: <code class="text-gray-400">/users/:id</code>.</p>
                            <p><code class="text-green-400">req.query</code>: Filtros na URL. Ex: <code class="text-gray-400">/users?age=20</code>.</p>
                            <p><code class="text-green-400">app.use(express.json())</code>: Obrigatório para a API entender JSON no <code class="text-gray-400">req.body</code>.</p>
                        </div>

                        <div class="flex items-center justify-center border-gray-600 rounded bg-[#131217] p-4">
                            <div class="bg-purple-900 border-purple-500 p-4 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center text-xs">
                                <span>req.body</span>
                                <span class="text-[10px] text-gray-300 mt-1">{ name: 'Ana' }</span>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const voltar = () => router.back()
</script>