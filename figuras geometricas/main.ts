import { Circulo } from "./circulo";
import { Rectangulo } from "./rectangulo";
import { Triangulo } from "./triangulo";

const circulo = new Circulo();
circulo.radio = 5;

console.log("=== CIRCULO ===");
console.log("Área:", circulo.calcularArea().toFixed(2));
console.log("Perímetro:", circulo.calcularPerimetro().toFixed(2));

const rectangulo = new Rectangulo();
rectangulo.base = 10;
rectangulo.altura = 4;

console.log("=== RECTÁNGULO ===");
console.log("Área:", rectangulo.calcularArea());
console.log("Perímetro:", rectangulo.calcularPerimetro());

const triangulo = new Triangulo();
triangulo.base = 6;
triangulo.altura = 4;
triangulo.lado1 = 5;
triangulo.lado2 = 4;
triangulo.lado3 = 3;

console.log("=== TRIÁNGULO ===");
console.log("Área:", triangulo.calcularArea());
console.log("Perímetro:", triangulo.calcularPerimetro());