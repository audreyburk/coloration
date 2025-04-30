// Stolen, with love and appreciation, from Eddy
// https://github.com/edelkas/npc-web

import JSZip from 'jszip'
import { saveAs } from 'file-saver'

import TGA from './tga'
import { objects } from '../data/fileData'



/**
 *
 * INTERNAL METHODS
 *
 */

// Create blob from string of bytes
function blobify(text) {
  const bytes = new Uint8Array(text.match(/.{2}/g).map(e => parseInt(e, 16)))
  return new Blob([bytes], { type: "application/octet-stream" })
}

// Create string of bytes from blob
function deblobify(blob) {
  let binary = ""
  const bytes = new Uint8Array(blob)
  for (var i = 0; i < bytes.byteLength; i++) {
    binary += bytes[i].toString(16).padStart(2, '0').toUpperCase()
  }
  return binary
}

// Creates ArrayBuffer from string
function bufferize(text) {
  return new Uint8Array(text.match(/.{2}/g).map(e => parseInt(e, 16))).buffer
}

// Creates a matrix from an array
function matrixize(array, size) {
  var matrix = []
  for (var i = 0; i < array.length; i += size) matrix.push(array.slice(i, i + size))
  return matrix
}



// take uploaded files, filter them, and turn them into colors
export function loadPalette(fileList) {
  let files = Array.from(fileList)

  // Remove extraneous files
  const necessaryNames = Object.keys(objects)
  files = files.filter(file => {
    const fileName = file.name.slice(0, -4)
    return necessaryNames.includes(fileName)
  })

  // Check for existence of all palette files
  const fileNames = files.map(f => f.name)
  const missing = necessaryNames.filter(name => {
    return !fileNames.includes(name + '.tga')
  })

  // Proceed only if all files were correct
  if (missing.length > 0) {
    const error = 'Error loading palette. Missing ' + missing.length + ' files:\n\n' + missing.join('\n')
    return Promise.reject(error)
  } else {
    // Read the files
    return Promise.all(files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = () => reject(reader)
        reader.readAsArrayBuffer(file)
      })
    }))
    .then((result) => {
      const colors = result
        .map(deblobify)
        .map((file, i) => {
          const fileName = files[i].name.slice(0, -4)
          checkFile(file, fileName)
          return file
        })
        .map(parseFile)
        .reduce((final, current, i) => {
          const key = files[i].name.slice(0, -4)
          return { ...final, [key]: current }
        }, {})

      return colors
    })
  }
}

/**
 *
 * GENERATE PALETTE
 *
 */

// Creates a tga file as a string of raw bytes in hex
// (Read the TGA specs to understand this function)
function createFile(colorGroup) {
  const n = colorGroup.length
  const w = (64 * n).toString(16).padStart(4, '0').match(/.{2}/g).reverse().join('')
  let file = '00000A000000000000000000' + w + '40001800'
  let i, j
  for (i = 0; i < 64; i++) {
    for (j = 0; j < n; j++) {
      const hex = colorGroup[j].slice(1)
      file += 'BF' + hex.match(/.{2}/g).reverse().join('')
    }
  }
  return file
}

// Generate all palette files, zip them and serve them
export function createPalette(colors, name = 'palette') {
  const zip = new JSZip()
  Object.entries(colors).forEach(([ fileName, colorGroup ]) => {
    const file = blobify(createFile(colorGroup))
    zip.file(fileName + '.tga', file)
  })
  zip.generateAsync({ type: 'blob' })
    .then(content => saveAs(content, name + '.zip'))
}

/**
 *
 * PARSE PALETTE
 *
 */

// Check that the TGA is valid for our purpose
function checkFile(file, fileName) {
  // Load file
  let errorMessage = "ERRORS with file " + fileName + ":\n"
  let errorHappened = false
  file = file.match(/.{2}/g)

  const header = file.slice(0, 18)
  // Extract header fields
  const id_length = parseInt(header[0], 16)
  const colormap_type = parseInt(header[1], 16)
  const image_type = parseInt(header[2], 16)
  const colormap_spec = header.slice(3, 8)
  const width = parseInt(header.slice(12, 14).reverse().join(""), 16)
  const height = parseInt(header.slice(14, 16).reverse().join(""), 16)
  const pixel_depth = parseInt(header[16], 16)
  const colors = Math.round(width / 64)

  if (colors != objects[fileName].length) {
    errorHappened = true
    errorMessage += ("* The image doesn't have the right amount of colors (has " +
      colors.toString() + ", should have " +
      objects[fileName].length.toString() + ").\n")
  }
  if (height != 64) {
    errorMessage += "* Warning: The image height should be 64.\n"
  }
  if (errorHappened) {
    throw new Error(errorMessage)
  } else {
    return true
  }
}

// Parses a tga file from a string of raw bytes in hex
function parseFile(file) {
  const result = true
  if (result === true) {
    // Get hex codes? (pixels (31,32) + (0,64*i))
    try {
      const tga = new TGA()
      const buffer = bufferize(file)
      tga.load(buffer)
      const width = tga.header.width
      const n = width / 64
      const image = tga.getImageData()
      const pixels = matrixize(matrixize(image.data, 4), width)
      const colors = []
      for (var i = 0; i < n; i++) {
        const rgb = deblobify(pixels[31][32 + 64 * i]).substring(0, 6)
        colors.push('#' + rgb)
      }
      return colors
    } catch (e) {
      return e.message
    }
  } else {
    return result
  }
}

export function test(file) {
  const tga = new TGA()
  const buffer = bufferize(file)
  tga.load(buffer)
  const width = tga.header.width
  const n = width / 64
  const image = tga.getImageData()
  const pixels = matrixize(matrixize(image.data, 4), width)
  const colors = new Array(n)
  for (let i = 0; i < n; i++) {
    const rgb = deblobify(pixels[31][32 + 64 * i]).substring(0, 6)
    colors[i] = rgb
    console.log(rgb)
  }
}
