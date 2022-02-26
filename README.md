# Desafio Angular em 48H :rocket:

## Sobre o projeto :package:
Este projeto é um desafio técnico para, onde há a intenção de testar os conhecimentos através da rápida adaptação entre as tecnologias utilizadas, o projeto trata-se de um CRUD básico.

O projeto está dividido em dois repositórios (BackEnd e FrontEnd).

O backend é uma API feita em NodeJS utilizando a arquitetura MSC seguindo o padrão Restful trabalhando com o banco de dados relacional MySQL, utilizando o Sequelize como ORM.

O frontend é uma aplicação em Angular, onde são feitas as requisições para a API para que possa trabalhar com os dados.


## Tecnologias utilizadas :hammer_and_wrench:
### Back-End :earth_africa:
- NodeJs
- Express
- BcryptJs
- Validator 
- MySQL
- Sequelize
- JSON Web Token
- DotEnv
- Cors

### Front-End :computer:
- Angular
- BcryptJs

<img src="https://github.com/guiidc/angular-cardozo/blob/master/previews/preview1.png" width="500px">
<img src="https://github.com/guiidc/angular-cardozo/blob/master/previews/preview2.png" width="500px">
<img src="https://github.com/guiidc/angular-cardozo/blob/master/previews/preview3.png" width="500px">
<img src="https://github.com/guiidc/angular-cardozo/blob/master/previews/preview4.png" width="500px">
<img src="https://github.com/guiidc/angular-cardozo/blob/master/previews/preview5.png" width="500px">


### Instruções Back-End :scroll:
1. Após clonar o repositório rode o comando `npm install` para instalar as dependências necessárias.
2. Crie uma arquivo .env na raiz do projeto para setar as variaveis de ambiente a seguir
+ PORT (opcional, caso não possua a api irá ficar escutando na porta 3333)
+ DB_USER=usuário do seu banco de dados MySQL geralmente é "root"
+ DB_PASSWORD=senha do banco de dados do seu MySQL
+ DB_HOST=endereço do banco de dados do seu MySQL caso esteja rodando localmente basta atribuir o valor localhost
* JWT_SECRET=string secreta para gerar os tokens JEWT
3. Após a instalação do sequelize rode os seguintes comandos para criar as tabelas e o DB necessário 
```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
4. Caso não exista nenhuma porta setada no arquivo .env a porta padrão para a aplicação rodar será na porta 3333, certifique-se de que a porta em questão não está sendo utilizada no momento por outra aplicação. Para iniciar o servidor basta digitar o comando `$ npm start` no terminal

Obs. O seed irá GERAR um usuário com o email admin@mail.com e a senha 123 para você poder logar no sistema

### Instruções Front-End :scroll:
1. instale o angular/cli globalmente com o comando npm install -g @angular/cli, caso seja necessário usar o sudo, basta digitar sudo npm install -g @angular/cli
2. Após clonar o repositório execute o comando `npm install` para instalar as dependências necessárias.
3. Verifique se o servidor Back-End está online e execute o comando `ng serve` para iniciar a aplicação
4. Obs.: A aplicação front roda na porta 4200 e faz a requisção para o back-end que está na porta 3333 (porta padrão). Ao executar verifique se alguma dessas portas não estão sendo usadadas por outros serviços.
5. No processo de SEED do backend irá gerar um usuário com o email admin@mail.com e senha 123 para que vc pode logar no sistema
