function jugar() {
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intento = prompt("Adivina el número (entre 1 y 10):");
  intento = Number(intento);

  if (isNaN(intento)) {
    alert("Debes ingresar un número válido.");
  } else if (intento === numeroSecreto) {
    alert("¡Adivinaste! El número era " + numeroSecreto + ".");
  } else {
    alert("Incorrecto. El número era " + numeroSecreto + ".");
  }
}