// import { ColorResult } from 'react-color'
import { useThrottledCallback } from 'use-debounce'
import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'

// data files, big consts
import fileData from './data/fileData'
import menus from './data/menus'
import defaultColors from './data/defaultColors'

import { CurrentMenuContext } from './CurrentMenuContext'

import { loadPalette, createPalette } from './utils/script'
import generateMenus from './utils/generateMenus'

import ColorField from './components/ColorField'
import Preview from './components/Preview'
import ImagePicker from './components/ImagePicker'

import styles from './createPage.module.css'

const previewKeys = [
  [ 'objects', 'Objects' ],
  [ 'episodes', 'Episode Grid' ],
  [ 'levels', 'Level List' ],
  [ 'ingame', 'In Game' ],
  [ 'editor', 'Editor' ],
  [ 'menus', 'Menus' ],
  [ 'unknown', 'Unknown' ],
]

export default function CreatePage() {
  const [ colors, setColors ] = useState(defaultColors)
  const [ currentMenu, setCurrentMenu ] = useState('Background')
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ currentPreview, setCurrentPreview ] = useState('objects') // objects ingame editor episodes levels menus
  const [ name, setName ] = useState('')

  const { fileName, index } = menus[currentMenu][currentIndex]
  const currentColor = colors[fileName][index]

  function setMenu(menu: string) {
    setCurrentIndex(0)
    setCurrentMenu(menu)
  }

  function handleMenuGeneration() {
    const newColors = generateMenus(colors)
    setColors(newColors)
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
    createPalette(colors, name || 'palette')
  }

  const handleColorSelect = (color: string) => {
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
        {/* TODO: get rid of this lol */}
        <div className={styles.previews} style={{ backgroundColor: colors.menu[0] }}>
          <Preview colors={colors} currentPreview={currentPreview} />
        </div>
      </CurrentMenuContext>
      <div className={styles.previewButtons}>
        {
          previewKeys.map(([ key, title ]) => {
            let cn = styles.previewButton
            if (key == currentPreview) {
              cn = cn + ' ' + styles.previewButtonActive
            }
            return <div key={key} className={cn} onClick={() => setCurrentPreview(key)}>
              { title }
            </div>
          })
        }
      </div>
      <div className={styles.rowOne}>
        <div className={styles.sidebar}>
          <ImagePicker currentColor={currentColor} handleColorSelect={handleColorSelect} />
          <HexColorPicker
            className={styles.picker}
            color={currentColor}
            onChange={handleColorSelectThrottled}
          />
          <div className={styles.importExport}>
            <span>Generates menus from the Objects screen colors. They will be messy; please tidy up.</span>
            <button
              className={styles.generate}
              onClick={handleMenuGeneration}
            >
              Generate Menus
            </button>
            <span>Import palette (35 .tga files):</span>
            <input
              type="file"
              multiple={true}
              className={styles.upload}
              onChange={handleUpload}
            />
            <input
              className={styles.namer}
              placeholder='palette name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button
              className={styles.download}
              onClick={handleDownloadClick}
            >
              Download Palette
            </button>
          </div>
        </div>
        <div className={styles.fields}>
          <div className={styles.fieldsTitle}>{ currentMenu }</div>
          <ul>
            {
              menus[currentMenu].map((field, i) => {
                const { fileName, index, description, space } = field
                const text = description || fileData[fileName][index]
                return <ColorField
                  key={"field_" + fileName + index}
                  hex={colors[fileName][index]}
                  text={text}
                  onChange={handleColorSelectThrottled}
                  onFocus={(e: any) => {
                    e.currentTarget.select()
                    setCurrentIndex(i)
                  }}
                  space={space}
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
