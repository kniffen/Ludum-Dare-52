interface TileStage {
  char: string
  color: string
}

export interface Tile {
  type: TileType
  name: string
  growRate: number
  background: string
  stage: number
  stages: TileStage[]
}

export enum TileType {
  Grass,
  Wheat,
  Corn,
  Carrot,
  Potato,
  CultivatedDirt
}

const tiles = {
  [TileType.Grass]: {
    name: 'Grass',
    growRate: 0.0001,
    background: '#43260f',
    stages: [
      {char: '░', color: '#7dc85a'},
      {char: '▒', color: '#7dc85a'},
      {char: '▓', color: '#7dc85a'},
    ]
  },

  [TileType.Wheat]: {
    name: 'Wheat',
    growRate: 0.0002,
    background: '#43260f',
    stages: [
      {char: '░', color: '#adbc10'},
      {char: '▒', color: '#cac712'},
      {char: '▓', color: '#ece822'},
    ]
  },

  [TileType.Corn]: {
    name: 'Corn',
    growRate: 0.0005,
    background: '#43260f',
    stages: [
      {char: '░', color: '#5c7a0b'},
      {char: '░', color: '#8d8d0c'},
      {char: '░', color: '#ccdd13'},
    ]

  },
  
  [TileType.Carrot]: {
    name: 'Carrot',
    growRate: 0.0008,
    background: '#43260f',
    stages: [
      {char: '░', color: '#0b7a23'},
      {char: '▒', color: '#eb8f1e'},
    ]

  },

  [TileType.Potato]: {
    name: 'Potato',
    growRate: 0.001,
    background: '#43260f',
    stages: [
      {char: '░', color: '#adbc10'},
      {char: '▒', color: '#adbc10'},
    ]

  },

  [TileType.CultivatedDirt]: {
    name: 'Cultivated Dirt',
    growRate: 1,
    background: '#43260f',
    stages: [
      {char: '░', color: '#6e6e6e'}
    ]
  }
}

export default tiles
export const createTile = (
  type: TileType,
  stage = 0
): Tile => ({
  ...tiles[type],
  type,
  stage,
})