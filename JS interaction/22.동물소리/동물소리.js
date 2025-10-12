const outputtext = document.getElementById('output');






document.getElementById('dogbutton').addEventListener('click', function() {

    const sound = "멍멍멍멍멍멍멍ㅁ엉"

    outputtext.textContent = sound;

});


document.getElementById('catbutton').addEventListener('click', function() {

    const sound = "야옹야옹야옹야옹야옹"
    outputtext.textContent = sound;


});

document.getElementById('cowbutton').addEventListener('click', function() {

    const sound = "음매음매음매음매"
    outputtext.textContent = sound;


});




