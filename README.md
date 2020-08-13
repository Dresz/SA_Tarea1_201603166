# SA_Tarea2_201603166
# Conceptos basicos SOA
## Solución
La solución a la practica solicitada consiste en una pagina **HTML**.
Está pagina consiste en dos partes, la primera para agregar contactos
y la segunda en listar los contactos con el filtro que es el carne.
## Agregar contactos
La primera parte tiene un apartado de un cuadro de texto y un boton que enviara una solicitud Post por medio de Ajax y JS
de lo que se encuentre escrito en el cuadro de texto.

## Listar contactos
Para este apartado se diseño una tabla que mostrara todos los contactos con el filtro de mi carne que es 201603166,
 esto se lleva a cabo desde que se carga la pagina se realiza una peticion Get a la pagina solicitada para poder recibir una lista que posteriormete es operada para separar y obtener el Id y nombre de la lista que retorna la pagina y generar las filas acorde a las respuestas obtenidas.
## Parte 2
Continuando con lo anterior se agrego una parte de seguridad, para esto se desarrollon a dos soluciones.
## Bearer Token
Continuando el codigo de la tarea 1 se agrego unicamente un header que contiene la informacion del token que se genera con una nueva funcion que se ejecuta cuando se carga la pagina.
## Basic Aut
A diferencia de Bearer, en esta parte se reestructuro el codigo y se cambio la estructura a xml, el envelope generado por una aplicacion exterior y se ejecutan Post Request para obtener la informacion de los datos y guardar datos en el servidor.
