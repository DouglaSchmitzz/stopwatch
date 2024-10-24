let sec = 0
let min = 0
let hr = 0
let interval 


function twoDigits(digit) {
    if (digit <10) {
        return("0" + digit)
    } else {
        return(digit)
    }

}

function Start() {
    interval = setInterval(Stopwatch, 1000)
}

function Pause() {
    clearInterval(interval)
}

function Stop() {
    clearInterval(interval)
    document.getElementById("seconds").innerText = "00"
    document.getElementById("minutes").innerText = "00"
}



function Stopwatch() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        
        if (min == 60) {
            min = 0
            hr++
        }
    }
   
    document.getElementById("seconds").innerText = twoDigits(sec)
    document.getElementById("minutes").innerText = twoDigits(min)
    document.getElementById("hours").innerText = hr



}