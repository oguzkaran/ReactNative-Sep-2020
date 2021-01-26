
import {getPromiseViaCallback} from './PromiseUtil.mjs'

const getRandomInt = (min, max) => parseInt(Math.random() * (max - min) + min)


const timeout = 2000

const promiseCallback = (resolve, reject) => {
    setTimeout(() => {
        let val = getRandomInt(-10, 10)

        console.log(`val=${val}`)
        if (val > 0)
            resolve(val)
        else
            reject(new Error("not positive value"))
    }, timeout)
}


const doWork = () => getPromiseViaCallback(promiseCallback)

async function main()
{
    try {
        const val = await doWork(2000)

        console.log(`val=${val}`)
    }
    catch (err) {
        console.log(err.message)
    }
}

main()

console.log("here")
