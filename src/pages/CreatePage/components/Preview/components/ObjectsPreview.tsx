import Sprite from '../../../../../components/Sprite'
import Tab    from '../../../../../components/Tab'

import styles from './objectsPreview.module.css'

// still need to account for timebar triangle!!!



const coordinates: [ string, number, number ][] = [
  [ 'exitOpen',                    1, 1 ],
  [ 'exit',                        3, 1 ],
  [ 'exitChallenge',               5, 1 ],
  [ 'exitSwitch',                  7, 1 ],
  [ 'exitSwitchCollected',         8, 1 ],
  [ 'normalDoor',                 10, 1 ],
  [ 'lockedDoor',                 11, 1 ],
  [ 'lockedDoorSwitch',           12, 1 ],
  [ 'lockedDoorSwitchCollected',  13, 1 ],
  [ 'trapDoor',                   14, 1 ],
  [ 'trapDoorSwitch',             15, 1 ],
  [ 'trapDoorSwitchCollected',    16, 1 ],
  [ 'gold',                       17, 1 ],

  [ 'shoveThwump',                 1, 3 ],
  [ 'thwump',                      3, 3 ],
  [ 'bounceBlock',                 5, 3 ],
  [ 'oneway',                      7, 3 ],
  [ 'launchpad',                   9, 3 ],
  [ 'booster',                    11, 3 ],
  [ 'boosterActive',              12, 3 ],
  [ 'evilNinja',                  14, 3 ],
  [ 'evilNinjaNinja',             15, 3 ],

  [ 'zapDroneZapping',           1.5, 5 ],
  [ 'miniDrone',                   4, 5 ],
  [ 'chaseDrone',                  5, 5 ],
  [ 'chaingunDrone',               7, 5 ],
  [ 'deathball',                   9, 5 ],
  [ 'mini',                       11, 5 ],
  [ 'miniActive',                 12, 5 ],
  [ 'mine',                       14, 5 ],
  [ 'toggleMine',                 15, 5 ],
  [ 'toggleMineToggling',         16, 5 ],

  [ 'floorguardZapping',           2, 7 ],
  [ 'laserDrone',                  5, 7 ],
  [ 'laserDroneAiming',            6, 8.5 ],
  [ 'laserDroneFiring',            7, 8.5 ],
  [ 'laserTurretFiring',           9, 8.5 ],
  [ 'gaussTurretAiming',          11, 8.5 ],
  [ 'gaussTurretFiring',          12, 8.5 ],
  [ 'gaussTurret',                13, 7 ],
  [ 'rocketTurret',               15, 7 ],
  [ 'rocket',                     19, 7 ],

  [ 'ninja',                       1, 10 ],
  [ 'ninjaA',                      2, 10 ],
  [ 'ninjaB',                      3, 10 ],
  [ 'ninjaC',                      4, 10 ],
  [ 'headband',                    1, 10 ],
  [ 'headbandX',                   2, 10 ],
  [ 'headbandY',                   3, 10 ],
  [ 'headbandZ',                   4, 10 ],

  [ 'blood',                    14.5, 10 ],
  [ 'bloodGolden',              17.5, 10 ],
  [ 'groundDust',               19.5, 10 ],
  [ 'explosionRocket',            23, 10 ],

  [ 'explosion',                  22, 2.5 ],
]

interface Props {
  setSectionIdx: (i: number) => void;
  setItemIdx: (i: number) => void;
  colors: { [index: string]: string[] };
}

export default function ObjectsPreview({
  colors,
  setSectionIdx,
  setItemIdx
}: Props) {
  const cssVars = {
    '--tiles':                colors.background[0],
    '--outline':              colors.background[1],
    '--background':           colors.background[2],
    '--timebar-text':         colors.timeBar[4],
    '--timebar-remaining':    colors.timeBar[0],
    '--timebar-hardcore':     colors.timeBar[1],
    '--timebar-empty':        colors.timeBar[2],
    '--level-name':           colors.menu[28],
    '--challenges':           colors.menu[4],
    '--challenge-complete':   colors.menu[10],
  }

  return <div className={styles.objectsPreview} style={cssVars as React.CSSProperties}>
    <div className={styles.timeBars}>
      <Tab type='timebar' className={styles.timeBarA} text='52.617++10.00' />
      <Tab type='timebar' className={styles.timeBarB} />
      <Tab type='timebar' className={styles.timeBarC} />
    </div>
    <div className={styles.objects}>
      {
        coordinates.map(([ objectName, x, y ]) => {
          const style = {
            position: 'absolute',
            left: 44 * x,
            top: 44 * y
          }
          return <Sprite
            key={objectName}
            objectName={objectName}
            colors={colors}
            style={style}
          />
        })
      }
    </div>
    <div className={styles.lowerText}>
      <span className={styles.levelID}>Solo Level A-01-03</span>
      <span className={styles.challenges}>[!!] G++???    <span className={styles.brackets}>[???]</span> G--T--C++</span>
      <span className={styles.title}>level name ^_^</span>
    </div>
  </div>
}
