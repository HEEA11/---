const box = document.getElementById('box');
const container = document.body;




function moveBoxRandomly() {
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const randomX = Math.random()*(containerWidth - boxWidth);
    const randomY = Math.random()*(containerHeight - boxHeight);

    box.style.left = randomX + 'px';
    box.style.top = randomY + 'px';

}



box.addEventListener('click', moveBoxRandomly);
