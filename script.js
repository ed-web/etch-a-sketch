const cont = document.getElementById('container');
const babies = cont.children;
const reset = document.querySelector('.new-grid');
const colorChange = document.querySelector('.change-color');
const tint = document.querySelector('.tint');
let loopNum = 0;
let loopSum = 0;
// takes the users answer and fills the grid with the amount of divs entered
reset.addEventListener('click', ()=>{
    const sendNumber = prompt('Enter a new grid size between 1 & 100', '23');
    if (sendNumber > 100){ prompt("Sorry the entry has to be a number bwttween 1 and 100", 'example -> 56')}
    loopNum = Number(sendNumber);
    loopSum = sendNumber**2

    cont.style.gridTemplateColumns = `repeat(${loopNum}, ${10/loopNum}cm)`
    cont.style.gridTemplateRows = `repeat(${loopNum}, ${10/loopNum}cm)`
    for (i=0; i<loopSum; i++){
        let div = document.createElement('div');
        cont.appendChild(div);
        }
});



// leaves div colored in after run thruuu


function keepColor(){
    for (i = 0; i < loopSum; i++) {
    babies[i].addEventListener('mouseenter', ()=>{
        cont.children.style.bachgroundColor = 'green'
    })
}
}

/*function grid (imput){
imput * div 
} */




//creates the nuber of dives needed to fill the grid


// function will take in imput and multiply the result by itself to get the grid number

// set the hight and width as standard and the div containers to adjust to a % of the viewport h or w

/*high 90px 
width 90 px
columnpx = hight / number of columns
rowpx = hight / number of rows */