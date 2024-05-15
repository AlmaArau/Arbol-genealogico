window.onload = function () {
    var nombre = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
    if (nombre != null && nombre != "") {
        alert("¡Hola " + nombre + "! Bienvenid@ a mi árbol genealógico :)");
    } else {
        alert("¡Bienvenid@ a mi árbol genealógico :)");
    }
};