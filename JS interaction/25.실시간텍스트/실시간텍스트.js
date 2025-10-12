const input = document.getElementById('input');
const output = document.getElementById('output');



input.addEventListener('input', () => {

    let newText = input.value;
    output.textContent = newText;


});

//  = 입력 필드의 내용이 바뀔때마다 실행되는 이벤트리스너 