function randomDouble(min, max) //[min, max)
{
    if (min >= max)
        throw new Error("min must be less than max")

    return Math.random() * (max - min) + min
}

function randomInt(min, max) //[min, max)
{
    if (min >= max)
        throw new Error("min must be less than max")

    return parseInt(Math.random() * (max - min) + min)
}

function randomBoolean()
{
    return randomInt(0, 2) === 1;
}

export default Random
export {randomInt, randomBoolean, randomDouble}
