# Proy. de Programación Web - Aplicación SPA con React

Este proyecto es una API RESTful desarrollada con Node.js y Express. Permite realizar operaciones CRUD sobre dos entidades: Users y Cars. El proyecto incluye autenticación, validación de datos y manejo de errores centralizado.

## Concesionario de Autos - BACK

Elegimos como proyecto el diseño de una página web para un concesionario de coches.

## Funcionalidades Principales 📋

1. Endpoints Users:
    * GET(/users): Lista todos los usuarios con filtros, ordenamientos y paginación. Tiene compresión GZIP.
    * GET(/users/:id): Lista un usuario por id.
    * POST(/users): Crear un usuario.
    * PUT(/users/:id): Modificar un usuario por id.
    * DELETE(/users/:id): Eliminar un usuario por id.
2. Endpoints Cars:
    * GET(/cars): Lista todos los autos con filtros, ordenamientos y paginación. Tiene compresión GZIP.
    * GET(/cars/:id): Lista un auto por id(Populate User).
    * POST(/cars): Crear un auto.
    * PUT(/cars/:id): Modificar un auto por id.
    * DELETE(/cars/:id): Eliminar un auto por id.
3. Endpoints:
    * POST(/users/login): Endpoint para inicio de sesión de usuarios.
    * POST(/users/token): Endpoint para la renovación de token.
4. Detalles de Implementación
    * La Entidad Cars se vincula con Users a traves del campo "user".
5. Autenticación y Autorización:
    * [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken) - Estándar abierto (RFC-7519) basado en JSON para crear un token que sirva para enviar datos entre aplicaciones o servicios y garantizar que sean válidos y seguros.
    * Se protegieron rutas con JWT para que solo los usuarios con los permisos adecuados puedan utilizarlas.
6. Validación de Datos:
    * [Express-Validator](https://www.npmjs.com/package/express-validator) - proporcionan una serie de funciones para comprobar la validez de los datos que se pasan a su aplicación.
7. Logger:
    * [Winston](https://www.npmjs.com/package/winston) - Biblioteca para Node.js que proporciona un sistema de registro (logging) flexible y versátil.

## Tecnologías Utilizadas 🛠

* [Visual Studio Code](https://code.visualstudio.com/) - Editor de código fuente gratuito, multiplataforma y de código abierto.
* [Node.js](https://nodejs.org/en/) - Entorno de ejecución de JavaScript de código abierto y multiplataforma.
* [Express](https://expressjs.com/) - Framework de backend Node.js minimalista, rápido, que proporciona características y herramientas robustas para desarrollar aplicaciones de backend escalables.
* [Mongoose](https://mongoosejs.com/) - Librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones, construcción de queries, middlewares, conversión de tipos y algunas otras, que enriquecen la funcionalidad de la base de datos.
* [MongoDB](https://www.mongodb.com/) - es una base de datos de documentos que ofrece una gran escalabilidad y flexibilidad, así como un modelo de consultas e indexación avanzado.

## Despliegue 📦

* Concesionario de Autos - BACK(API RESTful) - https://concesionario-back.onrender.com/
* [Render](https://render.com/) - plataforma de desarrollo y alojamiento de aplicaciones web y sitios web basada en la nube.

## Versionado 📌

* Usamos [Git](https://git-scm.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/Tate-147/Concesionario-Back/tags).

## Estructura del Proyecto 📄

{foto de los directorios}

## Instrucciones de Uso 🔧

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

#### Clonar el repositorio

Para clonar este repositorio de GitHub en Visual Studio Code, puedes seguir estos pasos:

1. Abrir la paleta de comandos con la combinación de teclas **ctrl + Mayús + P**
2. Escribir **gitcl** en el símbolo de la paleta de comandos
3. Seleccionar el comando **Git: Clone**
4. Seleccionar **Clonar desde GitHub** y presionar Entrar
5. Copiar y Pegar la URL del repositorio (https://github.com/Tate-147/Concesionario-Back.git)
6. Seleccionar (o crear) el directorio local en el que se desea clonar el proyecto
7. Seleccionar como destino del repositorio
8. Abrir cuando se reciba la notificación que pregunta si se desea abrir el repositorio clonado

#### Instalar dependencias

Para instalar las dependencias NPM (Node Package Manager)

1. Abrir la Terminal con la combinación de teclas **ctrl + Mayús + ñ**
2. Escribir **npm install** en el directorio raíz del paquete

#### Iniciar el servidor de desarrollo

Para iniciar un servidor de desarrollo

1. Abrir la Terminal con la combinación de teclas **ctrl + Mayús + ñ**
2. Escribir **npm run dev** en el directorio raíz del paquete

## Imágenes de la aplicación

![This is an alt text.](/image/sample.webp "This is a sample image.")

## Contribuidores ✒️

* **Mauro Pereyra** - *Curso Desarrollo Web Full Stack*
* **Santiago Zaffora** - *Curso Desarrollo Web Full Stack*