Plataforma de Portfólios

Sobre o Projeto

Este projeto é uma aplicação feita com React e TypeScript para criar e gerenciar portfólios pessoais ou profissionais.

Os dados ficam salvos no navegador usando o localStorage, assim não precisa de banco de dados ou servidor.

A navegação é feita com React Router, deixando o site rápido e sem recarregar as páginas.

Funcionalidades

Cadastro de Portfólios: Formulário para adicionar nome, habilidades, descrição, experiência e educação.

Listar e Buscar: Mostra todos os portfólios salvos e permite buscar por nome ou habilidade.

Visualizar Detalhes: Página com todas as informações do portfólio.

Excluir Portfólio: Permite apagar um portfólio com confirmação para evitar erros.

Persistência: Os portfólios ficam salvos no navegador entre sessões.

Como o Projeto está Organizado

App.tsx: Define as rotas e exibe o menu de navegação.

pages/HomePage.tsx: Lista portfólios, faz busca e permite excluir.

pages/PortfolioForm.tsx: Formulário para criar portfólio.

pages/PortfolioDetails.tsx: Mostra detalhes do portfólio e permite excluir.

components/HomeHeader.tsx: Cabeçalho da página inicial.

components/SearchBar.tsx: Campo de busca.

components/PortfolioCard.tsx: Cartão com resumo do portfólio.

styles/global.css: Estilos do projeto.

Tecnologias Usadas

React 18

TypeScript

React Router DOM v6

Vite (ferramenta de build e desenvolvimento)

LocalStorage (para salvar dados no navegador)

CSS para estilização simples e responsiva

Como Usar

Criar: Preencha o formulário para adicionar um novo portfólio.

Listar e Buscar: Veja todos os portfólios e use a busca para filtrar.

Visualizar: Clique para ver os detalhes de um portfólio.

Excluir: Apague portfólios com confirmação para evitar acidentes.
