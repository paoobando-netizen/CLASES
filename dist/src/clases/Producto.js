"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    _nombre = "";
    _precio = 0;
    _descuento = 0;
    _disponible = false;
    // GET y SET nombre
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    // GET y SET precio
    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = value;
    }
    // GET y SET descuento
    get descuento() {
        return this._descuento;
    }
    set descuento(value) {
        this._descuento = value;
    }
    // GET y SET disponible
    get disponible() {
        return this._disponible;
    }
    set disponible(value) {
        this._disponible = value;
    }
    calcularPrecioFinal() {
        return this._precio - (this._precio * (this._descuento / 100));
    }
}
exports.Producto = Producto;
//# sourceMappingURL=Producto.js.map