const button = document.getElementById('button');
const body = document.body;


button.addEventListener('click', function() {

    const currentText = button.textContent;


    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');



    if (currentText == 'on'){
        button.textContent = 'off';
    }  else {
        button.textContent = 'on';

    }




});






// Element.classList.toggle() 메소드
// 지정된 클래스가 요소에 있으면 제거, 없으면 추가


//  const isDarkMode = bodyElement.classList.contains('dark-mode');
// bodyElement : html 본 요소의
// .classList	:  클래스 목록에
//.contains('dark-mode')  : 'dark-mode'라는 이름의 클래스가 포함되어 있으면 -> true
//                                                            없으면 -> flase
//    ture / false 값을 isDarkMode 에 할당