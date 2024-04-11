import "../css/style.css";
import { Board } from "./board";
const app = document.getElementById("app");
let state = [
  [null, "b", null, "b", null, "b", null, "b", null, "b"],
  ["b", null, "b", null, "b", null, "b", null, "b", null],
  [null, "b", null, "b", null, "b", null, "b", null, "b"],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ["w", null, "w", null, "w", null, "w", null, "w", null],
  [null, "w", null, "w", null, "w", null, "w", null, "w"],
  ["w", null, "w", null, "w", null, "w", null, "w", null],
];


//const moverPecas = (peca, col, lin, tileAfter, newTile)


const tabuleiro = new Board(10)
state = tabuleiro.criarMatrixDePecas(state)
tabuleiro.setEstado(state)

tabuleiro.renderizarEstadoDoTabuleiro()
app.appendChild(tabuleiro.getBoard())

console.table(tabuleiro.estado);

document.addEventListener("tileClicked", (event) => {
  moverPeca(event)
});

function moverPeca(event) {
  let { tile, peca, y, x, board } = event.detail;
 
  if (!board.pecaSelecionada && board.estado[y][x] && peca.cor === board.turno) {
    board.pecaSelecionada = peca
    board.pecaSelecionada.peca.classList.add("peca-selecionada");
  }
  if (board.pecaSelecionada && !board.estado[y][x]) {
    board.moverPeca(board.pecaSelecionada.peca, tile.target);
    board.realizarJogada(false)
    board.estado[y][x] = board.pecaSelecionada;
    board.estado[board.pecaSelecionada.linha][board.pecaSelecionada.coluna] =
      null;
    board.pecaSelecionada.coluna = x;
    board.pecaSelecionada.linha = y;
    board.pecaSelecionada = null;
  }
}

