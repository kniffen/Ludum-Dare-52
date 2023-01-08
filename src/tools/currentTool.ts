import tools, { ToolId } from './tools'
import grid, { selectedCell } from '../grid'
import { createTile, TileType } from '../tiles'
import seeds, { currentSeed } from '../seeds'

const currentTool = {
  ref: tools[0],
  isActive: false,
  set: (id: ToolId) => tools.find((tool) => tool.id === id), 
  use: () => {
    if (!currentTool.isActive) return

    const { column, row } = selectedCell
    const crop = grid[row][column]

    if (!currentTool.ref.usedOn.includes(crop.type))
      return
    
    switch (currentTool.ref.id) {
      case ToolId.Mower:
        crop.stage = 0
        break

      case ToolId.Cultivator:
        if (crop.stage >= 1) break
        grid[row][column] = createTile(TileType.CultivatedDirt)
        break

      case ToolId.SeedBag:
        grid[row][column] = createTile(seeds[currentSeed.ref.id].tile)
        break
      
      case ToolId.Hoe:
        break
    }
  }
}

export default currentTool