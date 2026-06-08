"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
class Circulo {
    _radio = 0;
    get radio() {
        return this._radio;
    }
    set radio(value) {
        this._radio = value;
    }
    calcularArea() {
        return Math.PI * this._radio * this._radio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this._radio;
    }
}
exports.Circulo = Circulo;
//# sourceMappingURL=circulo.js.map