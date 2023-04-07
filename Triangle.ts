import {Shape} from "./Shape";

export class Triangle extends Shape {
    private _side1: number;
    private _side2: number;
    private _side3: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    getSide1(): number {
        return this._side1;
    }

    setSide1(value: number) {
        this._side1 = value;
    }

    getSide2(): number {
        return this._side2;
    }

    setSide2(value: number) {
        this._side2 = value;
    }

    getSide3(): number {
        return this._side3;
    }

    setSide3(value: number) {
        this._side3 = value;
    }

    getArea(): number {
        return Math.sqrt((this.getPerimeter() / 2)
            * (this.getPerimeter() / 2 - this._side1)
            * (this.getPerimeter() / 2 - this._side2)
            * (this.getPerimeter() / 2 - this._side3));
    }

    getPerimeter(): number {
        return this._side1 + this._side2 + this._side3;
    }
}