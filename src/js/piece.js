/**
 * Classe que representa uma peça do jogo de damas.
 */
export class Peca {
  /**
   * Construtor da classe Piece.
   * @param {string} cor - Cor da peça ("w" para branca, "b" para preta).
   * @param {number} linha - Linha da posição da peça no tabuleiro.
   * @param {number} coluna - Coluna da posição da peça no tabuleiro.
   */
  constructor(cor, linha, coluna) {
    // Gera um ID único para a peça
    this.id = crypto.randomUUID();
    // Define a cor da peça com base no parâmetro recebido
    this.cor = cor === "w" ? "white" : "black";
    // Define a posição da peça no tabuleiro
    this.linha = linha;
    this.coluna = coluna;
    // Cria o elemento HTML da peça
    this.peca = this.criarPeca();
    this.casa = null
  }

  /**
   * Cria o elemento HTML da peça e configura sua aparência.
   * @returns {HTMLElement} - Elemento HTML da peça.
   */
  criarPeca() {
    const peca = document.createElement("div");
    peca.classList.add("peca");
    peca.style.backgroundColor = this.cor === "white" ? "#ffffff" : "#000000";
    return peca;
  }

  /**
   * Retorna o elemento HTML da peça.
   * @returns {HTMLElement} - Elemento HTML da peça.
   */
  getPeca() {
    return this.peca;
  }

  /**
   * Torna a peça uma peça rei.
   */
  tornarRei() {
    this.rei = true;
  }

  /**
   * Define a peça como capturada.
   */
  capturar() {
    this.capturado = true;
  }
  setCasa(tile) {
    this.casa = tile;
  }
  getCasa() {
    return this.casa;
  }
  /**
   * Move a peça para uma nova posição no tabuleiro.
   * @param {number} novaLinha - Nova linha da posição da peça no tabuleiro.
   * @param {number} novaColuna - Nova coluna da posição da peça no tabuleiro.
   */
  mover(novaLinha, novaColuna) {
    this.linha = novaLinha;
    this.coluna = novaColuna;
  }
}
