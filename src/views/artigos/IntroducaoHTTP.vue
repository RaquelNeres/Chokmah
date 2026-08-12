<template>
  <div class="text-[#D9D7E0] min-h-screen flex flex-col items-center py-10">
    <button class="self-start ml-10 text-white py-2 px-6
            border border-white rounded-full
            hover:bg-white hover:text-black transition-colors duration-300"
      @click="voltar">
        Voltar
    </button>

    <div class="mt-10 max-w-[945px] px-6 text-justify ml-[10%] mr-[10%]">
      <h1 class="font-bold text-[50px] text-center mb-10">Introdução ao HTTP</h1>

      <div class="space-y-4">
        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">O que é HTTP?</h2>
          <p class="text-sm text-gray-300">HTTP é um protocolo de camada de aplicação baseado no modelo <strong>requisição-resposta</strong>. O cliente (navegador) envia uma requisição, e o servidor responde com os dados solicitados.</p>
          <p class="text-xs text-gray-400 mt-3">Versões: HTTP/1.1 (tradicional), HTTP/2 (mais rápido), HTTP/3 (QUIC, ainda mais rápido).</p>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Métodos HTTP (Verbos)</h2>
          <div class="text-sm text-gray-300 space-y-2">
            <div class="border-l-2 border-green-500 pl-3">
              <p class="font-semibold text-white">GET</p>
              <p class="text-xs">Solicita dados. Não altera estado no servidor. Idempotente.</p>
            </div>
            <div class="border-l-2 border-blue-500 pl-3">
              <p class="font-semibold text-white">POST</p>
              <p class="text-xs">Envia dados para criar novo recurso. Pode ter efeito colateral.</p>
            </div>
            <div class="border-l-2 border-yellow-500 pl-3">
              <p class="font-semibold text-white">PUT</p>
              <p class="text-xs">Substitui completamente um recurso existente. Idempotente.</p>
            </div>
            <div class="border-l-2 border-purple-500 pl-3">
              <p class="font-semibold text-white">PATCH</p>
              <p class="text-xs">Atualiza parcialmente um recurso. Menos usado que PUT.</p>
            </div>
            <div class="border-l-2 border-red-500 pl-3">
              <p class="font-semibold text-white">DELETE</p>
              <p class="text-xs">Remove um recurso. Idempotente.</p>
            </div>
            <div class="border-l-2 border-gray-500 pl-3">
              <p class="font-semibold text-white">HEAD</p>
              <p class="text-xs">Como GET, mas sem o corpo da resposta.</p>
            </div>
            <div class="border-l-2 border-cyan-500 pl-3">
              <p class="font-semibold text-white">OPTIONS</p>
              <p class="text-xs">Descreve as opções de comunicação disponíveis (CORS).</p>
            </div>
          </div>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Status Codes (Códigos de Resposta)</h2>
          <div class="text-sm text-gray-300 space-y-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="font-bold text-blue-400">1xx - Informacional</p>
                <p class="text-xs">Comunicação em andamento. Raramente visto.</p>
              </div>
              <div>
                <p class="font-bold text-green-400">2xx - Sucesso</p>
                <ul class="text-xs space-y-1">
                  <li><code>200</code> OK</li>
                  <li><code>201</code> Created (POST bem-sucedido)</li>
                  <li><code>204</code> No Content</li>
                </ul>
              </div>
              <div>
                <p class="font-bold text-yellow-400">3xx - Redirecionamento</p>
                <ul class="text-xs space-y-1">
                  <li><code>301</code> Moved Permanently</li>
                  <li><code>302</code> Found (redireção temporária)</li>
                  <li><code>304</code> Not Modified (cache)</li>
                </ul>
              </div>
              <div>
                <p class="font-bold text-red-400">4xx - Erro do Cliente</p>
                <ul class="text-xs space-y-1">
                  <li><code>400</code> Bad Request</li>
                  <li><code>401</code> Unauthorized (sem autenticação)</li>
                  <li><code>403</code> Forbidden (sem permissão)</li>
                  <li><code>404</code> Not Found</li>
                </ul>
              </div>
              <div>
                <p class="font-bold text-pink-400">5xx - Erro do Servidor</p>
                <ul class="text-xs space-y-1">
                  <li><code>500</code> Internal Server Error</li>
                  <li><code>502</code> Bad Gateway</li>
                  <li><code>503</code> Service Unavailable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Cabeçalhos (Headers) Importantes</h2>
          <div class="text-xs text-gray-300 space-y-2 font-mono">
            <div class="bg-[#0f0f12] p-3 rounded">
              <p class="text-pink-400">Content-Type: application/json</p>
              <p class="text-gray-400">Define o formato dos dados (JSON, HTML, XML, etc.)</p>
            </div>
            <div class="bg-[#0f0f12] p-3 rounded">
              <p class="text-pink-400">Authorization: Bearer token123</p>
              <p class="text-gray-400">Envia token para autenticação (JWT, OAuth)</p>
            </div>
            <div class="bg-[#0f0f12] p-3 rounded">
              <p class="text-pink-400">Cache-Control: max-age=3600</p>
              <p class="text-gray-400">Controla cachê (1 hora neste caso)</p>
            </div>
            <div class="bg-[#0f0f12] p-3 rounded">
              <p class="text-pink-400">Access-Control-Allow-Origin: *</p>
              <p class="text-gray-400">CORS - permite requisições de outras origens</p>
            </div>
            <div class="bg-[#0f0f12] p-3 rounded">
              <p class="text-pink-400">User-Agent: Mozilla/5.0...</p>
              <p class="text-gray-400">Identifica o cliente (navegador, bot, etc.)</p>
            </div>
          </div>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">Fluxo HTTP Básico</h2>
          <pre class="text-sm text-gray-300 bg-[#0f0f12] p-3 rounded overflow-x-auto"><code>1. Cliente abre navegador e acessa: https://exemplo.com/api/users

2. Navegador cria REQUISIÇÃO HTTP:
  GET /api/users HTTP/1.1
  Host: exemplo.com
  Content-Type: application/json

3. Servidor processa e retorna RESPOSTA HTTP:
  HTTP/1.1 200 OK
  Content-Type: application/json
  
  {
    "users": [
      {"id": 1, "name": "João"},
      {"id": 2, "name": "Maria"}
    ]
  }

4. Navegador renderiza os dados</code></pre>
        </div>

        <div class="bg-[#1e1b29] rounded p-5">
          <h2 class="text-xl font-semibold mb-3">HTTPS vs HTTP</h2>
          <ul class="text-sm text-gray-300 space-y-2">
            <li><strong class="text-white">HTTP:</strong> Texto claro (inseguro). Porta 80.</li>
            <li><strong class="text-white">HTTPS:</strong> HTTP + TLS/SSL (criptografado). Porta 443.</li>
            <li>✅ Sempre use HTTPS em produção!</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const voltar = () => router.back()
</script>