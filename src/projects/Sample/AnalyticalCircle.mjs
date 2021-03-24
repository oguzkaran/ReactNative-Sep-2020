import {Circle} from "./Circle.mjs";
import {Point} from "./Point.mjs";

export class AnalyticalCircle extends Circle {
    constructor(r = 0, x = 0, y = 0)
    {
        super(r)
        this._center = new Point(x, y)
    }

    get center() {return new Point(this.x, this.y)}

    set center(value) {this.setCenter(value.x, value.y)}

    get x() {return this._center.x}

    set x(value) {this._center.x = value}

    get y() {return this._center.y}

    set y(value) {this._center.y = value}

    setCenter(x = 0, y = 0) {this.x = x; this.y = y}

    offset(dx, dy = dx) {this._center.offset(dx, dy)}
}
