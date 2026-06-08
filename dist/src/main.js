"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Producto_1 = require("./clases/Producto");
const producto1 = new Producto_1.Producto();
producto1.nombre = "Laptop";
producto1.precio = 1000;
producto1.descuento = 10;
producto1.disponible = true;
console.log("Precio final:", producto1.calcularPrecioFinal());
const producto2 = new Producto_1.Producto();
producto2.nombre = "Celular";
producto2.precio = 800;
producto2.descuento = 5;
producto2.disponible = false;
console.log("Precio final:", producto2.calcularPrecioFinal());
//# sourceMappingURL=main.js.map