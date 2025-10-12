const blinking = document.getElementById('blinking');
const start = document.getElementById('start');
const stop = document.getElementById('stop');


const originalColor = 'blue';
const blinkColor = 'red';


let blinkIntervalId = null; 



function startBlinking() {

    if (blinkIntervalId !== null) { 
     
        return;}
  
    blinkIntervalId = setInterval(() => {
        blinking.classList.toggle('blink-on');
    }, 200); 
}

function stopBlinking() {
    clearInterval(blinkIntervalId);
    blinkIntervalId = null;
    blinking.classList.remove('blink-on');



}

start.addEventListener('click', startBlinking);
stop.addEventListener('click', stopBlinking);