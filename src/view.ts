import { columns, rows } from './grid'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx    = canvas.getContext('2d')
const ratio  = Math.ceil(window.devicePixelRatio)

if (!ctx)
  throw new Error('Unable to get canvas context')

ctx.font = '3rem Monospace'

const metrics    = ctx.measureText('#')
const tileHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
const tileWidth  = metrics.width
const width      = tileWidth  * columns
const height     = tileHeight * rows
const marginTop  = metrics.fontBoundingBoxAscent
const marginLeft = 0

canvas.width        = width  * ratio
canvas.height       = height * ratio
canvas.style.width  = width  + 'px'
canvas.style.height = height + 'px'

ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
  
export {
  canvas,
  ctx,
  width,
  height,
  columns,
  rows,
  tileWidth,
  tileHeight,
  marginTop,
  marginLeft
}