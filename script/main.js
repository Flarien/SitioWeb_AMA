// ---- MODO CLARO / MODO OSCURO ---- //

// Variables necesarias para el modo claro/oscuro.
let btnModo = document.getElementById("modo");
let body = document.body;
let modo_oscuro = localStorage.getItem("modo_oscuro");

//Función que cambia el modo claro/oscuro y guarda la preferencia del usuario en el Local Storage.

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

//Restaura el modo claro/oscuro según la última preferencia guardada en el Local Storage.
body.className = modo_oscuro === "activado" ? "modo_oscuro" : "";


// ---- FIN ---- //