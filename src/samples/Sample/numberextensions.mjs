function isPrime()
{
    if (this <= 1)
        return false

    if (this % 2 == 0)
        return this == 2

    if (this % 3 == 0)
        return this == 3

    if (this % 5 == 0)
        return this == 5

    if (this % 7 == 0)
        return this == 7

    let sqrtVal = parseInt(Math.sqrt(this))

    for (let i = 11; i <= sqrtVal; i += 2)
        if (this % i == 0)
            return false

    return true
}

function isEven()
{
    return this % 2 === 0;
}

Number.prototype.isEven = isEven
Number.prototype.isPrime = isPrime

export {isPrime, isEven}
