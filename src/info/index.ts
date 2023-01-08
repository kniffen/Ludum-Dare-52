import { selectedCell } from '../grid'
import tools from '../tools/tools'

const container = document.querySelector('.info') as HTMLElement

export const update = function() {
  container.innerText = `
  Crop: ${selectedCell.ref.name}
  Allowed tools: ${tools.filter(tool => tool.usedOn.includes(selectedCell.ref.type)).map(tool => tool.name).join(', ')}
  Growth: ${((selectedCell.ref.stage + 1) / selectedCell.ref.stages.length * 100).toFixed()}%
  `
}