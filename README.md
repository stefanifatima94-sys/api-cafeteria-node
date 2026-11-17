# API Cafeteria ☕

API REST de uma cafeteria para gerenciar o cardápio de produtos, desenvolvida em **Node.js** com **Express**.

## Tecnologias

- Node.js
- Express 5
- Postman / Insomnia (testes das requisições)

## Funcionalidades

- CRUD completo de produtos (listar, buscar por id, criar, atualizar e remover)
- Rotas organizadas no padrão REST com `express.Router`
- Validação dos campos obrigatórios (`nome` e `preco`)
- Respostas com status HTTP adequados (`200`, `201`, `400`, `404`)

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
git clone https://github.com/stefanifatima94-sys/api-cafeteria-node.git
cd api-cafeteria-node
npm install
npm start
```

A API sobe em `http://localhost:3000`.

## Endpoints

| Método | Rota             | Descrição                    |
|--------|------------------|------------------------------|
| GET    | `/`              | Verifica se a API está no ar |
| GET    | `/produtos`      | Lista todos os produtos      |
| GET    | `/produtos/:id`  | Busca um produto pelo id     |
| POST   | `/produtos`      | Cadastra um produto          |
| PUT    | `/produtos/:id`  | Atualiza um produto          |
| DELETE | `/produtos/:id`  | Remove um produto            |

### Exemplo – cadastrar produto

```http
POST /produtos
Content-Type: application/json

{ "nome": "Chá gelado", "preco": 9 }
```

Resposta `201 Created`:

```json
{ "id": 5, "nome": "Chá gelado", "preco": 9 }
```

Sem `nome` ou `preco`, a API responde `400 Bad Request`. Um id inexistente responde `404 Not Found`.

## Estrutura

```
index.js            # configuração do servidor Express
routes/produtos.js  # rotas e regras do recurso /produtos
```

> Os dados ficam em memória e voltam ao estado inicial quando o servidor reinicia.

## Autora

**Stefani Fatima** – [LinkedIn](https://www.linkedin.com/in/stefani-fatima-288ba52a0) · [GitHub](https://github.com/stefanifatima94-sys)
