/*
    Server uygulamada bazı detaylar nodejs ile ilgili olduğunda göz ardı edilmiştir
    Örneğin bir client'ın bağlı kaldıktan sonra belirli bir süre işlem yapmaması
    durumunda o client ayrılan socket kapatılmalıdır. Yoksa n tane client bağlı
    kalarak lightOnOffServer'in hizmetini aksattırabilir
    Bunun gibi daha bir çok konu söz konusudur
    Ayrıca farklı modüller şeklinde yazılabilir. Bu detay da burada ele alınmamıştır
 */

const WebSocket = require('ws');

const portLight = process.argv.length !== 4 ? 5054 : parseInt(process.argv[2]);
const portLights = process.argv.length !== 4 ? 5055 : parseInt(process.argv[3]);
const portIoTDev = process.argv.length !== 4 ? 5056 : parseInt(process.argv[3]);

process.on("uncaughtException", err => console.log('exception', err.message))

let lightOnOffServer = new WebSocket.Server({port: portLight}, () => console.log("LightOnOff Server started"));
let lightsServer = new WebSocket.Server({port: portLights}, () => console.log("Lights Server started"));
let ioTDevServer = new WebSocket.Server({port: portIoTDev}, () => console.log("IoDevice server started"));
let socketLightOnOff;
let socketLights
let socketIoTDev;

let ioNos = []

const lightOnOffReceive = msg => {
    console.log('LightOnOff Received:', msg)

    let data = JSON.parse(msg.toString());
    let count = parseInt(data.n, 10);
    let ioNo = parseInt(data.ioNo, 10);

    if (!isNaN(count) && !isNaN(ioNo))
        socketIoTDev.send(JSON.stringify({op:2, ioNo: ioNo}));
    else
        console.log('invalid format');
}

lightOnOffServer.on('connection', s =>  {
    socketLightOnOff = s;
    console.log("LightOnOff Client connected!...");
    socketLightOnOff.on('message', lightOnOffReceive)
})

const lightsReceive = msg => {
    console.log('Lights Received:', msg)
    socketIoTDev.send(JSON.stringify({op: 1}))
}

lightsServer.on('connection', s =>  {
    socketLights = s;
    console.log("Lights Client connected!...");
    socketLights.on('message', lightsReceive)
})

const ioTDevReceive = msg => {
    console.log('ioTDev Received:', msg)

    //{op:1, status: "invalid"}
    //{op:2, ioNos:[4, 17, 27] }

    let data = JSON.parse(msg.toString());

    switch (data.op) {
        case 1:
            ioNos = data.ioNos;
            socketLights.send(JSON.stringify({lights: ioNos}));
            break;
        case 2:
            socketLightOnOff.send(JSON.stringify({status: data.status}));
            break;
        default:
            console.log("Invalid operation");
            socketLightOnOff.send(JSON.stringify({status: "There is a problem for IoT Device, Try again later"}));
    }
}

ioTDevServer.on('connection', s =>  {
    socketIoTDev = s;
    console.log("IoTDevice connected!...");
    socketLights.on('message', ioTDevReceive)
})






