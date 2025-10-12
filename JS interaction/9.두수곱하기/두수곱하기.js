const numberfirstinput = document.getElementById('inputfirst');
const numbersecondinput = document.getElementById('inputsecond');
const button = document.getElementById('button'); 
const result = document.getElementById('result');





button.addEventListener('click', function() {
    const numberfirst = numberfirstinput.value;
    const numbersecond = numbersecondinput.value;


    const sum = Number(numberfirst) * Number(numbersecond);
    
    result.innerText = sum; 


    }




);
