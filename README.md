# **_Teste técnico FullStack - JUNIOR_**

<div style="display: inline_block"><br/>
    <img align="center" alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
    <img align="center" alt="css" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
    <img align="center" alt="git" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
    <img align="center" alt="github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
    <img align="center" alt="javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
    <img align="center" alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img align="center" alt="styled-components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
    <img align="center" alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>   
    <img align="center" alt="express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express"/>
    <img align="center" alt="postgresql" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
    <img align="center" alt="vscode" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>
</div>

<br/>

Este teste consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados. Tanto os clientes como os contatos tem as operações básicas de um CRUD, o cliente tem uma operação a mais de login, onde e criado o Token.

---

<br/>

## Instalação e execução em ambientes de desenvolvimento **(FRONT END)**

### Abra no diretório da aplicação web

```
teste-tecnico-fullstack-ekheinn\client\
```

### Instale as dependências

```
yarn
```

### Rode a aplicação

```
yarn start
```

## Instalação e execução em ambientes de desenvolvimento da API **(BACK END)**

### Abra no diretório da API

```
teste-tecnico-fullstack-ekheinn\service\
```

### Crie um arquivo .env com as chaves

```
POSTGRES_USER=
POSTGRES_PWD=
POSTGRES_DB=
SECRET_KEY=
```

### Instale as dependências

```
yarn
```

### Execute as migrações

```
yarn typeorm migration:run -d src/data-source.ts
```

### Rode a aplicação

```
yarn dev
```

### Em 'localhost:3001/test', teste se esta funcionando

```
{"message":"Testing :^)"}
```

---

<br/>

**Observação: as operações do site (registro, login...), só funcionam com a API rodando**

## Base URL | **FrontEnd**

> https://client-fullstack-test-ekheinn.vercel.app/

> localhost:3000 (yarn start)

## Base URL | **BackEnd**

> localhost:3001 (yarn dev)
