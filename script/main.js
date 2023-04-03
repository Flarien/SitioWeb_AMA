//JS: PRIMER ENTREGA - Consulta por grupo ideal: la idea sería agregar un botón, en la página <clases>, para que las personas puedan consultar en qué horario entrarían (ya que, especialmente con los niños/adolescentes, es una duda recurrente).

//Primero declaro la <función> que engloba los distintos grupos, según la edad--> condicional.
function grupoAikido(edad) {
  //Utilizo un <else if> para dividir los grupos. De acuerdo a la edad, devuelve el mensaje correspondiente.
  if (edad < 4) {
    return "La edad mínima para comenzar es de 4 años... ¡Esperemos un poquito más! 😊";
  } else if (edad < 12) {
    return "Le corresponde el horario de Aikido Kids (revisar grilla).";
  } else if (edad < 18) {
    return "Le corresponde el horario de Adultos (revisar grilla), pero te recomendamos el horario de - lun, mie y vie a las 19:30hs - , ya que hay un buengrupo de adolescentes practicando ahí 👍";
  } else if (edad < 70) {
    return "Le corresponde el horario de Adultos (revisar grilla).";
  } else {
    return "Le corresponde el horario de Adultos (revisar grilla). Por cierto: no hay límite de edad para comenzar ¡Te esperamos!😉";
  }
}

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

// Se da la respuesta correspondiente en un alert, llamando a la función, previamente configurada, y a la variable ya declarada, con un parseInt para convertirla en un valor numérico.
alert(grupoAikido(parseInt(edadAlumno)));


//--> Fin de mi primer algoritmo/programa ❤