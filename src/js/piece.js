/**
 * Classe que representa uma peça do jogo de damas.
 */
export class Peca {
  static idCount = 0;

  /**
   * Construtor da classe Piece.
   * @param {string} cor - Cor da peça ("w" para branca, "b" para preta).
   * @param {number} linha - Linha da posição da peça no tabuleiro.
   * @param {number} coluna - Coluna da posição da peça no tabuleiro.
   * @param {Board} boardRef - Referência ao objeto Board.
   */
  constructor(cor, linha, coluna, boardRef) {
    // Gera um ID único para a peça
    this.id = this.setId();
    // Define a cor da peça com base no parâmetro recebido
    this.cor = cor === "w" ? "white" : "black";
    // Define a posição da peça no tabuleiro
    this.linha = linha;
    this.coluna = coluna;
    // Cria o elemento HTML da peça
    this.peca = this.criarPeca();
    // Referência à casa onde a peça está localizada
    this.casa = null;

    // Referência ao objeto Board
    this.boardRef = boardRef;
    // Array para armazenar os movimentos possíveis da peça
    this.movimentosPossiveis = [];
    this.isDama = false;
  }

  /**
   * Gera um ID único para a peça.
   * @returns {number} - ID único da peça.
   */
  setId() {
    Peca.idCount++;
    return Peca.idCount;
  }

  /**
   * Cria o elemento HTML da peça e configura sua aparência.
   * @returns {HTMLElement} - Elemento HTML da peça.
   */
  criarPeca() {
    const peca = document.createElement("div");
    peca.classList.add("peca");
    peca.ondblclick = () => this.tornarDama()
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
  tornarDama() {
    this.isDama = true;
    this.peca.textContent = "Dama"
  }

  /**
   * Define a peça como capturada.
   */
  capturar() {
    this.capturado = true;
  }

  /**
   * Define a casa onde a peça está localizada.
   * @param {HTMLElement} tile - Elemento HTML da casa onde a peça está localizada.
   */
  setCasa(tile) {
    this.casa = tile;
  }

  /**
   * Retorna a casa onde a peça está localizada.
   * @returns {HTMLElement} - Elemento HTML da casa onde a peça está localizada.
   */
  getCasa() {
    return this.casa;
  }

  /**
   * Move a peça para uma nova posição no tabuleiro.
   * @param {number} novaLinha - Nova linha da posição da peça no tabuleiro.
   * @param {number} novaColuna - Nova coluna da posição da peça no tabuleiro.
   * @param {HTMLElement} tile - Elemento HTML da casa para onde a peça será movida.
   */
  mover(novaLinha, novaColuna, tile) {
    this.linha = novaLinha;
    this.coluna = novaColuna;
    this.casa = tile;
  }
}
