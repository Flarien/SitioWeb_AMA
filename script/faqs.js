// ---- PREGUNTAS FRECUENTES ---- //

//Primero conecto la constante con su contenedor en el HTML, por medio de DOM.
const contenedorFaqs = document.getElementById("contenedorFaqs");

//Luego voy a utilizar el método fetch para obtener los datos del archivo .json en el que se encuentra toda la data (por el momento son unas pocas preguntas, pero las iré actualizando con el tiempo)
fetch("../script/data/faqs.json")
  .then((response) => response.json())
  .then((data) =>
    //Ahora necesito crear los objetos necesarios en el DOM para mostrar el contenido de mi JSON, utilizando el metodo forEach, que recorre el array y por cada objeto va acrear un div, dentro del cual por cada pregunta creará un h5 y un p para la respuesta.
    data.forEach((faq) => {
      const item = document.createElement("div");
      item.className = "faqsItems";

      const pregunta = document.createElement("h5");
      pregunta.className = "pregunta";
      pregunta.textContent = faq.pregunta;

      const respuesta = document.createElement("p");
      respuesta.className = "respuesta";
      respuesta.textContent = faq.respuesta;

      //Le asignaré un evento a cada pregunta, para que se expanda debajo la respuesta, al usuario hacer click en ella,
      pregunta.addEventListener("click", () => {
        item.classList.toggle("active");
      });

      item.appendChild(pregunta);
      item.appendChild(respuesta);

      contenedorFaqs.appendChild(item);
    })
  );
