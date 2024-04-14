/**
 * Classe que representa as ações do jogo de damas.
 */
export class GameActions {
  /**
   * Construtor da classe GameActions.
   * @param {Board} board - Objeto Board responsável pelo tabuleiro.
   * @param {Regras} regras - Objeto Regras responsável pelas regras do jogo.
   */
  constructor(board, regras) {
    this.board = board;
    this.regras = regras;
  }

  /**
   * Move a peça no tabuleiro com base no evento recebido.
   * @param {Event} event - Evento disparado ao clicar em uma casa do tabuleiro.
   */
  moverPeca(event) {
    let { tile, peca, y, x, board } = event.detail;

    // Verifica se não há peça selecionada e se a posição clicada contém uma peça válida
    if (
      !board.pecaSelecionada &&
      board.estado[y][x] &&
      peca.cor === board.turno
    ) {
      board.pecaSelecionada = peca;
      board.pecaSelecionada.peca.classList.add("peca-selecionada");
    }

    // Verifica se há uma peça selecionada e se o movimento é possível
    let movimento = this.board.pecaSelecionada
      ? this.regras.movimentoEValido(
          board.pecaSelecionada.movimentosPossiveis,
          board.casas[y][x]
        )
      : false;

    if (board.pecaSelecionada && movimento.valido) {
      let { movimentosPossiveis, casa, peca, linha, coluna } =
        board.pecaSelecionada;

      if (movimentosPossiveis[movimento.index].alvo) {
      this.board.estado[movimentosPossiveis[movimento.index].alvo.linha][movimentosPossiveis[movimento.index].alvo.coluna] = null
        movimentosPossiveis[movimento.index].alvo.peca.remove();
      }
      tile.target.appendChild(peca);
      casa = tile.target;
      peca.classList.remove("peca-selecionada");

      // Verifica se o movimento é um ataque
      board.realizarJogada(false);
      board.estado[y][x] = board.pecaSelecionada;
      board.estado[linha][coluna] = null;
      board.pecaSelecionada.coluna = x;
      board.pecaSelecionada.linha = y;
      board.pecaSelecionada = null;
    }

    // Mapeia os movimentos possíveis para todas as peças após o movimento
    this.regras.mapearMovimentos();
  }
}
