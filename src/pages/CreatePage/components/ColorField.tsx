import { JSX } from 'react'
import { HexColorInput } from 'react-colorful'
import Color from 'color'


import styles from './colorField.module.css'

interface Props {
  hex: string;
  text: string;
  onChange: (newColor: string) => void;
  onFocus: (e?: any) => void;
  setCurrentPreview: (name: string) => void;
  className?: string;
  active?: boolean;
  space?: boolean;
}

export default function ColorField(props: Props) {
  const { hex, text, onChange, className, onFocus, active, setCurrentPreview, space } = props
  const color = Color(hex)
  const textColor = color.isLight()
    ? '#000'
    : '#FFF'

  let cn = styles.field
  if (active) {
    cn = cn + ' ' + styles.fieldActive
  }
  if (className) {
    cn = cn + ' ' + className
  }
  if (space) {
    cn = cn + ' ' + styles.fieldSpaced
  }

  const re = /\<(.*?)\>/g
  const textItems = text.split(re)
  const bits: (string | JSX.Element)[] = []
  textItems.forEach((item, i) => {
    if (i % 2 == 0) {
      bits.push(item)
    } else {
      const el = <span key={i} onClick={() => setCurrentPreview(item)}>view</span>
      bits.push(el)
    }
  })

  return <li className={cn}>
    <HexColorInput
      className={styles.input}
      style={{
        backgroundColor: hex,
        color: textColor
      }}
      color={hex}
      onChange={onChange}
      onFocus={onFocus}
    />
    <span className={styles.text}>
      { bits }
    </span>
  </li>
}
