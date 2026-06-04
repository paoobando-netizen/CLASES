export class Producto {

    private _nombre: string = "";
    private _precio: number = 0;
    private _descuento: number = 0;
    private _disponible: boolean = false;

    // GET y SET nombre
    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    // GET y SET precio
    public get precio(): number {
        return this._precio;
    }

    public set precio(value: number) {
        this._precio = value;
    }

    // GET y SET descuento
    public get descuento(): number {
        return this._descuento;
    }

    public set descuento(value: number) {
        this._descuento = value;
    }

    // GET y SET disponible
    public get disponible(): boolean {
        return this._disponible;
    }

    public set disponible(value: boolean) {
        this._disponible = value;
    }

    public calcularPrecioFinal(): number {
        return this._precio - (this._precio * (this._descuento / 100));
    }
}
