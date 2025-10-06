const btnAzul = document.getElementById('btnAzul');
const btnOscuro = document.getElementById('btnOscuro');
const btnAmarillo = document.getElementById('btnAmarillo');
btnAzul.addEventListener('click', function() {
  document.body.style.backgroundColor = 'lightblue';
  document.body.style.color = 'black';
});
btnOscuro.addEventListener('click', function() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
});
btnAmarillo.addEventListener('click', function() {
  document.body.style.backgroundColor = 'yellow';
  document.body.style.color = 'green';
});