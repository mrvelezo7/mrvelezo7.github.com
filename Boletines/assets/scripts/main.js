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

let cerrar = document.querySelectorAll(".close");

cerrar.forEach(function(x){
    x.addEventListener('click', function(){
        console.log(x);
    })
})