# Miscrits-web-page
Es una página web basada en un juego llamado Miscrits, el cual ya no se puede descargar o jugar

**En esta página web no se encuentra ni un cuarto de todos los lugares, NPCs, criaturas y elementums**

# Comandos
## Instalación de dependencias
<code>npm install</code>

## Compilación del código
<code>npm run build</code>

## Ejecución del servidor
<code>npm run start</code>

# Para ejecutar los tests
## Modificar código
Para que funcionen los tests y **no se queden a medias o den un error inesperado**, en el fichero <code>src/index.ts</code> comenta la línea de <code>app.listen(port)</code>

## Comandos
Una vez eso esté hecho, ejecuta el comando <code>npm run build</code> y cuando ejecutes el comando <code>npm run test</code> todos los tests deberían funcionar

## Importante
**Si no usas los ficheros de la carpeta db para crear la base de datos, los tests podrían fallar, ya que cada vez que se crea o actualiza algún documento, su id de documento cambia.**

Cuando se quiera volver a usar el servidor, recuerda des comentar la línea de <code>app.listen(port)</code> del fichero <code>src/index.ts</code> porque si no, la página web no funcionará

# Recursos
## Express.js
He usado el framework de **Express.js** para la configuración del servidor

## Handlebars
Para el HTML y lo que se ve en la página web he usado el motor de **Handlebars**

## CSS
He aprovechado **Bootstrap** para el CSS base, aunque algunas cosas he tenido que modificarlas con código CSS normal

## MongoDB
He conectado la página web a una base de datos **MongoDB**, para guardar la información de las criaturas, lugares, etc.

## Información
La información de esta página la he encontrado en las siguientes páginas web:

**[Vandal](https://vandal.elespanol.com/juegos/android/miscrits-world-of-creatures/34037#p-71)**

**[Fandom](https://miscrits.fandom.com/wiki/Miscrits_Wiki)**

**[Fandom en español](https://miscrits.fandom.com/es/wiki/Wiki_Miscripedia)**

## Imágenes
Las imágenes de esta página web están extraídas de las siguientes páginas web:

### Miscrits, lugares, NPCs y elementums:
**[Fandom](https://miscrits.fandom.com/wiki/Miscrits_Wiki)**

**[Fandom español](https://miscrits.fandom.com/es/wiki/Wiki_Miscripedia)**

### Logo de Miscrits
**[Rae Shoemaker](https://www.raeshoemaker.com/miscrits)**

### Imágenes de fondo
**[Adobe Friefly](https://firefly.adobe.com)**