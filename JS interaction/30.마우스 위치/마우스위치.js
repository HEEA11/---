const x = document.getElementById('x');
const y = document.getElementById('y');




document.addEventListener('mousemove', (event) => {

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    x.textContent = mouseX;
    y.textContent = mouseY;



});