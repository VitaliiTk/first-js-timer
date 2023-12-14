const counterItems = document.querySelectorAll('.counter-item');
const counterElement = document.querySelector('.counter');
const wrapper = document.querySelector('.wrapper');

// type numbers when timer end
let year = 2024;
let month = 11;
let day = 15;
let hour = 0;
let minute = 8;
let seconds = 0;

let cowndownDate = new Date(year, month, day, hour, minute, seconds);

function getCountdownTime() {
    // get now time
    const now = new Date().getTime();

    // find diference between date
    const distance = cowndownDate - now;

    // create variables in miliseconds
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    counterItems.forEach((item, index) => {
        item.textContent = values[index];
    })

    if (distance <= 0) {
        wrapper.insertAdjacentHTML('beforeend', `<div class="timeout-text">Time Out</div>`);
        clearInterval(intervalId);
        counterItems.forEach((item) => {
            item.textContent = '0';
        })
    }
}

const intervalId = setInterval(getCountdownTime, 1000);

getCountdownTime();