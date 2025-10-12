const button = document.getElementById('button');
const body = document.body;

const falltime = 1.5;



button.addEventListener('click', function() {

    const apple = "🍎"; // 떨어질 글자



    const fallingDiv = document.createElement('div');
    fallingDiv.classList.add('apple');
    fallingDiv.textContent = apple;

    const randomX = Math.random() * 80 + 10; // 10% ~ 90%
    fallingDiv.style.left = `${randomX}%`;
    fallingDiv.style.transform = 'none';
    fallingDiv.style.animation = `fall-and-fade ${falltime}s ease-in forwards`;
    body.appendChild(fallingDiv);



});