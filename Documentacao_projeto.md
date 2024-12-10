
# Documentação Completa do Projeto - E-commerce

Desenvolvido por **Russell Nunez**.

Este projeto é composto por um **Frontend** desenvolvido em React e um **Backend** utilizando Flask, estruturado no padrão MVC. Abaixo está a documentação detalhada de cada parte do sistema.

---

## Visão Geral

O projeto é uma aplicação de e-commerce que inclui funcionalidades como:

- **Frontend**:
  - Listagem de produtos
  - Carrinho de compras
  - Pesquisa e filtros
  - Páginas de ofertas
- **Backend**:
  - Gerenciamento de produtos por meio de uma API RESTful (CRUD)
  - Comunicação com o frontend via endpoints

---

## Estrutura do Projeto

```plaintext
Test/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── services/
├── Backend/
│   ├── app.py
│   ├── models/
│   ├── views/
│   ├── controllers/
│   └── products.json
```

---

# Frontend

## Estrutura do Projeto Frontend

- **`src/components/`**: Componentes reutilizáveis como Navbar, Footer, etc.
- **`src/pages/`**: Componentes das páginas principais (Home, Produtos, Ofertas).
- **`src/context/`**: Implementação do estado global usando React Context.
- **`src/services/`**: Comunicação com o backend.

---

## Componentes Principais

### Navbar (`src/components/Navbar.jsx`)

- Links para páginas (Início, Produtos, Ofertas).
- Campo de pesquisa.
- Ícone do carrinho com contador de itens.

### HomePage (`src/pages/HomePage.jsx`)

- Seções de destaque, categorias e banner promocional.

### ProdutosPage (`src/pages/ProdutosPage.jsx`)

- Listagem de produtos com filtro por categorias.
- Funcionalidade de adicionar produtos ao carrinho.

### OfertasPage (`src/pages/OfertasPage.jsx`)

- Exibição de produtos em promoção com cálculo de preços promocionais.

---

## Serviços

### API (`src/services/api.js`)

- `fetchProducts`: Busca produtos do backend.
- `addProduct`: Adiciona um novo produto.
- `updateProduct`: Atualiza produto existente.
- `deleteProduct`: Remove produto.

---

## Estilização

O projeto utiliza **Tailwind CSS** para um design moderno e responsivo.

---

## Executando o Frontend

1. Navegue até a pasta `Frontend`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
4. Acesse o frontend em `http://localhost:3000`.

---

# Backend

## Estrutura do Projeto Backend

```plaintext
Backend/
├── app.py
├── models/
│   └── product_model.py
├── views/
│   └── product_view.py
├── controllers/
│   └── product_controller.py
└── products.json
```

---

## Rotas Disponíveis

### 1. Obter Todos os Produtos
**Endpoint:** `/products/`  
**Método:** `GET`  

#### Exemplo de Resposta
```json
[
    {
        "id": 1,
        "nome": "Notebook Dell Inspiron",
        "descricao": "Notebook de alto desempenho com processador Intel i7.",
        "imagem": "https://exemplo.com/imagem.jpg",
        "valor": 4500.00,
        "nota": 4.8,
        "categoria": "Eletrônicos"
    }
]
```

---

### 2. Obter Produto por ID
**Endpoint:** `/products/<id>`  
**Método:** `GET`  

---

### 3. Criar Produto
**Endpoint:** `/products/`  
**Método:** `POST`  

#### Corpo da Requisição
```json
{
    "nome": "Smartphone Samsung Galaxy S21",
    "descricao": "Celular com câmera profissional.",
    "imagem": "https://exemplo.com/imagem.jpg",
    "valor": 3500.00,
    "nota": 4.6,
    "categoria": "Eletrônicos"
}
```

---

### 4. Atualizar Produto
**Endpoint:** `/products/<id>`  
**Método:** `PUT`  

---

### 5. Deletar Produto
**Endpoint:** `/products/<id>`  
**Método:** `DELETE`  

---

## Dependências do Backend

- **Flask**: Framework web.
- **Flask-CORS**: Gerenciamento de CORS.

### Instalação das Dependências
```bash
pip install flask flask-cors
```

---

## Executando o Backend

1. Navegue até a pasta `Backend`.
2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
3. Execute o servidor:
   ```bash
   python app.py
   ```
4. Acesse o backend em `http://127.0.0.1:5000`.

---

## Estrutura de Dados

```json
{
    "id": 1,
    "nome": "Nome do Produto",
    "descricao": "Descrição do Produto",
    "imagem": "URL da Imagem",
    "valor": 100.00,
    "nota": 4.5,
    "categoria": "Categoria do Produto"
}
```

---

# Autor

Desenvolvido por **Russell Nunez**.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
