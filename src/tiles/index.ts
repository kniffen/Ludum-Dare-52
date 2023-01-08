import seeds, { Seed, SeedId } from '../seeds/seeds'

interface TileStage {
  char: string
  color: string
}

export interface Tile {
  type: TileType
  name: string
  seed: Seed | null
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
  Beet,
  CultivatedDirt
}

type Tiles = {
  [key in TileType]: {
    name: string
    seed: Seed | null
    growRate: number
    background: string
    stages: TileStage[]
  }
}

const tiles: Tiles = {
  [TileType.Grass]: {
    name: 'Grass',
    seed: null,
    growRate: 0.0001,
    background: '#43260f',
    stages: [
      {char: '░', color: '#435313'},
      {char: '░', color: '#7dc85a'},
      {char: '▒', color: '#7dc85a'},
      {char: '▓', color: '#7dc85a'},
    ]
  },

  [TileType.Wheat]: {
    name: 'Wheat',
    seed: seeds[SeedId.Wheat],
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
    seed: seeds[SeedId.Corn],
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
    seed: seeds[SeedId.Carrot],
    growRate: 0.0008,
    background: '#43260f',
    stages: [
      {char: '░', color: '#0b7a23'},
      {char: '▒', color: '#eb8f1e'},
    ]
  },

  [TileType.Potato]: {
    name: 'Potato',
    seed: seeds[SeedId.Potato],
    growRate: 0.001,
    background: '#43260f',
    stages: [
      {char: '░', color: '#adbc10'},
      {char: '▒', color: '#adbc10'},
    ]
  },

  [TileType.Beet]: {
    name: 'Beets',
    seed: seeds[SeedId.Beet],
    growRate: 0.0005,
    background: '#43260f',
    stages: [
      {char: '░', color: '#7b1c87'},
      {char: '░', color: '#b22424'},
    ]
  },

  [TileType.CultivatedDirt]: {
    name: 'Cultivated Dirt',
    seed: null, 
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