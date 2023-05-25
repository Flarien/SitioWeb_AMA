# ProyectoFinal-Briglia

SITIO WEB PARA LA ASOCIACIÓN MARPLATENSE DE AIKIDO
Este es mi primer proyecto y es el resultado de mi trabajo en el curso de Desarrollo Web; es por ello que esté principalmente construido utilizando HTML y CSS. Este sitio es básicamente informativo sobre el Aikido y su historia, en general, y sobre nuestra escuela y nuestras clases en particular. Al comenzar el curso de JavaScript le incluí algunas funcionalidades para hacerlo más dinámico.

CARACTERÍSTICAS PRINCIPALES: 
>> Modo Claro/Oscuro
Se implementó la funcionalidad de cambiar entre el modo claro y oscuro en el sitio web. Al hacer clic en un botón, se alteran los estilos del sitio y se guarda la preferencia del usuario en el almacenamiento local del navegador. Además, se utilizó la librería Font Awesome para agregar iconos que mejoren la experiencia visual del cambio de modo.

>> Consulta de Grupo
El sitio permite a los usuarios consultar a qué grupo de Aikido pertenecen según su edad. Se definió un conjunto de grupos en un array de objetos, y utilizando una función de búsqueda, se determina el grupo correspondiente a la edad ingresada por el usuario. La interacción con el usuario se logra mediante la integración de la librería SweetAlert, que muestra una alerta con un cuadro de entrada para ingresar la edad y devuelve otra alerta con la respuesta correspondiente.

>> Preguntas Frecuentes (FAQs)
Se implementó un sistema de preguntas frecuentes (FAQs) utilizando datos almacenados en un archivo JSON local. Mediante el uso del método fetch, se carga el archivo JSON y se generan dinámicamente las preguntas y respuestas en el sitio. Al hacer clic en cada pregunta, se muestra u oculta la respuesta correspondiente, brindando una experiencia interactiva al usuario.

OBSERVACIONES
> El proyecto se dividió en varios archivos JavaScript para mejorar la organización del código. El archivo principal (main.js) se utiliza para la funcionalidad del modo claro/oscuro, mientras que otros archivos se encargan de las funcionalidades específicas de consulta de grupo y preguntas frecuentes.
> Aunque el proyecto se inició con la intención de ser publicado en un servidor, a lo largo de mi carrera de FrontEnd he adquirido nuevos conocimientos y decidí reconstruirlo desde cero en el futuro. Como resultado, algunas secciones del sitio pueden tener estilos incompletos y el contenido puede ser limitado en algunas áreas. También se desarrollaron más páginas de las requeridas en el curso de Desarrollo Web debido a mis planes iniciales de publicación.

¡Gracias por revisar el README y su contenido técnico mejorado!
