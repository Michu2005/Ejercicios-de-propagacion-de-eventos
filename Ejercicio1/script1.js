/*Captura de eventos o eventlistener
Como su nombre lo indica escucha los eventos que deben pasar cuando se manda a hacer una tarea en la
pantalla principal
Maneja eventos cuando se hace click en un boton especifico, este se propaga a traves de del 'window'
que es lo que ve el usuario hacia un objetivo que es el elemntovque va a recibir el evento y se va 
a encargar de hacerlo */

document.getElementById('outer').addEventListener('click', function(event) {
    console.log('Outer Div Captured');
}, true); // Use capture

document.getElementById('middle').addEventListener('click', function(event) {
    console.log('Middle Div Captured');
}, true); // Use capture

document.getElementById('inner').addEventListener('click', function(event) {
    console.log('Inner Div Captured');
}, true); // Use capture
