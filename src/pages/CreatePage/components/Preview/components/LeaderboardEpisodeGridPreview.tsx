import episodeGridData from '../../../data/episodeGridData'
import leaderboardData from '../../../data/leaderboardData'

import Level        from './Level'
import PreviewLink  from './PreviewLink'
import Tab          from './Tab'

import styles from './leaderboardEpisodeGridPreview.module.css'

// TODO: Menu tabs and leaderboard tabs in same menu?


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
    '--ready-one':                            colors.timeBarRace[1],
    '--ready-one-ready':                      colors.headbands[0],
    '--ready-two':                            colors.timeBarRace[2],
    '--ready-three':                          colors.timeBarRace[3],
    '--ready-four':                           colors.timeBarRace[4],
    '--not-ready':                            colors.timeBarRace[0],
  }

  return <PreviewLink className={styles.episodesPreview} style={cssVars as React.CSSProperties} menu='Menu Background'>
    <PreviewLink className={styles.readiness} menu='Ready Players'>
      <div className={styles.readyPlayer}>
        <div>Player 1</div>
        <div className={styles.readyPlayerOne}>Ready</div>
      </div>
      <div className={styles.readyPlayer}>
        <div>Player 2</div>
        <div>Ready</div>
      </div>
      <div className={styles.readyPlayer}>
        <div>Player 3</div>
        <div>Ready</div>
      </div>
      <div className={styles.readyPlayer}>
        <div>Player 4</div>
        <div>Ready</div>
      </div>
      <div className={styles.readyPlayer}>
        <div>Player 5</div>
        <div className={styles.readyPlayerPress}>Press</div>
      </div>
    </PreviewLink>
    <div className={styles.grid}>
      <PreviewLink className={styles.gridTabs} menu='Tabs'>
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
      <PreviewLink className={styles.scoreboardTabs} menu='Tabs'>
        <Tab text='Global Highscores' className={styles.tabGlobalScores} />
        <Tab text='Mine' className={styles.tabMyScores} />
        <Tab text='Speedrun' className={styles.tabSpeedrun} />
      </PreviewLink>
    </PreviewLink>
  </PreviewLink>
}
