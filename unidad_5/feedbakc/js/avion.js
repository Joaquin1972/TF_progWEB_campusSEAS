window.onload = function () {

    cuadro = document.getElementById("playa")
    avion = document.getElementById("avion")
    // la animacion parte de parada. Si queremos que al cargar la pagina
    // el avion ya vuele eliminar lineas 7 y 8
    cuadro.style.animationPlayState = "paused";
    avion.style.animationPlayState = "paused";
}
//funcion para parar animacion
function parar() {
    cuadro.style.animationPlayState = "paused";
    avion.style.animationPlayState = "paused";
}
//función para reanuda animación        
function seguir() {
    avion.style.animationPlayState = "running";
    cuadro.style.animationPlayState = "running";
}
//establecemos velocidad animación
function velocidad(num) {
    valor = num + "s"; 
    cuadro.style.animationDuration = valor;
    cuadro.style.MozAnimationDuration = valor; 
    cuadro.style.WebkitAnimationDuration = valor;
}