const fs = require('fs');

let n = process.argv.length !== 3 ? 10 : parseInt(process.argv[2])
let count = 0;
let value = '1';
let interval = setInterval(() => {
    console.log("count", count);
    if (count === n) {
        clearInterval(interval);
        fs.writeFile("/sys/class/gpio/gpio17/value", "0",
            (e, d) => {if (e) console.log('Error:', e)})
        return;
    }
    if (value === '1')
        ++count;

    fs.writeFile("/sys/class/gpio/gpio17/value", value,
        (e, d) => {if (e) console.log('Error:', e)})
    value = value === '1' ? '0' : '1';
}, 1000);
