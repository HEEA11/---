function onerandom() {
    const onenumber = Math.floor(Math.random() * 9 +1) ;
    const displayone = document.getElementById('onerandomnumber');
    displayone.innerHTML = onenumber;

}

function tworandom() {

    const min = 10; 
    const max = 99;

    const twonumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const displaytwo = document.getElementById('tworandomnumber');
    displaytwo.innerHTML = twonumber;


}


function threerandom() {

    const min = 100; 
    const max = 990;

    const threenumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const displaythree = document.getElementById('threerandomnumber');
    displaythree.innerHTML = threenumber;


}



