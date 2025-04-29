// import { ColorResult } from 'react-color'
import { useThrottledCallback } from 'use-debounce'
import { useState } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'

// data files, big consts
import fileData from './data/fileData'
import menus from './data/menus'
import defaultColors from './data/defaultColors'

import { CurrentMenuContext } from './CurrentMenuContext'

import { loadPalette, createPalette } from './utils/script'

import ColorField from './components/ColorField'
import Preview from './components/Preview'

import styles from './createPage.module.css'


export default function CreatePage() {
  const [ colors, setColors ] = useState(defaultColors)
  const [ currentMenu, setCurrentMenu ] = useState('Background')
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ currentPreview, setCurrentPreview ] = useState('objects') // objects ingame editor episodes levels menus

  const { fileName, index } = menus[currentMenu][currentIndex]
  const currentColor = colors[fileName][index]

  function setMenu(menu: string) {
    setCurrentIndex(0)
    setCurrentMenu(menu)
  }

  function handleUpload(e: any) {
    loadPalette(e.target.files)
      .then(setColors)
      .catch((error: Error) => {
        alert(error)
      })
  }

  function handleDownloadClick() {
    console.log(colors)
    createPalette(colors)
  }

  function handleColorSelect(color: string) {
    setColors({
      ...colors,
      [fileName]: [
        ...colors[fileName].slice(0, index),
        color.toUpperCase(),
        ...colors[fileName].slice(index + 1)
      ]
    })
  }

  const handleColorSelectThrottled = useThrottledCallback((color: string) => {
    return handleColorSelect(color)
  }, 50, { leading: true })

  return (
    <main>
      <CurrentMenuContext value={setMenu}>
        <div className={styles.previews} style={{ backgroundColor: colors.menu[0] }}>
          <Preview
            colors={colors}
            currentPreview={currentPreview}
          />
        </div>
      </CurrentMenuContext>
      <div>
        <button onClick={() => setCurrentPreview('objects')}>Objects</button>
        <button onClick={() => setCurrentPreview('episodes')}>Episode Grid</button>
        <button onClick={() => setCurrentPreview('levels')}>Level List</button>
        <button onClick={() => setCurrentPreview('ingame')}>In Game</button>
        <button onClick={() => setCurrentPreview('editor')}>Editor</button>
        <button onClick={() => setCurrentPreview('menus')}>Menu</button>
        <button onClick={() => setCurrentPreview('unknown')}>Unknown</button>
      </div>
      <div className={styles.rowOne}>
        <div>
          <HexColorPicker
            className={styles.picker}
            color={currentColor}
            onChange={handleColorSelectThrottled}
          />
          <input
            type="file"
            multiple={true}
            onChange={handleUpload}
          />
          <br />
          <button onClick={handleDownloadClick}>Download Palette</button>
        </div>
        <div className={styles.fields}>
          <div className={styles.fieldsTitle}>{ currentMenu }</div>
          <ul>
            {
              menus[currentMenu].map((field, i) => {
                const { fileName, index, description, space } = field
                const text = description || fileData[fileName][index]
                const className = space ? styles.fieldSpace : undefined
                return <ColorField
                  key={"field_" + fileName + index}
                  hex={colors[fileName][index]}
                  text={text}
                  onChange={handleColorSelectThrottled}
                  onFocus={() => setCurrentIndex(i)}
                  className={className}
                  active={currentIndex == i}
                  setCurrentPreview={setCurrentPreview}
                />
              })
            }
          </ul>
        </div>
      </div>
    </main>
  )
}
