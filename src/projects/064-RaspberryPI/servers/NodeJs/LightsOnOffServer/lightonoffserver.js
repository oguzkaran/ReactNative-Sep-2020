/*
    Server uygulamada bazı detaylar nodejs ile ilgili olduğunda göz ardı edilmiştir
    Örneğin bir client'ın bağlı kaldıktan sonra belirli bir süre işlem yapmaması
    durumunda o client ayrılan socket kapatılmalıdır. Yoksa n tane client bağlı
    kalarak server'in hizmetini aksattırabilir
    Bunun gibi daha bir çok söz konusudur
 */

const WebSocket = require('ws');
const Light = require('./light.js');

const portLight = process.argv.length !== 3 ? 5054 : parseInt(process.argv[2]);
let server = new WebSocket.Server({port: portLight}, () => console.log("Light server started"));
let socket;
let ioNos = [4, 17, 27]

const TYPE_STATUS = 0;
const TYPE_ACTIVE_LIGHTS = 1;

const receive = msg => {
    console.log('Received:', msg)

    let data = JSON.parse(msg.toString());
    let count = parseInt(data.n, 10);
    let ioNo = parseInt(data.ioNo, 10);

    if (!isNaN(count) && !isNaN(ioNo)) {
        if (ioNos.filter(no => ioNo === no).length !== 0) {
            Light.lightInterval(count, ioNo, 1000);
            socket.send(JSON.stringify({type: TYPE_STATUS, status: "success"}))
        }
        else
            socket.send(JSON.stringify({type: TYPE_STATUS, status: "invalid light number"}))
    }
    else
        console.log('invalid format');
}

server.on('connection', s =>  {
    socket = s;
    console.log("Client connected!...");
    let lightsData = {type: TYPE_ACTIVE_LIGHTS, lights: ioNos};

    socket.send(JSON.stringify(lightsData));
    socket.on('message', receive)
})









