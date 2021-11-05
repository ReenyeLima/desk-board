const cursor = document.querySelector(".cursor");
const panel = document.querySelector(".panel");
const board = document.querySelector(".board");
const context = board.getContext("2d");
const rangeSize = document.querySelector("#range-size");
const color = document.querySelector("#color");
//var color = "source-over";
var size = rangeSize.value;

var drawing = false;
var configuring = false;

window.addEventListener("drag", e => {
  e.preventDefault();
})

window.addEventListener("dragstart", e => {
  e.preventDefault();
})

document.querySelector(".board").addEventListener("mousemove", e => {
  if(!configuring) {
    cursor.setAttribute("style", `top: ${e.pageY-16}px; left: ${e.pageX}px;`);
    draw(e);
  }
});

document.querySelector(".panel").addEventListener("mouseover", e => {
  configuring = true;
});

document.querySelector(".panel").addEventListener("mouseout", e => {
  configuring = false;
});

/*document.addEventListener("keyup", e => {
  switch(e.key) {
    case 'q':
      color = "destination-out";
      size = 30;
      break;
    case 'w':
      color = "source-over";
      size = 5;
      break;
  }  
});*/

document.addEventListener("keydown", e => {
  if((e.key === "s") && e.altKey) {
    if(panel.style.display === "flex") {
      panel.style.display = "none";
      panel.style.visibility = "hidden";
    }else {
      panel.style.display = "flex";
      panel.style.visibility = "visible";
    }
  }
})

document.addEventListener("mouseup", () => {
  drawing = false
});

document.addEventListener("mousedown", (e) =>  {
  if(!configuring) {
    drawing = true
    context.beginPath();
    draw(e);
  }
});

const draw = (e) => {
  if(!drawing) return;

  context.lineWidth = size;
  context.lineCap = 'round';

  context.lineTo(e.clientX, e.clientY);
 
  //context.globalCompositeOperation=color;

  context.strokeStyle = color.value;
  context.stroke();
  context.moveTo(e.clientX, e.clientY);
};

const setBoard = () => {
  board.width = window.innerWidth;
  board.height = window.innerHeight;
}

setBoard();

rangeSize.addEventListener("change", (e) => {
  size = e.target.value;
})