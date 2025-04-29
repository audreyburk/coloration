import PreviewLink from './PreviewLink'
import Sprite      from './Sprite'

import styles from './editorPreview.module.css'

// TODO: we should probably add the help panels and alt tile palette as well
// maybe even the editor browse menu

// TODO: outlines shouldn't show in the entity palette

  const x = 50
  const a = 0, b = x, c = x * 2, d = x * 3, e = x * 4
  const entities: [ string, number, number ][] = [
    [ 'deathball',        a, a ],
    [ 'oneway',           b, a ],
    [ 'exit',             c, a ],
    [ 'booster',          d, a ],
    [ 'chaingunDrone',    e, a ],
    [ 'normalDoor',       a, b ],
    [ 'lockedDoor',       b, b ],
    [ 'lockedDoorSwitch', b, b ],
    [ 'trapDoor',         c, b ],
    [ 'trapDoorSwitch',   c, b ],
    [ 'launchpad',        d, b ],
    [ 'laserDrone',       e, b ],
    [ 'mine',             a, c ],
    [ 'toggleMine',       b, c ],
    [ 'chaseDrone',       c, c ],
    [ 'gold',             d, c ],
    [ 'zapDrone',         e, c ],
    [ 'gaussTurret',      a, d ],
    [ 'floorguard',       b, d ],
    [ 'bounceBlock',      c, d ],
    [ 'rocketTurret',     d, d ],
    [ 'chaseDrone',       e, d ],
    [ 'laserTurret',      a, e ],
    [ 'thwump',           b, e ],
    [ 'shoveThwump',      c, e ],
    [ 'evilNinja',        d, e ],
    [ 'miniDrone',        e, e ],

    [ 'editorArrow',      131, 126 ],
  ]

  const keys = [
    [ 'N4', '[', ']', 'N3', 'L' ],
    [ 'I', 'O', 'P', '=', 'K' ],
    [ 'M', 'N0', '', '0', 'H' ],
    [ 'Y', 'N', '-', 'U', 'J' ],
    [ 'N2', ',', 'N7', 'N1', 'N5' ]
  ]

interface Props {
  colors: { [index: string]: string[] };
}

export default function InGamePreview({ colors }: Props) {
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

  return <div className={styles.editorPreview} style={cssVars as React.CSSProperties}>
    <PreviewLink className={styles.background} menu='Editor Grid'>
      <div className={styles.gridFine} />
      <div className={styles.gridWide} />
      <div className={styles.blockA} />
      <div className={styles.blockB} />
      <div className={styles.goldmineA}>
        <Sprite objectName='gold' colors={colors} />
        <Sprite objectName='mine' colors={colors} />
      </div>
      <Sprite objectName='exit' colors={colors} className={styles.exit} />
      <Sprite objectName='exitSwitch' colors={colors} className={styles.switch} />
      <div className={styles.goldmineB}>
        <Sprite objectName='editorOutline' colors={colors} className={styles.goldmineOutline} />
        <Sprite objectName='gold' colors={colors} />
        <Sprite objectName='mine' colors={colors} />
      </div>
      <PreviewLink className={styles.entities} menu='Editor Palette'>
        <div className={styles.entitiesBackground} />
        <div className={styles.entityCanvas}>
          {
            entities.map(([ objectName, x, y ], i) => {
              const style: React.CSSProperties = {
                position: 'absolute',
                left: x,
                top: y
              }
              return <Sprite
                key={i}
                objectName={objectName}
                colors={colors}
                style={style}
              />
            })
          }
        </div>
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
