import { TileType } from '../tiles'

export enum ToolId {
  Mower,
  Cultivator,
  Hoe,
  Sickle,
  SeedBag,
}

interface Tool {
  id: ToolId
  char: string
  name: string
  usedOn: TileType[]
}

const tools: Tool[] = [
  {
    id:     ToolId.Mower,
    char:   'L',
    name:   'Lawnmower',
    usedOn: [TileType.Grass],
  },
  {
    id:     ToolId.Cultivator,
    char:   'w',
    name:   'Cultivator',
    usedOn: Object.keys(TileType).map(i => Number(i))
  },
  { 
    id:     ToolId.Hoe,
    char:   '7',
    name:   'Hoe',
    usedOn: [TileType.Carrot, TileType.Potato, TileType.Beet],
  },
  { 
    id:     ToolId.Sickle,
    char:   'J',
    name:   'Sickle',
    usedOn: [TileType.Wheat, TileType.Corn],
  },
  { 
    id:     ToolId.SeedBag,
    char:   'u',
    name:   'Seed bag',
    usedOn: [TileType.CultivatedDirt],
  }
]

export default tools