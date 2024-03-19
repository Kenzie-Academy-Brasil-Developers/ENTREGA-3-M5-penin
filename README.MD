# Desenvolvendo e Testando uma API para Catálogo de Carros

Este projeto tem por objetivo, desenvolver uma API para catálogo de carros. Criamos um CRUD para uma API de catálogo de carros. Desenvolvemos testes unitários e testes de integração em todas as rotas presentes. Abaixo seguem os comandos de inicialização, rotas da API, corpos de requisição, retornos esperados e possíveis erros.


 Rode o comando abaixo para iniciar a aplicação:

```bash
    npm install
```

Rode os comando abaixo para executar a migração do banco de dados para o modo de testes e desenvolvimento, respectivamente:

```bash
    npm run migrate:test
```

```bash
    npm run migrate:dev
```

**Será essencial ter um banco de dados criado e referenciado nas variáveis de ambiente.**

Rode o comando abaixo para executar os testes unitários:

```bash
    npm run test:unit
```

Rode o comando abaixo para executar os testes de integração:

```bash
    npm run test:integration
```

Rode o comando abaixo para iniciar a aplicação em modo de desenvolvimento:

```bash
    npm run dev
```

Todas as rotas deverão se comportar assim como está previsto na documentação abaixo:

## Rotas e rotinas 

### Cadastro de informações de um carro POST /cars

Padrão de corpo

```json
{
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}
```

Padrão de resposta (STATUS: 201)

```json
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}
```
#### Possíveis erros:

STATUS (400) - quando o corpo não é compatível com o padrão

### Leitura das informações da lista de carros  GET /cars

Padrão de resposta  (STATUS: 200)

```json
[
   {
      "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
      "name": "Car name",
      "description": "Car description",
      "brand": "Card brand",
      "year": 2023,
      "km": 10000
   }
]
```

### Leitura de individual das informações de um carro GET /cars/:id

Padrão de resposta  (STATUS: 200)

```json
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}
```

#### Possíveis erros:

STATUS (404) - Carro não encontrado

```json
{
    "message": "Car not found."
}
```

### Atualizar informações de um carro PATCH /cars/:id (Todos os campos dessa rota são opcionais)

Padrão de corpo 

```json
{
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Card brand updated",
    "year": 2022,
    "km": 20000
}
```

Padrão de resposta (STATUS: 200)

```json
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Card brand updated",
    "year": 2022,
    "km": 20000
}   
```

#### Possíveis erros:

STATUS (404) - Carro não encontrado

```json
{
    "message": "Car not found."
}
``` 

STATUS (400) quando o corpo não é compatível com o padrão

### Excluir carro e suas informações da lista DELETE /cars/:id

Está rota não tem um corpo de resposta (STATUS: 204)

#### Possíveis erros:

STATUS (404) - Carro não encontrado

```json
{
    "message": "Car not found."
}
```