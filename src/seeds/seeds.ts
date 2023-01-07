import { TileType } from '../tiles'

export enum SeedId {
  Wheat,
  Corn,
  Carrot,
  Potato
}

interface Seed {
  id: SeedId,
  name: string,
  tile: TileType
}

const seeds: Seed[] = [
  {id: SeedId.Wheat,  name: 'Wheat',  tile: TileType.Wheat},
  {id: SeedId.Corn,   name: 'Corn',   tile: TileType.Corn},
  {id: SeedId.Carrot, name: 'Carrot', tile: TileType.Carrot},
  {id: SeedId.Potato, name: 'Potato', tile: TileType.Potato},
]

export default seeds