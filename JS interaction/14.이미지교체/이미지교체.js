const image = document.getElementById('image');

const image1 = 'happy1.jpg';

const image2 = 'happy2.jpg';



image.addEventListener('click', () => {

    if (image.src.includes(image2)) {
    
        image.src = image1; 

    }else {
        image.src = image2;
    }


});
