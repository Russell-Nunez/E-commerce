
# Documentação da API - Produtos (Backend em Flask)

Este é o backend de uma API RESTful para gerenciar produtos, desenvolvido em Flask utilizando o padrão de projeto MVC (Model-View-Controller).

## Estrutura do Projeto

```plaintext
flask_mvc/
├── app.py
├── models/
│   └── product_model.py
├── views/
│   └── product_view.py
├── controllers/
│   └── product_controller.py
└── products.json
```

## Rotas Disponíveis

### 1. Obter Todos os Produtos
**Endpoint:** `/products/`  
**Método:** `GET`  
**Descrição:** Retorna uma lista com todos os produtos.

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
**Descrição:** Retorna os dados de um produto específico.

#### Exemplo de Resposta
```json
{
    "id": 1,
    "nome": "Notebook Dell Inspiron",
    "descricao": "Notebook de alto desempenho com processador Intel i7.",
    "imagem": "https://exemplo.com/imagem.jpg",
    "valor": 4500.00,
    "nota": 4.8,
    "categoria": "Eletrônicos"
}
```

---

### 3. Criar Produto
**Endpoint:** `/products/`  
**Método:** `POST`  
**Descrição:** Adiciona um novo produto à lista.

#### Corpo da Requisição (JSON)
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

#### Exemplo de Resposta
```json
{
    "id": 2,
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
**Descrição:** Atualiza os dados de um produto específico.

#### Corpo da Requisição (JSON)
```json
{
    "nome": "Smartphone Samsung Galaxy S22",
    "valor": 3800.00
}
```

#### Exemplo de Resposta
```json
{
    "id": 2,
    "nome": "Smartphone Samsung Galaxy S22",
    "descricao": "Celular com câmera profissional.",
    "imagem": "https://exemplo.com/imagem.jpg",
    "valor": 3800.00,
    "nota": 4.6,
    "categoria": "Eletrônicos"
}
```

---

### 5. Deletar Produto
**Endpoint:** `/products/<id>`  
**Método:** `DELETE`  
**Descrição:** Remove um produto específico.

#### Exemplo de Resposta
```json
{
    "result": true
}
```

---

## Dependências

As seguintes bibliotecas são necessárias para rodar o projeto:

- **Flask**: Framework web.
- **Flask-CORS**: Gerenciamento de CORS (Cross-Origin Resource Sharing).

### Instalação das Dependências
```bash
pip install flask flask-cors
```

---

## Como Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
3. Execute o servidor:
   ```bash
   python app.py
   ```
4. O backend estará disponível em `http://127.0.0.1:5000`.

---

## Estrutura de Dados

Os produtos devem seguir o formato abaixo:

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

## Autor

Desenvolvido por Russell Nunez.  

---


