# Frontend para Simulação de SQL Injection

Este projeto é um frontend em Angular desenvolvido para interagir com uma API REST vulnerável a SQL Injection. O objetivo principal é educacional, permitindo que estudantes e desenvolvedores visualizem como ataques de SQL Injection são executados e como os dados são retornados pela API.

**⚠️ AVISO: Este projeto é propositalmente vulnerável e não deve ser usado em produção.**

## 🎯 Objetivo

O propósito deste frontend é servir como uma ferramenta didática para demonstrar ataques de SQL Injection em um ambiente controlado. Ele consome uma API backend que foi projetada para ser vulnerável.

## 📡 Configuração da API

A aplicação está configurada para usar diferentes URLs da API dependendo do ambiente:

- **Desenvolvimento**: `http://localhost:3000`
- **Produção**: `https://apisimulation.fourdevs.com.br/`

A configuração é automaticamente selecionada baseada no modo de build.

## 🧱 Stack

- **Angular**: Framework frontend
- **TypeScript**: Linguagem principal
- **Angular CLI**: Para a estrutura e comandos do projeto
- **HttpClient**: Para realizar as chamadas à API REST
- **CSS**: Para estilização básica

## 📄 Funcionalidades

O sistema possui as seguintes páginas para interação com a API:

- **Login**: Permite enviar um `POST` para a rota `/login` com um nome de usuário e senha. A rota é vulnerável a SQL Injection.
- **Buscar Usuários**: Permite fazer uma busca por nome de usuário via `GET` na rota `/users`. O campo de busca é vulnerável.
- **Buscar Produtos**: Permite fazer uma busca por nome de produto via `GET` na rota `/products`. O campo de busca é vulnerável.
- **Deletar Usuário**: Permite enviar uma requisição `DELETE` para a rota `/users` para deletar um usuário por ID. O campo de ID é vulnerável.

Em cada página, a requisição enviada e a resposta recebida da API são exibidas claramente para fins de aprendizado.

## 🚀 Como Rodar Localmente

Para executar o projeto em sua máquina local, siga os passos abaixo:

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
    ou
    ```bash
    npm start
    ```

    Acesse a aplicação em `http://localhost:4200/`.

## 🐳 Como Rodar com Docker

Para construir e executar a aplicação usando Docker, siga estes passos:

1.  **Construa a imagem Docker:**
    ```bash
    docker build -t simulation-sqlinjection-front .
    ```

2.  **Execute o container:**
    ```bash
    docker run -p 8080:80 simulation-sqlinjection-front
    ```

    Acesse a aplicação em `http://localhost:8080/`.

**Nota:** A configuração do Docker inclui um arquivo `nginx.conf` personalizado que permite o roteamento do lado do cliente (SPA routing), resolvendo problemas de 404 ao navegar diretamente para rotas como `/login`, `/users`, etc.

## 🚨 Propósito Educacional

Este projeto foi criado com a intenção de ser vulnerável a ataques de SQL Injection. **Nenhuma entrada do usuário é sanitizada no frontend**, permitindo a inserção de payloads maliciosos para testar a segurança da API backend.

Exemplos de payloads que podem ser testados:

- `' OR '1'='1`
- `admin' --`
- `1; DROP TABLE users; --`

Ao interagir com a aplicação, observe as requisições enviadas e as respostas da API para entender o impacto de cada payload.

```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
