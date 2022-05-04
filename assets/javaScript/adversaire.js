
// les animation pour les paragraphes 
const para = document.querySelectorAll("p");

for (let i = 0; i < para.length; i++) {
    para[i].addEventListener('mouseenter', ()=>{
        para[i].classList.add("slidePara") 
    })
};

// les animation de la titre 
const title = document.getElementById('h1')
title.classList.add('slideTitle')

// l'animation de marvel 
const marvel = document.getElementById('marvele')
marvel.classList.add('slideTitle')
