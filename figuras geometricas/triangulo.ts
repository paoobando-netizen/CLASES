export class Triangulo {

    private _base: number = 0;
    private _altura: number = 0;
    private _lado1: number = 0;
    private _lado2: number = 0;
    private _lado3: number = 0;

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

    public get lado1(): number {
        return this._lado1;
    }

    public set lado1(value: number) {
        this._lado1 = value;
    }

    public get lado2(): number {
        return this._lado2;
    }

    public set lado2(value: number) {
        this._lado2 = value;
    }

    public get lado3(): number {
        return this._lado3;
    }

    public set lado3(value: number) {
        this._lado3 = value;
    }

    public calcularArea(): number {
        return (this._base * this._altura) / 2;
    }

    public calcularPerimetro(): number {
        return this._lado1 + this._lado2 + this._lado3;
    }
}