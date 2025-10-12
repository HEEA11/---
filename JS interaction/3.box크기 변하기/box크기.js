const box = document.getElementById('box');


function randomsize() {
    const min = 50;
    const max = 300;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resize() {
    const newWidth = randomsize();
    const newHeight = randomsize();

    box.style.width = newWidth + 'px'
        box.style.height = newHeight +'px'

}


box.addEventListener('click', resize);
