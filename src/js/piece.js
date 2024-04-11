export class Piece {
  constructor(color, row, col) {
    this.name = crypto.randomUUID();
    this.color = color === "w" ? "white" : "black";
    this.row = row;
    this.col = col;
    this.piece = this.createPiece();
    this.selected = false
    this.addEvents();
  }
  createPiece() {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundColor =
      this.color === "white" ? "#ffffff" : "#000000";
    return piece;
  }
  getPiece() {
    return this.piece
  }
  addEvents() {
    this.piece.onclick = () => {
      this.select();
    };
  }
  select() {
    this.selected = true
    this.piece.classList.add("selected");
    console.log(this.name);
  }
  disableSelection() {
    this.piece.classList.remove("selected");
  }
  makeKing() {
    this.isKing = true;
  }
  isCaptured() {
    this.captured = true;
  }
  move(newRow, newCol) {
    this.row = newRow;
    this.col = newCol;
  }
}
