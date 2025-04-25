import { PropsWithChildren } from 'react'
import styles from './level.module.css'

interface Props {
  type?: 'small';
  className?: string;
}

export default function Level(props: PropsWithChildren<Props>) {
  const { type, className, children } = props
  let cn = styles.level
  if (type == 'small') {
     cn = cn + ' ' + styles.levelSmall
  }
  if (className) {
    cn = cn + ' ' + className
  }
  return <div className={cn}>{ children }</div>
}
