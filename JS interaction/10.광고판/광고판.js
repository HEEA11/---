const inputtext = document.getElementById('input');
const button = document.getElementById('button'); 
const outputtext = document.getElementById('output');





button.addEventListener('click', function() {


    const text = inputtext.value;
    outputtext.textContent = text;

    inputtext.value = '';



    }




);

