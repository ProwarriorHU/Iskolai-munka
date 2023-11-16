const startingMinutes = 19;
let time = startingMinutes * 60;
const countdownE1 = document.getElementById("countdown");
let kiir = document.getElementById("ertesites");
let id = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    countdownE1.innerHTML = `${min}:${sec}`;
    time--;
    if (time < 0){
        clearInterval(id);
        kiir.innerHTML = "Done(r kebab)"
    }
}