
# Desafio Back-end Precato

Desenvolvimento de API Rest para realização de inscrição de leads com recurso de dispara de mensages personalizada para os credores.




## Stack utilizada

**Back-end:** Node, Express, MariaDB, Docker, MySQL workbench, bcryptjs

Como padrão de projeto foi utilizada a arquitetura **MVC**




## Introdução

Realização do desafio

Como meus conhecimentos de node não são muito aprofundados, desenvolvi o CRUD para inscrição de novos usuários no banco de dados, porém não consegui me aprofundar na realização de todas regras de negócio.

## Funcionalidades

- Adicionar novos usuários no banco de dados(Uma pré-inscrição)
- Editar o usuário que está logado
- Deletar a própria conta que está logada



## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE= Seu nome do banco de dados`

`DATABASE_HOST= Seu IP externo ou local`

`DATABASE_PORT= A porta que você quiser, usei 3306`

`DATABASE_USERNAME= Seu nome de usuário do banco`

`DATABASE_PASSWORD= Sua senha para acessar o banco`

`TOKEN_SECRET= Token aleatório para validação com JWT`

`TOKEN_EXPIRATION= Quantidade de dias para o token do usuario expirar`


## Instalação

Instale da API com npm, para adicionar os pacotes do package.json

```bash
  npm install

```

 - É necessária também a instalação do Docker, que pode ser realizada seguindo a documentação em https://docs.docker.com/get-docker/
 - Para a realização de requições e testes foi utilizado o Imsomnia, que pode ser obtido em: https://insomnia.rest/download para Windows.
## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Melhorias a serem implementadas

Como foi dito na introdução, meus conhecimentos de node ainda não são suficientes para aplicação de todas regras de negócio.

Portanto, ainda falta relacionar a tabela de clientes, que tem função semelhante a subscriptions aos usuários como forma de validação, para comprovar que o
usuário tenha um e-mail existente e não apenas validar o formato do e-mail como foi feito.

Falta também a implementação do sistema de mensagens, porém estou estudando formas para criá-lo.
## Autor

- [@rafaelclaudio7](https://github.com/RafaelClaudio7)

