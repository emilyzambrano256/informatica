//Declaración de variables
let botonz = document.getElementById("subir");
let parrafo = document.getElementById("texto");
let botons = document.getElementById("bajar");
//Función para modificar el párrafo
botonz.addEventListener("click", function() {
    parrafo.innerHTML = "11";
});
botons.addEventListener("click", function() {
    parrafo.innerHTML = "9";
});