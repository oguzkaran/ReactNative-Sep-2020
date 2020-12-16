import {randomInt} from "./randomutil.mjs";
import {writeLine} from "./consoleutil.mjs";

class MessageInfo {
    constructor(val, message)
    {
        this._val = val
        this._message = message
    }

    get val()
    {
        return this._val;
    }

    set val(value)
    {
        this._val = value;
    }

    get message()
    {
        return this._message;
    }

    set message(value)
    {
        this._message = value;
    }
}

function getMessage(messageInfo)
{
    return Promise.resolve(`Value:${messageInfo.val}, Message:${messageInfo.message}`)
}

function getMessageInfo()
{
    let val = randomInt(-99, 99)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            writeLine(`val=${val}`)
            if (val > 0)
                resolve(new MessageInfo(val, "Sözümü tuttum"))

            reject(new MessageInfo(val, "Sözümü tutamadım"))
        }, 3000)
    })
}

function main()
{
    let promise = getMessageInfo()

    promise
        .then(getMessage)
        .then(message => writeLine(message))
        .catch(s => writeLine(s.message))
}

main()
