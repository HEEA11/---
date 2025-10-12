const button = document.getElementById('button');








button.addEventListener('mouseover', function() {


    button.classList.add('buttonactive');


});


button.addEventListener('mouseout', function() {

    button.classList.remove('buttonactive');


});