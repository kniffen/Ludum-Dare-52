import render from './render'

import './inputHandler'
import './tools'
import './seeds'

const gameLoop = (timestamp: DOMHighResTimeStamp) => {
  render()

  window.requestAnimationFrame(gameLoop)
}

window.requestAnimationFrame(gameLoop)
