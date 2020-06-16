const cont = document.getElementById('container');
const reset = document.querySelector('.new-grid');
const colorChange = document.querySelector('.change-color');
const tint = document.querySelector('.tint');
const lighten = document.querySelector('.lighten');
const eraser = document.querySelector('.eraser');
const colorSelect = document.querySelector('.colorSelect');
let babies;
let loopNum;
let loopSum;
let divColor = colorSelect.value
let border ='none';

// takes the users answer and fills the grid with the amount of divs entered & leaves the etch trail 
reset.addEventListener('click', ()=>{
    cont.innerHTML = ''; // clears the grid so the dives dont layer ontop of each other

    let sendNumber = prompt("Please enter a number between 1-100 \nto determine the squares per side for the grid.")
    while (sendNumber < 1 || sendNumber > 100 || isNaN(sendNumber)) {
        sendNumber = prompt("Number invalid. \nPlease enter a number between 1-100.");
    }
    
    loopSum = sendNumber**2
    cont.style.gridTemplateColumns = `repeat(${sendNumber}, 1fr)` // remember 1fr! had a complicted math formula before it
    cont.style.gridTemplateRows = `repeat(${sendNumber}, 1fr)`

    for (i=0; i<loopSum; i++){
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('div-kids')
        cont.appendChild(innerDiv);
        babies = document.querySelectorAll('.div-kids');
        innerDiv.onmouseover = () => {
            innerDiv.style.border = `${border}`;
            innerDiv.style.backgroundColor = `${divColor}`;
    }}
    
});



// randomise the etched color  REMOVED THIS BECAUSE ive added colour selection so it just complecates things. Plus all the colours are there to choose from so why
// function rand(min, max) {
//     min = parseFloat(min);    
//     max = parseFloat(max);     
//     return parseInt(Math.random() * (max-min+1), 10) + min;
// }

// // colorChange.addEventListener('click', ()=>{
// //     h = rand(1, 360);
// //     s = rand(70, 100);
// //     l = 50;
// //     border = 'none';
// //     return divColor = 'hsla(' + h + ',' + s + '%,' + l + '%,' + a +')';
// // })

// select colour
function HexToHSL(hex) { // this function converts the value that type color brings back (hex) to HSL. This is so the lighten and darken buttons can work properly
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    return {h, s, l};
}


colorSelect.addEventListener('change', ()=> {
    let color = HexToHSL(colorSelect.value)
    border = 'none'
    return divColor = 'hsl(' + color.h + ', ' + color.s + '%, ' + color.l + '%)'
})


// Darken Colour
let lightNumber = 0;

tint.addEventListener('click', ()=>{
    let color = HexToHSL(colorSelect.value)
    lightNumber = lightNumber - 5
    border = 'none';
    return divColor = 'hsl(' + color.h + ',' + color.s + '%,' + (color.l + lightNumber) +'%)';

})
//lighten colour
lighten.addEventListener('click', ()=>{
    let color = HexToHSL(colorSelect.value)
    lightNumber = lightNumber + 5
    border = 'none';
    return divColor = 'hsl(' + color.h + ',' + color.s + '%,' + (color.l + lightNumber) +'%)';
})


// erase previous
eraser.addEventListener('click', ()=>{
       border = '';
    return divColor = 'hsla(10, 90%, 56%, 0)';
  
})

