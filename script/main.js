function calcularHorarioAikido(edad) {
  if (edad < 4) {
    return "La edad mínima para comenzar es de 4 años... ¡Esperemos un poquito más! 😊";
  } else if (edad < 12) {
    return "Ingresa en el horario de Aikido Kids (revisar grilla).";
  } else if (edad < 18) {
    return "Ingresa en el horario de Adultos (revisar grilla), pero te recomendamos el horario de - lun, mie y vie a las 19:30hs - , ya que hay un buengrupo de adolescentes practicando ahí 👍";
  } else if (edad < 70) {
    return "Ingresa en el horario de Adultos (revisar grilla).";
  } else {
    return "Ingresa en el horario de Adultos (revisar grilla). Por cierto: no hay límite de edad para comenzar ¡Te esperamos!😉";
  }
}

alert("¡Bienvenido! Aquí podrás consultar en qué grupo de Aikido entrarías, según la edad :)");

let edadAlumno;

do {
  edadAlumno = prompt("Ingresa tu edad, o la de la persona interesada en comenzar (solo números):");
} while (isNaN(edadAlumno) || edadAlumno.trim() === '');

alert(calcularHorarioAikido(parseInt(edadAlumno)));