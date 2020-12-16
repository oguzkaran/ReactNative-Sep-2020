function write(a)
{
    process.stdout.write(a)
}

function writeLine(a)
{
    write(`${arguments.length !== 0 ? a : ""}\n`)
}


export {writeLine, write}

