// Import all plugins
import * as bootstrap from 'bootstrap';

import 'bootstrap'
import '../scss/custom.scss'

function showDatetime() {
    let today = new Date();
    let date = today.toDateString();
    let time = today.toTimeString();
    let dateTime = date + ' ' + time;
    document.getElementById("clock").innerHTML = dateTime;
    setTimeout(showDatetime, 1000);
}

showDatetime();

for (let index = 0; index < 11; index++) {
    console.log(index);
}

console.log('Hello world!');