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

## Utilizar banco de dados na aplicação

<p>Para utilizar o banco de dados na aplicação é necessário instalar algumas ferramentas e configura-lo na aplicação.</p>

### Instalação do banco de dados

```bash
$ npm i @nestjs/typeorm typeorm@0.2
$ npm i pg
```
<p>Caso de erro na instalação do typeorm utilize o comando.</p>

```bash
$ npm i @nestjs/typeorm typeorm@0.2 --force
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
