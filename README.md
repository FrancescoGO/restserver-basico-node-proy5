## Código fuente de un servidor REST Server básico - Node

Este es el código fuente de un servidor REST Server básico en fase de implementación.

# Actualización - Versión 0.0.3

### Se añadió las siguientes funcionalidades:

* Obtener lista de usuarios con estado activo en la BD. Con párametros opcionales como: desde y el límite ( Paginación ).
* Creación de usuario según Schema personalizado en Mongoose. Incluyendo las restricciones.
* Actualización de usuario. Incluyendo restricciones.
* Inhabilitar estado de usuario.

Se utilizó EXPRESS, Mongoose, Robo3T, MongoAtlas ( BD en la Nube - Simulando producción ), Mongo Compass, Postman, Heroku.

Ejecutar este comando para instalar las dependencias:
```
npm install
```
