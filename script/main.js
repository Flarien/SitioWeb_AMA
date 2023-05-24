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

