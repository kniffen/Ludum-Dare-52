import seeds from './seeds'
import currentSeed from './currentSeed'
import tiles from '../tiles'

const container = document.querySelector('.seed-selector')

const title = document.createElement('h2')
const options = seeds.map(({ id, name, tile: tileType }) => {
  const option = document.createElement('div')
  const tile = tiles[tileType]

  option.innerText = tile.stages[tile.stages.length - 1].char
  option.classList.add('seed')
  option.setAttribute('title', name)
  option.style.color = tile.stages[tile.stages.length - 1].color

  if (currentSeed.ref.id === id)
    option.classList.add('selected')

  option.addEventListener('click', (e) => {
    const newSeed = seeds.find(seed => seed.id === id)

    if (newSeed) {
      currentSeed.ref = newSeed
      title.innerText = `Seed: ${newSeed.name}`
    }

    options.forEach(option => option.classList.remove('selected'))
    option.classList.add('selected')
  })

  return option
})

title.innerText = `Seed: ${currentSeed.ref.name}`

container?.append(title, ...options)