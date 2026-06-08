"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
class Triangulo {
    _base = 0;
    _altura = 0;
    _lado1 = 0;
    _lado2 = 0;
    _lado3 = 0;
    get base() {
        return this._base;
    }
    set base(value) {
        this._base = value;
    }
    get altura() {
        return this._altura;
    }
    set altura(value) {
        this._altura = value;
    }
    get lado1() {
        return this._lado1;
    }
    set lado1(value) {
        this._lado1 = value;
    }
    get lado2() {
        return this._lado2;
    }
    set lado2(value) {
        this._lado2 = value;
    }
    get lado3() {
        return this._lado3;
    }
    set lado3(value) {
        this._lado3 = value;
    }
    calcularArea() {
        return (this._base * this._altura) / 2;
    }
    calcularPerimetro() {
        return this._lado1 + this._lado2 + this._lado3;
    }
}
exports.Triangulo = Triangulo;
//# sourceMappingURL=triangulo.js.map