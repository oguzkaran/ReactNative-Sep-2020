/*
    Server uygulamada bazı detaylar nodejs ile ilgili olduğunda göz ardı edilmiştir
    Örneğin bir client'ın bağlı kaldıktan sonra belirli bir süre işlem yapmaması
    durumunda o client ayrılan socket kapatılmalıdır. Yoksa n tane client bağlı
    kalarak lightOnOffServer'in hizmetini aksattırabilir
    Bunun gibi daha bir çok konu söz konusudur
    Ayrıca farklı modüller şeklinde yazılabilir. Bu detay da burada ele alınmamıştır
 */


const WebSocket = require('ws');
const Light = require('./light.js');
const fs = require('fs')

const portLight = process.argv.length !== 4 ? 5054 : parseInt(process.argv[2]);
const portLights = process.argv.length !== 4 ? 5055 : parseInt(process.argv[3]);

process.on("uncaughtException", err => console.log('exception', err.message))

let lightOnOffServer = new WebSocket.Server({port: portLight}, () => console.log("LightOnOff Server started"));
let lightsServer = new WebSocket.Server({port: portLights}, () => console.log("Lights Server started"));
let socketLightOnOff;
let socketLights;

let ioNos = []

const gpioPath = "/sys/class/gpio/";

const lightOnOffReceive = msg => {
    console.log('LightOnOff Received:', msg)

    let data = JSON.parse(msg.toString());
    let count = parseInt(data.n, 10);
    let ioNo = parseInt(data.ioNo, 10);

    if (!isNaN(count) && !isNaN(ioNo)) {
        if (ioNos.filter(no => ioNo === no).length !== 0) {
            Light.lightInterval(count, ioNo, 1000);
            socketLightOnOff.send(JSON.stringify({status: "success"}))
        }
        else
            socketLightOnOff.send(JSON.stringify({status: "invalid light number"}))
    }
    else
        console.log('invalid format');
}

lightOnOffServer.on('connection', s =>  {
    socketLightOnOff = s;
    console.log("LightOnOff Client connected!...");
    socketLightOnOff.on('message', lightOnOffReceive)
})

// gpio27
const readIoNosAndSend = () => {
    fs.readdir(gpioPath, (err, files) => {
        ioNos = [];
        files.filter(f => f.toString().startsWith("gpio") && !f.toString().startsWith("gpiochip"))
            .map(f => f.substr(f.lastIndexOf("o") + 1)).forEach(str => ioNos.push(parseInt(str)));
        socketLights.send(JSON.stringify({lights: ioNos}));
    })
}

const lightsReceive = msg => {
    console.log('Lights Received:', msg)
    //Sadece ışıklar için istek yapılıypr. Mesaja bakmıyoruz
    readIoNosAndSend();
    //socketLights.send(JSON.stringify({lights: ioNos}));
}

lightsServer.on('connection', s =>  {
    socketLights = s;
    console.log("Lights Client connected!...");
    socketLights.on('message', lightsReceive)
})






