export class Random {
    static nextDouble(min, max) //[min, max)
    {
        if (min >= max)
            throw new Error("min must be less than max")

        return Math.random() * (max - min) + min
    }

    static nextInt(min, max) //[min, max)
    {
        if (min >= max)
            throw new Error("min must be less than max")

        return Math.floor(Math.random() * (max - min) + min)
    }

    static nextBoolean()
    {
        return this.nextInt(0, 2) === 1;
    }
}
