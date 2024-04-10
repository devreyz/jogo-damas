import interact from "interactjs";

export class Board {
  constructor(size, state) {
    this.size = size;
    this.state = state;
    this.board = this.createBoard();
  }

  createBoard() {
    const boardTable = document.createElement("table");
    boardTable.classList.add(
      "board",
      "border-2",
      "border-slate-800",
      "rounded-md",
      "overflow-hidden",
      "w-full"
    );
    this.state.forEach((row, indexX) => {
      const rowGrid = document.createElement("tr");

      row.forEach((item, indexY) => {
        const cell = document.createElement("td");
        const tile = document.createElement("div");
        tile.classList.add("draggable",`w-16`, `h-16`);
        tile.textContent = item;
        if ((indexX + indexY) % 2 === 0) {
          tile.classList.add("bg-stone-100");
        } else {
          tile.classList.add("bg-stone-800");
        }

        cell.appendChild(tile);
        rowGrid.appendChild(cell);
      });
      boardTable.appendChild(rowGrid);
    });

    return boardTable;
  }
  makeDraggable() {
    const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})
  }
}
