//JS: PRIMER ENTREGA - Consulta por grupo ideal: la idea sería agregar un botón, en la página <clases>, para que las personas puedan consultar en qué horario entrarían (ya que, especialmente con los niños/adolescentes, es una duda recurrente).

//Primero declaro la <función> que engloba los distintos grupos, según la edad--> condicional.
function grupoAikido(edad) {
  //Se declara una constante que utiliza una función de orden superior para encontrar cada objeto en el array.
  const grupo = GRUPOS_AIKIDO.find(
    (g) => g.edadMin <= edad && edad <= g.edadMax
  );

  //En lugar de un <else if>, voy a utilizar un <switch> para dividir los grupos. De acuerdo a la edad, devuelve el mensaje correspondiente.
  switch (grupo) {

    case GRUPOS_AIKIDO[0]:
      alert("Le corresponde el horario de Aikido Kids (revisar grilla).");
      break;
    case GRUPOS_AIKIDO[1]:
      alert(
        "Le corresponde el horario de Adultos (revisar grilla), pero te recomendamos el horario de - lun, mie y vie a las 19:30hs - , ya que hay un buen grupo de adolescentes practicando ahí 👍"
      );
      break;
    case GRUPOS_AIKIDO[2]:
      alert("Le corresponde el horario de Adultos (revisar grilla).");
      break;
    case GRUPOS_AIKIDO[3]:
      alert(
        "Le corresponde el horario de Adultos (revisar grilla). Por cierto: no hay edad máxima para comenzar ¡Te esperamos!😉"
      );
      break;
    default:
      alert(
        "La edad mínima para comenzar es de 4 años... ¡Esperemos un poquito más! 😊"
      );
      break;
  }
}

// Grupos de Aikido con sus edades mínimas y máximas correspondientes.

const GRUPOS_AIKIDO = [
  { grupo: "Aikido Kids", edadMin: 4, edadMax: 11 },
  { grupo: "Adolescentes", edadMin: 12, edadMax: 17 },
  { grupo: "Adultos", edadMin: 18, edadMax: 69 },
  { grupo: "Adultos mayores", edadMin: 70, edadMax: Infinity },
];

//Este alert podría ser reemplazado por un botón, más adelante.
alert(
  "¡Bienvenido! Aquí podrás consultar en qué grupo de Aikido entrarías, según la edad 😊"
);

//Declaración de la variable, cuyo valor ingresará el usuario.
let edadAlumno;

// Utilizo un <do... while> para asegurarme de que el usuario ingrese correctamente la información solicitada (sin script y sin dejar el mensaje en blanco).
do {
  edadAlumno = prompt(
    "Ingresa tu edad, o la de la persona interesada en comenzar (solo números):"
  );
} while (isNaN(edadAlumno) || edadAlumno.trim() === "");

// Invoco la función <grupoAikido> previamente configurada, y a la variable ya declarada, con un parseInt para convertirla en un valor numérico.
grupoAikido(parseInt(edadAlumno));

//--> Fin de mi primer algoritmo/programa ❤
