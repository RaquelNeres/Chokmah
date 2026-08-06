<template>
<div class="min-h-screen flex flex-col items-center py-10">
        <button class="self-start ml-10 text-white py-2 px-6
                border border-white rounded-full
                hover:bg-white hover:text-black transition-colors duration-300"
        @click="voltar">
           Voltar
        </button>

        <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto">
            <h1 class="font-bold text-[50px] text-center text-white">FastAPI</h1>
            <p class="text-center text-gray-400 mt-2 text-sm">Baseado na documentação oficial — <a href="https://fastapi.tiangolo.com" class="text-teal-400 hover:underline">fastapi.tiangolo.com</a></p>

            <!-- INSTALAÇÃO -->
            <details class="mt-10 text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden">
                <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">
                    Instalação e Configuração do Projeto
                </summary>
                <div class="px-5 pb-5 pt-5 space-y-4 text-sm text-gray-300">
                    <p>Instale o FastAPI junto com o <span class="text-white font-semibold">Uvicorn</span> — o servidor ASGI usado para rodar a aplicação. Sempre dentro de um <code class="text-teal-400">venv</code> ativo.</p>
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="border-b border-gray-500 text-gray-300">
                                <th class="py-3 pr-4">Comando</th>
                                <th class="py-3">Descrição</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-200">
                            <tr class="border-b border-gray-700">
                                <td class="py-4 pr-4"><code class="text-teal-400">pip install fastapi uvicorn[standard]</code></td>
                                <td class="py-4">Instala o FastAPI e o Uvicorn com extras recomendados (websockets, reload, etc).</td>
                            </tr>
                            <tr class="border-b border-gray-700">
                                <td class="py-4 pr-4"><code class="text-teal-400">uvicorn main:app --reload</code></td>
                                <td class="py-4">Inicia o servidor apontando para o objeto <code>app</code> dentro de <code>main.py</code>. O <code>--reload</code> reinicia ao salvar.</td>
                            </tr>
                            <tr class="border-b border-gray-700">
                                <td class="py-4 pr-4"><code class="text-teal-400">uvicorn main:app --host 0.0.0.0 --port 8000</code></td>
                                <td class="py-4">Expõe o servidor na rede local na porta 8000.</td>
                            </tr>
                            <tr>
                                <td class="py-4 pr-4"><code class="text-teal-400">pip install sqlalchemy pydantic[email] python-jose passlib</code></td>
                                <td class="py-4">Pacotes extras comuns: ORM, validação de e-mail, JWT e hashing de senha.</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="text-gray-400 text-sm mt-2">A documentação interativa fica disponível automaticamente em <code class="text-teal-400">http://localhost:8000/docs</code> (Swagger UI) e <code class="text-teal-400">/redoc</code>.</p>
                </div>
            </details>

            <!-- ESTRUTURA DE PROJETO -->
            <details class="mt-4 text-left bg-[#1e1b29] rounded-[0.5rem] overflow-hidden">
                <summary class="text-xl font-semibold text-white cursor-pointer hover:bg-[#2a2738] pl-5 py-3 transition-colors">
                    Estrutura de Projeto Recomendada
                </summary>
                <div class="px-5 pb-5 pt-5">
                    <p class="text-sm text-gray-300 mb-4">Para projetos além de um único arquivo, separe responsabilidades por domínio. Estrutura comum em produção:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="bg-[#131217] rounded p-4 font-mono text-xs text-gray-300">
                            <p class="text-teal-400">meu-projeto/</p>
                            <p class="pl-4">├── <span class="text-white">main.py</span>              <span class="text-gray-500"># ponto de entrada</span></p>
                            <p class="pl-4">├── <span class="text-white">database.py</span>          <span class="text-gray-500"># sessão do banco</span></p>
                            <p class="pl-4">├── <span class="text-teal-400">routers/</span></p>
                            <p class="pl-8">├── users.py</p>
                            <p class="pl-8">└── items.py</p>
                            <p class="pl-4">├── <span class="text-teal-400">models/</span>              <span class="text-gray-500"># ORM (SQLAlchemy)</span></p>
                            <p class="pl-8">└── user.py</p>
                            <p class="pl-4">├── <span class="text-teal-400">schemas/</span>             <span class="text-gray-500"># Pydantic</span></p>
                            <p class="pl-8">└── user.py</p>
                            <p class="pl-4">├── <span class="text-teal-400">services/</span>            <span class="text-gray-500"># regras de negócio</span></p>
                            <p class="pl-8">└── auth.py</p>
                            <p class="pl-4">└── <span class="text-white">requirements.txt</span></p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p class="text-gray-500"># main.py</p>
                            <p><span class="text-blue-400">from</span> fastapi <span class="text-blue-400">import</span> FastAPI</p>
                            <p><span class="text-blue-400">from</span> routers <span class="text-blue-400">import</span> users, items</p>
                            <br>
                            <p>app = <span class="text-teal-400">FastAPI</span>(</p>
                            <p class="pl-4">title=<span class="text-green-400">"Minha API"</span>,</p>
                            <p class="pl-4">version=<span class="text-green-400">"1.0.0"</span>,</p>
                            <p class="pl-4">description=<span class="text-green-400">"Docs automáticos!"</span></p>
                            <p>)</p>
                            <br>
                            <p>app.<span class="text-yellow-300">include_router</span>(users.router)</p>
                            <p>app.<span class="text-yellow-300">include_router</span>(items.router)</p>
                        </div>
                    </div>
                </div>
            </details>

            <ul class="space-y-5 mt-10">

                <!-- 1. ROTAS BÁSICAS -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">1. Rotas e Métodos HTTP</h3>
                    <div class="space-y-4">
                        <p class="text-sm text-gray-300">No FastAPI, cada rota é uma função Python decorada com o método HTTP correspondente. O retorno da função vira automaticamente a resposta JSON.</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-sm text-gray-400">
                                <thead class="text-gray-200 uppercase bg-gray-700/50 text-xs">
                                    <tr>
                                        <th class="px-4 py-3">Decorator</th>
                                        <th class="px-4 py-3">Método HTTP</th>
                                        <th class="px-4 py-3">Uso típico</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-700">
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-teal-400">@app.get("/rota")</td>
                                        <td class="px-4 py-3">GET</td>
                                        <td class="px-4 py-3">Buscar dados</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-teal-400">@app.post("/rota")</td>
                                        <td class="px-4 py-3">POST</td>
                                        <td class="px-4 py-3">Criar recursos</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-teal-400">@app.put("/rota/{id}")</td>
                                        <td class="px-4 py-3">PUT</td>
                                        <td class="px-4 py-3">Atualizar completamente</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-teal-400">@app.patch("/rota/{id}")</td>
                                        <td class="px-4 py-3">PATCH</td>
                                        <td class="px-4 py-3">Atualizar parcialmente</td>
                                    </tr>
                                    <tr class="hover:bg-gray-700/30">
                                        <td class="px-4 py-3 font-mono text-teal-400">@app.delete("/rota/{id}")</td>
                                        <td class="px-4 py-3">DELETE</td>
                                        <td class="px-4 py-3">Remover recursos</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-blue-400">from</span> fastapi <span class="text-blue-400">import</span> FastAPI</p>
                            <br>
                            <p>app = <span class="text-teal-400">FastAPI</span>()</p>
                            <br>
                            <p><span class="text-yellow-300">@app.get</span>(<span class="text-green-400">"/"</span>)</p>
                            <p><span class="text-blue-400">def</span> <span class="text-yellow-300">raiz</span>():</p>
                            <p class="pl-4"><span class="text-blue-400">return</span> {<span class="text-green-400">"mensagem"</span>: <span class="text-green-400">"Olá, FastAPI!"</span>}</p>
                            <br>
                            <p><span class="text-yellow-300">@app.get</span>(<span class="text-green-400">"/users/{user_id}"</span>)</p>
                            <p><span class="text-blue-400">def</span> <span class="text-yellow-300">get_user</span>(user_id: <span class="text-teal-400">int</span>):</p>
                            <p class="pl-4"><span class="text-blue-400">return</span> {<span class="text-green-400">"id"</span>: user_id}</p>
                        </div>
                    </div>
                </li>

                <!-- 2. PATH E QUERY PARAMS -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">2. Path Params, Query Params e Headers</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p><span class="text-white font-semibold">Path params</span> são declarados na string da rota e no parâmetro da função com o mesmo nome. O FastAPI converte e valida o tipo automaticamente.</p>
                            <p><span class="text-white font-semibold">Query params</span> são qualquer parâmetro da função que não esteja na rota — opcionais quando têm valor padrão.</p>
                            <p><span class="text-white font-semibold">Headers</span> e <span class="text-white font-semibold">Cookies</span> são declarados com <code class="text-teal-400">Header()</code> e <code class="text-teal-400">Cookie()</code> do FastAPI.</p>
                            <p class="text-teal-400 text-xs">💡 Se o path param for <code>int</code> e a URL receber uma string não numérica, o FastAPI já retorna um erro 422 automaticamente — sem você precisar validar.</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-blue-400">from</span> fastapi <span class="text-blue-400">import</span> FastAPI, Header, Query</p>
                            <br>
                            <p class="text-gray-500"># GET /items/42?skip=0&limit=10</p>
                            <p><span class="text-yellow-300">@app.get</span>(<span class="text-green-400">"/items/{item_id}"</span>)</p>
                            <p><span class="text-blue-400">def</span> <span class="text-yellow-300">get_item</span>(</p>
                            <p class="pl-4">item_id: <span class="text-teal-400">int</span>,</p>
                            <p class="pl-4">skip: <span class="text-teal-400">int</span> = <span class="text-blue-400">0</span>,</p>
                            <p class="pl-4">limit: <span class="text-teal-400">int</span> = <span class="text-blue-400">10</span>,</p>
                            <p class="pl-4">x_token: <span class="text-teal-400">str</span> | <span class="text-blue-400">None</span> = <span class="text-teal-400">Header</span>(<span class="text-blue-400">None</span>)</p>
                            <p>):</p>
                            <p class="pl-4"><span class="text-blue-400">return</span> {</p>
                            <p class="pl-8"><span class="text-green-400">"id"</span>: item_id,</p>
                            <p class="pl-8"><span class="text-green-400">"skip"</span>: skip,</p>
                            <p class="pl-8"><span class="text-green-400">"token"</span>: x_token</p>
                            <p class="pl-4">}</p>
                        </div>
                    </div>
                </li>

                <!-- 3. PYDANTIC / SCHEMAS -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">3. Schemas com Pydantic — <code class="text-teal-400 text-lg">BaseModel</code></h3>
                    <div class="space-y-4">
                        <p class="text-sm text-gray-300">O coração do FastAPI. Schemas Pydantic definem a <span class="text-white font-semibold">forma dos dados</span> que entram (body da requisição) e saem (response) da API — com validação automática e geração de docs.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                                <p class="text-gray-500"># schemas/user.py</p>
                                <p><span class="text-blue-400">from</span> pydantic <span class="text-blue-400">import</span> BaseModel, EmailStr</p>
                                <p><span class="text-blue-400">from</span> typing <span class="text-blue-400">import</span> Optional</p>
                                <br>
                                <p class="text-gray-500"># schema de criação (entrada)</p>
                                <p><span class="text-blue-400">class</span> <span class="text-teal-400">UserCreate</span>(BaseModel):</p>
                                <p class="pl-4">nome: <span class="text-teal-400">str</span></p>
                                <p class="pl-4">email: <span class="text-teal-400">EmailStr</span></p>
                                <p class="pl-4">senha: <span class="text-teal-400">str</span></p>
                                <br>
                                <p class="text-gray-500"># schema de resposta (saída — sem senha!)</p>
                                <p><span class="text-blue-400">class</span> <span class="text-teal-400">UserResponse</span>(BaseModel):</p>
                                <p class="pl-4">id: <span class="text-teal-400">int</span></p>
                                <p class="pl-4">nome: <span class="text-teal-400">str</span></p>
                                <p class="pl-4">email: <span class="text-teal-400">EmailStr</span></p>
                                <br>
                                <p class="pl-4"><span class="text-blue-400">class</span> Config:</p>
                                <p class="pl-8">from_attributes = <span class="text-blue-400">True</span> <span class="text-gray-500"># para ORM</span></p>
                            </div>
                            <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                                <p class="text-gray-500"># usando na rota</p>
                                <p><span class="text-blue-400">from</span> schemas.user <span class="text-blue-400">import</span> UserCreate, UserResponse</p>
                                <br>
                                <p><span class="text-yellow-300">@app.post</span>(</p>
                                <p class="pl-4"><span class="text-green-400">"/users"</span>,</p>
                                <p class="pl-4">response_model=<span class="text-teal-400">UserResponse</span>,</p>
                                <p class="pl-4">status_code=<span class="text-blue-400">201</span></p>
                                <p>)</p>
                                <p><span class="text-blue-400">def</span> <span class="text-yellow-300">criar_usuario</span>(user: <span class="text-teal-400">UserCreate</span>):</p>
                                <p class="pl-4"><span class="text-gray-500"># user.nome, user.email, user.senha</span></p>
                                <p class="pl-4"><span class="text-gray-500"># já validados pelo Pydantic!</span></p>
                                <p class="pl-4">...</p>
                                <br>
                                <p class="text-teal-400 text-xs mt-2 not-italic">⚠️ O <code>response_model</code> filtra automaticamente campos que não estão no schema de saída — como a senha.</p>
                            </div>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p class="text-gray-500"># validações avançadas com Field()</p>
                            <p><span class="text-blue-400">from</span> pydantic <span class="text-blue-400">import</span> BaseModel, Field</p>
                            <br>
                            <p><span class="text-blue-400">class</span> <span class="text-teal-400">Produto</span>(BaseModel):</p>
                            <p class="pl-4">nome: <span class="text-teal-400">str</span> = <span class="text-teal-400">Field</span>(min_length=<span class="text-blue-400">3</span>, max_length=<span class="text-blue-400">50</span>)</p>
                            <p class="pl-4">preco: <span class="text-teal-400">float</span> = <span class="text-teal-400">Field</span>(gt=<span class="text-blue-400">0</span>, description=<span class="text-green-400">"Deve ser positivo"</span>)</p>
                            <p class="pl-4">estoque: <span class="text-teal-400">int</span> = <span class="text-teal-400">Field</span>(default=<span class="text-blue-400">0</span>, ge=<span class="text-blue-400">0</span>)</p>
                        </div>
                    </div>
                </li>

                <!-- 4. ASYNC -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">4. Async — <code class="text-teal-400 text-lg">async def</code> vs <code class="text-teal-400 text-lg">def</code></h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>O FastAPI suporta rotas síncronas e assíncronas. A regra é simples:</p>
                            <div class="bg-[#131217] rounded p-4 text-xs space-y-2">
                                <div>
                                    <p class="text-teal-400 font-bold">Use <code>async def</code> quando:</p>
                                    <p class="text-gray-400 mt-1">Usar bibliotecas async: <code>httpx</code>, <code>asyncpg</code>, <code>motor</code> (MongoDB), <code>aiofiles</code>. Qualquer operação com <code>await</code>.</p>
                                </div>
                                <div>
                                    <p class="text-teal-400 font-bold">Use <code>def</code> quando:</p>
                                    <p class="text-gray-400 mt-1">Usar bibliotecas síncronas: <code>requests</code>, SQLAlchemy padrão, operações de CPU. O FastAPI roda em thread pool automaticamente.</p>
                                </div>
                            </div>
                            <p class="text-yellow-400 text-xs">⚠️ Não misture: chamar uma função bloqueante dentro de <code>async def</code> trava o event loop inteiro.</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-blue-400">import</span> httpx</p>
                            <br>
                            <p class="text-gray-500"># async — correto com httpx</p>
                            <p><span class="text-yellow-300">@app.get</span>(<span class="text-green-400">"/github/{user}"</span>)</p>
                            <p><span class="text-blue-400">async def</span> <span class="text-yellow-300">get_github</span>(user: <span class="text-teal-400">str</span>):</p>
                            <p class="pl-4"><span class="text-blue-400">async with</span> httpx.<span class="text-teal-400">AsyncClient</span>() <span class="text-blue-400">as</span> client:</p>
                            <p class="pl-8">res = <span class="text-blue-400">await</span> client.<span class="text-yellow-300">get</span>(</p>
                            <p class="pl-12"><span class="text-green-400">f"https://api.github.com/users/{"{user}"}"</span></p>
                            <p class="pl-8">)</p>
                            <p class="pl-4"><span class="text-blue-400">return</span> res.<span class="text-yellow-300">json</span>()</p>
                            <br>
                            <p class="text-gray-500"># sync — correto com SQLAlchemy padrão</p>
                            <p><span class="text-yellow-300">@app.get</span>(<span class="text-green-400">"/users"</span>)</p>
                            <p><span class="text-blue-400">def</span> <span class="text-yellow-300">listar_users</span>(db: Session = <span class="text-teal-400">Depends</span>(get_db)):</p>
                            <p class="pl-4"><span class="text-blue-400">return</span> db.<span class="text-yellow-300">query</span>(User).<span class="text-yellow-300">all</span>()</p>
                        </div>
                    </div>
                </li>

                <!-- 5. DEPENDS -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">5. Injeção de Dependências — <code class="text-teal-400 text-lg">Depends</code></h3>
                    <div class="space-y-4">
                        <p class="text-sm text-gray-300">O sistema de <span class="text-white font-semibold">Dependency Injection</span> do FastAPI é um dos seus recursos mais poderosos. Com <code class="text-teal-400">Depends()</code>, você reutiliza lógica entre rotas: sessão de banco, usuário logado, permissões, parâmetros comuns, etc.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                                <p class="text-gray-500"># database.py — dependência de sessão</p>
                                <p><span class="text-blue-400">from</span> sqlalchemy.orm <span class="text-blue-400">import</span> Session</p>
                                <br>
                                <p><span class="text-blue-400">def</span> <span class="text-yellow-300">get_db</span>():</p>
                                <p class="pl-4">db = <span class="text-teal-400">SessionLocal</span>()</p>
                                <p class="pl-4"><span class="text-blue-400">try</span>:</p>
                                <p class="pl-8"><span class="text-blue-400">yield</span> db  <span class="text-gray-500"># injeta a sessão</span></p>
                                <p class="pl-4"><span class="text-blue-400">finally</span>:</p>
                                <p class="pl-8">db.<span class="text-yellow-300">close</span>()  <span class="text-gray-500"># sempre fecha</span></p>
                            </div>
                            <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                                <p class="text-gray-500"># rota usando a dependência</p>
                                <p><span class="text-blue-400">from</span> fastapi <span class="text-blue-400">import</span> Depends</p>
                                <br>
                                <p><span class="text-yellow-300">@app.get</span>(<span class="text-green-400">"/users/{id}"</span>)</p>
                                <p><span class="text-blue-400">def</span> <span class="text-yellow-300">get_user</span>(</p>
                                <p class="pl-4">id: <span class="text-teal-400">int</span>,</p>
                                <p class="pl-4">db: Session = <span class="text-teal-400">Depends</span>(get_db),</p>
                                <p class="pl-4">user = <span class="text-teal-400">Depends</span>(get_current_user)</p>
                                <p>):</p>
                                <p class="pl-4"><span class="text-blue-400">return</span> db.<span class="text-yellow-300">query</span>(User).<span class="text-yellow-300">get</span>(id)</p>
                            </div>
                        </div>
                        <p class="text-teal-400 text-xs">💡 Dependências podem depender de outras dependências — o FastAPI resolve a árvore automaticamente e garante que o cleanup (<code>finally</code>) sempre roda.</p>
                    </div>
                </li>

                <!-- 6. HTTPException -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">6. Erros e <code class="text-teal-400 text-lg">HTTPException</code></h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>Para retornar erros HTTP, levante uma <code class="text-teal-400">HTTPException</code>. O FastAPI transforma em resposta JSON com o status code correto.</p>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left text-xs text-gray-400">
                                    <thead class="text-gray-200 bg-gray-700/50">
                                        <tr>
                                            <th class="px-3 py-2">Status</th>
                                            <th class="px-3 py-2">Significado</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-700">
                                        <tr><td class="px-3 py-2 text-teal-400">400</td><td class="px-3 py-2">Bad Request — dados inválidos</td></tr>
                                        <tr><td class="px-3 py-2 text-teal-400">401</td><td class="px-3 py-2">Unauthorized — não autenticado</td></tr>
                                        <tr><td class="px-3 py-2 text-teal-400">403</td><td class="px-3 py-2">Forbidden — sem permissão</td></tr>
                                        <tr><td class="px-3 py-2 text-teal-400">404</td><td class="px-3 py-2">Not Found — recurso não existe</td></tr>
                                        <tr><td class="px-3 py-2 text-teal-400">422</td><td class="px-3 py-2">Unprocessable — falha de validação Pydantic</td></tr>
                                        <tr><td class="px-3 py-2 text-teal-400">500</td><td class="px-3 py-2">Internal Server Error</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-blue-400">from</span> fastapi <span class="text-blue-400">import</span> HTTPException, status</p>
                            <br>
                            <p><span class="text-yellow-300">@app.get</span>(<span class="text-green-400">"/users/{id}"</span>)</p>
                            <p><span class="text-blue-400">def</span> <span class="text-yellow-300">get_user</span>(id: <span class="text-teal-400">int</span>, db: Session = <span class="text-teal-400">Depends</span>(get_db)):</p>
                            <p class="pl-4">user = db.<span class="text-yellow-300">query</span>(User).<span class="text-yellow-300">get</span>(id)</p>
                            <br>
                            <p class="pl-4"><span class="text-blue-400">if not</span> user:</p>
                            <p class="pl-8"><span class="text-blue-400">raise</span> <span class="text-teal-400">HTTPException</span>(</p>
                            <p class="pl-12">status_code=status.<span class="text-teal-400">HTTP_404_NOT_FOUND</span>,</p>
                            <p class="pl-12">detail=<span class="text-green-400">"Usuário não encontrado"</span></p>
                            <p class="pl-8">)</p>
                            <br>
                            <p class="pl-4"><span class="text-blue-400">return</span> user</p>
                        </div>
                    </div>
                </li>

                <!-- 7. AUTENTICAÇÃO JWT -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">7. Autenticação — JWT com OAuth2</h3>
                    <div class="space-y-4">
                        <p class="text-sm text-gray-300">O FastAPI tem suporte nativo ao fluxo <span class="text-white font-semibold">OAuth2 com Bearer Token (JWT)</span>. O padrão é: usuário faz login e recebe um token, que é enviado no header de cada requisição protegida.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                                <p class="text-gray-500"># auth.py</p>
                                <p><span class="text-blue-400">from</span> fastapi.security <span class="text-blue-400">import</span> OAuth2PasswordBearer</p>
                                <p><span class="text-blue-400">from</span> jose <span class="text-blue-400">import</span> jwt, JWTError</p>
                                <p><span class="text-blue-400">from</span> passlib.context <span class="text-blue-400">import</span> CryptContext</p>
                                <br>
                                <p>pwd_ctx = <span class="text-teal-400">CryptContext</span>(schemes=[<span class="text-green-400">"bcrypt"</span>])</p>
                                <p>oauth2 = <span class="text-teal-400">OAuth2PasswordBearer</span>(tokenUrl=<span class="text-green-400">"token"</span>)</p>
                                <br>
                                <p><span class="text-blue-400">def</span> <span class="text-yellow-300">criar_token</span>(data: <span class="text-teal-400">dict</span>):</p>
                                <p class="pl-4"><span class="text-blue-400">return</span> jwt.<span class="text-yellow-300">encode</span>(data, SECRET, algorithm=<span class="text-green-400">"HS256"</span>)</p>
                                <br>
                                <p><span class="text-blue-400">def</span> <span class="text-yellow-300">verificar_senha</span>(plain, hashed):</p>
                                <p class="pl-4"><span class="text-blue-400">return</span> pwd_ctx.<span class="text-yellow-300">verify</span>(plain, hashed)</p>
                            </div>
                            <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                                <p class="text-gray-500"># dependência que extrai o usuário do token</p>
                                <p><span class="text-blue-400">async def</span> <span class="text-yellow-300">get_current_user</span>(</p>
                                <p class="pl-4">token: <span class="text-teal-400">str</span> = <span class="text-teal-400">Depends</span>(oauth2),</p>
                                <p class="pl-4">db: Session = <span class="text-teal-400">Depends</span>(get_db)</p>
                                <p>):</p>
                                <p class="pl-4"><span class="text-blue-400">try</span>:</p>
                                <p class="pl-8">payload = jwt.<span class="text-yellow-300">decode</span>(token, SECRET, [<span class="text-green-400">"HS256"</span>])</p>
                                <p class="pl-8">email = payload.<span class="text-yellow-300">get</span>(<span class="text-green-400">"sub"</span>)</p>
                                <p class="pl-4"><span class="text-blue-400">except</span> JWTError:</p>
                                <p class="pl-8"><span class="text-blue-400">raise</span> <span class="text-teal-400">HTTPException</span>(<span class="text-blue-400">401</span>, <span class="text-green-400">"Token inválido"</span>)</p>
                                <p class="pl-4"><span class="text-blue-400">return</span> db.<span class="text-yellow-300">query</span>(User).<span class="text-yellow-300">filter_by</span>(email=email).<span class="text-yellow-300">first</span>()</p>
                                <br>
                                <p class="text-gray-500"># rota protegida</p>
                                <p><span class="text-yellow-300">@app.get</span>(<span class="text-green-400">"/me"</span>)</p>
                                <p><span class="text-blue-400">def</span> <span class="text-yellow-300">perfil</span>(user = <span class="text-teal-400">Depends</span>(get_current_user)):</p>
                                <p class="pl-4"><span class="text-blue-400">return</span> user</p>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- 8. ROUTERS -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">8. APIRouter — Organizando Rotas</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p>Quando a API cresce, colocar tudo no <code class="text-teal-400">main.py</code> fica inviável. O <code class="text-teal-400">APIRouter</code> funciona como um mini-app que você registra no app principal com um prefixo.</p>
                            <p>Você pode definir um <code class="text-teal-400">prefix</code>, <code class="text-teal-400">tags</code> (para agrupar no Swagger) e <code class="text-teal-400">dependencies</code> globais para todas as rotas do router de uma vez.</p>
                            <p class="text-teal-400 text-xs">💡 Aplicar <code>Depends(get_current_user)</code> como dependência no router protege todas as rotas daquele módulo automaticamente — sem repetir em cada função.</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p class="text-gray-500"># routers/users.py</p>
                            <p><span class="text-blue-400">from</span> fastapi <span class="text-blue-400">import</span> APIRouter, Depends</p>
                            <br>
                            <p>router = <span class="text-teal-400">APIRouter</span>(</p>
                            <p class="pl-4">prefix=<span class="text-green-400">"/users"</span>,</p>
                            <p class="pl-4">tags=[<span class="text-green-400">"users"</span>],</p>
                            <p class="pl-4">dependencies=[<span class="text-teal-400">Depends</span>(get_current_user)]</p>
                            <p>)</p>
                            <br>
                            <p><span class="text-yellow-300">@router.get</span>(<span class="text-green-400">"/"</span>)       <span class="text-gray-500"># GET /users/</span></p>
                            <p><span class="text-blue-400">def</span> <span class="text-yellow-300">listar</span>(): ...</p>
                            <br>
                            <p><span class="text-yellow-300">@router.get</span>(<span class="text-green-400">"/{id}"</span>)    <span class="text-gray-500"># GET /users/{id}</span></p>
                            <p><span class="text-blue-400">def</span> <span class="text-yellow-300">detalhe</span>(id: <span class="text-teal-400">int</span>): ...</p>
                            <br>
                            <p class="text-gray-500"># main.py</p>
                            <p>app.<span class="text-yellow-300">include_router</span>(router)</p>
                        </div>
                    </div>
                </li>

                <!-- 9. MIDDLEWARE E CORS -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">9. Middleware e CORS</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p><span class="text-white font-semibold">Middleware</span> é um código que intercepta toda requisição antes de chegar na rota e toda resposta antes de ser enviada. Útil para logging, timing, autenticação global, etc.</p>
                            <p><span class="text-white font-semibold">CORS</span> (Cross-Origin Resource Sharing) precisa ser configurado para que frontends em outros domínios ou portas consigam fazer requisições para a API.</p>
                            <p class="text-yellow-400 text-xs">⚠️ Em desenvolvimento você pode liberar <code>allow_origins=["*"]</code>, mas em produção especifique os domínios permitidos.</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-blue-400">from</span> fastapi.middleware.cors <span class="text-blue-400">import</span> CORSMiddleware</p>
                            <p><span class="text-blue-400">import</span> time</p>
                            <br>
                            <p class="text-gray-500"># CORS</p>
                            <p>app.<span class="text-yellow-300">add_middleware</span>(</p>
                            <p class="pl-4"><span class="text-teal-400">CORSMiddleware</span>,</p>
                            <p class="pl-4">allow_origins=[<span class="text-green-400">"http://localhost:5173"</span>],</p>
                            <p class="pl-4">allow_methods=[<span class="text-green-400">"*"</span>],</p>
                            <p class="pl-4">allow_headers=[<span class="text-green-400">"*"</span>],</p>
                            <p>)</p>
                            <br>
                            <p class="text-gray-500"># middleware customizado</p>
                            <p><span class="text-yellow-300">@app.middleware</span>(<span class="text-green-400">"http"</span>)</p>
                            <p><span class="text-blue-400">async def</span> <span class="text-yellow-300">log_requests</span>(request, call_next):</p>
                            <p class="pl-4">start = time.<span class="text-yellow-300">time</span>()</p>
                            <p class="pl-4">response = <span class="text-blue-400">await</span> <span class="text-yellow-300">call_next</span>(request)</p>
                            <p class="pl-4">ms = (time.<span class="text-yellow-300">time</span>() - start) * <span class="text-blue-400">1000</span></p>
                            <p class="pl-4"><span class="text-yellow-300">print</span>(<span class="text-green-400">f"{"{request.method}"} {"{request.url}"} — {"{ms:.0f}"}ms"</span>)</p>
                            <p class="pl-4"><span class="text-blue-400">return</span> response</p>
                        </div>
                    </div>
                </li>

                <!-- 10. BACKGROUND TASKS -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-white text-xl font-bold mb-4">10. Background Tasks e Eventos de Startup</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2 text-sm text-gray-300">
                            <p><span class="text-white font-semibold">BackgroundTasks</span> permitem executar tarefas após retornar a resposta — envio de e-mail, processamento de arquivo, logs. O cliente não precisa esperar.</p>
                            <p><span class="text-white font-semibold">Lifespan</span> é o lugar certo para inicializar recursos no startup e limpá-los no shutdown: conexões com banco, clientes HTTP, cache.</p>
                        </div>
                        <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                            <p><span class="text-blue-400">from</span> fastapi <span class="text-blue-400">import</span> BackgroundTasks</p>
                            <p><span class="text-blue-400">from</span> contextlib <span class="text-blue-400">import</span> asynccontextmanager</p>
                            <br>
                            <p class="text-gray-500"># background task</p>
                            <p><span class="text-blue-400">def</span> <span class="text-yellow-300">enviar_email</span>(email: <span class="text-teal-400">str</span>):</p>
                            <p class="pl-4"><span class="text-yellow-300">print</span>(<span class="text-green-400">f"Enviando para {"{email}"}..."</span>)</p>
                            <br>
                            <p><span class="text-yellow-300">@app.post</span>(<span class="text-green-400">"/cadastro"</span>)</p>
                            <p><span class="text-blue-400">def</span> <span class="text-yellow-300">cadastrar</span>(bg: <span class="text-teal-400">BackgroundTasks</span>, email: <span class="text-teal-400">str</span>):</p>
                            <p class="pl-4">bg.<span class="text-yellow-300">add_task</span>(enviar_email, email)</p>
                            <p class="pl-4"><span class="text-blue-400">return</span> {<span class="text-green-400">"msg"</span>: <span class="text-green-400">"Cadastrado!"</span>}</p>
                            <br>
                            <p class="text-gray-500"># lifespan (startup/shutdown)</p>
                            <p><span class="text-yellow-300">@asynccontextmanager</span></p>
                            <p><span class="text-blue-400">async def</span> <span class="text-yellow-300">lifespan</span>(app):</p>
                            <p class="pl-4"><span class="text-yellow-300">print</span>(<span class="text-green-400">"Iniciando..."</span>)</p>
                            <p class="pl-4"><span class="text-blue-400">yield</span></p>
                            <p class="pl-4"><span class="text-yellow-300">print</span>(<span class="text-green-400">"Encerrando..."</span>)</p>
                            <br>
                            <p>app = <span class="text-teal-400">FastAPI</span>(lifespan=lifespan)</p>
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