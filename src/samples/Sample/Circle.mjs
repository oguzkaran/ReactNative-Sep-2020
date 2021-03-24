export class Circle {
    constructor(r = 0)
    {
        this.r = r
    }

    get r()
    {
        return this._r;
    }

    set r(value)
    {
        this._r = Math.abs(value)
    }

    get area() {return Math.PI * this._r * this._r}
    get circumference() {return 2 * Math.PI * this._r}
}

