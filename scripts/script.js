function breatheIn(){
const timerOneSeconds = 4;
let timeOne = timerOneSeconds;

const countdownOne = document.getElementById("first");
setInterval(updateCountdownOne, 1000);

function updateCountdownOne() {

    
    if (timeOne >= 0) {
        // const minutes = Math.floor(time / 60);
        let secondsOne = timeOne % 60;
        countdownOne.innerHTML = `Breathe in: ${secondsOne}`;
        timeOne--;
        
    }
    
    if (timeOne == 0) {
        holdBreath()
    }
}
}

function holdBreath() {
const timerTwoSeconds = 7;
let timeTwo = timerTwoSeconds;

const countdownTwo = document.getElementById("second");
setInterval(updateCountdownTwo, 1000);

function updateCountdownTwo() {

    
    if (timeTwo >= 0) {
        // const minutes = Math.floor(time / 60);
        let secondsTwo = timeTwo % 60;
        countdownTwo.innerHTML = `Hold breath: ${secondsTwo}`;
        timeTwo--;
    }

    if (timeTwo == 0) {
        breatheOut()
    }
}
}

function breatheOut() {
    const timerThreeSeconds = 8;
    let timeThree = timerThreeSeconds;
    
    const countdownThree = document.getElementById("third");
    setInterval(updateCountdownThree, 1000);
    
    function updateCountdownThree() {
    
        
        if (timeThree >= 0) {
            // const minutes = Math.floor(time / 60);
            let secondsThree = timeThree % 60;
            countdownThree.innerHTML = `Breathe out: ${secondsThree}`;
            timeThree--;
        }
    }
    }


// breatheIn();
