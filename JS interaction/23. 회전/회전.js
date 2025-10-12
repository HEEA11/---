const dolphin = document.getElementById('dolphin');



dolphin.addEventListener('click', function() {

    dolphin.classList.add('spin-fast');

    setTimeout(() => {
        dolphin.classList.remove('spin-fast');
    }, 2000); 



});

