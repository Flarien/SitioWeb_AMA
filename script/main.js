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
      "<img src='./assets/iconSol.svg' alt='Icono para pasar a modo claro'>";
    localStorage.setItem("modo_oscuro", "activado");
  } else {
    btnModo.innerHTML =
      "<img src='./assets/iconLuna.svg' alt='Icono para pasar a modo oscuro'>";
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

//Luego declaro la <función> que engloba los distintos grupos, según la edad--> condicional.
function grupoAikido(edad) {
  //Se declara una constante que utiliza una función de orden superior para encontrar cada objeto en el array.
  const grupo = GRUPOS_AIKIDO.find(
    (g) => g.edadMin <= edad && edad <= g.edadMax
  );

  //Utilizo un <switch> para dividir los grupos. De acuerdo a la edad, devuelve el mensaje correspondiente.
  switch (grupo) {
    case GRUPOS_AIKIDO[0]:
      return("Le corresponde el horario de Aikido Kids (revisar grilla 👆 ).");
    case GRUPOS_AIKIDO[1]:
      return("Le corresponde el horario de Adultos (revisar grilla 👆 ), pero te recomendamos el horario de - lun, mie y vie a las 19:30hs - , ya que hay un buen grupo de adolescentes practicando ahí 👍"
      );
    case GRUPOS_AIKIDO[2]:
      return("Le corresponde el horario de Adultos (revisar grilla 👆 ).");
    case GRUPOS_AIKIDO[3]:
      return("Le corresponde el horario de Adultos (revisar grilla 👆 ). Por cierto: no hay edad máxima para comenzar ¡Te esperamos!😉"
      );
    default:
      return("La edad mínima para comenzar es de 4 años... ¡Esperemos un poquito más! 😊"
      );
  }
}

//Declaración de las constantes y su conexión con los elementos del HTML.
const botonConsulta = document.getElementById("boton_consulta");
const respuesta = document.getElementById("respuesta_consulta");

//Ahora conecto el boton de la consulta con el evento click, dentro declaro la variable edadAlumno con el id del input por donde ingresa el valor el usuario. Me aseguro que ingrese un dato válido y luego llamo a la función y doy la respuesta en el lugar correspondiente.
botonConsulta.addEventListener("click", () => {
  let edadAlumno = document.getElementById("edadAlumno").value;

  if (isNaN(edadAlumno) || edadAlumno.trim() === "") {
    respuesta.textContent = "Por favor, ingrese una edad válida.";
    return;
  }

  const grupo = grupoAikido(parseInt(edadAlumno));
  respuesta.textContent = grupo;
});



