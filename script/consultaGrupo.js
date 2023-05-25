// ---- CONSULTA POR GRUPO IDEAL ---- //

// Grupos de Aikido con sus edades mínimas y máximas correspondientes.
const GRUPOS_AIKIDO = [
  { grupo: "Aikido Kids", edadMin: 4, edadMax: 11 },
  { grupo: "Adolescentes", edadMin: 12, edadMax: 17 },
  { grupo: "Adultos", edadMin: 18, edadMax: 69 },
  { grupo: "Adultos mayores", edadMin: 70, edadMax: Infinity },
];

// Función que devuelve el grupo de Aikido correspondiente según la edad proporcionada.
function grupoAikido(edad) {
  // Utiliza el método find() para buscar el grupo que corresponda a la edad proporcionada.
  const grupo = GRUPOS_AIKIDO.find(
    (g) => g.edadMin <= edad && edad <= g.edadMax
  );

  //Utiliza un switch para devolver el mensaje correspondiente según el grupo.
  switch (grupo) {
    case GRUPOS_AIKIDO[0]:
      return "Le corresponde el horario de Aikido Kids (revisar grilla 👆 ).";
    case GRUPOS_AIKIDO[1]:
      return "Le corresponde el horario de Adultos (revisar grilla 👆 ), pero te recomendamos el horario de - lun, mie y vie a las 19:30hs - , ya que hay un buen grupo de adolescentes practicando ahí 👍";
    case GRUPOS_AIKIDO[2]:
      return "Le corresponde el horario de Adultos (revisar grilla 👆 ).";
    case GRUPOS_AIKIDO[3]:
      return "Le corresponde el horario de Adultos (revisar grilla 👆 ). Por cierto: no hay edad máxima para comenzar ¡Te esperamos!😉";
    default:
      return "Menor de 4 años";
  }
}

//Función que muestra la respuesta en un alert, usando SweetAlert2.
function mostrarRespuesta(respuesta) {
  Swal.fire({
    icon: "success",
    title: "Resultado",
    text: respuesta,
    background: "rgba(86,86,86)",
    color: "#fff",
    confirmButtonColor: "rgb(47, 66, 60)",
  });
}

// Función que muestra un mensaje de error cuando la edad ingresada es menor de 4 años.
function mostrarError() {
  Swal.fire({
    icon: "error",
    title: "¡Esperemos un poquito más! 😊",
    text: '"La edad mínima para comenzar es de 4 años..."',
    background: "rgba(86,86,86)",
    color: "#fff",
    confirmButtonColor: "rgb(47, 66, 60)",
  });
}

// Función que muestra un alert con un campo de entrada para ingresar la edad.
function mostrarAlerta() {
  Swal.fire(
    {
      title: "Ingresa la edad",
      input: "number",
      inputLabel: "Años:",
      background: "rgba(86,86,86)",
      color: "#fff",
      confirmButtonColor: "rgb(47, 66, 60)",
      inputAttributes: {
        min: 1,
        max: Infinity,
        step: 1,
      },
      inputValue: 1,
      showCancelButton: true,
      confirmButtonText: "Consultar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,

      // Utiliza el concepto de una promesa con la función preConfirm para obtener la edad ingresada como un número entero.
      preConfirm: (value) => {
        const edadAlumno = parseInt(value);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(edadAlumno);
          }, 500);
        });
      },
    }
    //Se utiliza una promesa para devolver la respuesta.
  ).then((result) => {
    if (result.isConfirmed) {
      const edadAlumno = result.value;
      const grupo = grupoAikido(edadAlumno);
      if (grupo === "Menor de 4 años") {
        mostrarError();
      } else {
        mostrarRespuesta(grupo);
      }
    }
  });
}

// Obtiene el botón de consulta del HTML y le agrega un evento click para ejecutar la función mostrarAlerta cuando se hace clic en él.
const botonConsulta = document.getElementById("boton_consulta");
botonConsulta.addEventListener("click", mostrarAlerta);


// ---- FIN ---- //