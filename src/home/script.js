const cursor = document.querySelector(".cursor");
const board = document.querySelector(".board");
const context = board.getContext("2d");

var drawing = false;

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", `top: ${e.pageY-16}px; left: ${e.pageX}px;`);
  draw(e);
})

document.addEventListener("mouseup", () => {
  drawing = false
});
document.addEventListener("mousedown", (e) =>  {
  drawing = true
  context.beginPath();
  draw(e);
});

const draw = (e) => {
  if(!drawing) return;

  context.lineWidth = 5;
  context.lineCap = 'round';

  context.lineTo(e.clientX, e.clientY);
  context.stroke();
  context.moveTo(e.clientX, e.clientY);
};

const setBoard = () => {
  board.width = window.innerWidth;
  board.height = window.innerHeight;
}

setBoard();