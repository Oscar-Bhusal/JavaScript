const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumberEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');
const timeEl = document.getElementById('time');

const date = new Date();

monthNameEl.innerText = date.toLocaleString("en", { month: 'long' });
dayNameEl.innerText = date.toLocaleString("en", { weekday: 'long' })
dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();

function updateTime() {
    const date = new Date();

    let fullTime = date.toLocaleString("en", { time: 'long' });
    let time = fullTime.slice(11, 22);

    timeEl.innerText = time;
}

setInterval(updateTime, 1000);