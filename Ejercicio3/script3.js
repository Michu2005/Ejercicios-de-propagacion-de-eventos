/* Detencion de la propagacion
Esto se utiliza mas cuando se quiere que  un evento se maneje por un elemnto espqecifico
En este caso se usa el stopPropagation la cual hace la detencion en la fase de captura y burbujeo
esto evitara que se propague el evento hacia los elementos padres.
Otro evento para detener al propagacion es el stopInmediatePropagation esta hace que igual que 
en la anterior se detenga en la fase de captura y burbujeo pero evita que otras funciones que manejen eventos
se ejecuten en el mismo elemento.
Detener la propagacion de eventos es esencial para manipular eventos en el DOM, esto evita efectos 
colaterales en otros elementos de la pagina.*/

document.getElementById('outer').addEventListener('click', function(event) {
    console.log('Outer Div Clicked');
});

document.getElementById('middle').addEventListener('click', function(event) {
    console.log('Middle Div Clicked');
    event.stopPropagation(); // Stop event propagation
});

document.getElementById('inner').addEventListener('click', function(event) {
    console.log('Inner Div Clicked');
});
