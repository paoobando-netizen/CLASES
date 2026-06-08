export class Circulo {

    private _radio: number = 0;

    public get radio(): number {
        return this._radio;
    }

    public set radio(value: number) {
        this._radio = value;
    }

    public calcularArea(): number {
        return Math.PI * this._radio * this._radio;
    }

    public calcularPerimetro(): number {
        return 2 * Math.PI * this._radio;
    }
}