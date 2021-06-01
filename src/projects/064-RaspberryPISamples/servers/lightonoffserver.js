const WebSocket = require('ws');
const Light = require('./light.js');

const portLight = process.argv.length !== 3 ? 5054 : parseInt(process.argv[2])
let server = new WebSocket.Server({port: portLight}, () => console.log("Upper server started"))

let socket;

const receive = msg => {
    console.log('Upper Received:', msg)
    Light.lightInterval(5, 17, 1000);
}

server.on('connection', s =>  {
    socket = s;
    console.log("Client connected!...");
    socket.on('message', receive)
})









