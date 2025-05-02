// import { ColorResult } from 'react-color'
import { useThrottledCallback } from 'use-debounce'
import { useState, useRef, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import Color from 'color'

// data files, big consts
import fileData from './data/fileData'
import menus from './data/menus'
import defaultColors from './data/defaultColors'

import { CurrentMenuContext } from './CurrentMenuContext'

import { loadPalette, createPalette } from './utils/script'
import generateMenus from './utils/generateMenus'

import ColorField from './components/ColorField'
import Preview from './components/Preview'

import styles from './createPage.module.css'

const previewKeys = [
  [ 'objects', 'Objects' ],
  [ 'episodes', 'Episode Grid' ],
  [ 'levels', 'Level List' ],
  [ 'ingame', 'In Game' ],
  [ 'editor', 'Editor' ],
  [ 'menus', 'Menus' ],
  [ 'unknown', 'Unknown' ],
]

export default function CreatePage() {
  const [ colors, setColors ] = useState(defaultColors)
  const [ currentMenu, setCurrentMenu ] = useState('Background')
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ currentPreview, setCurrentPreview ] = useState('objects') // objects ingame editor episodes levels menus
  const [ name, setName ] = useState('')
  const [ imageExists, setImageExists ] = useState(false)
  const [ mouseDown, setMouseDown ] = useState(false)
  const [ showCanvasCursor, setShowCanvasCursor ] = useState(false)

  const imageUploadRef = useRef<HTMLInputElement | null>(null)
  const imageCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const canvasCursorRef = useRef<HTMLDivElement | null>(null)
  const canvasInfoRef = useRef({ x: 0, y: 0, scale: 1, minScale: 0, maxScale: 2 })
  const mouseRef = useRef({ startX: 0, startY: 0, x: 0, y: 0 })

  const { fileName, index } = menus[currentMenu][currentIndex]
  const currentColor = colors[fileName][index]

  function setMenu(menu: string) {
    setCurrentIndex(0)
    setCurrentMenu(menu)
  }

  function handleMenuGeneration() {
    const newColors = generateMenus(colors)
    setColors(newColors)
  }

  function handleUpload(e: any) {
    loadPalette(e.target.files)
      .then(setColors)
      .catch((error: Error) => {
        alert(error)
      })
  }

  function handleDownloadClick() {
    console.log(colors)
    createPalette(colors, name || 'palette')
  }

  const handleColorSelect = (color: string) => {
    setColors({
      ...colors,
      [fileName]: [
        ...colors[fileName].slice(0, index),
        color.toUpperCase(),
        ...colors[fileName].slice(index + 1)
      ]
    })
  }

  const handleColorSelectThrottled = useThrottledCallback((color: string) => {
    return handleColorSelect(color)
  }, 50, { leading: true })



  // image stuff below
  //
  //

  // okay, we need to use ref instead of state for anything canvas-related
  // but should img live in state? hmmm
  function drawImage() {
    const img = imageRef.current
    // are we.... not supposed to grab this on every update?
    // in the tutorial, they use the same context and clear it. we might be fucking up big here lol
    // so we, what, store the context as a ref, too? kinda nice, in a way
    const ctx = imageCanvasRef.current?.getContext('2d')
    if (ctx && img ) {
      const { width, height } = img
      const { x, y, scale } = canvasInfoRef.current

      // TODO: originally, drawn images were not getting cleared, even with this clearRect
      // it just... started working
      // confirm that it continues to work, please. we may also want to store a ctxRef instead of getting a new one every time
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.scale(scale, scale)
      ctx.drawImage(img, x, y, width, height)
      ctx.resetTransform()
    }
  }

  function handleImageUpload(e: any) {
    const [file] = e.target.files
    if (file) {
      const url = URL.createObjectURL(file)
      const img = new Image
      img.src = url
      imageRef.current = img
      img.addEventListener('load', () => {
        setImageExists(true)
        if (imageCanvasRef.current) {
          const { width, height } = img
          const maxWidth = imageCanvasRef.current.offsetWidth
          const scale = (width > maxWidth) ? (maxWidth / width) : 1
          canvasInfoRef.current.scale = scale
          canvasInfoRef.current.minScale = scale
          canvasInfoRef.current.x = 0
          canvasInfoRef.current.y = 0
          imageCanvasRef.current.height = height * scale
          imageCanvasRef.current.width = maxWidth
          // imageCanvasRef.current.style.minHeight = '300px'
        }
        drawImage()
      })
    }
  }


  function isDrag(e: any) {
    const { clientX, clientY } = e
    const { startX, startY } = mouseRef.current
    const diffX = Math.abs(clientX - startX)
    const diffY = Math.abs(clientY - startY)
    return (diffX > 5 || diffY > 5)
  }


  // TODO: yeah we gonna wanna throttle this shit(?)
  // or requestAnimationFrame, we need to start using that everywhere (ask amanda!)
  function handleDrag(e: any) {
    if (!mouseDown || !isDrag(e)) {
      return
    }

    const { x: mouseX, y: mouseY } = mouseRef.current
    const { width, height } = imageRef.current!
    const { width: canvasWidth, height: canvasHeight } = imageCanvasRef.current!
    const { clientX, clientY } = e
    const { x, y, scale } = canvasInfoRef.current

    let newX = x - (mouseX - clientX) / scale
    let newY = y - (mouseY - clientY) / scale

    // TODO: this stutters when you drag past boundary. why?
    // only when up or left, which makes some sense
    // Math.ceil on result doesnt help. must be the if condition.
    if (newX > 0) {
      newX = 0
    } else if (x + width < canvasWidth / scale) {
      newX = canvasWidth / scale - width
    }

    if (newY > 0) {
      newY = 0
    } else if (y + height < canvasHeight / scale) {
      newY = canvasHeight / scale - height
    }

    canvasInfoRef.current.x = newX
    canvasInfoRef.current.y = newY

    mouseRef.current = {
      ...mouseRef.current,
      x: clientX,
      y: clientY
    }

    drawImage()
  }

  const handleMouseUp = (e: any) => {
    setMouseDown(false)
    const dragging = isDrag(e)
    mouseRef.current = {
      x: 0,
      y: 0,
      startX: 0,
      startY: 0
    }

    if (dragging) {
      return
    }

    const ctx = imageCanvasRef.current?.getContext('2d')
    if (ctx) {
      // this may cause problems; clientX - getBoundingRect().left may be better
      const { offsetX, offsetY } = e
      const data = ctx.getImageData(offsetX, offsetY, 1, 1).data
      const color = Color(data).hex()
      handleColorSelect(color)
    }
  }


  useEffect(() => {
    if (mouseDown) {
      document.addEventListener('mousemove', handleDrag)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleDrag)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [ mouseDown ])


  const handleMouseDown = (e: any) => {
    setMouseDown(true)

    const { clientX, clientY } = e
    mouseRef.current = {
      x: clientX,
      y: clientY,
      startX: clientX,
      startY: clientY
    }
  }


  function handleZoom(e: any) {
    e.preventDefault()

    const { width, height } = imageRef.current!
    const { width: canvasWidth, height: canvasHeight } = imageCanvasRef.current!
    console.log(canvasWidth, canvasHeight)
    const { deltaY, offsetX, offsetY } = e
    const { x, y, scale, minScale, maxScale } = canvasInfoRef.current

    if ((deltaY > 0 && scale <= minScale) || (deltaY < 0 && scale >= maxScale)) {
      return
    }

    let newScale = scale + 0.15 * scale * (deltaY / -100)
    if (newScale > maxScale) {
      newScale = maxScale
    }
    if (newScale < minScale) {
      newScale = minScale
    }

    const percentX = (0 - x + offsetX / scale) / width
    const percentY = (0 - y + offsetY / scale) / height
    let newX = 0 - (percentX * width) + (offsetX / newScale)
    let newY = 0 - (percentY * height) + (offsetY / newScale)

    if (newX > 0) {
      newX = 0
    } else if (x + width < canvasWidth / newScale) {
      newX = canvasWidth / newScale - width
    }

    if (newY > 0) {
      newY = 0
    } else if (y + height < canvasHeight / newScale) {
      newY = canvasHeight / newScale - height
    }

    canvasInfoRef.current.scale = newScale
    canvasInfoRef.current.x = newX
    canvasInfoRef.current.y = newY

    drawImage()
  }


  useEffect(() => {
    // use a manual event listener to get around React's { passive: true }
    imageCanvasRef.current?.addEventListener('wheel', handleZoom)
    return () => {
      imageCanvasRef.current?.removeEventListener('wheel', handleZoom)
    }
  }, [])


  // TODO: we NEED to use requestAnimationFrame for this. it has been said.
  function handleHover(e: any) {
    if (!showCanvasCursor) {
      setShowCanvasCursor(true)
    }
    const ctx = imageCanvasRef.current?.getContext('2d')
    const cursor = canvasCursorRef.current
    if (ctx && cursor) {
      const { offsetX, offsetY } = e.nativeEvent
      const data = ctx.getImageData(offsetX, offsetY, 1, 1).data
      const color = Color(data).hex()
      cursor.style.borderTopColor = color
      cursor.style.borderLeftColor = color
      cursor.style.top = `${offsetY}px`
      cursor.style.left = `${offsetX}px`
    }
  }

  // TODO: also add a "hide" button that tucks canvas but doesnt remove image or zoom/position?
  function clearImage() {
    setImageExists(false)
    if (imageUploadRef.current) {
      imageUploadRef.current.value = ''
    }
    if (imageCanvasRef.current) {
      // TODO: this can't be the best way of clearing the canvas, can it? do we need to clearRect as well?
      // should we just not render canvas when image doesnt exist? feels more React-y but harder
      imageCanvasRef.current.height = 0
    }
  }


  return (
    <main>
      <CurrentMenuContext value={setMenu}>
        {/* TODO: get rid of this lol */}
        <div className={styles.previews} style={{ backgroundColor: colors.menu[0] }}>
          <Preview colors={colors} currentPreview={currentPreview} />
        </div>
      </CurrentMenuContext>
      <div className={styles.previewButtons}>
        {
          previewKeys.map(([ key, title ]) => {
            let cn = styles.previewButton
            if (key == currentPreview) {
              cn = cn + ' ' + styles.previewButtonActive
            }
            return <div key={key} className={cn} onClick={() => setCurrentPreview(key)}>
              { title }
            </div>
          })
        }
      </div>
      <div className={styles.rowOne}>
        <div className={styles.sidebar}>
          <div className={styles.imagePicker}>
            <div className={styles.canvasContainer}>
              <canvas
                className={styles.image}
                ref={imageCanvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleHover}
                onMouseOut={() => setShowCanvasCursor(false)}
                height={0} />
              { showCanvasCursor && <div
                className={styles.canvasCursor}
                ref={canvasCursorRef}
                style={{ borderColor: currentColor }} /> }
            </div>
            <div className={styles.imagePickerButtons}>
              <label
                htmlFor='imgUpload'
                className={styles.imagePickerLabel}>
                Upload an image
              </label>
              <input
                id='imgUpload'
                type="file"
                className={styles.imagePickerInput}
                onChange={handleImageUpload}
                ref={imageUploadRef}
              />
              { imageExists && <span onClick={clearImage}>Clear</span> }
            </div>
          </div>
          <HexColorPicker
            className={styles.picker}
            color={currentColor}
            onChange={handleColorSelectThrottled}
          />
          <div className={styles.importExport}>
            <span>Generates menus from the Objects screen colors. They will be messy; please tidy up.</span>
            <button
              className={styles.generate}
              onClick={handleMenuGeneration}
            >
              Generate Menus
            </button>
            <span>Import palette (35 .tga files):</span>
            <input
              type="file"
              multiple={true}
              className={styles.upload}
              onChange={handleUpload}
            />
            <input
              className={styles.namer}
              placeholder='palette name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button
              className={styles.download}
              onClick={handleDownloadClick}
            >
              Download Palette
            </button>
          </div>
        </div>
        <div className={styles.fields}>
          <div className={styles.fieldsTitle}>{ currentMenu }</div>
          <ul>
            {
              menus[currentMenu].map((field, i) => {
                const { fileName, index, description, space } = field
                const text = description || fileData[fileName][index]
                return <ColorField
                  key={"field_" + fileName + index}
                  hex={colors[fileName][index]}
                  text={text}
                  onChange={handleColorSelectThrottled}
                  onFocus={(e: any) => {
                    e.currentTarget.select()
                    setCurrentIndex(i)
                  }}
                  space={space}
                  active={currentIndex == i}
                  setCurrentPreview={setCurrentPreview}
                />
              })
            }
          </ul>
        </div>
      </div>
    </main>
  )
}
