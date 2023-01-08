import * as info from './info'
import update from './update'
import render from './render'

import './inputHandler'
import './tools'
import './seeds'

const gameLoop = (timestamp: DOMHighResTimeStamp) => {
  info.update()
  update()
  render()

  window.requestAnimationFrame(gameLoop)
}

window.requestAnimationFrame(gameLoop)
