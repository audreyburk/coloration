import episodeGridData from '../../../data/episodeGridData'
import leaderboardData from '../../../data/leaderboardData'
import Tab from '../../../../../components/Tab'

import styles from './leaderboardEpisodeGridPreview.module.css'

// we still need to add the bottom text!!!!!

// TODO: add the little brackets on the levels at the bottom

interface Props {
  setSectionIdx: (i: number) => void;
  setItemIdx: (i: number) => void;
  colors: { [index: string]: string[] };
}

export default function LeaderboardEpisodesGridPreview({
  colors,
  // setSectionIdx,
  // setItemIdx
}: Props) {
  const cssVars = {
    '--grid-tab-background':                  colors.menu[8],
    '--grid-tab-text':                        colors.menu[31],
    '--grid-tab-background-selected':         colors.menu[12],
    '--grid-tab-text-selected':               colors.menu[33],
    '--episode-border':                       colors.menu[9],
    '--episode-background':                   colors.menu[7],
    '--episode-background-uncompleted':       colors.menu[5],
    '--episode-text':                         colors.menu[30],
    '--episode-text-uncompleted':             colors.menu[23],
    '--brackets':                             colors.entityDoorExit[6],
    '--selection':                            colors.menu[22],
    '--background':                           colors.background[2],
    '--tiles':                                colors.background[0],
    '--outline':                              colors.background[1],
    '--episode-information':                  colors.menu[35],
    '--leaderboard-background':               colors.menu[1],
    '--leaderboard-ranks':                    colors.menu[16],
    '--leaderboard-scores':                   colors.menu[2],
    '--leaderboard-names':                    colors.menu[13],
    '--leaderboard-selection':                colors.menu[32],
    '--leaderboard-tab-background':           colors.menu[25],
    '--leaderboard-tab-background-selected':  colors.menu[26],
    '--leaderboard-tab-text':                 colors.menu[27],
  }

  return <div className={styles.leaderboard} style={cssVars as React.CSSProperties}>
    <div className={styles.grid}>
      <div className={styles.gridTabs}>
        <Tab text='Intro' />
        <Tab text='N++' className={styles.gridTabSelected} />
        <Tab text='Legacy' />
      </div>
      <div className={styles.episodeGrid}>
        {
          episodeGridData.map((row, i) => {
            return <div className={styles.episodeRow} key={i}>
              {
                row.map(({ name, brackets, status }) => {
                  return <div className={styles.episode + ' ' + styles['episode' + status]} key={name}>
                    <span className={styles.episodeBrackets}>{brackets}</span>
                    <span className={styles.episodeName}>{name}</span>
                  </div>
                })
              }
            </div>
          })
        }
      </div>
      <div className={styles.episodeDetail}>
        <span className={styles.episodeTitle}>Episode B-05</span>
        <div className={styles.levelA} />
        <div className={styles.levelB} />
        <span className={styles.episodeInfo}>Success: 1/24    {'>'}    Gold Collected: 50/50</span>
      </div>
    </div>
    <div className={styles.scoreboard}>
      <div className={styles.scores}>
        {
          leaderboardData.map((row, i) => {
            const { time, name, cn } = row
            const className = cn ? styles[cn] : undefined
            return <div key={i} className={className}>
              <span>{ i.toString().padStart(2, '0') }:</span>
              <span>{ time }</span>
              <span>{ name }</span>
            </div>
          })
        }
      </div>
      <div className={styles.scoreboardTabs}>
        <Tab text='Global Highscores' className={styles.tabGlobalScores} />
        <Tab text='Mine' className={styles.tabMyScores} />
        <Tab text='Speedrun' className={styles.tabSpeedrun} />
      </div>
    </div>
  </div>
}
