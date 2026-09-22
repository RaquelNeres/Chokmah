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
      <router-link class="self-start ml-10 text-white py-2 px-6 border border-white rounded-full 
        hover:bg-white hover:text-black transition-colors duration-300" 
          to="/ferramentas/ferramentas1">
        Voltar
      </router-link>

      <div class="mt-10 max-w-[945px] px-6 text-justify w-full mx-auto">
        <h1 class="font-bold text-[50px] text-center text-white">SQL</h1>
        <p class="text-center text-gray-400 mt-2 text-sm">Resumo Prático — Consultas, CRUD e Joins</p>

        <ul class="space-y-5 mt-10">
          
          <!-- DDL -->
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">1. Estrutura (DDL) — Tabelas</h3>
            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-[#131217] rounded p-4">
                  <p class="font-bold text-sm mb-2 text-white">CREATE (Banco e Tabela)</p>
                  <div class="font-mono text-xs text-gray-300 space-y-1">
                    <p>-- Criar e usar o banco</p>
                    <p>CREATE DATABASE cadastro;</p>
                    <p>USE cadastro;</p>
                    <br>
                    <p>CREATE TABLE pessoas (</p>
                    <p class="pl-4">id INT PRIMARY KEY AUTO_INCREMENT,</p>
                    <p class="pl-4">nome VARCHAR(30) NOT NULL,</p>
                    <p class="pl-4">sexo ENUM('M','F'),</p>
                    <p class="pl-4">peso DECIMAL(5,2)</p>
                    <p>);</p>
                  </div>
                </div>
                <div class="bg-[#131217] rounded p-4 flex flex-col justify-between">
                  <div>
                    <p class="font-bold text-sm mb-2 text-white">ALTER & DROP (Modificar/Apagar)</p>
                    <div class="font-mono text-xs text-gray-300 space-y-1">
                      <p>-- Adicionar coluna</p>
                      <p>ALTER TABLE pessoas ADD profissao VARCHAR(20);</p>
                      <br>
                      <p>-- Apagar a tabela inteira</p>
                      <p>DROP TABLE pessoas;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- DML -->
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">2. Manipulando Dados (DML) — CRUD</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-4">
                <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                  <p>-- INSERT (Criar registros)</p>
                  <p>INSERT INTO pessoas (nome, sexo, peso)</p>
                  <p>VALUES ('Maria', 'F', 55.2);</p>
                </div>
                <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                  <p>-- UPDATE (Atualizar) - ⚠️ SEMPRE USE WHERE</p>
                  <p>UPDATE pessoas</p>
                  <p>SET peso = 60.0</p>
                  <p>WHERE id = 1;</p>
                </div>
              </div>
              <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300 h-fit">
                <p>-- DELETE (Apagar) - ⚠️ SEMPRE USE WHERE</p>
                <p>DELETE FROM pessoas</p>
                <p>WHERE id = 1;</p>
              </div>
            </div>
          </li>

          <!-- DQL -->
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">3. Buscas Básicas (SELECT) e Filtros</h3>
            <div class="grid grid-cols-1 gap-4">
              <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                <p>-- Seleciona colunas com Filtros e Ordenação</p>
                <p>SELECT nome, peso</p>
                <p>FROM pessoas</p>
                <p>WHERE peso > 50 AND sexo = 'F'</p>
                <p>ORDER BY nome ASC  -- ASC (A-Z) ou DESC (Z-A)</p>
                <p>LIMIT 10;  -- Retorna apenas os 10 primeiros</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                  <p>-- LIKE (Busca por padrão - Coringas)</p>
                  <p>SELECT * FROM pessoas</p>
                  <p>WHERE nome LIKE 'A%'; -- Começa com A</p>
                </div>
                <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                  <p>-- IN (Múltiplos valores exatos)</p>
                  <p>SELECT name, population FROM world</p>
                  <p>WHERE name IN ('Brazil', 'India', 'China');</p>
                </div>
              </div>
            </div>
          </li>

          <!-- Agregações -->
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">4. Agrupamento e Agregação</h3>
            <p class="text-sm text-gray-300 mb-4">Funções para calcular dados (COUNT, SUM, AVG, MAX, MIN) e agrupá-los.</p>
            <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
              <p>-- Agrupa países por continente e conta o total</p>
              <p>SELECT continent, COUNT(name) AS total_paises</p>
              <p>FROM world</p>
              <p>GROUP BY continent</p>
              <p>HAVING COUNT(name) > 10; -- HAVING filtra o GROUP BY</p>
            </div>
          </li>

          <!-- Joins -->
          <li class="bg-[#1e1b29] rounded-[0.5rem] p-6">
            <h3 class="text-xl font-bold mb-4">5. JOINs (Relacionamentos)</h3>
            <div class="space-y-4">
              <p class="text-sm text-gray-300">Combina colunas de duas ou mais tabelas baseadas em uma coluna em comum (chaves).</p>
              <div class="grid grid-cols-1 gap-4">
                <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                  <p>-- INNER JOIN: Retorna apenas quando há correspondência nas DUAS tabelas</p>
                  <p>SELECT p.nome, c.nome_curso</p>
                  <p>FROM pessoas p</p>
                  <p>INNER JOIN cursos c ON p.curso_id = c.id;</p>
                </div>
                <div class="bg-[#131217] rounded p-4 text-xs font-mono text-gray-300">
                  <p>-- LEFT JOIN: Retorna TODOS da tabela da esquerda, mesmo sem curso</p>
                  <p>SELECT p.nome, c.nome_curso</p>
                  <p>FROM pessoas p</p>
                  <p>LEFT JOIN cursos c ON p.curso_id = c.id;</p>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const showSidebar = ref(false)
const router = useRouter()
const voltar = () => router.back()
</script>