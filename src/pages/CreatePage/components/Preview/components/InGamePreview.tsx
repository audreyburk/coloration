// import episodeGridData from '../../../data/episodeGridData'
// import leaderboardData from '../../../data/leaderboardData'
import PreviewLink from './PreviewLink';
import Tab from './Tab'

import styles from './inGamePreview.module.css'

interface Props {
  colors: { [index: string]: string[] };
}

// we need the Currently Playing Track color, maybe just drop it in Social tab?
// also: Text after level / episode completion ("Your Global Rank", level times, etc.).

export default function InGamePreview({
  colors,
}: Props) {
  const cssVars = {
    '--background':           colors.background[2],
    '--tiles':                colors.background[0],
    '--outline':              colors.background[1],
    '--social-background':    colors.menu[3],
    '--social-text':          colors.menu[17],
    '--social-highlight':     colors.menu[29],
    '--soundtrack':           colors.menu[34],
    '--pause-text':           colors.menu[18],
    '--pause-highlight':      colors.menu[19],
    '--pause-background':     colors.menu[20],
    '--pause-outline':        colors.menu[21],
    '--timebar-1-main':       colors.timeBarRace[5],
    '--timebar-1-bonus':      colors.timeBarRace[6],
    '--timebar-1-text':       colors.timeBarRace[7],
    '--timebar-2-main':       colors.timeBarRace[8],
    '--timebar-2-bonus':      colors.timeBarRace[9],
    '--timebar-2-text':       colors.timeBarRace[10],
    '--timebar-3-main':       colors.timeBarRace[11],
    '--timebar-3-bonus':      colors.timeBarRace[12],
    '--timebar-3-text':       colors.timeBarRace[13],
    '--timebar-4-main':       colors.timeBarRace[14],
    '--timebar-4-bonus':      colors.timeBarRace[15],
    '--timebar-4-text':       colors.timeBarRace[16],
    '--level-name':           colors.menu[28],
    '--challenges':           colors.menu[4],
    '--challenge-complete':   colors.menu[10],
    '--oops':                 colors.menu[35],
    '--post-completion':      colors.menu[38],
  }

  return <div className={styles.inGamePreview} style={cssVars as React.CSSProperties}>
    <div className={styles.timeBars}>
      <PreviewLink className={styles.timeBar1} menu='Race Time Bar: P1'>
        <Tab type='racebar' className={styles.timeBar1A} />
        <Tab type='racebar' className={styles.timeBar1B} interior={true} />
        <Tab type='racebar' className={styles.timeBar1C} interior={true} />
        <span>132.317 ++48.917</span>
      </PreviewLink>
      <PreviewLink className={styles.timeBar2} menu='Race Time Bar: P2'>
        <Tab type='racebar' className={styles.timeBar2A} />
        <Tab type='racebar' className={styles.timeBar2B} interior={true} />
        <Tab type='racebar' className={styles.timeBar2C} interior={true} />
        <span>132.317 ++48.917</span>
      </PreviewLink>
      <PreviewLink className={styles.timeBar3} menu='Race Time Bar: P3'>
        <Tab type='racebar' className={styles.timeBar3A} />
        <Tab type='racebar' className={styles.timeBar3B} interior={true} />
        <Tab type='racebar' className={styles.timeBar3C} interior={true} />
        <span>132.317 ++48.917</span>
      </PreviewLink>
      <PreviewLink className={styles.timeBar4} menu='Race Time Bar: P4'>
        <Tab type='racebar' className={styles.timeBar4A} />
        <Tab type='racebar' className={styles.timeBar4B} interior={true} />
        <Tab type='racebar' className={styles.timeBar4C} interior={true} />
        <span>132.317 ++48.917</span>
      </PreviewLink>
    </div>
    <div className={styles.background} />
    <PreviewLink className={styles.completed} menu='In Game Messages'>Your Global Rank: 12</PreviewLink>
    <PreviewLink className={styles.oops} menu='In Game Messages'>Oops.</PreviewLink>
    <PreviewLink className={styles.pauseContainer} menu='Pause Menu'>
      <div className={styles.pauseOuter}>
        <div className={styles.pauseOutline}>
          <div className={styles.pause}>
            <div className={styles.pausePaused}>Paused</div>
            <div className={styles.pauseResume}>Resume</div>
            <div className={styles.pauseRetry}>Retry</div>
            <div>Quit</div>
          </div>
        </div>
      </div>
    </PreviewLink>
    <PreviewLink className={styles.lshiftContainer} menu='Shift Menus'>
      <div className={styles.lshift}>LSHIFT</div>
    </PreviewLink>
    <PreviewLink className={styles.text} menu='In Game Lower Text'>
      <span className={styles.name}>Solo Level C-13-04          </span>
      <span className={styles.challenges}>
        <span className={styles.challengeComplete}>[!]</span> G--     [??] G++???
      </span>
    </PreviewLink>
    <PreviewLink className={styles.socialContainer} menu='Shift Menus'>
      <div className={styles.social}>
        <div className={styles.socialSocial}>
          <span>Social</span>
        </div>
        <div className={styles.socialFavourite}>
          Favourite++: <span>velvet curl</span>
        </div>
        <div className={styles.socialFollow}>
          Follow: <span>Audrey Burk</span>
        </div>
        <div className={styles.socialTrack}>
          Track: <span>velvet curl</span>
        </div>
        <div className={styles.socialSoundtrack}>
          Soundtrack: <span className={styles.soundtrack}>Function - Isotope</span>
        </div>
      </div>
    </PreviewLink>
  </div>
}
