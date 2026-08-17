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
      
      <router-link class="self-start ml-10 text-white py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300" to="/backend">
        Voltar
      </router-link>

        <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto">
            <h1 class="font-extrabold text-[50px] text-center leading-tight bg-gradient-to-tr from-[#F7DF1E] via-[#F0DB4F] to-[#E3C800] bg-clip-text text-transparent">
            JavaScript
            </h1>

            <ul class="space-y-5 mt-10">
            
                <!-- Título 1: Variáveis -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-2xl font-bold mb-4">Variáveis</h3>
                    <div class="space-y-4">
                        <p><strong class="text-pink-400">let:</strong> Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.</p>
                        <p><strong class="text-pink-400">const:</strong> A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.</p>
                        <p class="text-gray-400 italic">Ignore o var para garantir a segurança e previsibilidade do escopo.</p>
                    </div>
                </li>

                <!-- Título 1: Objetos e Arrays -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-2xl font-bold mb-4">Objetos e Arrays</h3>
                    
                    <div class="space-y-8">
                    
                        <!-- Título 2: Objetos (A Entidade) (Fora do details) -->
                        <div class="text-left bg-[#2a2738] rounded-[0.5rem] p-5">
                            <h4 class="text-lg font-semibold text-white border-b border-gray-600 pb-3 mb-4">
                            Objetos (A Entidade)
                            </h4>
                            <div class="space-y-4">
                                <p>Um Objeto no JavaScript é uma coleção de pares chave-valor. Ele serve para agrupar informações que pertencem a uma mesma entidade. Pense nele como uma ficha de cadastro, onde cada campo tem um nome (a chave) e uma resposta (o valor).</p>
                                
                                <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code><span class="text-gray-500">// Criando um objeto que representa um usuário</span>
<span class="text-purple-400">const</span> usuario = {
nome: <span class="text-green-400">"Raquel"</span>,
cargo: <span class="text-green-400">"Desenvolvedora"</span>,
ativo: <span class="text-orange-400">true</span>
};

<span class="text-gray-500">// Acessando os dados (lendo a propriedade)</span>
<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(usuario.nome); <span class="text-gray-500">// Saída: "Raquel"</span>

<span class="text-gray-500">// Modificando um dado</span>
usuario.cargo = <span class="text-green-400">"Engenheira de Software"</span>;</code></pre>

                                <!-- Título 3: Alguns métodos (Mantido como details) -->
                                <details class="text-left bg-[#343048] rounded-[0.5rem] overflow-hidden mt-4">
                                    <summary class="text-md font-semibold text-white cursor-pointer hover:bg-[#403b58] pl-5 py-3 transition-colors">
                                    Alguns métodos
                                    </summary>
                                    <div class="px-5 pb-5 pt-5 space-y-6">
                                    
                                    <div>
                                        <h4 class="font-bold text-pink-400 mb-2">1. Object.keys(): Validação e Contagem</h4>
                                        <p>Descobrir quantas propriedades um objeto tem ou iterar sobre as chaves. No dia a dia, usamos muito para verificar se uma API nos devolveu um objeto vazio antes de tentar renderizar algo na tela e quebrar a aplicação.</p>
                                        <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-purple-400">const</span> usuarioAPI = {}; <span class="text-gray-500">// Simulando uma resposta vazia do back-end</span>
<span class="text-gray-500">// Verificando se o objeto veio sem propriedades</span>
<span class="text-purple-400">if</span> (<span class="text-yellow-200">Object</span>.<span class="text-blue-400">keys</span>(usuarioAPI).length === <span class="text-orange-400">0</span>) {
    <span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(<span class="text-green-400">"Erro: Nenhum dado de usuário retornado da API!"</span>);
} <span class="text-purple-400">else</span> {
    <span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(<span class="text-green-400">"Dados carregados com sucesso, pronto para renderizar."</span>);
}</code></pre>
                    </div>

                    <div>
                        <h4 class="font-bold text-pink-400 mb-2">2. Object.values(): Cálculos e Agrupamentos</h4>
                        <p>Extrair apenas os dados de um objeto. Imagine que você quer calcular a média das suas notas nas disciplinas do BSI. Os nomes das matérias não importam para o cálculo matemático, apenas os valores numéricos.</p>
                        <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-purple-400">const</span> notasBSI = {
    calculo: <span class="text-orange-400">8.5</span>,
    programacao: <span class="text-orange-400">10.0</span>,
    bancoDeDados: <span class="text-orange-400">9.0</span>
};

<span class="text-gray-500">// Extrai apenas os números: [8.5, 10.0, 9.0]</span>
<span class="text-purple-400">const</span> notas = <span class="text-yellow-200">Object</span>.<span class="text-blue-400">values</span>(notasBSI);

<span class="text-gray-500">// Soma tudo e calcula a média</span>
<span class="text-purple-400">const</span> soma = notas.<span class="text-blue-400">reduce</span>((acumulador, nota) => acumulador + nota, <span class="text-orange-400">0</span>);
<span class="text-purple-400">const</span> media = soma / notas.length;
<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(<span class="text-green-400">`Sua média atual no IFES é: ${</span>media.<span class="text-blue-400">toFixed</span>(<span class="text-orange-400">1</span>)<span class="text-green-400">}`</span>);</code></pre>
                                    </div>

                                    <div>
                                        <h4 class="font-bold text-pink-400 mb-2">3. Object.entries(): O Queridinho do React</h4>
                                        <p>Ele transforma o objeto num array de pares [chave, valor]. Quando você precisa iterar sobre um objeto para montar uma interface (como uma tabela ou uma lista de detalhes de um usuário), o .entries() transforma o objeto em um formato perfeito para o mapeamento.</p>
                                        <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-purple-400">const</span> perfilDev = {
    nome: <span class="text-green-400">"Raquel"</span>,
    tecnologia: <span class="text-green-400">"React"</span>,
    estado: <span class="text-green-400">"Espírito Santo"</span>
};

<span class="text-gray-500">// Retorna uma matriz de arrays: [['nome', 'Raquel'], ['tecnologia', 'React'], ...]</span>
<span class="text-purple-400">const</span> pares = <span class="text-yellow-200">Object</span>.<span class="text-blue-400">entries</span>(perfilDev);

<span class="text-gray-500">// Iterando sobre chave e valor ao mesmo tempo</span>
pares.<span class="text-blue-400">forEach</span>(([chave, valor]) => {
    <span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(<span class="text-green-400">`Propriedade: ${</span>chave.<span class="text-blue-400">toUpperCase</span>()<span class="text-green-400">} | Valor: ${</span>valor<span class="text-green-400">}`</span>);
});</code></pre>
                                    </div>

                                    <div>
                                        <h4 class="font-bold text-pink-400 mb-2">4. Object.fromEntries(): Reconstrução e Filtros</h4>
                                        <p>Faz o caminho inverso do entries(). Se você transformou um objeto em array para usar um .filter() e remover algumas informações, você usa o fromEntries para transformar o resultado de volta em objeto.</p>
                                        <p>Também imagine que o usuário preencheu um formulário, mas deixou campos em branco. Antes de enviar isso para o seu banco de dados no Supabase, você quer remover tudo o que for null ou undefined.</p>
                                        <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-purple-400">const</span> dadosFormulario = {
    nome: <span class="text-green-400">"Raquel Nascimento"</span>,
    idade: <span class="text-orange-400">22</span>,
    telefone: <span class="text-orange-400">null</span>,
    github: <span class="text-green-400">"raquelnascimento"</span>,
    site: <span class="text-orange-400">undefined</span>
};

<span class="text-gray-500">// 1. Transforma em array de pares
// 2. Filtra removendo o que for null ou undefined</span>
<span class="text-purple-400">const</span> arrayFiltrado = <span class="text-yellow-200">Object</span>.<span class="text-blue-400">entries</span>(dadosFormulario)
.<span class="text-blue-400">filter</span>(([chave, valor]) => valor !== <span class="text-orange-400">null</span> && valor !== <span class="text-orange-400">undefined</span>);

<span class="text-gray-500">// 3. Reconstrói o objeto apenas com os dados válidos</span>
<span class="text-purple-400">const</span> dadosLimposParaOBanco = <span class="text-yellow-200">Object</span>.<span class="text-blue-400">fromEntries</span>(arrayFiltrado);
<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(dadosLimposParaOBanco);
<span class="text-gray-500">// Resultado: { nome: 'Raquel Nascimento', idade: 22, github: 'raquelnascimento' }</span></code></pre>
                                    </div>

                                    <div>
                                        <h4 class="font-bold text-pink-400 mb-2">5. Object.freeze() : Controle e Segurança</h4>
                                        <p>Garantir a imutabilidade no sistema. Quando temos um objeto com configurações críticas (como variáveis de ambiente ou configs do Supabase) e não queremos que ninguém da equipe altere os valores acidentalmente durante a execução do código.</p>
                                        <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-purple-400">const</span> user = {
    name: <span class="text-green-400">"Alice"</span>,
    age: <span class="text-orange-400">28</span>
};

<span class="text-gray-500">// Freeze the object</span>
<span class="text-yellow-200">Object</span>.<span class="text-blue-400">freeze</span>(user);

<span class="text-gray-500">// These operations will fail</span>
user.age = <span class="text-orange-400">30</span>; <span class="text-gray-500">// Fails to change value</span>
user.role = <span class="text-green-400">"admin"</span>; <span class="text-gray-500">// Fails to add property delete user.name; // Fails to delete property</span>
<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(user);
<span class="text-gray-500">// Output: { name: "Alice", age: 28 }</span></code></pre>
                                    </div>

                                </div>
                            </details>
                        </div>
                    </div>

                    <!-- Título 2: Arrays (A Lista) (Fora do details) -->
                    <div class="text-left bg-[#2a2738] rounded-[0.5rem] p-5">
                        <h4 class="text-lg font-semibold text-white border-b border-gray-600 pb-3 mb-4">
                        Arrays (A Lista)
                        </h4>
                        <div class="space-y-4">
                        <p>Um Array é uma lista ordenada de valores. Ele serve para agrupar múltiplos itens em uma única variável, mantendo a ordem em que foram inseridos. Pense nele como uma lista de compras ou uma fila de pessoas.</p>
                        
                        <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-gray-500">// Criando uma lista de linguagens</span>
<span class="text-purple-400">const</span> tecnologias = [<span class="text-green-400">"JavaScript"</span>, <span class="text-green-400">"Python"</span>, <span class="text-green-400">"TypeScript"</span>, <span class="text-green-400">"SQL"</span>];

<span class="text-gray-500">// Acessando os dados (lendo pelo índice)</span>
<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(tecnologias[<span class="text-orange-400">0</span>]); <span class="text-gray-500">// Saída: "JavaScript"</span>
<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(tecnologias[<span class="text-orange-400">2</span>]); <span class="text-gray-500">// Saída: "TypeScript"</span>

<span class="text-gray-500">// Adicionando um novo item ao final da lista</span>
tecnologias.<span class="text-blue-400">push</span>(<span class="text-green-400">"React"</span>);</code></pre>

                        <p>Na vida real, ao lidar com APIs e Bancos de Dados, você quase nunca usa essas estruturas isoladas. O padrão mais comum no desenvolvimento de software é o Array de Objetos — ou seja, uma lista onde cada item da lista é uma entidade independente.</p>
                        
                        <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-gray-500">// Uma resposta típica de uma API de produtos:</span>
<span class="text-purple-400">const</span> produtos = [
{ id: <span class="text-orange-400">1</span>, nome: <span class="text-green-400">"Notebook"</span>, preco: <span class="text-orange-400">4500</span>, emEstoque: <span class="text-orange-400">true</span> },
{ id: <span class="text-orange-400">2</span>, nome: <span class="text-green-400">"Mouse"</span>, preco: <span class="text-orange-400">150</span>, emEstoque: <span class="text-orange-400">false</span> },
{ id: <span class="text-orange-400">3</span>, nome: <span class="text-green-400">"Teclado"</span>, preco: <span class="text-orange-400">300</span>, emEstoque: <span class="text-orange-400">true</span> }
];

<span class="text-gray-500">// Acessando o preço do segundo produto da lista:</span>
<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(produtos[<span class="text-orange-400">1</span>].preco); <span class="text-gray-500">// Saída: 150</span></code></pre>
                        
                        </div>
                    </div>

                        <table class="w-full text-left border-collapse mt-6">
                            <thead>
                            <tr class="border-b border-gray-500 text-gray-300">
                                <th class="py-3 pr-4">Estrutura</th>
                                <th class="py-3 pr-4">Propósito</th>
                                <th class="py-3 pr-4">Como Acessar o Dado</th>
                                <th class="py-3">Analogia</th>
                            </tr>
                            </thead>
                            <tbody class="text-gray-200 text-sm">
                            <tr class="border-b border-gray-700">
                                <td class="py-4 pr-4">Objeto {}</td>
                                <td class="py-4 pr-4">Descrever as características de uma única coisa.</td>
                                <td class="py-4 pr-4 font-mono text-pink-400">Pela chave (obj.nome)</td>
                                <td class="py-4">Ficha de um paciente</td>
                            </tr>
                            <tr>
                                <td class="py-4 pr-4">Array []</td>
                                <td class="py-4 pr-4">Armazenar uma coleção de coisas.</td>
                                <td class="py-4 pr-4 font-mono text-pink-400">Pelo índice (arr[0])</td>
                                <td class="py-4">Fila de espera do consultório</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <!-- Título 1: Métodos de filtragem (Movido para fora) -->
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
                    <h3 class="text-2xl font-bold mb-4">Métodos de filtragem</h3>
                    
                    <div class="space-y-4">
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>filter:</strong> Extrair apenas o que é relevante (ex: usuários ativos).</li>
                        <li><strong>map:</strong> Transformar dados (ex: converter preços de Real para Dólar).</li>
                        <li><strong>find:</strong> Localizar um item único e específico.</li>
                        <li><strong>reduce:</strong> Consolidar uma lista em um valor único (ex: calcular o valor total de um carrinho de compras).</li>
                    </ul>

                    <table class="w-full text-left border-collapse mt-6">
                        <thead>
                        <tr class="border-b border-gray-500 text-gray-300">
                            <th class="py-3 pr-4">Método</th>
                            <th class="py-3 pr-4">Quando usar?</th>
                            <th class="py-3">O que ele te devolve?</th>
                        </tr>
                        </thead>
                        <tbody class="text-gray-200 text-sm">
                        <tr class="border-b border-gray-700">
                            <td class="py-4 pr-4 font-mono text-pink-400">map</td>
                            <td class="py-4 pr-4">Preciso modificar/formatar cada item da lista.</td>
                            <td class="py-4">Novo array do mesmo tamanho.</td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-4 pr-4 font-mono text-pink-400">filter</td>
                            <td class="py-4 pr-4">Quando você quer VÁRIOS itens que dividem uma característica.</td>
                            <td class="py-4">Novo array, geralmente menor.</td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-4 pr-4 font-mono text-pink-400">find</td>
                            <td class="py-4 pr-4">Quando você quer UM único item (geralmente por ID).</td>
                            <td class="py-4">O próprio item (objeto, string, etc) ou undefined.</td>
                        </tr>
                        <tr>
                            <td class="py-4 pr-4 font-mono text-pink-400">reduce</td>
                            <td class="py-4 pr-4">Preciso calcular um total ou consolidar tudo.</td>
                            <td class="py-4">Um único valor.</td>
                        </tr>
                        </tbody>
                    </table>

                    <!-- Subtópicos dos Métodos -->
                    <details class="text-left bg-[#343048] rounded-[0.5rem] overflow-hidden mt-6">
                        <summary class="text-md font-semibold text-white cursor-pointer hover:bg-[#403b58] pl-5 py-3 transition-colors">
                        1. map(): O Transformador
                        </summary>
                        <div class="px-5 pb-5 pt-5">
                            <p>O map passa por todos os itens do array, aplica uma transformação que você definir e devolve um novo array exatamente do mesmo tamanho.</p>
                            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-gray-500">// Retornando apenas os nomes nome transformação (destaque com cor)</span>
<span class="text-purple-400">const</span> nomesDosProdutos = produtos.<span class="text-blue-400">map</span>(produto => produto.nome);

<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(nomesDosProdutos);
<span class="text-gray-500">// Saída: ["Notebook", "Mouse", "Teclado"]</span>

<span class="text-gray-500">// Aplicando 10% de desconto e criando objetos novos</span>
<span class="text-purple-400">const</span> produtosComDesconto = produtos.<span class="text-blue-400">map</span>(produto => {
    <span class="text-purple-400">return</span> {
        nome: produto.nome,
        preco: produto.preco * <span class="text-orange-400">0.9</span> <span class="text-gray-500">// Multiplica por 0.9 para dar 10% de desconto</span>
    };
});</code></pre>
                        </div>
                    </details>

                    <details class="text-left bg-[#343048] rounded-[0.5rem] overflow-hidden mt-2">
                        <summary class="text-md font-semibold text-white cursor-pointer hover:bg-[#403b58] pl-5 py-3 transition-colors">
                        2. filter(): Check In/Seletor
                        </summary>
                        <div class="px-5 pb-5 pt-5">
                            <p>O filter avalia cada item do array contra uma condição (que deve ser Verdadeira ou Falsa). Ele devolve um novo array apenas com os itens que passaram no teste.</p>
                            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-gray-500">// Retorna apenas os produtos onde emEstoque é true</span>
<span class="text-purple-400">const</span> produtosDisponiveis = produtos.<span class="text-blue-400">filter</span>(produto => produto.emEstoque === <span class="text-orange-400">true</span>);

<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(produtosDisponiveis); <span class="text-gray-500">// Saída:</span>
<span class="text-gray-500">// [
// { id: 1, nome: "Notebook", preco: 4500, emEstoque: true },
// { id: 3, nome: "Teclado", preco: 300, emEstoque: true }
// ]</span></code></pre>
                        </div>
                    </details>

                    <details class="text-left bg-[#343048] rounded-[0.5rem] overflow-hidden mt-2">
                        <summary class="text-md font-semibold text-white cursor-pointer hover:bg-[#403b58] pl-5 py-3 transition-colors">
                        3. reduce(): O Acumulador
                        </summary>
                        <div class="px-5 pb-5 pt-5">
                            <p>Ele pega todos os itens do array e os "espreme" até devolver um único valor final. Esse valor pode ser um número, uma string, ou até mesmo um novo objeto.</p>
                            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-gray-500">// reduce(função(acumulador, itemAtual), valorInicialDoAcumulador)</span>
<span class="text-purple-400">const</span> valorTotal = produtos.<span class="text-blue-400">reduce</span>((acumulador, produto) => {
    <span class="text-purple-400">return</span> acumulador + produto.preco;
}, <span class="text-orange-400">0</span>); <span class="text-gray-500">// 0 é o valor inicial do acumulador</span>

<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(valorTotal);
<span class="text-gray-500">// Saída: 4950 (4500 + 150 + 300)</span></code></pre>
                        </div>
                    </details>

                    <details class="text-left bg-[#343048] rounded-[0.5rem] overflow-hidden mt-2">
                        <summary class="text-md font-semibold text-white cursor-pointer hover:bg-[#403b58] pl-5 py-3 transition-colors">
                        4. find(): Primeira ocorrência
                        </summary>
                        <div class="px-5 pb-5 pt-5">
                            <p>O find é mais direto: ele percorre o array e, assim que encontra o primeiro item que passa no teste, ele para a busca e te devolve exatamente aquele item.</p>
                            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code><span class="text-purple-400">const</span> produtos = [
{ id: <span class="text-orange-400">1</span>, nome: <span class="text-green-400">"Notebook"</span>, preco: <span class="text-orange-400">4500</span> },
{ id: <span class="text-orange-400">2</span>, nome: <span class="text-green-400">"Mouse"</span>, preco: <span class="text-orange-400">150</span> },
{ id: <span class="text-orange-400">3</span>, nome: <span class="text-green-400">"Teclado"</span>, preco: <span class="text-orange-400">300</span> },
{ id: <span class="text-orange-400">4</span>, nome: <span class="text-green-400">"Mousepad"</span>, preco: <span class="text-orange-400">50</span> }
];

<span class="text-gray-500">// Queremos encontrar as informações exatas do produto com ID 3</span>
<span class="text-purple-400">const</span> produtoDesejado = produtos.<span class="text-blue-400">find</span>(produto => produto.id === <span class="text-orange-400">3</span>);
<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(produtoDesejado);
<span class="text-gray-500">// Saída: { id: 3, nome: "Teclado", preco: 300 } // (Note que ele devolveu o objeto puro, e não um array)</span>

<span class="text-purple-400">if</span> (!produtoDesejado) {
<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(<span class="text-green-400">"Erro: O produto que você buscou não existe no catálogo."</span>);
}</code></pre>
                        </div>
                    </details>

                    <!-- Aplicação Real -->
                    <h4 class="text-xl pt-5 font-bold mb-4">Aplicação real (Method Chaining)</h4>

                        <div class="px-5 pb-5 pt-1 space-y-4">
                            <p>Encadear métodos (o famoso Method Chaining) é onde a mágica da programação funcional realmente brilha no JavaScript. Como map e filter sempre devolvem um novo array, você pode "grudar" um método no outro. O resultado do primeiro passa a ser a matéria-prima do segundo, e assim por diante.</p>
                            
                            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code><span class="text-purple-400">const</span> carrinho = [
{ nome: <span class="text-green-400">"Notebook"</span>, preco: <span class="text-orange-400">4500</span>, categoria: <span class="text-green-400">"eletrônica"</span>, emEstoque: <span class="text-orange-400">true</span> },
{ nome: <span class="text-green-400">"Livro"</span>, preco: <span class="text-orange-400">50</span>, categoria: <span class="text-green-400">"livros"</span>, emEstoque: <span class="text-orange-400">true</span> },
{ nome: <span class="text-green-400">"Mouse"</span>, preco: <span class="text-orange-400">150</span>, categoria: <span class="text-green-400">"eletrônica"</span>, emEstoque: <span class="text-orange-400">false</span> },
{ nome: <span class="text-green-400">"Teclado"</span>, preco: <span class="text-orange-400">300</span>, categoria: <span class="text-green-400">"eletrônica"</span>, emEstoque: <span class="text-orange-400">true</span> }
];

<span class="text-purple-400">const</span> totalEletronicosComDesconto = carrinho
<span class="text-gray-500">// 1. FILTRAR: Pega só os eletrônicos que estão em estoque</span>
.<span class="text-blue-400">filter</span>(item => item.categoria === <span class="text-green-400">"eletrônica"</span> && item.emEstoque === <span class="text-orange-400">true</span>)
<span class="text-gray-500">// 2. MAPEAR: Extrai o preço e já aplica os 10% de desconto</span>
.<span class="text-blue-400">map</span>(item => item.preco * <span class="text-orange-400">0.9</span>)
<span class="text-gray-500">// 3. REDUZIR: Soma todos os preços com desconto em um único valor final</span>
.<span class="text-blue-400">reduce</span>((acumulador, preco) => acumulador + preco, <span class="text-orange-400">0</span>);

<span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(totalEletronicosComDesconto);
<span class="text-gray-500">// Saída: 4320</span></code></pre>
                        </div>
                    </div>
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