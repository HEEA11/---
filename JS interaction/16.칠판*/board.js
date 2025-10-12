
document.addEventListener('DOMContentLoaded', () => { 




const textInput = document.getElementById('input');
const button = document.getElementById('button'); 
const container = document.getElementById('text-container');


button.addEventListener, ('click', () => {



    const newTextElement = document.createElement('div');

    newTextElement.textContent = textInput.value;
    newTextElement.classList.add('random-text'); 


    container.appendChild(newTextElement); 

    const textWidth = newTextElement.offsetWidth;
    const textHeight = newTextElement.offsetHeight;







    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;


    const randomX = Math.floor(Math.random() * (containerWidth - textWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - textHeight));



    newTextElement.style.left = randomX + 'px';
    newTextElement.style.top = randomY + 'px';

}
);
});




// container.appendChild(newTextElement); 
// container: 부모요소
// newTextElement: 자식요소
// appenChild() 매서드: 지정된 요소를 부모 요소의 자식 목록 중 가장 마지막에 삽입
