let time = 0;
let running = false;
let timer;
const timer_text = document.querySelector('#timer');

function start() {
    if (!running) {
        timer = setInterval(run, 10);
        running = true;
    }
}

function run() {
    // Formatiere die Anzeige
    timer_text.textContent = getTime();
    time += 10;
}

function stop() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function reset() {
    stop();
    time = 0;

    const laps = document.querySelectorAll(".lap");
    laps.forEach((block) => block.remove());

    timer_text.textContent = getTime();
}
function lap() {
    const laps = document.querySelector('#laps');
    let lap = document.createElement("li");
    lap.textContent = timer_text.textContent;
    lap.setAttribute("class", "lap");
    laps.appendChild(lap);
}

function getTime() {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor(time % 1000 / 10);

    return`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}


const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const lapButton = document.querySelector('#lap');
startButton.addEventListener('click', () => {
    start();
});
stopButton.addEventListener('click', () => {stop()});
resetButton.addEventListener('click', () => {reset()});
lapButton.addEventListener('click', () => {lap()});
