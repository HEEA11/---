const abird = document.getElementById('bird');

const delay = 1000

const stopbird = 'stopduck.png';
const flybird = '날아가는오리.png';



function moveRandomly() {

    const bodyHeight = document.body.clientHeight;
    const bodyWidth = document.body.clientWidth;

    const birdHeigth = abird.clientHeight;
    const birdWidth = abird.clientWidth;

    const newTop = Math.random() * (bodyHeight - birdHeigth);
    const newLeft = Math.random() * (bodyWidth - birdWidth);
    
    abird.style.top = `${newTop}px`;
    abird.style.left = `${newLeft}px`;


    abird.src = flybird;

    setTimeout(() => {
        abird.src = stopbird;
    }, delay);

}



fallingDiv.style.left = `${randomX}%`;
