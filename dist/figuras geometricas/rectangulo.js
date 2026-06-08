"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangulo = void 0;
class Rectangulo {
    _base = 0;
    _altura = 0;
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
    calcularArea() {
        return this._base * this._altura;
    }
    calcularPerimetro() {
        return 2 * (this._base + this._altura);
    }
}
exports.Rectangulo = Rectangulo;
//# sourceMappingURL=rectangulo.js.map