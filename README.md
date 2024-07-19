# Miscrits-web-page
És una pagina web basada en un juego llamado Miscrits, el qual ya no se puede descargar o jugar

**En esta pagina web no se encuentra ni un quarto de todos los lugares, npcs, criaturas y elementums**

# Commandos
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
**Si no usas los ficheros de la carpeta db para crear la base de datos, los tests podrían fallar, ya que cada vez que se crea o actualiza algun documento, su id de documento cambia.**

Cuando se quiera volver a usar el servidor, recuerda descomentar la línea de <code>app.listen(port)</code> del fichero <code>src/index.ts</code> ya que sinó, la pagina web no funcionarà

# Recursos
## ExpressJs
He usado el framework de **ExpressJs** para la configuración del servidor

## Handlebars
Para el HTML y lo que se vé en la pagina web he usado el motor de **Handlebars**

## CSS
He aprovechado **Bootstrap** para el css base, ahunque algunas cosas he tenido que modificarlas con codigo css normal

## MongoDB
He connectado la pagina web a una base de datos **Mongodb**, para guardar la información de las criaturas, lugares, etc.

## Información
La información de esta pagina la he encontrado en las siguientes paginas web:

**[Vandal](https://vandal.elespanol.com/juegos/android/miscrits-world-of-creatures/34037#p-71)**

**[Fandom](https://miscrits.fandom.com/wiki/Miscrits_Wiki)**

**[Fandom en español](https://miscrits.fandom.com/es/wiki/Wiki_Miscripedia)**

## Imagenes
Las imagenes de esta pagina web están extraídas de las siguientes paginas web:

### Miscrits, lugares, npcs y elementums:
**[Fandom](https://miscrits.fandom.com/wiki/Miscrits_Wiki)**

**[Fandom español](https://miscrits.fandom.com/es/wiki/Wiki_Miscripedia)**

### Logo de Miscrits
**[Rae Shoemaker](https://www.raeshoemaker.com/miscrits)**

### Imagenes de fondo
**[Adobe Friefly](https://firefly.adobe.com)**