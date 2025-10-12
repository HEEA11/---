window.onload = function() {


    const box = document.getElementById('box');
    
    
    function randomcolor() {
        const a = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const c = Math.floor(Math.random() * 256);
        
        return `rgb(${a}, ${b}, ${c})`;
    
    
    }
    
    function recolor() {
        const newcolor = randomcolor();
    
        box.style.color = newcolor;
    
    }
    
    
    
    
    box.addEventListener('click', recolor);
    
    
    }