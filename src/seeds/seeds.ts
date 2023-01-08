export enum SeedId {
  Wheat  = 'wheat',
  Corn   = 'corn',
  Carrot = 'carrot',
  Potato = 'potato',
  Beet   = 'beet',
}

export interface Seed {
  id: SeedId,
  name: string,
  amount: number
}

type SeedCallback = (seed: Seed) => void

type Seeds = {
  [key in SeedId]: Seed
}

const seeds: Seeds = {
  [SeedId.Wheat]:  {id: SeedId.Wheat,  name: 'Wheat',  amount: 20},
  [SeedId.Corn]:   {id: SeedId.Corn,   name: 'Corn',   amount: 30},
  [SeedId.Carrot]: {id: SeedId.Carrot, name: 'Carrot', amount: 5},
  [SeedId.Potato]: {id: SeedId.Potato, name: 'Potato', amount: 10},
  [SeedId.Beet]:   {id: SeedId.Beet,   name: 'Beets',  amount: 5},
}

let currentSeed = seeds[SeedId.Wheat]

export const setCurrentSeed = (seed: Seed) => {
  currentSeed = seed
}

export const getCurrentSeed = () => currentSeed

const callbacks: SeedCallback[] = []

export const addSeeds = (seed: Seed, amount: number) => {
  seed.amount += amount
  callbacks.forEach(cb => cb(seed))
}

export const removeSeeds = (seed: Seed, amount: number) => {
  seed.amount -= amount
  callbacks.forEach(cb => cb(seed))
}

export const onUpdate = (cb: SeedCallback) => callbacks.push(cb)

export default seeds