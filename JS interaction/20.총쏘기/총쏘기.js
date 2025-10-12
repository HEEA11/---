const IMAGE_URL = 'gunshot.jpeg'


document.body.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    const gunshot = document.createElement('img');
    gunshot.src = IMAGE_URL;
    gunshot.classList.add('img');
    gunshot.style.left = x + 'px';
    gunshot.style.top = y + 'px';

    document.body.appendChild(gunshot);


});





// document.createElement('img');    새로운 이미지 요소 <img>를 생성
//    newImage.src = IMAGE_URL;     이미지 파일 경로를 설정
//    newImage.classList.add('clickable-image');  CSS스타일을 적용하기 위한 클래스 추가


// document.body.appendChild(gunshot);
