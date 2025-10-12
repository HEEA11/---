const inputtext = document.getElementById('input');
const button = document.getElementById('button'); 
const output = document.getElementById('output');


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


button.addEventListener('click', function() {


    const numbers = inputtext.value;
    let result = [...numbers]; 



   shuffle(result);
    const password = result.join('');



    output.textContent = password + '어떠신가요';

   



    }




);


// 1. for (let i = array.length - 1; i > 0; i--)

// i는 배열의 마지막 인덱스에서 시작 (8개짜리 배열이면 i는 7부터 시작)
// 반복문이 i > 0 일 때까지 (인덱스 1까지) 실행됨