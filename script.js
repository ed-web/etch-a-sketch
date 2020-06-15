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
let divColor = 'black';
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



// randomise the etched color 
function rand(min, max) {
    min = parseFloat(min);    
    max = parseFloat(max);     
    return parseInt(Math.random() * (max-min+1), 10) + min;
}
let h = 1;
let s = 1;
let l = 50;
let a = 1;
colorChange.addEventListener('click', ()=>{
    h = rand(1, 360);
    s = rand(70, 100);
    l = 50;
    border = 'none';
    return divColor = 'hsla(' + h + ',' + s + '%,' + l + '%,' + a +')';
})
// select colour
colorSelect.addEventListener('change', function () {
    divColor = this.value;
    border = 'none';
    
  });

// Darken Colour
tint.addEventListener('click', ()=>{
    l = l - 5;
    border = 'none';
    return divColor = 'hsla(' + h + ',' + s + '%,' + l + '%,' + a +')';

})
//lighten colour
lighten.addEventListener('click', ()=>{
    l = l + 5;
    border = 'none';
    return divColor = 'hsla(' + h + ',' + s + '%,' + l + '%,' + a +')';
})


// erase previous
eraser.addEventListener('click', ()=>{
    a = 0;
    border = '';
    return divColor = 'hsl(' + h + ',' + s + '%,' + l + '%,' + a +')';
  
})

