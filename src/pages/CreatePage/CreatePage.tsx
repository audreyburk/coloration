// import { ColorResult } from 'react-color'
import { useThrottledCallback } from 'use-debounce'
import { useState } from 'react'

// data files, big consts
import fileData from './data/fileData'
import menus from './data/menus'
import defaultColors from './data/defaultColors'

import { CurrentMenuContext } from './CurrentMenuContext'

import { loadPalette, createPalette } from './utils/script'

import ColorField from './components/ColorField'
import Preview from './components/Preview'

import styles from './createPage.module.css'


// TODO: THINGS ARE VERY BROKEN
// sometimes selecting entities changes one of their colors
// maybe a problem with keys in the inputs?
// need to redo this system anyway


export default function CreatePage() {
  const [ colors, setColors ] = useState(defaultColors)
  const [ currentMenu, setCurrentMenu ] = useState('Background')
  // const [ fieldIdx, setFieldIdx ] = useState(0)
  const [ canvasType, setCanvasType ] = useState('objects') // objects ingame editor leaderboard levels menus

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

  function handleColorSelect(color: string, fileName: string, i: number) {
    setColors({
      ...colors,
      [fileName]: [
        ...colors[fileName].slice(0, i),
        color.toUpperCase(),
        ...colors[fileName].slice(i + 1)
      ]
    })
  }

  const handleColorSelectThrottled = useThrottledCallback((color: string, fileName: string, index: number) => {
    return handleColorSelect(color, fileName, index)
  }, 50, { leading: true })

  return (
    <main>
      <CurrentMenuContext value={setCurrentMenu}>
        <div className={styles.previews} style={{ backgroundColor: colors.menu[0] }}>
          <Preview
            colors={colors}
            canvasType={canvasType}
          />
        </div>
      </CurrentMenuContext>
      <div>
        <button onClick={() => setCanvasType('objects')}>Objects</button>
        <button onClick={() => setCanvasType('leaderboard')}>Leaderboard</button>
        <button onClick={() => setCanvasType('levels')}>Levels</button>
        <button onClick={() => setCanvasType('ingame')}>In Game</button>
        <button onClick={() => setCanvasType('editor')}>Editor</button>
        <button onClick={() => setCanvasType('menu')}>Menu</button>
        <button onClick={() => setCanvasType('unknown')}>Unknown</button>
      </div>
      <div className={styles.rowOne}>
        <ul className={styles.sectionList}>
          {
            Object.keys(menus).map(key => {
              return <li
                key={key}
                className={styles.sectionItem}
                onClick={() => setCurrentMenu(key)}
              >{ key }</li>
            })
          }
        </ul>
        <div>{ currentMenu }</div>
        <ul className={styles.fileList}>
          {
            menus[currentMenu].map(field => {
              const { fileName, index, description, space } = field
              const text = description || fileData[fileName][index].text
              console.log(space) // TODO: insert class name for spacing
              return <ColorField
                key={"field_" + fileName + index}
                hex={colors[fileName][index]}
                text={text}
                onChange={color => handleColorSelectThrottled(color, fileName, index)}
              />
            })
          }
        </ul>
        <div className={styles.swatches}>
          <input
            type="file"
            multiple={true}
            onChange={handleUpload}
          />
          <button onClick={handleDownloadClick}>Download Palette</button>
        </div>
      </div>
      <div className={styles.aa}>
        <p className={styles.a}>84.733</p>
        <p className={styles.b}>84.733</p>
        <p className={styles.c}>Solo Intro Level A-00-0123 Level</p>
        <p className={styles.d}>Solo Intro Level A-00-0123 Level</p>
      </div>
    </main>
  )
}
