/* Burbuja de eventos
En esta se hace click en el boton definido se comienza a realizar una serie de eventos los cuales son llamdos
en burbuja ya que estos eventos se comienzan a escuchar en el 'inner div' pasa hacia el 'middle div' y termina
en el 'outer div' en cada uno se ejecuta el evento que debe estar definido para manejar cada evento.

Esto permitira usar de manera mas eficiente y centralizada lo cual ayudara a mejorar el rendimiento y el
mantenimiento en un futuro del codigo*/

document.getElementById('outer').addEventListener('click', function(event) {
    console.log('Outer Div Bubbled');
});

document.getElementById('middle').addEventListener('click', function(event) {
    console.log('Middle Div Bubbled');
});

document.getElementById('inner').addEventListener('click', function(event) {
    console.log('Inner Div Bubbled');
});
