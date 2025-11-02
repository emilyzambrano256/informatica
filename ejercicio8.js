function calcularPromedio() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    // Validar que se ingresen todas las notas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("⚠️ Por favor ingresa todas las notas");
        return;
    }

    let promedio = (nota1 + nota2 + nota3) / 3;
    let mensaje = "";

    // Mensajes según el promedio
    if (promedio >= 6) {
        mensaje = "✅ Aprobaste 🎉";
    } else {
        mensaje = "❌ Necesitas repasar 📚";
    }

    alert("Tu promedio es: " + promedio.toFixed(2) + "\n" + mensaje);
}