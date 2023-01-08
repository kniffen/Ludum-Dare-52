import {
  canvas,
  tileWidth,
  tileHeight,
} from './view'

import { currentTool } from './tools'
import grid, { selectedCell, columns, rows } from './grid'

canvas.addEventListener('mousemove', (e) => {
  const column = Math.floor(e.offsetX / tileWidth)
  const row    = Math.floor(e.offsetY / tileHeight)

  selectedCell.column = column > 0 && column < columns ? column : 0
  selectedCell.row    = row    > 0 && row    < rows    ? row    : 0
  selectedCell.ref    = grid[selectedCell.row][selectedCell.column]

  currentTool.use()
})

canvas.addEventListener('mousedown', (e) => {
  currentTool.isActive = true
  currentTool.use()
})

canvas.addEventListener('mouseup', (e) => {
  currentTool.isActive = false
})

canvas.addEventListener('mouseleave', (e) => {
  currentTool.isActive = false
})