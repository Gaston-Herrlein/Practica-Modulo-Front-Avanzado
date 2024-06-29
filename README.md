# Practica-Modulo-React-Avanzado

👤 Herrlein Gaston

💻 Bootcamp Full Stack Web XVI

📅 24 Marzo 2024

## Enunciado del ejercicio:

Esta práctica consiste en el desarrollo de una aplicación web similar a Wallapop. Para el desarrollo de esta práctica no está permitido utilizar librerías o frameworks de JavaScript. En cambio, sí está permitido utilizar utilidades de CSS externas como Tailwind, Bootstrap, etc para facilitar la maquetación y el diseño. Además, deberás proporcionar un archivo db.json para el backend con los datos de ejemplo para la corrección de la práctica.

El que utilizaremos será [sparrest.js](https://github.com/kasappeal/sparrest.js), proyecto basado en la utilidad json-server, el cual nos ofrece un completo API REST para simular un backend real y adaptarse a las necesidades de esta práctica.

## Manejo de interfaz

Se deberá gestionar todos los estados de interfaz correctamente:

- error
- carga
- éxito
- lista de anuncios vacía

### Listado de anuncios.

Cada anuncio debe mostrar su imagen (si tiene), nombre, descripción, precio y si es compra o venta. Los anuncios publicados deben obtenerse a través de un endpoint.

Al pulsar sobre un anuncio, iremos a la pantalla de detalle de anuncio. Si el usuario ha hecho login, hay que mostrar al usuario un botón que le permita acceder a la pantalla de creación de un anuncio.

### Detalles de anuncio

La página de detalle de anuncio deberá mostrar foto (si tiene), nombre, descripción, precio y si es compra o venta.

Si el usuario está autenticado y el anuncio le pertenece, deberá además mostrar un botón que permita eliminar el anuncio (aunque antes de eliminarlo, deberá confirmar con el usuario si realmente quiere eliminar o no el anuncio).

### Creacion de anuncio

En la página para crear un anuncio se deberá mostrar al usuario un formulario con los siguientes campos:

- Nombre (obligatorio): nombre del producto.
- Descripción (obligatorio): descripción del producto.
- Precio (obligatorio): precio del producto.
- Compra/venta (obligatorio): indica si el anuncio se trata de una compra o una venta.
- Foto (opcional): permitirá subir una foto del producto.

Cuando el usuario envíe el formulario, deberá enviar al backend una petición para guardar el anuncio.

### Login

La página de login deberá mostrar un formulario solicitando el nombre de usuario y contraseña. Cuando el usuario envíe el formulario, deberá autenticar al usuario contra el backend para obtener un token JWT que será utilizado en las siguientes comunicaciones con el backend para autenticar al usuario.

### Registro

Muy parecida a la de login. Deberá mostrar un formulario solicitando el nombre de usuario y contraseña. Cuando el usuario envíe el formulario, deberá registrar al usuario en el backend.

### Requisitos opcionales

Te animo a que intentes implementar las siguientes funcionalidades:

- Gestionar la paginación de anuncios en el listado, ya que por defecto nuestro API sólo devuelve 10 elementos.
- Implementar un buscador de anuncios en el listado.
- Permitir editar un anuncio, sólo si el usuario autenticado es el propietario del anuncio.
- Permitir el filtrado de anuncios usando tags. Por lo que en el formulario de anuncio deberán poder incluirse tags de los mismos. Estos tags inicialmente pueden ser estáticos (siempre los mismos).
- Unido al anterior, hacer que los tags sean dinámicos
