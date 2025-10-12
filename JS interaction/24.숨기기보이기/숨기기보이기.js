const button = document.getElementById('button');
const monkey = document.getElementById('monkey');


button.addEventListener('click', function() {

    const currentText = button.textContent;

    if (currentText === 'view') {
        button.textContent = 'hide';
        monkey.style.display ='none';



    } else {
        button.textContent = 'view';
        monkey.style.display ='block';

    }



});



