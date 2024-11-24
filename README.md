# Proyecto de Programación Web - Aplicación SPA con React

Este proyecto es una API RESTful desarrollada con Node.js y Express. Permite realizar operaciones CRUD sobre dos entidades: una principal y una de soporte. El proyecto incluye autenticación, validación de datos y manejo de errores centralizado.

## Concesionario de Autos - BACK

Elegimos como proyecto el diseño de una página web para un concesionario de coches.

## Funcionalidades Principales 📋

1. Endpoints Principales
    * Login: Endpoint para inicio de sesión de usuarios.
    * Registro: Endpoint para la creación de cuentas de usuario.
    * CRUD para la Entidad Principal y Entidad de Soporte:
        1. Entidad Principal: CARS.
        2. Entidad de Soporte: SELLERS.
2. Detalles de Implementación
    * Entidad Principal y Entidad de Soporte:
        1. Cada entidad debe tener al menos cuatro propiedades.
        2. Las entidades deben estar relacionadas
        3. Ejemplo de propiedades:
            1. Noticia: título, contenido, fecha, descripción.
            2. Autor: nombre, email, biografía, fechaNacimiento.
        4. Ejemplo de relación entre entidades
            1. Noticia conoce el id de su autor
3. Endpoints Requeridos para CRUD:
    * GET: Listar todos con paginación.
    * GET: Listar uno con paginación.
    * POST: Crear un nuevo registro.
    * PUT: Modificar un registro existente.
    * DELETE: Eliminar un registro existente.
4. Autenticación y Autorización:
    * Implementar JWT para proteger rutas del CRUD.
    * Proteger las rutas para que solo usuarios autenticados puedan realizar operaciones CRUD.
5. Validación de Datos:
    * Uso de express-validator para validar datos de entrada.
6. Logger:
    * Incluir un sistema de logging básico con winston

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