## `Instrucciones para deploy`
El cliente esta implementado en un servidor
Spring Boot.
Utiliza el servidor web incluido (Tomcat).

Para su ejecución hay que ejecutar la siguiente línea:

`java -jar testwebclient-0.0.1-SNAPSHOT.jar`

Este archivo esta en la carpeta target.

Para su ejecución necesita el puerto 1482 libre,
y la página para su ejecución es (en este caso en
localhost):

`http://localhost:1482/consulta_edad`

En esta página encontrarán un formulario bastante
básico con un campo para el nombre y la fecha.

El nombre debe tener al menos 4 palabras, y la fecha debe 
ser una fecha valida, no se permiten fechas como 
"44/11/1942".

Las persona ingresadas se irán registrando en la tabla que
se encuentra en la parte baja de la página.

El campo servidor se utiliza para identidicar donde esta ubicado
el servidor. 