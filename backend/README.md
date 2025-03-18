# Be The Hero - Backend

![Node.js](https://img.shields.io/badge/Node.js-14.x-green) ![Express](https://img.shields.io/badge/Express-4.17.1-lightgrey) ![Knex](https://img.shields.io/badge/Knex-0.20.13-blue) ![SQLite](https://img.shields.io/badge/SQLite-4.1.1-blue)

## Sobre o Projeto
O **backend** do Be The Hero foi desenvolvido em **Node.js** utilizando o framework **Express** para fornecer uma API que gerencia o cadastro de ONGs, casos e conexões entre doadores e instituições.

## Tecnologias Utilizadas
- **Node.js**
- **Express** 4.17.1
- **Knex** 0.20.13
- **SQLite3** 4.1.1 (Banco de dados principal)
- **MySQL** 2.18.1 (Suporte opcional a MySQL)
- **Celebrate** 12.0.1 (Validação de requisições)
- **Cors** 2.8.5 (Controle de acesso entre domínios)
- **Nodemon** (Ambiente de desenvolvimento)

## Instalação e Configuração

### Pré-requisitos
Certifique-se de ter instalado:
- Node.js + npm/yarn

### Passos para rodar o projeto
1. Acesse o diretório do backend:
   ```sh
   cd backend
   ```
2. Instale as dependências do projeto:
   ```sh
   npm install
   ```
3. Configure o banco de dados utilizando **knex**:
   ```sh
   npx knex migrate:latest
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```

## Uso
Após iniciar o servidor, a API estará disponível em:
- **Backend API:** `http://localhost:3333`

## Licença
Este projeto foi desenvolvido para fins educacionais e pode ser utilizado livremente para estudo e aprendizado.

---

Para dúvidas ou suporte, entre em contato com a comunidade da Rocketseat ou com os desenvolvedores.