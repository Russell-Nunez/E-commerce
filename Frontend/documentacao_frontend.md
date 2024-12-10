# Documentação do Front-end

## Visão Geral

Este projeto é uma aplicação de e-commerce desenvolvida em React. Ela inclui funcionalidades como listagem de produtos, carrinho de compras, pesquisa e páginas de ofertas.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `src/`
  - `components/`: Componentes reutilizáveis
  - `pages/`: Componentes de página
  - `context/`: Contextos React, incluindo o ShopContext
  - `services/`: Serviços, incluindo a API

## Componentes Principais

### Navbar (`src/components/Navbar.jsx`)

O componente Navbar é responsável pela navegação principal do site.

Funcionalidades:

- Links para as principais páginas (Início, Produtos, Ofertas)
- Campo de pesquisa
- Ícone do carrinho com contador de itens
- Menu responsivo para dispositivos móveis

### HomePage (`src/pages/HomePage.jsx`)

A página inicial do site.

Seções:

- Hero Section com slider
- Produtos em destaque
- Categorias de produtos
- Banner promocional

### ProdutosPage (`src/pages/ProdutosPage.jsx`)

Página que lista todos os produtos disponíveis.

Funcionalidades:

- Exibição de produtos por categoria
- Adição de produtos ao carrinho

### OfertasPage (`src/pages/OfertasPage.jsx`)

Página dedicada a produtos em oferta.

Funcionalidades:

- Exibição de produtos com desconto
- Cálculo automático de preços promocionais

### ProductPage (`src/pages/ProductPage.jsx`)

Página de detalhes de um produto específico.

Funcionalidades:

- Exibição detalhada de informações do produto
- Botão para adicionar ao carrinho

## Contexto

### ShopContext (`src/context/ShopContext.jsx`)

O ShopContext gerencia o estado global da aplicação.

Funcionalidades:

- Gerenciamento de produtos
- Gerenciamento do carrinho de compras
- Funcionalidade de pesquisa

## Serviços

### API (`src/services/api.js`)

Responsável pela comunicação com o backend.

Funções:

- `fetchProducts`: Busca produtos do servidor
- `addProduct`: Adiciona um novo produto
- `updateProduct`: Atualiza um produto existente
- `deleteProduct`: Remove um produto

## Estilização

O projeto utiliza Tailwind CSS para estilização, proporcionando um design responsivo e moderno.

## Executando o Projeto

1. Instale as dependências:
   \`\`\`
   npm install
   \`\`\`

2. Inicie o servidor de desenvolvimento:
   \`\`\`
   npm start
   \`\`\`

3. Acesse a aplicação em \`http://localhost:3000\`

## Considerações de Desenvolvimento

- Certifique-se de que o backend está configurado e rodando corretamente.
- Mantenha o arquivo \`src/services/api.js\` atualizado com a URL correta do seu backend.
- Ao adicionar novos componentes, considere a reutilização e mantenha a consistência com o estilo existente.
