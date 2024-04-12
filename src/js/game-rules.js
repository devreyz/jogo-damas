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
   * Mapeia os movimentos possíveis para as peças do tabuleiro.
   */
  mapearMovimentos() {
    const { estado, turno } = this.board;
    estado.forEach((rowArray, y) => {
      rowArray.forEach((peca, x) => {
        if (peca) {
          peca.movimentosPossiveis = [];
          if (peca.isDama) {
            this.mapearMovimentosDama();
          } else {
            this.mapearMovimentoSimples(turno, peca, x, y, estado);
          }
        }
      });
    });
  }

  mapearMovimentoSimples(turno, peca, x, y, estado) {
    if (turno === "black" && peca && peca.cor === "black") {
      if (estado[y + 1][x - 1] !== undefined) {
        if (estado[y + 1][x - 1] === null) {
          peca.movimentosPossiveis.push({
            casa: this.board.casas[y + 1][x - 1],
            casaCaptura: null,
            tipo: "MOVE_FORWARD",
            alvo: null,
          });
        } else if (estado[y + 1][x - 1].cor === "white") {
          if (
            estado[y + 2][x - 2] !== undefined &&
            estado[y + 2][x - 2] === null
          ) {
            peca.movimentosPossiveis.push({
              casa: this.board.casas[y + 2][x - 2],
              casaCaptura: this.board.casas[y + 1][x - 1],
              tipo: "CAPTURA",
              alvo: estado[y + 1][x - 1],
            });
          }
        }

        //console.log(peca);
      }
      if (estado[y + 1][x + 1] !== undefined) {
        if (estado[y + 1][x + 1] === null) {
          peca.movimentosPossiveis.push({
            casa: this.board.casas[y + 1][x + 1],
            casaCaptura: null,
            tipo: "MOVE_FORWARD",
            alvo: null,
          });
        } else if (estado[y + 1][x + 1].cor === "white") {
          if (
            estado[y + 2][x + 2] !== undefined &&
            estado[y + 2][x + 2] === null
          ) {
            peca.movimentosPossiveis.push({
              casa: this.board.casas[y + 2][x + 2],
              casaCaptura: this.board.casas[y + 1][x + 1],
              tipo: "CAPTURA",
              alvo: estado[y + 1][x + 1],
            });
          }
        }
      }
    }
    if (turno === "white" && peca && peca.cor === "white") {
      if (estado[y - 1][x - 1] !== undefined) {
        if (estado[y - 1][x - 1] === null) {
          peca.movimentosPossiveis.push({
            casa: this.board.casas[y - 1][x - 1],
            casaCaptura: null,
            tipo: "MOVE_FORWARD",
            alvo: null,
          });
        } else if (estado[y - 1][x - 1].cor === "black") {
          if (
            estado[y - 2][x - 2] !== undefined &&
            estado[y - 2][x - 2] === null
          ) {
            peca.movimentosPossiveis.push({
              casa: this.board.casas[y - 2][x - 2],
              casaCaptura: this.board.casas[y - 1][x - 1],
              tipo: "CAPTURA",
              alvo: estado[y - 1][x - 1],
            });
          }
        }

        //console.log(peca);
      }
      if (estado[y - 1][x + 1] !== undefined) {
        if (estado[y - 1][x + 1] === null) {
          peca.movimentosPossiveis.push({
            casa: this.board.casas[y - 1][x + 1],
            casaCaptura: null,
            tipo: "MOVE_FORWARD",
            alvo: null,
          });
        } else if (estado[y - 1][x + 1].cor === "black") {
          if (
            estado[y - 2][x + 2] !== undefined &&
            estado[y - 2][x + 2] === null
          ) {
            peca.movimentosPossiveis.push({
              casa: this.board.casas[y - 2][x + 2],
              casaCaptura: this.board.casas[y - 1][x + 1],
              tipo: "CAPTURA",
              alvo: estado[y - 1][x + 1],
            });
          }
        }
      }
    }

    
  }
  mapearMovimentosDama(turno, peca, x, y, estado) {}
  movimentoEValido(array, casa) {
    for (let index = 0; index < array.length; index++) {
      if (array[index].casa === casa) return {valido: true, index: index};
    }
    return { valido: false, index: null };
  }
}
