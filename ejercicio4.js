function verificarEdad() {
  let edad = prompt("¿Cuántos años tienes?");
  edad = Number(edad);

  if (isNaN(edad)) {
    alert("Por favor, ingresa un número válido.");
  } else if (edad >= 18) {
    alert("Acceso permitido. ¡Bienvenido!");
  } else {
    alert("Acceso denegado. Debes ser mayor de 18 años.");
  }
}