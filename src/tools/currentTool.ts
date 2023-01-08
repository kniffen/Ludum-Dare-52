import tools, { ToolId } from './tools'
import grid, { selectedCell } from '../grid'
import { createTile, TileType } from '../tiles'
import { getCurrentSeed, addSeeds, removeSeeds } from '../seeds'
import tiles from '../tiles'

const currentTool = {
  ref: tools[0],
  isActive: false,
  set: (id: ToolId) => tools.find((tool) => tool.id === id), 
  use: () => {
    if (!currentTool.isActive) return

    const { column, row } = selectedCell
    const crop = grid[row][column]
    const currentSeed = getCurrentSeed()

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
        if (currentSeed.amount <= 0) break
        const tileType = Object.entries(tiles).find(([key, value]) => value.seed?.id === currentSeed.id)?.[0]
        if (tileType) {
          grid[row][column] = createTile(Number(tileType))
          removeSeeds(currentSeed, 1)
        }
        break

      case ToolId.Hoe:
      case ToolId.Sickle:
        if (!crop.seed || crop.stage < crop.stages.length - 1) break
        addSeeds(crop.seed, 2)
        grid[row][column] = createTile(TileType.Grass)
        break
    }
  }
}

export default currentTool