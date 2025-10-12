const input = document.getElementById('input');
const currentCount = document.getElementById('currentCount');





input.addEventListener('input', () => {



        const currenttext = input.value.length;
        currentCount.textContent = currenttext;


    if (currenttext > 5) {

        input.classList.add('error');
        input.value = input.value.substring(0, 5);


    } else {
        input.classList.remove('error');

    }


});