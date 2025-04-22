import spriteData from './spriteData'
import styles from './sprite.module.css'

const spriteGlob: { [index: string]: string } = import.meta.glob(
  './images/*.png',
  {
    eager: true,
    import: 'default',
    query: '?inline'
  }
)

const sprites: { [index: string]: string } = {}
Object.entries(spriteGlob).forEach(([key, value]) => {
  const newKey = key.split('/').pop()
  sprites[newKey!] = value
})


// TODO: add all outlines please

interface Props {
  objectName: string; // sprites.keys().join('|')
  colors: { [index: string]: string[] }; // or, alternatively, color, or specific colors.... hm
  className?: string;
  style?: { [index:string]: string | number };
}

// does receiving new props always trigger a rerender? how can we prevent rerender if used colors dont change?

export default function Sprite({ colors, objectName, className, style = {} }: Props) {
  let cn = styles.container
  if (className) {
    cn = cn + ' ' + className
  }

  const { layers, height = 44, width = 44 } = spriteData[objectName]
  const offsetX = (44 - width) / 2
  const offsetY = (44 - height) / 2

  // here's an interesting thought -- instead of the color index, pass in the css variable name
  // that assumes we'll do everything with css variables, but that might not be a bad call?
  // would prevent the rerenders, right?
  // and if we needed a custom colored object, we could just set those variables. ez.

  return <div className={styles.container} style={style}>
    {
      layers.map(([ sprite, color, index ]) => {
        const hex = colors[color][index]
        const url = sprites[sprite]
        const layerStyle = {
          width,
          height,
          top: offsetY,
          right: offsetX,
          bottom: offsetY,
          left: offsetX,
          backgroundImage: `url(${url}), linear-gradient(${hex}, ${hex})`,
          maskImage: `url(${url})`,
          mixBlendMode: sprite == 'mini-active-0.png' ? 'lighten' : undefined
        }
        return <div key={url} className={styles.layer} style={layerStyle} />
      })
    }
  </div>
}
