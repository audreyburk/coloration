import PreviewLink  from './PreviewLink'
import styles from './unknownPreview.module.css'
// entityEvilNinja[1] please!

interface Props {
  colors: { [index: string]: string[] };
}

export default function LevelsPreview({ colors }: Props) {
  return <div className={styles.unknownPreview}>
    <PreviewLink className={styles.unknown} menu='Unknown (Background)'>
      <div className={styles.idk} style={{ backgroundColor: colors.background[3] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.background[4] }} />
    </PreviewLink>
    <PreviewLink className={styles.unknown} menu='Unknown (Editor)'>
      <div className={styles.idk} style={{ backgroundColor: colors.editor[1] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.editor[9] }} />
    </PreviewLink>
    <PreviewLink className={styles.unknown} menu='Unknown (Headbands)'>
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[1] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[3] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[5] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[7] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[8] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[9] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[10] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[11] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[12] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[13] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[14] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[15] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.headbands[16] }} />
    </PreviewLink>
    <PreviewLink className={styles.unknown} menu='Unknown (Menu)'>
      <div className={styles.idk} style={{ backgroundColor: colors.menu[6] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.menu[11] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.menu[36] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.menu[39] }} />
    </PreviewLink>
    <PreviewLink className={styles.unknown} menu='Unknown (Timebar)'>
      <div className={styles.idk} style={{ backgroundColor: colors.timeBar[3] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.timeBar[5] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.timeBar[7] }} />
    </PreviewLink>
    <PreviewLink className={styles.unknown} menu='Unknown (Trap Door)'>
      <div className={styles.idk} style={{ backgroundColor: colors.entityDoorTrap[2] }} />
      <div className={styles.idk} style={{ backgroundColor: colors.entityDoorTrap[3] }} />
    </PreviewLink>
    <PreviewLink className={styles.unknown} menu='Unknown (Evil Ninja)'>
      <div className={styles.idk} style={{ backgroundColor: colors.entityEvilNinja[1] }} />
    </PreviewLink>
  </div>
}
