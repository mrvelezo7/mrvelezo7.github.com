// let container = document.querySelector(".container");
// console.log(container);

//REcorrer una lista o arreglo
/* let links = document.querySelectorAll("a");
links.forEach(function(link){
    console.log(link);
}) */

/* let celdas = document.querySelectorAll("td");

celdas.forEach(function(celda){
    celda.addEventListener('click', function(){
        console.log(this);
    })
}) */

let links = document.querySelectorAll(".close");

//Evento click
links.forEach(function(link){
    link.addEventListener('click', function(ev){
        ev.preventDefault();    //se cambio el comportamiento del elemento cerrar 'a'

        let animation = document.querySelector(".content");
        
        //quitarle las clases de animación
        animation.classList.remove("animate__bounce");
        animation.classList.remove("animate__animated");

        //agregarle animacion
        animation.classList.add("animate__bounceOutLeft");
        animation.classList.add("animate__animated");
        
        //REgresa a la pagina principal
        location.href ='/';
        
        return false;
    });
});

//Agregar o quitar clases
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star-o");   //classList accede a todas las propiedades del elemento html
    icono.classList.add("fa-star"); //el método add añade clases y el remove las quita
})

