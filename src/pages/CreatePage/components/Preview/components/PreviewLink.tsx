import { JSX, PropsWithChildren, useContext } from 'react'
import { CurrentMenuContext } from '../../../CurrentMenuContext'

import styles from './previewLink.module.css'

interface Props {
  className?: string;
  style?: React.CSSProperties;
  tag?: string | React.ReactElement;
  menu: string;
  index?: number;
  indices?: number[];
}

export default function PreviewLink(props: PropsWithChildren<Props>) {
  const {
    children, className, menu,
    style = {},
    tag = 'div'
  } = props

  const setCurrentMenu = useContext(CurrentMenuContext)
  const Tag = tag as keyof JSX.IntrinsicElements // TODO: ugh, this is probably inaccurate for components

  function handleClick(e: any) {
    setCurrentMenu?.(menu)
    e.stopPropagation()
  }

  const cn = className
    ? className + ' ' + styles.boop
    : styles.boop

  // i think we need acces to colors
  // to properly set the hover background color
  return <Tag className={cn} style={style} onClick={handleClick}>
     { children }
    </Tag>
}
