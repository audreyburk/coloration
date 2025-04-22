// import { ColorResult } from 'react-color'
import { useThrottledCallback } from 'use-debounce'
import { useState } from 'react'

// is specifying type important? it's ugly. maybe multiline?
import { type Item, type Section, type Field } from './createPageTypes'

// data files, big consts
import fileData from './data/fileData'
import sectionData from './data/sectionData'
import defaultColors from './data/defaultColors'

import { loadPalette, createPalette } from './utils/script'

import Preview from './components/Preview'
import ColorField from './components/ColorField'

import styles from './createPage.module.css'


// THINGS ARE VERY BROKEN
// sometimes selecting entities changes one of their colors
// maybe a problem with keys in the inputs?
// need to redo this system anyway

// normalize capitalization in inputs

export default function CreatePage() {
  const [ colors, setColors ] = useState(defaultColors)
  const [ sectionIdx, setSectionIdx ] = useState(0)
  const [ itemIdx, setItemIdx ] = useState(0)
  // const [ fieldIdx, setFieldIdx ] = useState(0)
  const [ canvasType, setCanvasType ] = useState('objects') // objects ingame editor leaderboard

  const items = sectionData[sectionIdx].items
  const { fileName } = items[itemIdx]
  const indices = items[itemIdx].indices || fileData[fileName].map((_f, i) => i)

  function handleSectionClick(index: number) {
    setSectionIdx(index)
    setItemIdx(0)
  }

  function handleItemClick(index: number) {
    setItemIdx(index)
  }

  function handleUpload(e: any) {
    loadPalette(e.target.files)
      .then(setColors)
      .catch((error: Error) => {
        alert(error)
      })
  }

  function handleDownloadClick() {
    const newThing = canvasType === 'objects' ? 'editor' : 'objects'
    // setCanvasType(newThing)
    console.log(colors)
    // createPalette(colors)
  }

  function handleColorSelect(color: string, i: number) {
    // here's the problem. the index does not necessaryily match the destination index
    // so do we change that here, or on palette creation? i think it's already broken on palette load?
    // noooooo it should be fiiiiiiine
    // right, it's not broken on palette load, it's broken in how it renders the fields? maybe?
    setColors({
      ...colors,
      [fileName]: [
        ...colors[fileName].slice(0, i),
        color,
        ...colors[fileName].slice(i + 1)
      ]
    })
  }

  const handleColorSelectThrottled = useThrottledCallback((color: string, index: number) => {
    return handleColorSelect(color, index)
  }, 50, { leading: true })


  return (
    <main>
      <div>
        <button onClick={() => setCanvasType('objects')}>Objects</button>
        <button onClick={() => setCanvasType('leaderboard')}>Leaderboard</button>
        <button onClick={() => setCanvasType('levels')}>Levels</button>
        <button onClick={() => setCanvasType('ingame')}>In Game</button>
        <button onClick={() => setCanvasType('editor')}>Editor</button>
        <button onClick={() => setCanvasType('menu')}>Menu</button>
        <button onClick={() => setCanvasType('unknown')}>Unknown</button>
      </div>
      <div className={styles.previews} style={{ backgroundColor: colors.menu[0] }}>
        <Preview
          colors={colors}
          setItemIdx={setItemIdx}
          setSectionIdx={setSectionIdx}
          canvasType={canvasType}
        />
      </div>
      <div className={styles.rowOne}>
        <ul className={styles.sectionList}>
          {
            sectionData.map(({ name }: Section, i: number) => {
              const className = (i === sectionIdx)
                ? styles.sectionItem + " " + styles.sectionItem__active
                : styles.sectionItem
              return <li key={name} className={className} onClick={() => handleSectionClick(i)}>
                <span>{ name }</span>
              </li>
            })
          }
        </ul>
        {/* probably just for mobile */}
        <ul key={`section_${sectionIdx}`} className={styles.itemList}>
          {
            items.map(({ label }: Item, i: number) => {
              const className = (i === itemIdx)
                ? styles.itemItem + " " + styles.itemItem__active
                : styles.itemItem
              return <li key={label} className={className}>
                <span onClick={() => handleItemClick(i)}>{label}</span>
              </li>
            })
          }
        </ul>
        <ul className={styles.fileList}>
          {
            indices.map(i => {
              const { text } = fileData[fileName][i]
              return <ColorField
                key={"field_" + i}
                hex={colors[fileName][i]}
                text={text}
                onChange={color => handleColorSelectThrottled(color, i)}
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
