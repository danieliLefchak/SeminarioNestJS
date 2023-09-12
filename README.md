# Seminário NestJS
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Instalação

```bash
$ npm i -g @nestjs/cli
$ nest new Nome Do Projeto
```

<p>Após criar o nome ele irá pedir que seja escolhido um gerenciador de pacotes de sua preferência.</p>

```bash
? Which package manager would you like to use? (Use arrow keys)
> npm
  yarn
  pnpm
```

<p>Depois que o gerenciador de pacotes for escolhido o projeto será criado.</p>

## Estrutura do projeto

<p>O projeto padrão criado vem com as classes.</p>
<p>app.controller.spec -> Classe para a implementação dos testes.</p>
<p>app.controller -> Classe responsável por gerenciar as rotas.</p>
<p>app.service -> Classe responsável pelo armazenamento e recuração de dados.</p>
<p>app.modules -> Classe onde são definidos os grupos de componentes como providers e controllers.</p>

<p>A estrutura geral das classes do projeto é bem semelhante as classes implementadas ao utilizar o spring.</p>

## Utilizar banco de dados na aplicação

<p>Para utilizar o banco de dados na aplicação é necessário instalar algumas bibliotecas e configura-las na aplicação.</p>

### Instalação do banco de dados

```bash
$ npm i @nestjs/typeorm typeorm@0.2
$ npm i pg
```
<p>Caso de erro na instalação do typeorm utilize o comando.</p>

```bash
$ npm i @nestjs/typeorm typeorm@0.2 --force
```

### Configuração do banco de dados

<p>As configurações do banco de dados é feita na classe app.modules dentro do @Module nos imports.</p>

```bash
imports: [LivrosModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'NestJS',
    username: 'postgres',
    password: '123',
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.js,.ts}'],
  })],
```
<p>As configurações também podem ser feitas usando um .env.</p>
<p>O synchronize é utilizado para garantir a sincronização das entidades com o banco de dados sempre que a aplicação for executada.</p>
<p>Entities é utilizado inicializar a conexão inicial com o banco de dados</p>

### Uso do banco de dados na aplicação

<p>A estrutura para a criação das entidades é bem parecida com a do spring o que facilita a compreenção para quem já viu spring.</p>

### Configuração do Repository

<p>O respository pode ser configurado na propria classe service atraves de um construtor. Exemplo:</p>

```bash
constructor(
    @InjectRepository(Livro)
    private readonly livrosRepository: Repository<Livro>,
  ){}
```

## Para rodar a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Para rodar os testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Referências

```bash
# Banco de dados utilizando TypeOrm
https://docs.nestjs.com/techniques/database
https://typeorm.io/

# Gerador de CRUD
https://docs.nestjs.com/recipes/crud-generator

# Sobre a estrutura do projeto
https://docs.nestjs.com/modules
https://docs.nestjs.com/controllers
https://docs.nestjs.com/providers
https://docs.nestjs.com/fundamentals/testing
```
