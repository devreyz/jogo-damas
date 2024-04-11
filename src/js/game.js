import "../css/style.css";
import { Board } from "./board";
import { GameRules } from "./game-rules";
import { GameActions } from "./gameActions";

const app = document.getElementById("app");

// Estado inicial do jogo
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

// Criação do tabuleiro, regras do jogo e ações do jogo
const tabuleiro = new Board(10);
const regras = new GameRules(tabuleiro);
const acoes = new GameActions(tabuleiro, regras);

// Criação das peças e configuração do estado inicial do tabuleiro
state = tabuleiro.criarMatrixDePecas(state);
tabuleiro.setEstado(state);

// Renderização do estado inicial do tabuleiro
tabuleiro.renderizarEstadoDoTabuleiro();
app.appendChild(tabuleiro.getBoard());

// Event listener para o evento de clique em uma casa do tabuleiro
document.addEventListener("tileClicked", (event) => {
  // Chamada da função para mover a peça
  acoes.moverPeca(event);

  // Exibição do estado do tabuleiro no console
  console.table(tabuleiro.estado);
});
