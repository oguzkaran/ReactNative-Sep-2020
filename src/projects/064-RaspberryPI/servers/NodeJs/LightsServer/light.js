const fs = require('fs');

exports.lightInterval = function(n, ioNo, period) {
    let value = '1';
    let count = 0;
    const path = `/sys/class/gpio/gpio${ioNo}/value`
    let interval = setInterval(() => {
        if (count === n) {
            clearInterval(interval);
            fs.writeFile(path, "0",
                (e, d) => {if (e) console.log('Error:', e)})
            return;
        }
        if (value === '1')
            ++count;

        fs.writeFile(path, value,  (e, d) => {if (e) console.log('Error:', e)})
        value = value === '1' ? '0' : '1';
    }, period);
}

