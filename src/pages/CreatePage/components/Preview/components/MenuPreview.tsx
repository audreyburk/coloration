import styles from './menuPreview.module.css'


interface Props {
  colors: { [index: string]: string[] };
}

// Left menu + Help + Stats

export default function MenuPreview({
  colors,
}: Props) {
  const cssVars = {
    '--background':           colors.background[2],
    '--tiles':                colors.background[0],
    '--outline':              colors.background[1],
    '--menu':                 colors.menu[4],
    '--selected':             colors.menu[10],
    '--help-header':          colors.menu[40],
    '--help':                 colors.menu[41],
    '--profile':              colors.menu[14],
    '--profile-highlights':   colors.menu[15],
  }

  return <div className={styles.menus} style={cssVars as React.CSSProperties}>
    <div className={styles.left}>
      <div className={styles.background} />
      <div className={styles.block} />
      <div className={styles.leftA}>
        <span>Play</span>
        <span>Create</span>
        <span className={styles.leftSelected}>Browse</span>
        <span>Profile</span>
        <span>Help</span>
        <span>Credits</span>
        <span>Quit</span>
      </div>
      <div className={styles.leftB}>
        <span>Solo</span>
        <span className={styles.leftSelected}>Co-op</span>
        <span>Race</span>
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.stats}>
        <div className={styles.statsRow}>
          <span>Total Time</span>
          <span>60 23:37:21</span>
        </div>
        <div className={styles.statsRow}>
          <span>In Game</span>
          <span>31 19:44:40</span>
          <span>(52%)</span>
        </div>
        <div className={styles.statsRow}>
          <span>In Editor</span>
          <span>15 08:32:57</span>
          <span>(25%)</span>
        </div>
        <div className={styles.statsRow}>
          <span>In Menus</span>
          <span>13 19:21:48</span>
          <span>(23%)</span>
        </div>
      </div>
      <div className={styles.help}>
        <div>PLAYER-CONTROLLED ROCKETS</div>
        <div>• When you touch the exit, a rocket will appear</div>
        <div>• Steer the rocket with your controller</div>
        <div>• Rockets are just as hard to control as ninjas</div>
      </div>
    </div>
  </div>
}
