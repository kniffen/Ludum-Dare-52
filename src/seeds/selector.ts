import tiles from '../tiles'
import { getCurrentSeed, setCurrentSeed, onUpdate }  from './seeds'

import type { Seed } from './seeds'

const container = document.querySelector('.seed-selector')
const title = document.createElement('h2')

const setTitle = (seed: Seed) => {
  title.innerText = `Seed: ${seed.name} (${seed.amount})`
}

onUpdate((seed) => {
  if (seed.id === getCurrentSeed().id) setTitle(seed)
})

console.log(tiles)

const options =
  Object
    .values(tiles)
    .filter(tile => tile.seed)
    .map((tile) => {
      const option = document.createElement('div')

      if (!tile.seed) return option
  
      option.innerText = tile.stages[tile.stages.length - 1].char
      option.classList.add('seed')
      option.setAttribute('title', tile.seed.name)
      option.style.color = tile.stages[tile.stages.length - 1].color

      if (getCurrentSeed().id === tile.seed.id)
        option.classList.add('selected')

      option.addEventListener('click', (e) => {
        if (!tile.seed) return

        setCurrentSeed(tile.seed)
        setTitle(tile.seed)

        options.forEach(option => option.classList.remove('selected'))
        option.classList.add('selected')
      })

      return option
    })

setTitle(getCurrentSeed())


container?.append(title, ...options)
