import fileData from '../data/fileData'
import { entityCoordinates, sprites } from '../data/entityCoordinates'

// a nice explanation of how to recolor images:
// https://stackoverflow.com/questions/45706829/change-color-image-in-canvas
export function renderSprite(
  sprite: HTMLImageElement,
  color: string
) {
  const tempCanvas = document.createElement('canvas')
  tempCanvas.width = sprite.width
  tempCanvas.height = sprite.height
  const tempCtx = tempCanvas.getContext('2d')

  if (tempCtx) {
    tempCtx.fillStyle = color
    tempCtx.fillRect(0, 0, tempCtx.canvas.width, tempCtx.canvas.height)

    tempCtx.globalCompositeOperation = 'destination-in'
    tempCtx.drawImage(sprite, 0, 0)

    tempCtx.globalCompositeOperation = 'source-over'
    return tempCanvas
  }
}

export function drawEntity(
  fileName: string,
  context: CanvasRenderingContext2D,
  colors: { [index: string]: string[] },
  x: number = 0,
  y: number = 0,
  indices?: number[]
) {
  fileData[fileName].forEach(({ sprite }, i) => {
    if (sprite && (!indices || indices.includes(i))) {
      const img = sprites[sprite]
      const tempCanvas = renderSprite(img, colors[fileName][i])
      if (tempCanvas) {
        context.drawImage(tempCanvas, x, y)
      }
    }
  })
}

// i shouldn't have to declare these types again here, right?
// or is this the point of typescript?
export default function drawSprites(
  context: CanvasRenderingContext2D,
  colors: { [index: string]: string[] }
) {
  context.fillStyle = colors.background[2]
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)

  entityCoordinates.forEach(([ name, x, y ]) => {
    drawEntity(name, context, colors, x, y)
  })
}
