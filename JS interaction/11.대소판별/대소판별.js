const numberfirstinput = document.getElementById('inputfirst');
const numbersecondinput = document.getElementById('inputsecond');
const button = document.getElementById('button'); 
const output = document.getElementById('output');





button.addEventListener('click', function() {
    const numberfirst = numberfirstinput.value;
    const numbersecond = numbersecondinput.value;

    if (numberfirst > numbersecond ) {
        output.innerText = numberfirst + "이/가 더 크다!"
    } else if (numberfirst < numbersecond) {
        output.innerText = numbersecond + "이/가 더 크다!"

    } else {
        output.innerText = "둘이 같다!"

    }



    }




);
