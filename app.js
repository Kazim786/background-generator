var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2')
var body = document.getElementById('gradient')

color1.value = body.style.background
color2.value = body.style.background

function setGradient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " + color2.value +  ")";

    css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient
    // console.log(color1.value) //in essence this is input.value
)

color2.addEventListener('input', setGradient
    // console.log(color2.value)
)

//1. Write code so that the colour inputs match 
//the background generated on the first page load.  >> color1 = body.style.background

// my favorite color combo: 
 
// linear-gradient(to right, rgb(104, 133, 146), rgb(24, 236, 127))