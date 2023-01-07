import tools from './tools'
import currentTool from './currentTool'

const container = document.querySelector('.tool-selector')

const title = document.createElement('h2')
const options = tools.map(({ id, char, name }) => {
  const option = document.createElement('div')

  option.innerText = char
  option.classList.add('tool')
  option.setAttribute('title', name)

  if (currentTool.ref.id === id)
    option.classList.add('selected')

  option.addEventListener('click', (e) => {
    const newTool = tools.find(tool => tool.id === id)

    if (newTool) {
      currentTool.ref = newTool
      title.innerText = `Tool: ${newTool.name}`
    }

    options.forEach(option => option.classList.remove('selected'))
    option.classList.add('selected')
  })

  return option
})

title.innerText = `Tool: ${currentTool.ref.name}`

container?.append(title, ...options)