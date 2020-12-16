import {randomInt} from "./randomutil.mjs";
import {writeLine, write} from "./consoleutil.mjs";

function randomIntArray(n, min, max)
{
    const a = []

    for (let i = 0; i < n; ++i)
        a.push(randomInt(min, max))

    return a
}

function displayIntArray()
{
    for (let val of this)
        write(`${val} `)

    writeLine()
}

function multiplyBy(value)
{
    for (let i = 0; i < this.length; ++i)
        this[i] *= value
}

function displayDoubleArray()
{
    for (let val of this)
        writeLine(val)
}

Array.prototype.displayIntArray = displayIntArray
Array.prototype.displayDoubleArray = displayDoubleArray
Array.prototype.multiplyBy = multiplyBy


export {randomIntArray, multiplyBy, displayIntArray, displayDoubleArray}