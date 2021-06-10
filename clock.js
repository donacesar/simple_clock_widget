const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const ours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${ours < 10 ? `0${ours}` : ours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);

}

init();