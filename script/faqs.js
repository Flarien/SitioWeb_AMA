// ---- PREGUNTAS FRECUENTES ---- //

// Conecta el elemento contenedor de las preguntas frecuentes en el HTML, utilizando el DOM.
const contenedorFaqs = document.getElementById("contenedorFaqs");

// Utiliza el método fetch para obtener los datos del archivo .json que contiene las preguntas y respuestas.
fetch("../script/data/faqs.json")
  .then((response) => response.json())
  .then((data) =>
    //Crea los elementos en el DOM para mostrar el contenido del JSON utilizando el método forEach.
    data.forEach((faq) => {
      const item = document.createElement("div");
      item.className = "faqsItems";

      const pregunta = document.createElement("h5");
      pregunta.className = "pregunta";
      pregunta.textContent = faq.pregunta;

      const respuesta = document.createElement("p");
      respuesta.className = "respuesta";
      respuesta.textContent = faq.respuesta;

      // Asigna un evento a cada pregunta para expandir o contraer la respuesta al hacer clic en ella.
      pregunta.addEventListener("click", () => {
        item.classList.toggle("active");
      });

      item.appendChild(pregunta);
      item.appendChild(respuesta);

      contenedorFaqs.appendChild(item);
    })
  )
  .catch((error) => {
    console.error("No se pudieron cargar las FAQs: " + error);
  })
  .finally(() => {
    console.log("Se ha completado la carga de las FAQs");
  })

  
  // ---- FIN ---- //