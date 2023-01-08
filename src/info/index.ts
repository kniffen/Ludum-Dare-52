import { selectedCell } from "../grid"

const container = document.querySelector('.info') as HTMLElement

export const update = function() {
  container.innerText = `Selector
  Column: ${selectedCell.column}
  Row: ${selectedCell.row}
  
  Crop
  Name: ${selectedCell.ref.name}
  Stage: ${((selectedCell.ref.stage + 1) / selectedCell.ref.stages.length * 100).toFixed()}%
  `
}