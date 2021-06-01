const WebSocket = require('ws');

const portLower = process.argv.length !== 4 ? 5054 : parseInt(process.argv[2])
const portUpper = process.argv.length !== 4 ? 5055 : parseInt(process.argv[3])
const upperServer = new WebSocket.Server({port: portUpper}, () => console.log("Upper server started"))
const lowerServer = new WebSocket.Server({port: portLower}, () => console.log("Lower server started"))

const timeoutLower = 3000
let upperClientSocket
let lowerClientSocket

const upperReceive = msg => {
    console.log('Upper Received:', msg)
    send(upperClientSocket, msg.toString().toUpperCase())
}

const lowerReceive = msg => {
    console.log('Lower Received:', msg);
    setTimeout(() => send(lowerClientSocket, msg.toString().toLowerCase()), timeoutLower)
}

const send = (sock, msg) => sock.send(msg)

upperServer.on('connection', socket =>  {
    upperClientSocket = socket;
    console.log("Upper client connected!...");
    upperClientSocket.on('message', upperReceive)
})

lowerServer.on('connection', socket =>  {
    lowerClientSocket = socket;
    console.log("Lower client connected!...");
    lowerClientSocket.on('message', lowerReceive)
})






