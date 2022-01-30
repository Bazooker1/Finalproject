const timer = document.getElementById('timer');
let sec = document.getElementById('timer').innerText.charAt(3)+document.getElementById('timer').innerText.charAt(4);
let msec = 0;
function start(){
    document.getElementById('button').style.visibility=('hidden')
    const promise = new Promise((resolve) => {
        const timelag = setInterval(() => {
            update();
            msec -= 67;
            if (msec <= 0) {
                msec = 1000;
                sec--;
            }
            if (sec < 0) {
                sec = 0;
                msec = 0;
                update();
                clearInterval(timelag);
                resolve('Ok');
            }
        }, 67 );
    });
    promise.then(function () {
        timer.innerText=('00:30:00');
        alert('Время вышло!');
        document.getElementById('button').style.visibility=('visible')
    });
}
function update() {
    timer.innerText = '00:'+sec+':'+String(msec).charAt(0)+String(msec).charAt(1);
}