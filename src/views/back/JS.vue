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
            
                <li class="bg-[#1e1b29] rounded-[0.5rem] p-4">
                    <a href="https://github.com/RaquelNeres/Chokmah/blob/main/.md/back/iniciais.md" target="_blank" rel="noopener noreferrer">
                        <h3 class="text-2xl font-bold">
                            Conceitos Iniciais
                        </h3>
                    </a>
                    
                </li>

                <details class="bg-[#1e1b29] rounded-[0.5rem] p-4">
                    <summary class="text-xl font-bold">Métodos de filtragem</summary>

                    <div class="space-y-4 mt-4">

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
                                    <td class="py-4 pr-4 font-mono text-pink-400">forEach</td>
                                    <td class="py-4 pr-4">Quando quiser apenas fazer algo com cada item.</td>
                                    <td class="py-4">Sempre retorna undefined. (Nada)</td>
                                </tr>
                                <tr class="border-b border-gray-700">
                                    <td class="py-4 pr-4 font-mono text-pink-400">map</td>
                                    <td class="py-4 pr-4">Preciso modificar/transformar cada item da lista.</td>
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
                                    <td class="py-4 pr-4">Preciso calcular um total ou consolidar tudo em um valor único.</td>
                                    <td class="py-4">Um único valor.</td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Subtópicos dos Métodos -->
                        <details class="text-left bg-[#343048] rounded-[0.5rem] overflow-hidden mt-6">
                            <summary class="text-md font-semibold text-white cursor-pointer hover:bg-[#403b58] pl-5 py-3 transition-colors">
                                1. forEach(): O Iterador
                            </summary>
                            <div class="px-5 pb-5 pt-5">
                                <p>Ao usar o forEach, você fornece uma função (chamada de callback). O método pega essa função e a executa repetidas vezes, uma para cada item do array.</p>
                                <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto mt-2"><code>array.<span class="text-blue-400">forEach</span>((elemento, indice, arrayOriginal) => {
<span class="text-gray-500">// Ação a ser executada</span>
});

<span class="text-gray-500">// elemento (Obrigatório): O valor do item na iteração atual.
// indice (Opcional): A posição numérica (index) do item no array.
// arrayOriginal (Opcional): O array completo que está sendo percorrido.</span>

<span class="text-purple-400">const</span> pessoas = [<span class="text-green-400">"Ana"</span>, <span class="text-green-400">"Bruno"</span>, <span class="text-green-400">"Carlos"</span>];

pessoas.<span class="text-blue-400">forEach</span>((pessoa, index) => {
  <span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(<span class="text-green-400">`Posição ${index}: ${pessoa}`</span>);
});

// 2 iguais
tarefasSalvas.<span class="text-blue-400">forEach</span>(tarefa => criarElementoNaTela(tarefa));
tarefasSalvas.<span class="text-blue-400">forEach</span>(criarElementoTela);</code></pre>
                            </div>
                        </details>

                        <details class="text-left bg-[#343048] rounded-[0.5rem] overflow-hidden mt-6">
                            <summary class="text-md font-semibold text-white cursor-pointer hover:bg-[#403b58] pl-5 py-3 transition-colors">
                            2. map(): O Transformador
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
                            3. filter(): Check In/Seletor
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
                            4. reduce(): O Acumulador
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
                            5. find(): Primeira ocorrência
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
                        <h4 class="text-xl pt-5 font-bold mb-4">Aplicação real</h4>

                            <div class="px-5 pb-5 pt-1 space-y-4">
                                <p>Encadear métodos (o famoso Method Chaining). Como map e filter sempre devolvem um novo array, você pode "grudar" um método no outro. O resultado do primeiro passa a ser a matéria-prima do segundo, e assim por diante.</p>
                                
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

    <span class="text-yellow-200">console</span>.<span class="text-blue-400">log</span>(totalEletronicosComDesconto); <span class="text-gray-500">// Saída: 4320</span>
                                </code></pre>
                            </div>
                        </div>

                    </details>

                    <li class="bg-[#1e1b29] rounded-[0.5rem] p-4">
                        <a href="https://github.com/RaquelNeres/Chokmah/blob/main/.md/back/assincrono.md" target="_blank" rel="noopener noreferrer">
                            <h3 class="text-2xl font-bold">
                                JavaScript Assíncrono (Async/Await e req/res)
                            </h3>
                        </a>
                        
                    </li>

                    <li class="bg-[#1e1b29] rounded-[0.5rem] p-4">
                        <a href="https://github.com/RaquelNeres/Chokmah/blob/main/.md/back/interfaces.md" target="_blank" rel="noopener noreferrer">
                            <h3 class="text-2xl font-bold">
                                DOM, Eventos e Local Storage
                            </h3>
                        </a>
                        
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