let x="";

const repeatString = function(repeatTimes) {
    var stringarrray=[repeatTimes];
    if (repeatTimes>0) {
        for (let i = 0; i < repeatTimes; i++) {
            stringarrray[i] = "auto";
            x = stringarrray.join(" ");      
            }
    }
    return x;
};
const grid = document.querySelector('#gridContainer')
function gridMaker(size){
    for (let i = 0; i < size; i++){
        grid.style.cssText = "grid-template-columns: " + x;
        for (let j = 0; j < size; j++) {
             const square= document.createElement('div');
             grid.appendChild(square);
             square.classList.add("square");

        }

    }
   selectColor();
   diffColor();
   resize();
}

const selectColor = function(color){
    const square = document.querySelectorAll('.square');
    square.forEach( function(square){
            square.addEventListener('mouseover', function(e){
                square.style.cssText = "background-color: " + color;
            });
        });
}
const diffColor = function(){
    const white = document.querySelector("#white");
    white.addEventListener('click',()=>{
        color="white"
        selectColor(color);
    })
    const black = document.querySelector("#black");
    black.addEventListener('click',()=>{
        color="black"
        selectColor(color);
    })
    const red = document.querySelector("#red");
    red.addEventListener('click',()=>{
        color="red"
        selectColor(color);
    })
    const blue = document.querySelector("#blue");
    blue.addEventListener('click',()=>{
        color="blue"
        selectColor(color);
    })
    const yellow = document.querySelector("#yellow");
    yellow.addEventListener('click',()=>{
        color="yellow"
        selectColor(color);
    })
    const pink = document.querySelector("#pink");
    pink.addEventListener('click',()=>{
        color="pink"
        selectColor(color);
    })
    const green = document.querySelector("#green");
    green.addEventListener('click',()=>{
        color="green"
        selectColor(color);
    })
    const orange = document.querySelector("#orange");
    orange.addEventListener('click',()=>{
        color="orange"
        selectColor(color);
})}
const removeGrid = function(){
    let first = grid.firstElementChild;
    while(first){
        first.remove();
        first = grid.firstElementChild;
}}
const resize = function()
{const resize = document.querySelector("#newsize");
resize.addEventListener('click',()=>{
    let sizevalue = document.querySelector('#size').value;
    removeGrid();
    repeatString(sizevalue);
    gridMaker(sizevalue);
})}

repeatString(16);
gridMaker(16);

