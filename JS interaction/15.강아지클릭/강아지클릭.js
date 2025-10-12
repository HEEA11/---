document.getElementById('dogbutton').addEventListener('click', function() {


    const dogsize = 30; 


    const screenwidth = window.innerWidth;
    const screenheight = window.innerHeight;

    const poop = document.createElement('span');
    poop.textContent = '💩';
    poop.className = 'poop-emoji';


    const randomX = Math.random() * (screenwidth - dogsize);
    const randomY = Math.random() * (screenheight - dogsize );
 
  
    poop.style.left = `${randomX}px`;
    poop.style.top = `${randomY}px`;

    document.body.appendChild(poop);


});
