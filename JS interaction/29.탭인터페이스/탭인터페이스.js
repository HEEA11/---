const first = document.getElementById('1');
const second = document.getElementById('2');
const third = document.getElementById('3');







first.addEventListener('mouseover', function() {


    second.classList.remove('hidden');
    third.classList.remove('hidden');



    second.classList.add('active');
    third.classList.add('active');


});



first.addEventListener('mouseout', function() {


    second.classList.remove('active');
    third.classList.remove('active');


    second.classList.add('hidden');
    third.classList.add('hidden');
});


