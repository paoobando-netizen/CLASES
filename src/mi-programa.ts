var nombre = "Laptop";
var precio = 1000;
var descuento = 10;
var disponible = true;

var precioFinal = precio - (precio * (descuento / 100));

if (disponible) {
    console.log(nombre + " está disponible");
    console.log("Precio final: " + precioFinal);
} else {
    console.log(nombre + " no está disponible");
}

console.log("----------------------------------");


var nombre2 = "Celular";
var precio2 = 800;
var descuento2 = 5;
var disponible2 = false;

var precioFinal2 = precio2 - (precio2 * (descuento2 / 100));

if (disponible2) {
    console.log(nombre2 + " está disponible");
    console.log("Precio final: " + precioFinal2);
} else {
    console.log(nombre2 + " no está disponible");
}

console.log("----------------------------------");


var nombre3 = "Televisor";
var precio3 = 1500;
var descuento3 = 20;
var disponible3 = true;

var precioFinal3 = precio3 - (precio3 * (descuento3 / 100));

if (disponible3) {
    console.log(nombre3 + " está disponible");
    console.log("Precio final: " + precioFinal3);
} else {
    console.log(nombre3 + " no está disponible");
}
