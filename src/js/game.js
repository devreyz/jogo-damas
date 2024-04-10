import "../css/style.css"
import { Board } from "./board";
const app = document.getElementById("app")
const state = [
  [null, 0, null, 0, null, 0, null, 0],
  [0, null, 0, null, 0, null, 0, null],
  [null, 0, null, 0, null, 0, null, 0],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [0, null, 0, null, 0, null, 0, null],
  [null, 0, null, 0, null, 0, null, 0],
  [0, null, 0, null, 0, null, 0, null],
];

const board = new Board(8, state)
app.appendChild(board.board)
board.makeDraggable()



