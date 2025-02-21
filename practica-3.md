# API REST

## Qué es?

Es una interfaz para programación que pueden usar los sistemas computacionales para comunicarse a travez de internet, de manera segura. Maneja reglas y recomendaciones para diseñar API's.

Nos permiten desarrollar sistemas flexibles, escalables e independientes.

Requiere que las solicitudes cuenten con:
- Identificador unico de recursos: `url`
- Método: `GET`, `POST`, `PUT`, `DELETE`
- Encabezado HTTP: `DATA`, `PARAMETROS`

### Las API

Application Programming Interface.

Son una serie de protocolos y definiciones para el desarrollo e integracion de aplicaciones de software.

A menudo se hace la analogia del restaurante, el menu es el front, la cocina el back, y los meseros la api que lleva la información solicitada a los clientes.

### REST

Representational State Transfer.

Es una arquitectura de software que define condiciones sobre como debería de trabajar una API. Las peticiones del cliente se procesan de forma independiente y entre sí, no tienen estado, y estan aisladas del resto.

Principios de diseño:
- Interfaz uniforme
- Desacoplamiento cliente - servidor
- Sin estado
- Capacidad de almacenamiento en caché
- Arquitectura de sistema en capas
- Código bajo demanda

## Contenido de las respuestas

Los principios de esta tecnología requieren que el response del server contenga los siguientes elementos:
- Linea de estado: Es un código de 3 digitos que comunica si la solicitud se procesó de manera correcta, un ejemplo comun es el 404.
- Cuerpo del mensaje: Contiene la representacion del recurso, puede ser en formato XML o JSON `{"name":"John", "age":30}`
- Encabezados: Son encabezados o metadatos sobre la respuesta, que nos brindan mayor contexto de la misma.

## Usos de ejemplo

Se pueden usar para mejorar la funcionalidad de sitios web y aplicaciones, otro ejemplo es su uso para conseguir metricas de redes sociales.

# Referencias 

[AWS](https://aws.amazon.com/es/what-is/restful-api/?nc1=h_ls)

[Red Hat](https://www.redhat.com/es/topics/api/what-is-a-rest-api#:~:text=Una%20API%20de%20REST%20es,para%20dise%C3%B1ar%20una%20API%20web.)
