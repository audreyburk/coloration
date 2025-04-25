import episodeGridData from '../../../data/episodeGridData'
import leaderboardData from '../../../data/leaderboardData'

import Level        from './Level'
import PreviewLink  from './PreviewLink'
import Tab          from './Tab'

import styles from './leaderboardEpisodeGridPreview.module.css'

// TODO: we still need to add the bottom text!!!!!
// TODO: add the little brackets on the levels at the bottom
// TODO: move the big header from Levels to here & add the Player 2 Ready stuff

interface Props {
  colors: { [index: string]: string[] };
}

export default function LeaderboardEpisodesGridPreview({
  colors,
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
    '--deathless':                            colors.menu[10],
    '--deathless-time':                       colors.menu[4],
    '--leaderboard-background':               colors.menu[1],
    '--leaderboard-ranks':                    colors.menu[16],
    '--leaderboard-scores':                   colors.menu[2],
    '--leaderboard-names':                    colors.menu[13],
    '--leaderboard-selection':                colors.menu[32],
    '--leaderboard-tab-background':           colors.menu[25],
    '--leaderboard-tab-background-selected':  colors.menu[26],
    '--leaderboard-tab-text':                 colors.menu[27],
  }

  return <PreviewLink className={styles.leaderboard} style={cssVars as React.CSSProperties} menu='Menu Background'>
    <div className={styles.grid}>
      <PreviewLink className={styles.gridTabs} menu='Main Tabs'>
        <Tab text='Intro' />
        <Tab text='N++' className={styles.gridTabSelected} />
        <Tab text='Legacy' />
      </PreviewLink>
      <PreviewLink className={styles.episodeGrid} menu='Episode Grid'>
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
      </PreviewLink>
      <PreviewLink className={styles.episodeDetail} menu='Episode Details'>
        <span className={styles.episodeTitle}>Episode B-05</span>
        <Level className={styles.level}>
          <span className={styles.levelBrackets}>[]</span>
        </Level>
        <Level className={styles.level}>
          <span className={styles.levelBrackets}>[!?]</span>
        </Level>
        <span className={styles.deathless}>N++ <span className={styles.deathlessTime}>91.583</span></span>
        <span className={styles.episodeInfo}>Gold Collected: 50/50</span>
      </PreviewLink>
    </div>
    <PreviewLink className={styles.scoreboard} menu='Leaderboard'>
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
      <PreviewLink className={styles.scoreboardTabs} menu='Leaderboard Tabs'>
        <Tab text='Global Highscores' className={styles.tabGlobalScores} />
        <Tab text='Mine' className={styles.tabMyScores} />
        <Tab text='Speedrun' className={styles.tabSpeedrun} />
      </PreviewLink>
    </PreviewLink>
  </PreviewLink>
}
