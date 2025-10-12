


document.body.addEventListener('click', function(event) {

    const clientX = event.clientX;
    const clientY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const popx = clientX / windowWidth;
    const popy = clientY / windowHeight;

    confetti({
        particleCount: 100, // 파티클 개수
        spread: 70,         // 분산 각도
        origin: { x: popx, y: popy }  // 발사 위치 (Y축 60% 지점)
    });

    }




);



    // event.clientX: 뷰포트(브라우저 창) 기준 X 좌표
    // event.clientY: 뷰포트(브라우저 창) 기준 Y 좌표