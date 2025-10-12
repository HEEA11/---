const dadlastnamejs = document.getElementById('dadlastname');
const dadfirstnamejs = document.getElementById('dadfirstname');
const momlastnamejs = document.getElementById('momlastname');
const momfirstnamejs = document.getElementById('momfirstname');

const button = document.getElementById('button'); 
const output = document.getElementById('output');





button.addEventListener('click', function() {


    const dadFname = dadfirstnamejs.value
    const momFname = momfirstnamejs.value
    const dadLname = dadlastnamejs.value



    const texts = [...dadFname, ...momFname];
    const firsttext = texts[Math.floor(Math.random()*texts.length)];
    const secondtext = texts[Math.floor(Math.random()*texts.length)];

    const newname = firsttext + secondtext ;


    output.textContent = dadLname + newname + '어떠신가요';

   



    }




);


// ... 연산자    <= 문자열을 개별적 요소로 펼침

// text.length    <= 배열에 들어있는 총 글자 수를 의미
// Math.random()    <= 0이상, 1미만 사이의 임의의 소수 반환
// Math.random() * text.length   <= text 보다 작은 수 사이의 범위에 속하는 소수
//                                   (ex. 글자수 4일 경우, 0.000 부터 3.999... 사이의 소수)
// Math.floor(숫자))   <= 주어진 숫자보다 작거나 같은 가장 큰 정수 반환 (소수점 이하를 버림)

//text[...]   <= 무작위 인덱스를 사용하여 해당 위치의 글자를 뽑아냄