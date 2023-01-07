import seeds from './seeds'

import type { SeedId } from './seeds'

const currentSeed = {
  ref: seeds[0],
  set: (id: SeedId) => seeds.find(seed => seed.id === id)
}

export default currentSeed