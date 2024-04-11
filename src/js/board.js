import { Peca } from "./piece";

/**
 * Classe que representa o tabuleiro do jogo de damas.
 */
export class Board {
  static pecaSelecionada = null
  /**
   * Construtor da classe Board.
   * @param {number} tamanho - Tamanho do tabuleiro.
   */
  constructor(tamanho) {
    this.tamanho = tamanho;
    this.estado = [];
    this.board = document.createElement("table");
    this.casas = [];
    this.pecas = [];
    
    this.turno = "black"
  }

  /**
   * Renderiza o estado atual do tabuleiro.
   */
  renderizarEstadoDoTabuleiro() {
    this.board.classList.add("board");
    this.estado.forEach((rowArray, y) => {
      const linha = document.createElement("tr");
      linha.classList.add("board-row");
      this.casas[y] = [];
      rowArray.forEach((item, x) => {
        const celula = document.createElement("td");
        celula.classList.add("board-cell");
        const tile = document.createElement("div");
        tile.classList.add("board-tile");
        celula.appendChild(tile);
        linha.appendChild(celula);
        this.casas[y][x] = celula;
        if ((x + y) % 2 !== 0) {
          celula.classList.add("bg-orange-500");
          tile.onclick = event => {
            if (item) {
              Board.pecaSelecionada = item.peca
              Board.pecaSelecionada.classList.add("peca-selecionada")
              
            }
            this.moverPeca(tile)
            
          }
        }
        if (item !== null) {
          tile.appendChild(item.getPeca());
          item.setCasa(tile)
          this.pecas.push(item);
        }
      });
      this.board.appendChild(linha);
    });
  }
  moverPeca(tile) {
    tile.appendChild(Board.pecaSelecionada);
    // Board.pecaSelecionada.classList.remove("peca-selecionada")
    console.clear()
console.table(this.estado);
   
  }
  /**
   * Cria uma matriz de peças com base no estado passado no formato de array.
   * @param {Array} estado - Estado inicial em que será organizado o tabuleiro.
   * Valores válidos:
   * - null: Cria uma casa vazia.
   * - "b": Cria uma casa com peça Preta.
   * - "w": Cria uma casa com peça Branca.
   * @returns {Array} - Matriz de peças do tabuleiro.
   */

  criarMatrixDePecas(estado) {
    const matriz = [];
    estado.forEach((rowArray, y) => {
      matriz[y] = [];
      rowArray.forEach((item, x) => {
        if (item !== null) {
          const peca = new Peca(item, y, x);
          matriz[y][x] = peca;
        } else {
          matriz[y][x] = null;
        }
      });
    });
    return matriz;
  }

  /**
   * Define o estado do tabuleiro.
   * @param {Array} estado - Novo estado do tabuleiro.
   */
  setEstado(estado) {
    this.estado = estado;
  }

  /**
   * Retorna o elemento HTML do tabuleiro.
   * @returns {HTMLElement} - Elemento HTML do tabuleiro.
   */
  getBoard() {
    return this.board;
  }
}
