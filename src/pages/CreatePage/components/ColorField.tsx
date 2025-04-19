import { HexColorPicker, HexColorInput } from 'react-colorful'
import Color from 'color'


import styles from './colorField.module.css'

interface Props {
  hex: string;
  text: string;
  onChange: (newColor: string) => void;
}

export default function ColorField({ hex, text, onChange }: Props) {
  const color = Color(hex)
  const textColor = color.isLight()
    ? '#000'
    : '#FFF'

  return <li className={styles.field}>
    <HexColorInput
      className={styles.input}
      style={{
        backgroundColor: hex,
        color: textColor
      }}
      color={hex}
      onChange={onChange}
      />
    <HexColorPicker
      className={styles.picker}
      color={hex}
      onChange={onChange}
    />
    <span className={styles.text}>{ text }</span>
  </li>
}
