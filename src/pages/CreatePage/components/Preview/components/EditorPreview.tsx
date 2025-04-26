// import episodeGridData from '../../../data/episodeGridData'
// import leaderboardData from '../../../data/leaderboardData'
// import Tab from '../../../../../components/Tab'

import { useEffect, useRef } from 'react'

import { drawEntity, renderSprite } from '../../../utils/drawSprites'

import PreviewLink from './PreviewLink'

import arrow from './arrow.png?inline'
import editorOutline from './editorOutline.png?inline'

import styles from './editorPreview.module.css'


const arrowImg = new Image()
arrowImg.src = arrow

const editorOutlineImg = new Image()
editorOutlineImg.src = editorOutline

// TODO: we should probably add the help panels and alt tile palette as well
// maybe even the editor browse menu

interface Props {
  colors: { [index: string]: string[] };
}

export default function InGamePreview({ colors }: Props) {
  // TODO: replace with Sprites
  const goldmineARef =  useRef<HTMLCanvasElement | null>(null)
  const goldmineBRef =  useRef<HTMLCanvasElement | null>(null)
  const exitRef =       useRef<HTMLCanvasElement | null>(null)
  const switchRef =     useRef<HTMLCanvasElement | null>(null)
  const entitiesRef =   useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    let context = goldmineARef.current?.getContext('2d')
    if (context) {
      drawEntity('entityGold', context, colors)
      drawEntity('entityMine', context, colors, 44)
    }

    context = exitRef.current?.getContext('2d')
    if (context) {
      drawEntity('entityDoorExit', context, colors)
    }

    context = switchRef.current?.getContext('2d')
    if (context) {
      drawEntity('entityDoorExitSwitch', context, colors)
    }

    context = goldmineBRef.current?.getContext('2d')
    if (context) {
      drawEntity('entityGold', context, colors, 0, 0)
      drawEntity('entityMine', context, colors, 44, 0, [0, 1])
      const editorOutlineCanvas = renderSprite(editorOutlineImg, colors.editor[7])
      if (editorOutlineCanvas) {
        context.drawImage(editorOutlineCanvas, 0, 0)
      }
    }

    context = entitiesRef.current?.getContext('2d')
    if (context) {
      const x = 50
      const a = 0, b = x, c = x * 2, d = x * 3, e = x * 4
      // drawEntity('entityDoorExit', context, colors)
      drawEntity('entityBat',             context, colors, a, a)
      drawEntity('entityOneWayPlatform',  context, colors, b, a)
      // copy the other door we used and paste it here LOL
      drawEntity('entityBoostPad',        context, colors, d, a, [0])
      drawEntity('entityDroneChaingun',   context, colors, e, a)
      drawEntity('entityDoorRegular',     context, colors, a, b)
      drawEntity('entityDoorLocked',      context, colors, b, b, [0, 1])
      drawEntity('entityDoorLocked',      context, colors, b - 44, b, [2, 4, 7])
      drawEntity('entityDoorTrap',        context, colors, c, b, [0, 1])
      drawEntity('entityDoorTrap',        context, colors, c - 44, b, [4, 6])
      drawEntity('entityLaunchPad',       context, colors, d, b)
      drawEntity('entityDroneLaser',      context, colors, e, b)
      drawEntity('entityMine',            context, colors, a, c, [0, 1])
      drawEntity('entityMine',            context, colors, b - 44, c, [2])
      drawEntity('entityDroneChaser',     context, colors, c, c)
      drawEntity('entityGold',            context, colors, d, c)
      drawEntity('entityDroneZap',        context, colors, e, c)
      drawEntity('entityTurret',          context, colors, a, d)
      drawEntity('entityFloorGuard',      context, colors, b, d)
      drawEntity('entityBounceBlock',     context, colors, c, d)
      drawEntity('entityRocket',          context, colors, d, d)
      drawEntity('entityDroneChaser',     context, colors, e, d)
      drawEntity('entityDualLaser',       context, colors, a + 12, e, [0])
      drawEntity('entityThwomp',          context, colors, b, e)
      drawEntity('entityShoveThwomp',     context, colors, c, e)
      drawEntity('entityEvilNinja',       context, colors, d, e)
      const arrowCanvas = renderSprite(arrowImg, colors.editor[4])
      if (arrowCanvas) {
        context.drawImage(arrowCanvas, c + 40, c + 20)
      }
      const doorCanvas = exitRef.current
      if (doorCanvas) {
        context.drawImage(doorCanvas, c, a)
      }
    }
  }, [colors])

  const cssVars = {
    '--background':           colors.background[2],
    '--tiles':                colors.background[0],
    '--outline':              colors.background[1],
    '--wide-grid':            colors.editor[0],
    '--fine-grid':            colors.editor[2],
    '--selector':             colors.editor[3],
    '--selection':            colors.editor[8],
    '--line':                 colors.editor[5],
    '--circle':               colors.editor[6],
    '--keys':                 colors.entityEyeBat[1],
    '--level-name':           colors.menu[5],
    '--bottom-info':          colors.menu[24],
  }

  const keys = [
    [ 'N4', '[', ']', 'N3', 'L' ],
    [ 'I', 'O', 'P', '=', 'K' ],
    [ 'M', 'N0', '', '0', 'H' ],
    [ 'Y', 'N', '-', 'U', 'J' ],
    [ 'N2', ',', 'N7', 'N1', 'N5' ]
  ]

  return <div className={styles.editorPreview} style={cssVars as React.CSSProperties}>
    <PreviewLink className={styles.background} menu='Editor Grid'>
      <div className={styles.gridFine} />
      <div className={styles.gridWide} />
      <div className={styles.blockA} />
      <div className={styles.blockB} />
      <canvas
        className={styles.goldmineA}
        ref={goldmineARef}
        width={88}
        height={44}
      />
      <canvas
        className={styles.goldmineB}
        ref={goldmineBRef}
        width={88}
        height={44}
      />
      <canvas
        className={styles.exit}
        ref={exitRef}
        width={47}
        height={44}
      />
      <canvas
        className={styles.switch}
        ref={switchRef}
        width={44}
        height={44}
      />
      <PreviewLink className={styles.entities} menu='Editor Palette'>
        <div className={styles.entitiesBackground} />
        <canvas
          className={styles.entityCanvas}
          ref={entitiesRef}
          width={250}
          height={250}
        />
        <div className={styles.circle} />
        <div className={styles.keys}>
          {
            keys.map(row => <div key={row[0]}>
              { row.map(key => <span key={key}>{ key }</span>) }
            </div>)
          }
        </div>
      </PreviewLink>
      <div className={styles.lineBox}>
        <div className={styles.line} />
      </div>
      <div className={styles.selection} />
      <PreviewLink className={styles.selector} menu='Editor Selection' />
      <PreviewLink className={styles.cursor} menu='Editor Selection'>
        <div className={styles.cursorA} />
        <div className={styles.cursorB} />
        <div className={styles.cursorC} />
        <div className={styles.cursorD} />
      </PreviewLink>
    </PreviewLink>
    <PreviewLink className={styles.text} menu='Editor Lower Text'>
      <span className={styles.editMode}>Edit Mode Modify Region</span>
      <span className={styles.levelName}>[Unset Game Mode] Untitled-132</span>
    </PreviewLink>
  </div>
}
