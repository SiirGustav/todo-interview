<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.allrideapp.com/">
    <img src="https://www.allrideapp.com/assets/img/allride_celeste.svg" alt="Logo" width="180">
  </a>

  <h2 align="center">Quick Start Prueba Técnica - Frontend</h2>

</div>

Dado que tanto el conocimiento de Angular 8, como websockets, es opcional para el puesto de frontend ofrecido, creamos esta plantilla de inicio rápido, en la cual se podrán encontrar las siguientes funcionalidades:

* Conexiones al websocket
* Manejo de eventos recibidos del socket
* Métodos para emitir ciertos eventos al socket

Es importante mencionar que, para la correcta conexión a tu room personalizada, debes cambiar el string
`'tu_room_personal'`, ubicado en `src\services\web-socket-service.ts`, por tu usuario de Github. Luego de eso, sólo necesitarás crear el diseño de la página y hacer uso de (y modificar de ser necesario) los métodos existentes.


## Detalles del proyecto

Generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Servidor de desarrollo

Correr `ng serve` en consola para iniciar el servidor. Navegar a `http://localhost:4200/`. La aplicación recargará la página automáticamente ante cualquier cambio guardado.