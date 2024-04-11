import { Peca } from "./piece";

/**
 * Classe que representa o tabuleiro do jogo de damas.
 */
export class Board {
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
    this.pecaSelecionada = null;
    this.turno = "black";
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
        this.casas[y][x] = tile;
        if ((x + y) % 2 !== 0) {
          celula.classList.add("bg-orange-500");
          tile.onclick = (event) => {
            const clickEvent = new CustomEvent("tileClicked", {
              detail: {
                tile: event,
                peca: this.estado[y][x],
                y: y,
                x: x,
                board: this,
              },
            });
            
            document.dispatchEvent(clickEvent);
          };
        }
        if (item !== null) {
          tile.appendChild(item.getPeca());
          item.setCasa(tile);
          this.pecas.push(item);
        }
      });
      this.board.appendChild(linha);
    });
  }

  // Função para alternar o turno dos jogadores
  alternarTurno() {
    this.turno = this.turno === "white" ? "black" : "white"; // Alterna entre 'branco' e 'preto'
    document.getElementById("turno").style.background = this.turno
  }

  // Função para verificar se um jogador pode jogar
  podeJogar() {
    // Implemente a lógica para verificar se o jogador atual tem movimentos possíveis
    // Se sim, retorne true; se não, retorne false
    return true; // Exemplo simples - sempre retorna true
  }

  // Função para verificar se um jogador pode jogar novamente após uma captura
  podeJogarNovamente(capturou) {
    if (capturou) {
      // Se o jogador capturou uma peça, ele pode jogar novamente
      return true;
    } else {
      // Se não, o próximo jogador pode jogar
      this.alternarTurno(); // Alterna o turno para o próximo jogador
      return false;
    }
  }

  // Função para realizar uma jogada (chamada quando o jogador faz uma jogada)
  realizarJogada(capturou) {
    // Implemente a lógica para realizar uma jogada
    // Exemplo simples - assume que a jogada capturou uma peça
    const podeJogarNovamente = this.podeJogarNovamente(capturou);
    if (!podeJogarNovamente) {
      // Se o jogador não pode jogar novamente, verifique se o próximo jogador pode jogar
      if (!this.podeJogar()) {
        // Se o próximo jogador também não pode jogar, o jogo acabou
        console.log("Fim do jogo!");
      }
    }
  }
  setPecaSelecionada(peca) {
    Board.pecaSelecionada = peca;
  }
  getPecaSelecionada() {
    return Board.pecaSelecionada;
  }
  moverPeca(peca, tile) {
    tile.appendChild(peca);
    peca.classList.remove("peca-selecionada");
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
          const peca = new Peca(item, y, x, this);
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
