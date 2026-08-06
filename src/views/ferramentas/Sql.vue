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
        <h1 class="font-bold text-[50px] text-center text-white">SQL</h1>
        <p class="text-center text-gray-400 mt-2 text-sm">Linguagem de consulta estruturada para gerenciar e manipular dados em bancos de dados relacionais.</p>

        <ul class="space-y-5 mt-10">
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Operações Principais (CRUD)</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>-- CREATE: Inserir dados
INSERT INTO usuarios (nome, email, idade) 
VALUES ('João', 'joao@email.com', 25);

-- READ: Consultar dados
SELECT * FROM usuarios;
SELECT nome, email FROM usuarios WHERE idade > 18;

-- UPDATE: Atualizar dados
UPDATE usuarios SET idade = 26 WHERE id = 1;

-- DELETE: Deletar dados
DELETE FROM usuarios WHERE id = 1;</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Consultas Úteis</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>-- Filtros e Ordenação
SELECT * FROM usuarios WHERE idade > 18 AND status = 'ativo';
SELECT * FROM usuarios ORDER BY nome ASC LIMIT 10;

-- Agregações
SELECT COUNT(*) FROM usuarios;
SELECT AVG(idade) FROM usuarios;
SELECT MAX(idade), MIN(idade) FROM usuarios;

-- Grouping
SELECT status, COUNT(*) FROM usuarios GROUP BY status;

-- JOINs
SELECT u.nome, p.titulo 
FROM usuarios u 
INNER JOIN posts p ON u.id = p.usuario_id;</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Criando Tabelas</h3>
            <pre class="bg-[#131217] p-4 rounded text-xs font-mono text-gray-300 overflow-x-auto"><code>CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  idade INT CHECK (idade >= 0),
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  conteudo TEXT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);</code></pre>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Tipos de Dados Comuns</h3>
            <ul class="text-sm text-gray-300 space-y-2 list-disc pl-5">
              <li><code class="text-pink-400 font-mono">INT, BIGINT, SMALLINT</code> - Números inteiros</li>
              <li><code class="text-pink-400 font-mono">FLOAT, DECIMAL</code> - Números decimais</li>
              <li><code class="text-pink-400 font-mono">VARCHAR(n), TEXT</code> - Texto (n caracteres ou livre)</li>
              <li><code class="text-pink-400 font-mono">DATE, TIME, TIMESTAMP</code> - Data e hora</li>
              <li><code class="text-pink-400 font-mono">BOOLEAN</code> - Verdadeiro/Falso</li>
              <li><code class="text-pink-400 font-mono">JSON</code> - Dados em formato JSON (alguns BD)</li>
            </ul>
          </li>

          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">Constraints (Restrições)</h3>
            <ul class="text-sm text-gray-300 space-y-2 list-disc pl-5">
              <li><code class="text-pink-400 font-mono">PRIMARY KEY</code> - Identifica unicamente cada linha</li>
              <li><code class="text-pink-400 font-mono">FOREIGN KEY</code> - Referencia outra tabela</li>
              <li><code class="text-pink-400 font-mono">UNIQUE</code> - Valores únicos nessa coluna</li>
              <li><code class="text-pink-400 font-mono">NOT NULL</code> - Campo obrigatório</li>
              <li><code class="text-pink-400 font-mono">CHECK</code> - Validação customizada</li>
              <li><code class="text-pink-400 font-mono">DEFAULT</code> - Valor padrão</li>
            </ul>
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