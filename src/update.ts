import grid from './grid'

export default function update() {
  grid.forEach(row => row.forEach(tile => {
    tile.stage += tile.growRate
    
    if (tile.stage > tile.stages.length - 1)
      tile.stage = tile.stages.length - 1
  }))
}