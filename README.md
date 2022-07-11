<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
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

## Instrucciones
Este apartado se encuentra en español con fines de plasmar las ideas de manera clara. Cabe destacar que se hace muestra del .env y demas archivos ignorados con fines didacticos

### Observamos la estructura base del proyecto:

![](./images-readme//estructura-base-proyecto.png)

Procederemos a crear los archivos de ormconfig.json (el cual es necesario para poder ejecutar migraciones) y el archivo .env donde se encuentras nuestras variables de entorno.
Antes de realizar la creacion de los archvios de debe tener instalado docker en tu computadora para poder hacer ejecucion del docker compose donde pondremos a correr nuestra base de datos. una vez tengamos realizado esto esto hacemos los siguiente; utilizamos una nueva consola y nos situamos en la raíz de nuestro proyecto una vez nos encontremos al nivel de docker compose.

![](./images-readme/consola-raiz-proyecto.png)

procedemos a ejecutar el comando:
```bash
docker-compose up
```
y observaremos como se instala la imagen de postgres y se levanta la base datos
![](./images-readme/docker-compose-run.png)


```bash
# ormconfig.json
{
    "type": "postgres",
    "host": "localhost",
    "port": 8002,
    "username": "postgres",
    "password": "qwerty123",
    "database": "discount_codes",
    "synchronize": false,
    "entities": [
        "src/frameworks/pg/entities/**/*.entity{.ts, .js}"
    ],
    "migrationsTableName": "custom_migration_table",
    "migrations": [
        "./migrations/*.{js,ts}"
    ],
    "cli": {
        "migrationsDir": "./migrations/"
    }
}
```
```bash
# .env
SWAGGER_PASS=235454aqE1??¿

# DATABASE CREDENTIALS
PGHOST=localhost
PGPORT=8002
PGUSER=postgres
PGPASSWORD=qwerty123
PGDATABASE=discount_codes
```

```bash
# En nuestra consola para poder ejecutar mirgaciones primero debomos generarla y luego ejecutarla

# genera migracion
migration:generate
$ npm run migration:generate nombre-migracion

# ejecutar migracion
migration:run
$ npm run migration:run
```
cuando se ejecute el ultimo comando se creara en la raíz de nuestro proyecto una carpeta llamada migrations. **NOTA: antes de ejecutar una migracion creada debemos ingresa al archivo de la migracion y hacer un guardado de este en mi caso es ctrl + s**

## swagger
la documentacion de swagger la encontramos en la siguiente ruta -> http://localhost:4001/api/v1/discount/docs