const box = document.getElementById('box');

function randomalphabet (){
 const randomcode = Math.floor(Math.random() *26) + 65;
  return String.fromCharCode(randomcode);
}

box.addEventListener('click', () => {
  const newalphabet = randomalphabet ();
  box.textContent = newalphabet;
});