export class Point3D {
    constructor(x = 0,  y = 0, z = 0)
    {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    get x()
    {
        return this._x;
    }

    set x(value)
    {
        this._x = value;
    }

    get y()
    {
        return this._y;
    }

    set y(value)
    {
        this._y = value;
    }

    get z()
    {
        return this._z;
    }

    set z(value)
    {
        this._z = value;
    }

    static distance(x1, y1, x2, y2) {return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))}

    distance(point) {return Point.distance(this._x, this._y, point.x, point.y)}

    offset(dx, dy = dx)
    {
        this._x += dx
        this._y += dy
    }

    toString() {return `{x: ${this._x}, y: ${this._y}}`}
}

