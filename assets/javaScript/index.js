const voirHeros = document.getElementById("voirHeros");
const voirAdve = document.getElementById("voirAdve");
const voirAdve1 = document.getElementById('VoirAdve1')
const voirAdve2 = document.getElementById('VoirAdve2')
const voirAdve3 = document.getElementById('VoirAdve3')


// le pouse hover sur le boutton 2
voirAdve.addEventListener('mouseover', () => {
    voirAdve.setAttribute("class", "MouseHover2")
});

// le mouse leave sur le boutton2 
voirAdve.addEventListener("mouseleave", () => {
    voirAdve.setAttribute("class", "boutton2")
})

// le mouse hover sur le boutton 1
voirHeros.addEventListener('mouseover', () => {
    voirHeros.setAttribute("class", "MouseHover1")
});

// le mouse leave sur le boutton1 
voirHeros.addEventListener("mouseleave", () => {
    voirHeros.setAttribute("class", "button1")
})

voirAdve1.addEventListener('mouseover', () => {
    voirAdve1.setAttribute("class", "MouseHover1")
})

voirAdve1.addEventListener('mouseleave', () => {
    voirAdve1.setAttribute("class", "button1")
})

voirAdve2.addEventListener('mouseover', () => {
    voirAdve2.setAttribute("class", "MouseHover1")
})

voirAdve2.addEventListener('mouseleave', () => {
    voirAdve2.setAttribute("class", "button1")
})

voirAdve3.addEventListener('mouseover', () => {
    voirAdve3.setAttribute("class", "MouseHover1")
})

voirAdve3.addEventListener('mouseleave', () => {
    voirAdve3.setAttribute("class", "button1")
})


// les animation de la titre 
const title = document.querySelectorAll("h1")
for (let i = 0; i < title.length; i++) {
    title[i].classList.add('slideTitle')
}



// les animation pour les paragraphes 
const para = document.querySelectorAll("p");

for (let i = 0; i < para.length; i++) {
    para[i].classList.add("slidePara") 
};


// l'animation de marvel 
const marvel = document.getElementById('marvele')
marvel.classList.add('slideTitle')


// pour les  rubriques du menu doivent être surligné lorsque la souris survole l’élément.


let test = document.getElementsByClassName('underline')

for (let i = 0; i < test.length; i++) {
    test[i].addEventListener('mouseover', () => {
        test[i].style.textDecoration='underline'
    })

    test[i].addEventListener('mouseleave', () => {
        test[i].style.textDecoration='none'
    })
}





// amimation pour les icone des reseuax sociaux 

const icon1 = document.getElementById('icone1');
const icon2 = document.getElementById('icone2');
const icon3 = document.getElementById('icone3');
const icon4 = document.getElementById('icone4')

function hoverIcon (event){
    const icon = event.target
    console.log(icon);
    icon.classList.add("hoverIcone") 
};

function leaveHoverIcon (event) {
    const icon = event.target
    icon.classList.remove("hoverIcone")
}

icon1.addEventListener('mouseover', hoverIcon);
icon2.addEventListener('mouseover', hoverIcon);
icon3.addEventListener('mouseover', hoverIcon);
icon4.addEventListener('mouseover', hoverIcon);

icon1.addEventListener('mouseleave', leaveHoverIcon);
icon2.addEventListener('mouseleave', leaveHoverIcon);
icon3.addEventListener('mouseleave', leaveHoverIcon);
icon4.addEventListener('mouseleave', leaveHoverIcon);

// pour le spiderman glisse 

const slideSpiderman = document.getElementById('spidermanSlide')
const spiderNoir = document.getElementById('spiderNoir')

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll >= 100 && scroll < 1560) {
        slideSpiderman.style.opacity='80%'
        spiderNoir.style.opacity='0%'
    } else if (scroll >= 1560 && scroll < 1570) {
        slideSpiderman.style.opacity='0%'
        spiderNoir.style.opacity='50%'
    } 
})





/* le message de popbox  */

const btn = document.getElementById('boutton')
const input = document.getElementsByClassName('form-spiderman')

for (let i = 0; i < input.length; i++) {
    if (input[i].value !== '') {
        btn.addEventListener('click', ()=> {
            alert('you are a nex Spiderman!!!! thank You Guz...')

        })
    }    
}

// les image scale sur le mouseover 

const scale1 = document.getElementById('scale1')
const scale2 = document.getElementById('scale2')
const scale3 = document.getElementById('scale3')

function imgScale (img) {
    const image = img.target;
    image.classList.add('scale')
};

function imgDeScale(img) {
    const image = img.target
    setTimeout( ()=> {
        image.classList.remove('scale')
    },200)
};

scale1.addEventListener('mouseover', imgScale)
scale2.addEventListener('mouseover', imgScale)
scale3.addEventListener('mouseover', imgScale)





scale1.addEventListener('mouseleave', imgDeScale)
scale2.addEventListener('mouseleave', imgDeScale)
scale3.addEventListener('mouseleave', imgDeScale)

