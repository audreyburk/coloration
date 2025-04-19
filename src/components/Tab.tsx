import styles from './tab.module.css'

interface Props {
  text?: string;
  type?: 'default' | 'timebar' | 'racebar';
  className?: string;
  interior?: boolean;
}

export default function Tab({ type = 'default', text, className, interior }: Props) {
  let cn = styles['tab_' + type]
  if (className) {
    cn = cn + ' ' + className
  }
  return (
    <span className={cn}>
      { text && text }
      { interior && <span className={styles['tab_' + type] + ' ' + styles['tab_' + type + 'Interior']}></span>}
    </span>
  )
}
