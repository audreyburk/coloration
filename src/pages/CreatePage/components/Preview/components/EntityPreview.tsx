import { useRef, useEffect } from 'react'

import { entityCoordinates }  from '../../../data/entityCoordinates'
import sectionData            from '../../../data/sectionData'
import drawSprites            from '../../../utils/drawSprites'
import Tab                    from './Tab'

import styles from './entityPreview.module.css'

// still need to account for timebar triangle!!!

// we could easily make everything without canvas
// if we dont mind recoloring images on the fly
// dunno how intense that is compared to canvas rendering

interface Props {
  colors: { [index: string]: string[] };
}

export default function EntityPreview({
  colors,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const screenRef = useRef<HTMLDivElement | null>(null)
  const hoveredEntityRef = useRef<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (canvas && context) {
      // this needs to get called onResize, not when colors change
      context.canvas.width = canvas.offsetWidth
      context.canvas.height = canvas.offsetHeight
      drawSprites(context, colors)
    }
  }, [colors])

  // i am VERY curious to see if our use of useRef() here increases performance
  // install react dev tools, compare rerenders, check speed... somehow?
  function handleCanvasHover(e: any) {
    const rect   = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const hovered = entityCoordinates.filter(([ _name, x, y, width, height ]) => {
      return (
        mouseX >= x &&
        mouseX <= x + width &&
        mouseY >= y &&
        mouseY <= y + height
      )
    })

    if (screenRef && screenRef.current) {
      if (hovered[0]) {
        const [ name, x, y, width, height ] = hovered[0]
        hoveredEntityRef.current = name
        screenRef.current.style.display = 'block'
        // add "padding" of 8
        // add 36 to account for the difference between the canvas and the (relatively positioned) parent element
        screenRef.current.style.left    = (x - 8 + 36).toString() + 'px'
        screenRef.current.style.top     = (y - 8 + 36).toString() + 'px'
        screenRef.current.style.width   = (width + 16).toString() + 'px'
        screenRef.current.style.height  = (height + 16).toString() + 'px'
      } else {
        if (hoveredEntityRef.current) {
          hoveredEntityRef.current = null
          screenRef.current.style.display = 'none'
        }
      }
    }
  }

  // when an entity on the canvas is clicked
  // iterate through sectionData to find the indices that point to it
  function handleCanvasScreenClick() {
    // need to let this handle non-sprite clicks like timerbar, and non-canvas clicks like title
    // no we don't! use this on the canvas, nothing else should be on the canvas
    if (screenRef && screenRef.current && hoveredEntityRef.current) {
      for (let i = 0; i < sectionData.length; i++) {
        const { items } = sectionData[i]
        for (let n = 0; n < items.length; n++) {
          if (items[n].fileName == hoveredEntityRef.current) {
            setSectionIdx(i)
            setItemIdx(n)
            return
          }
        }
      }
    }
  }

  function killScreen() {
    hoveredEntityRef.current = null
    screenRef.current!.style.display = 'none'
  }

  const cssVars = {
    '--tiles':                colors.background[0],
    '--outline':              colors.background[1],
    '--timebar-text':         colors.timeBar[4],
    '--timebar-remaining':    colors.timeBar[0],
    '--timebar-hardcore':     colors.timeBar[1],
    '--timebar-empty':        colors.timeBar[2],
    '--level-name':           colors.menu[28],
    '--challenges':           colors.menu[4],
    '--challenge-complete':   colors.menu[10],
  }

  return <div className={styles.entityPreview} style={cssVars as React.CSSProperties}>
    <div className={styles.timeBars}>
      <Tab type='timebar' className={styles.timeBarA} text='52.617++10.00' />
      <Tab type='timebar' className={styles.timeBarB} />
      <Tab type='timebar' className={styles.timeBarC} />
    </div>
    <canvas
      ref={canvasRef}
      className={styles.previewCanvas}
      onMouseMove={handleCanvasHover}
    />
    <div
      ref={screenRef}
      className={styles.canvasScreen}
      style={{ backgroundColor: colors.background[1] + '30' }} // adding transparency
      onClick={handleCanvasScreenClick}
      onMouseLeave={killScreen}
    />
    <div className={styles.lowerText}>
      <span className={styles.levelID}>Solo Level A-01-03</span>
      <span className={styles.challenges}>[!!] G++???    <span className={styles.brackets}>[???]</span> G--T--C++</span>
      <span className={styles.title}>level name ^_^</span>
    </div>
  </div>
}
