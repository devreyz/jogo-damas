import { Piece } from "./piece";

/**
 * Classe que representa o tabuleiro do jogo de damas.
 */
export class Board {
  /**
   * Construtor da classe Board.
   * @param {number} size - Tamanho do tabuleiro.
   */
  constructor(size) {
    this.size = size;
    this.state = [];
    this.board = document.createElement("table");
    this.tiles = [];
    this.pieces = [];
  }

  /**
   * Renderiza o estado atual do tabuleiro.
   */
  renderBoardState() {
    this.board.classList.add("board");
    this.state.forEach((rowArray, y) => {
      const row = document.createElement("tr");
      row.classList.add("board-row");
      this.tiles[y] = [];
      rowArray.forEach((item, x) => {
        const cell = document.createElement("td");
        cell.classList.add("board-cell");
        const tile = document.createElement("div");
        tile.classList.add("board-tile");
        cell.appendChild(tile);
        row.appendChild(cell);
        this.tiles[y][x] = cell;
        if ((x + y) % 2 === 0) {
          cell.classList.add("bg-orange-200");
        }
        if (item !== null) {
          tile.appendChild(item.getPiece());
          this.pieces.push(item);
        }
      });
      this.board.appendChild(row);
    });
  }

  /**
   * Cria uma matriz de peças com base no estado passado no formato de array.
   * @param {Array} state - Estado inicial em que será organizado o tabuleiro.
   * Valores válidos:
   * - null: Cria uma casa vazia.
   * - "b": Cria uma casa com peça Preta.
   * - "w": Cria uma casa com peça Branca.
   * @returns {Array} - Matriz de peças do tabuleiro.
   */

  createPieceMatrix(state) {
    const pieceMatrix = [];
    state.forEach((rowArray, y) => {
      pieceMatrix[y] = [];
      rowArray.forEach((item, x) => {
        if (item !== null) {
          const piece = new Piece(item, y, x);
          pieceMatrix[y][x] = piece;
        } else {
          pieceMatrix[y][x] = null;
        }
      });
    });
    return pieceMatrix;
  }

  /**
   * Define o estado do tabuleiro.
   * @param {Array} state - Novo estado do tabuleiro.
   */
  setState(state) {
    this.state = state;
  }

  /**
   * Retorna o elemento HTML do tabuleiro.
   * @returns {HTMLElement} - Elemento HTML do tabuleiro.
   */
  getBoard() {
    return this.board;
  }
}
