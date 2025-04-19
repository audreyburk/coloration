
import Tab from '../../../../../components/Tab'
import Level from '../../../../../components/Level'

import styles from './levelsPreview.module.css'


// we need to add ++s like favorited levels, maybe XX like tracked too
// and the hovered level needs to say Play instead of the title
const levels = [
  [
    [ 'tilt', '[!?]', true ],
    [ 'flateau', '[!?]' ],
    [ 'cute lesbeans add me on discord', '[!]' ],
    [ 'go fish', '[]' ],
    [ 'too much is almost enough', '' ]
  ],
  [
    [ 'Ship of Theseus', '[!?]' ],
    [ '', '[?]' ],
    [ 'tutorial midboss', '[!?]' ],
    [ 'boob', '[!?]' ],
    [ 'both flavors of ramp jumping (and the control thereof)', '' ]
  ],
  [
    [ 'Solsbury Hill', '[!?]' ],
    [ 'Switch Valley', '[!?]' ],
    [ 'Cheshire', '' ],
    [ 'endless gunner', '[]', true ],
    [ 'end sinister', '[!]' ]
  ],
]

interface Props {
  setSectionIdx: (i: number) => void;
  setItemIdx: (i: number) => void;
  colors: { [index: string]: string[] };
}

export default function LevelsPreview({
  colors,
  // setSectionIdx,
  // setItemIdx
}: Props) {
  const cssVars = {
    '--background':                     colors.background[2],
    '--tiles':                          colors.background[0],
    '--outline':                        colors.background[1],
    '--tab-background':                 colors.menu[8],
    '--tab-background-selected':        colors.menu[12],
    '--tab-text':                       colors.menu[31],
    '--tab-text-selected':              colors.menu[33],
    '--subtab-text':                    colors.menu[37],
    '--selector':                       colors.menu[22], // and arrows and underline
    '--challenge':                      colors.timeBarRace[0],
    '--challenge-complete':             colors.timeBarRace[1],
    '--brackets':                       colors.entityDoorExit[7],
    '--bottom-text':                    colors.menu[24],
    '--level-info':                     colors.menu[35],
  }

  return <div className={styles.levels} style={cssVars as React.CSSProperties}>
    <div className={styles.header}>
      N++{'>'}Solo{'>'}Levels
    </div>
    <div className={styles.tabs}>
      <Tab text='Intro' />
      <Tab text='N++' />
      <Tab text='Hard' />
      <Tab text='Made By Me' />
      <Tab text='Legacy' />
    </div>
    <div className={styles.subTabs}>
      <Tab text='++s' />
      <Tab text='By Date' />
    </div>
    <div className={styles.body}>
      <div className={styles.arrowA} />
      <div className={styles.arrowB} />
      <div className={styles.bar} />
      <div className={styles.grid}>
        {
          levels.map((row, i) => {
            return <div key={i} className={styles.row}>
              {
                row.map((level, n) => {
                  const [ title, brackets, fav ] = level
                  return <div key={n} className={styles.level}>
                    <Level type='small' />
                    { fav && <span className={styles.fav}>++</span>}
                    <span className={styles.brackets}>{ brackets }</span>
                    <span className={styles.title}>{ title }</span>
                  </div>
                })
              }
            </div>
          })
        }
        <div className={styles.cursor}>
          Play
          <div className={styles.cursorA}></div>
          <div className={styles.cursorB}></div>
          <div className={styles.cursorC}></div>
          <div className={styles.cursorD}></div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.credit}>
          <span>speckled les bean</span>
          <span>by: NewGirl+</span>
        </div>
        <div className={styles.stats}>
          <span>S-C-03-01</span>
          <span>Success: 99/1334  {'>'}  Gold Collected: 08/08</span>
        </div>
        <div className={styles.challenges}>
          [!!] G++???   <span>[?]</span> G--   <span>[??]</span> T--C--
        </div>
      </div>
      <div className={styles.bottomText}>
        <span className={styles.prev}>Prev Tab</span>
        <span className={styles.next}>Next Tab</span>
        <span className={styles.back}>Back</span>
        <span className={styles.view}>View Replays</span>
        <span className={styles.search}>Search</span>
      </div>
    </div>
  </div>
}
