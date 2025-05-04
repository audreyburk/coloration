import { useThrottledCallback } from 'use-debounce'
import { useState, useRef, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import { ArrowUUpLeft, ArrowUUpRight } from '@phosphor-icons/react'

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
// TODO: changing hue makes history slightly wonky if black

// TODO: move preview stuff into, well, Preview. fix background. fix button font.

// TODO: use webkitdirectory file upload

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
  const [ imageExists, setImageExists ] = useState(false)

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

  // so we probably want to throttle setColor and use that instead
  // cuz it doesnt add to history
  const setColorThrottled = useThrottledCallback((color: string) => {
    return setColor(fileName, index, color)
  }, 50, { leading: true })


  const trimHistory = () => {
    if (historyIndex.current + 1 < history.current.length) {
      history.current = history.current.slice(0, historyIndex.current + 1)
    }
  }

  const addHistory = () => {
    trimHistory()
    history.current.push( [ [ fileName, index, colors[fileName][index] ] ])
    historyIndex.current += 1
  }

  const addHistoryBundle = (newColors: { [index: string]: string[] }) => {
    trimHistory()
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

  const canUndo = () => historyIndex.current >= 0
  const canRedo = () => historyIndex.current + 1 < history.current.length

  const handleUndo = () => {
    if (!canUndo()) {
      return
    }
    applyHistory()
    historyIndex.current -= 1
  }

  const handleRedo = () => {
    if (!canRedo()) {
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
      .then(result => {
        history.current = []
        historyIndex.current = -1
        setColors(result)
      })
      .catch((error: Error) => {
        alert(error)
      })
  }

  function handleDownloadClick() {
    console.log(colors)
    createPalette(colors, name || 'palette')
  }

  function handleKeyDown(e: any) {
    if (e.metaKey || e.ctrlKey) {
      if ((e.code == 'KeyY' && !e.shiftKey) || (e.code == 'KeyZ' && e.shiftKey)) {
        e.preventDefault()
        handleRedo()
      } else if (e.code == 'KeyZ') {
        e.preventDefault()
        handleUndo()
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ handleKeyDown ])


  return (
    <main className={styles.createPage}>
      <CurrentMenuContext value={setMenu}>
        {/* TODO: get rid of this lol */}
        <div className={styles.previews} style={{ backgroundColor: colors.menu[0] }}>
          <Preview colors={colors} currentPreview={currentPreview} />
          <div className={styles.previewButtons}>
            {
              previewKeys.map(([ key, title ]) => {
                let cn = styles.previewButton
                if (key == currentPreview) {
                  cn = cn + ' ' + styles.previewButtonActive
                }
                return <button key={key} className={cn} onClick={() => setCurrentPreview(key)}>
                  { title }
                </button>
              })
            }
          </div>
        </div>
      </CurrentMenuContext>
      <div className={styles.interface + ' ' + (imageExists ? styles.interfaceExpanded : '')}>
        <div className={styles.columnB}>
          {/* only track history of initial location when dragging to select */}
          <div onMouseDown={addHistory}>
            <HexColorPicker
              className={styles.gradientPicker}
              color={currentColor}
              onChange={setColorThrottled}
            />
          </div>
          <div className={styles.menuGenerator}>
            <span className={styles.menuGeneratorInstructions}>
              Generate menus from the Objects screen colors. They will be messy; please tidy up.
            </span>
            <button
              className={styles.generate}
              onClick={handleMenuGeneration}
            >
              Generate Menus
            </button>
          </div>
        </div>
        <div className={styles.columnA}>
          {/* only track history of initial location when dragging to select */}
          <div className={styles.gradientContainer} onMouseDown={addHistory}>
            <HexColorPicker
              className={styles.gradientPicker}
              color={currentColor}
              onChange={setColorThrottled}
            />
          </div>
          <div className={styles.menuGenerator}>
            <span className={styles.menuGeneratorInstructions}>
              Generate menus from the Objects screen colors. They will be messy; please tidy up.
            </span>
            <button
              className={styles.generate}
              onClick={handleMenuGeneration}
            >
              Generate Menus
            </button>
          </div>
          <ImagePicker
            className={styles.imagePicker}
            currentColor={currentColor}
            handleColorSelect={handleColorSelect}
            onImageToggle={setImageExists}
          />
          <div className={styles.import}>
            <span className={styles.importInstructions}>Import palette (35 .tga files):</span>
            <input
              type="file"
              multiple={true}
              className={styles.upload}
              onChange={handleUpload}
            />
          </div>
          <div className={styles.export}>
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
          <div className={styles.fieldsHeader}>
            <span className={styles.fieldsTitle}>{ currentMenu }</span>
            <div className={styles.undoRedo}>
              <button onClick={handleUndo} className={canUndo() ? styles.active : undefined}>
                <ArrowUUpLeft size={32} />
              </button>
              <button onClick={handleRedo} className={canRedo() ? styles.active : undefined}>
                <ArrowUUpRight size={32} />
              </button>
            </div>
          </div>
          <ul>
            {
              menus[currentMenu].map((field, i) => {
                const { fileName, index, description, space } = field
                const text = description || fileData[fileName][index]
                return <ColorField
                  key={"field_" + fileName + index}
                  hex={colors[fileName][index]}
                  text={text}
                  onChange={handleColorSelect}
                  onFocus={e => {
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
      {/* TODO: put some spare fields down here for copy-pasting, etc
          maybe even the linked fields idea */}
    </main>
  )
}
