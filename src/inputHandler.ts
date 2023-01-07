import {
  canvas,
  tileWidth,
  tileHeight,
} from './view'

import { currentTool } from './tools'
import grid, { selectedCell } from './grid'

canvas.addEventListener('mousemove', (e) => {
  const column = Math.floor(e.offsetX / tileWidth)
  const row    = Math.floor(e.offsetY / tileHeight)

  selectedCell.ref    = grid[row][column]
  selectedCell.column = column
  selectedCell.row    = row

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