import tiles, {createTile, TileType, Tile } from '../tiles'

export const columns = 20
export const rows    = 15

const grass = tiles[TileType.Grass]

export const grid: Tile[][] =
  Array(rows)
    .fill(0)
    .map(n =>
      Array(columns)
        .fill(0)
        .map(n =>
          createTile(
            TileType.Grass,
            Math.floor(Math.random() * (grass.stages.length - 1 + 1) + 1)
          )
        )
    )