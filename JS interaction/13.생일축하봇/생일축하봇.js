const inputtext = document.getElementById('input');
const button = document.getElementById('button'); 
const outputtext = document.getElementById('output');





button.addEventListener('click', function() {


    const birthday = new Date(inputtext.value);

    const year = birthday.getFullYear();
    const month = birthday.getMonth()+1;
    const day = birthday.getDate();

    const message = `${year}년 ${month}월 ${day}일에 태어났구나! 생일축하해! 🎉`;


    outputtext.textContent = message;

    confetti({
        particleCount: 100, // 파티클 개수
        spread: 70,         // 분산 각도
        origin: { y: 0.6 }  // 발사 위치 (Y축 60% 지점)
    });

    }




);


//getFullYear()	 4자리 연도를 가져옴
//getMonth()	몇 월인지  가져옴 ( 0 부터 시작하니까 주의하기 ex. 0=1월) 주의하기..
//get Date		몇 일인지를 가져옴