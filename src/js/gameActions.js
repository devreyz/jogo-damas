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
    if (
      board.pecaSelecionada &&
      board.pecaSelecionada.movimentosPossiveis.indexOf(board.casas[y][x]) !==
        -1
    ) {
      board.moverPeca(board.pecaSelecionada.peca, tile.target);
      board.realizarJogada(false);
      board.estado[y][x] = board.pecaSelecionada;
      board.estado[board.pecaSelecionada.linha][board.pecaSelecionada.coluna] =
        null;
      board.pecaSelecionada.coluna = x;
      board.pecaSelecionada.linha = y;
      board.pecaSelecionada = null;
    }

    // Mapeia os movimentos possíveis para todas as peças após o movimento
    this.regras.mapearMovimentos();
  }
}
