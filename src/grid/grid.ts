import {
  createTile,
  TileType
} from '../tiles'

import type { Tile } from '../tiles'

export const columns = 20
export const rows    = 15

export const grid: Tile[][] =
  Array(rows)
    .fill(0)
    .map(n =>
      Array(columns)
        .fill(0)
        .map(n =>
          createTile(
            TileType.Grass,
            Math.floor(Math.random() * (2 - 0 + 1) + 0)
          )
        )
    )