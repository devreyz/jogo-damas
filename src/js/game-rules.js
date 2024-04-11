/**
 * Classe que representa as regras do jogo de damas.
 */
export class GameRules {
  /**
   * Construtor da classe GameRules.
   * @param {Board} board - Objeto Board responsável pelo tabuleiro.
   */
  constructor(board) {
    this.board = board;
  }

  /**
   * Mapeia os movimentos possíveis para todas as peças no tabuleiro.
   */
  mapearMovimentos() {
    this.mapearMovimentosBlack();
    //console.log(this.board.estado);
  }

  /**
   * Mapeia os movimentos possíveis para as peças pretas no tabuleiro.
   */
  mapearMovimentosBlack() {
    const { estado, turno } = this.board;
    estado.forEach((rowArray, y) => {
      rowArray.forEach((peca, x) => {
        if (peca) peca.movimentosPossiveis = [];

        if (turno === "black" && peca && peca.cor === "black") {
          if (
            estado[y + 1][x - 1] !== undefined &&
            estado[y + 1][x - 1] === null
          ) {
            peca.movimentosPossiveis.push(this.board.casas[y + 1][x - 1]);
            //console.log(peca);
          }
          if (
            estado[y + 1][x + 1] !== undefined &&
            estado[y + 1][x + 1] === null
          ) {
            peca.movimentosPossiveis.push(this.board.casas[y + 1][x + 1]);
            //console.log(peca);
          }
        }

        if (turno === "white" && peca && peca.cor === "white") {
          if (
            estado[y - 1][x - 1] !== undefined &&
            estado[y - 1][x - 1] === null
          ) {
            peca.movimentosPossiveis.push(this.board.casas[y - 1][x - 1]);
            //console.log(peca);
          }
          if (
            estado[y - 1][x + 1] !== undefined &&
            estado[y - 1][x + 1] === null
          ) {
            peca.movimentosPossiveis.push(this.board.casas[y - 1][x + 1]);
            //console.log(peca);
          }
        }
      });
    });
  }

  /**
   * Verifica as casas adjacentes à posição especificada.
   * @param {Array} matriz - Matriz representando o tabuleiro.
   * @param {number} col - Coluna da posição.
   * @param {number} row - Linha da posição.
   */
  verificarCasas(matriz, col, row) {
    // Implemente a lógica para verificar as casas adjacentes
  }
}
