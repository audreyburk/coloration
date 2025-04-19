import styles from './level.module.css'

interface Props {
  // text?: string;
  type?: 'small';
  // className?: string;
  // interior?: boolean;
}

export default function Level({ type }: Props) {
  let cn = styles.level
  if (type == 'small') {
     cn = cn + ' ' + styles.levelSmall
  }
  return <div className={cn} />
}
