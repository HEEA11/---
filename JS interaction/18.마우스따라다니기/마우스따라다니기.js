const followImage = document.getElementById('followingimage');



window.addEventListener('mousemove', (e) => {
    followImage.style.left = e.clientX + 'px';
    followImage.style.top = e.clientY + 'px';

});


//window: 이벤트를 감지할 대상= 웹페이지 전체
//(e): 이 함수가 실행될 때, 브라우저는 마우스 움직임에 대한 모든 정보를 담고 있는 특별한 객체(이벤트 객체)를 만들어서
// 이 변수(보통 e 또는 event로 이름 붙입니다)에 넣어줍니다.
//e.clientX: 마우스 포인터의 현재 가로(X) 좌표를 픽셀 단위로 알려줍니다. (화면의 왼쪽 끝이 0입니다.)
//e.clientY: 마우스 포인터의 현재 세로(Y) 좌표를 픽셀 단위로 알려줍니다. (화면의 위쪽 끝이 0입니다.)

