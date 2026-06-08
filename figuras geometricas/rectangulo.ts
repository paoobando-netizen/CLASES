export class Rectangulo {

    private _base: number = 0;
    private _altura: number = 0;

    public get base(): number {
        return this._base;
    }

    public set base(value: number) {
        this._base = value;
    }

    public get altura(): number {
        return this._altura;
    }

    public set altura(value: number) {
        this._altura = value;
    }

    public calcularArea(): number {
        return this._base * this._altura;
    }

    public calcularPerimetro(): number {
        return 2 * (this._base + this._altura);
    }
}