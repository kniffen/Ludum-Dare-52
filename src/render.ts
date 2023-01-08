import {
  ctx,
  width,
  height,
  columns,
  rows,
  tileWidth,
  tileHeight,
  marginLeft,
  marginTop
} from './view'

import grid, { selectedCell } from './grid'

export default function render() {
  if (!ctx) return

  ctx.clearRect(0, 0, width, height)
  ctx.font = '3rem Monospace'

  /* tiles */
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const tile = grid[y][x]
      ctx.fillStyle = tile.background
      ctx.fillRect(
        x * tileWidth,
        y * tileHeight,
        tileWidth,
        tileHeight
      )

      const stage = Math.floor(tile.stage)
      ctx.fillStyle = tile.stages[stage].color
      ctx.fillText(
        tile.stages[stage].char,
        marginLeft + x * tileWidth,
        marginTop  + y * tileHeight
      )
    }
  }

  // Selector
  ctx.strokeStyle = '#FFFFFF'
  ctx.strokeRect(
    selectedCell.column * tileWidth,
    selectedCell.row    * tileHeight,
    tileWidth,
    tileHeight,
  )
}