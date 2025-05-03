// import { ColorResult } from 'react-color'
import { useThrottledCallback } from 'use-debounce'
import { useState, useRef } from 'react'
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


// TODO: do three-digit colors break the generated palettes? how do we prevent these inputs?

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

  const history = useRef<[ string, number, string ][][]>([])
  const historyIndex = useRef(-1)

  const { fileName, index } = menus[currentMenu][currentIndex]
  const currentColor = colors[fileName][index]


  // not convinced this is a necessary function
  const setColor = (fileName: string, index: number, color: string) => {
    setColors(colors => {
      const newColors = structuredClone(colors)
      newColors[fileName][index] = color
      return newColors
    })
  }


  const addHistory = () => {
    if (historyIndex.current + 1 < history.current.length) {
      history.current = history.current.slice(0, historyIndex.current + 1)
    }
    history.current.push( [ [ fileName, index, colors[fileName][index] ] ])
    historyIndex.current += 1
  }

  const addHistoryBundle = (newColors: { [index: string]: string[] }) => {
    const bundle: [ string, number, string ][] = []
    Object.keys(newColors).forEach(fileName => {
      newColors[fileName].forEach((color: string, index: number) => {
        if (color != colors[fileName][index]) {
          bundle.push([ fileName, index, colors[fileName][index] ])
        }
      })
    })
    history.current.push(bundle)
    historyIndex.current += 1
  }

  const handleColorSelect = (color: string) => {
    addHistory()
    setColor(fileName, index, color)
  }

  const applyHistory = () => {
    history.current[historyIndex.current] = history.current[historyIndex.current].map(([ fileName, index, color ]: [ string, number, string ]) => {
      const newColor = colors[fileName][index]
      setColor(fileName, index, color)
      return [ fileName, index, newColor ]
    })
  }

  const handleUndo = () => {
    if (historyIndex.current < 0) {
      return
    }
    applyHistory()
    historyIndex.current -= 1
  }

  const handleRedo = () => {
    if (historyIndex.current + 1 == history.current.length) {
      return
    }
    historyIndex.current += 1
    applyHistory()
  }


  function setMenu(menu: string) {
    setCurrentIndex(0)
    setCurrentMenu(menu)
  }

  function handleMenuGeneration() {
    const newColors = generateMenus(colors)
    addHistoryBundle(newColors)
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

  // so we probably want to throttle setColor and use that instead
  // cuz it doesnt add to history
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
          {/* only show these if undo/redo possible */}
          <button onClick={handleUndo}>U N D O</button>
          <button onClick={handleRedo}>Redo</button>
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
