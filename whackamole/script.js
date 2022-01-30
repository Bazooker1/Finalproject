let points = 0;
let process = null;
let buff = [];

function Click() {
    points++;
    document.getElementById('point').innerText = "Ваши очки: " + points;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//функция смены цвета клетки, дающая игроку понять куда надо тыкать
async function swap() {
    process = getRandomInt(1, 17);
    document.getElementById(process.toString()).onclick = Click;
    document.getElementById(process.toString()).style.background = "#8B4513";
    await delay(800);
    document.getElementById(process.toString()).style.background = "#BC8F8F";
    document.getElementById(process.toString()).onclick = null;
}

//начало игры, её процесс и проверка на условие победы
function InGame(count) {
    if (count == 0) {
        document.getElementById('stop').hidden = false;
        document.getElementById('start').hidden = true;
        buff = setInterval(() => {
            if (points < 15) {
                swap();
            } else {
                alert('Спасибо прадеду за деда...');
                clearInterval(buff);
            }
        }, 810);
    }
    else
    {
        document.getElementById('stop').hidden = true;
        document.getElementById('start').hidden = false;
        clearInterval(buff);
        points = 0;
        process = null;
    }
}

//функция для рандомного выбора клетки
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

