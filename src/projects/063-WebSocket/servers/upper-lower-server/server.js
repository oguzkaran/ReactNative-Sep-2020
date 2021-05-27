const WebSocket = require('ws');

const upperServer = new WebSocket.Server({port: 5054}, () => console.log("Upper server started"))
const lowerServer = new WebSocket.Server({port: 5055}, () => console.log("Lower server started"))

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






