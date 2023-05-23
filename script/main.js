// ---- MODO CLARO / MODO OSCURO ---- //

// Se declaran la variables necesarias para utilizar luego en la función y poder agregarles el evento o clase y quede lo más organizado, prolijo y lejible posible:
let btnModo = document.getElementById("modo");
let body = document.body;
let modo_oscuro = localStorage.getItem("modo_oscuro");

//Creo una función a partir del evento "click" que ejecute el cambio de un modo al otro (por medio de un control de flujo) y guarde en el Local Storage el valor de si está activado o no. Además, cambia el ícono de la luna y el sol, según el modo a activar.
btnModo.addEventListener("click", () => {
  body.classList.toggle("modo_oscuro");

  if (body.classList.contains("modo_oscuro")) {
    btnModo.innerHTML =
      '<i class="fa-regular fa-sun" style="color: #ffffff;"></i>';
    localStorage.setItem("modo_oscuro", "activado");
  } else {
    btnModo.innerHTML =
      '<i class="fa-regular fa-moon" style="color: #ffffff;"></i>';
    localStorage.setItem("modo_oscuro", "desactivado");
  }
});

//Por último, y por fuera de la función, ejecuto un flujo que permita guardar en que modo dejó su usuario el sitio, la última vez que lo usó (cambié el if else por un operador ternario, para optimizar y simplificar el código... aunque aún me estoy acostumbrando)
body.className = modo_oscuro === "activado" ? "modo_oscuro" : "";

// ------- ******* soy un separador******* ------- //

// ---- CONSULTA POR GRUPO IDEAL ---- //

// Grupos de Aikido con sus edades mínimas y máximas correspondientes.
const GRUPOS_AIKIDO = [
  { grupo: "Aikido Kids", edadMin: 4, edadMax: 11 },
  { grupo: "Adolescentes", edadMin: 12, edadMax: 17 },
  { grupo: "Adultos", edadMin: 18, edadMax: 69 },
  { grupo: "Adultos mayores", edadMin: 70, edadMax: Infinity },
];

//Declaro la función que mostrará la respuesta en el alert
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

// Función flecha que muestra el alert, permitiendo al usuario ingresar la edad.
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
      //Aplicando el concepto de AJAX, con la función del SwetAlert2, para obtener la edad ingresada en un n° entero.
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

//Luego declaro la <función> que engloba los distintos grupos, según la edad--> condicional.
function grupoAikido(edad) {
  //Se declara una constante que utiliza una función de orden superior para encontrar cada objeto en el array.
  const grupo = GRUPOS_AIKIDO.find(
    (g) => g.edadMin <= edad && edad <= g.edadMax
  );

  //Utilizo un <switch> para dividir los grupos. De acuerdo a la edad, devuelve el mensaje correspondiente.
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



//Primero conecto el boton consulta del HTML, trayéndolo con su ID, con la variable botonConsulta, y luego le agrego el evento click, conectándola con la función mostrarAlerta, para que se ejecute al usuario hacer el click correspondiente.
const botonConsulta = document.getElementById("boton_consulta");
botonConsulta.addEventListener("click", mostrarAlerta);
