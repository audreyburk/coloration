import fileData from './fileData'

// a bunch of these are actually unused. we should trim, put them in subfolder, at least
// this is a Vite-only feature and is not a web or ES standard
const spriteGlob: { [index: string]: string } = import.meta.glob(
  [ '../images/*.png', '!../images/palette_sheet.png' ],
  {
    eager: true,
    import: 'default',
    query: '?inline'
  }
)

export const sprites: { [index: string]: HTMLImageElement } = {}
Object.entries(spriteGlob).forEach(([key, value]) => {
  const newKey = key.split('/').pop()
  const img = new Image()
  img.src = value
  sprites[newKey!] = img
})

export const WALL_SIZE = 36
export const TILE_SIZE = 44

// ummm should this not be an object??
// { [index: string]: { x: number, y: number } }


// ugh if we want width and height that depends on sprites object
// export const entityCoordinates:  {
//   [index: string]: {
//     x: number,
//     y: number,
//     width?: number,
//     height: number,
//   }
// } = [
//   [ 'entityDroneLaser',      1, 1 ],
//   [ 'entityDroneChaingun',   3, 1 ],
//   [ 'entityDroneChaser',     5, 1 ],
//   [ 'entityDroneZap',        7, 1 ],
//   [ 'entityBat',            11, 1 ],
//   [ 'entityFloorGuard',     13, 1 ],
//   [ 'entityEyeBat',         15, 1 ],
//   [ 'entityRocket',         17, 1 ],
//   [ 'entityTurret',         19, 1 ],
//   [ 'entityDualLaser',      21, 1 ],

//   [ 'entityShoveThwomp',     1, 3 ],
//   [ 'entityThwomp',          3, 3 ],
//   [ 'entityBounceBlock',     5, 3 ],
//   [ 'entityOneWayPlatform',  7, 3 ],
//   [ 'entityLaunchPad',       9, 3 ],
//   [ 'entityBoostPad',       11, 3 ],
//   [ 'entityEvilNinja',      15, 3 ],

//   [ 'entityMine',            1, 5 ],
//   [ 'entityGold',            5, 5 ],
//   [ 'entityDoorLocked',      7, 5 ],
//   [ 'entityDoorTrap',       11, 5 ],
//   [ 'entityDoorRegular',    15, 5 ],

//   [ 'ninja',                 5, 7 ],
//   [ 'entityDoorExitSwitch', 17, 5 ],
//   [ 'entityDoorExit',       21, 6 ],
// ]

const a: [ string, number, number ][] = [
  [ 'entityDroneLaser',      1, 1 ],
  [ 'entityDroneChaingun',   3, 1 ],
  [ 'entityDroneChaser',     5, 1 ],
  [ 'entityDroneZap',        7, 1 ],
  [ 'entityBat',            11, 1 ],
  [ 'entityFloorGuard',     13, 1 ],
  [ 'entityEyeBat',         15, 1 ],
  [ 'entityRocket',         17, 1 ],
  [ 'entityTurret',         19, 1 ],
  [ 'entityDualLaser',      21, 1 ],

  [ 'entityShoveThwomp',     1, 3 ],
  [ 'entityThwomp',          3, 3 ],
  [ 'entityBounceBlock',     5, 3 ],
  [ 'entityOneWayPlatform',  7, 3 ],
  [ 'entityLaunchPad',       9, 3 ],
  [ 'entityBoostPad',       11, 3 ],
  [ 'entityEvilNinja',      15, 3 ],

  [ 'entityMine',            1, 5 ],
  [ 'entityGold',            5, 5 ],
  [ 'entityDoorLocked',      7, 5 ],
  [ 'entityDoorTrap',       11, 5 ],
  [ 'entityDoorRegular',    15, 5 ],

  [ 'ninja',                 5, 7 ],
  [ 'entityDoorExitSwitch', 17, 5 ],
  [ 'entityDoorExit',       21, 6 ],
]


// oh fuck im so dumb, we only need to do the math here!!!!
// fuck using math everywhere else! this will help readability a TON

// this will break if we try adding any others, so this only applies to sprite
// which i guess makes sense
// i reeeeeally don't like all this ! assertion
// but it's true, right? double-check!
export const entityCoordinates: [ string, number, number, number, number ][] = a.map(([ name, x, y ]) => {
  const spriteName = fileData[name].find(x => x.sprite)!.sprite
  const sprite = sprites[spriteName!]
  return [
    name,
    x * TILE_SIZE,
    y * TILE_SIZE,
    sprite.width,
    sprite.height
  ]
})

export default entityCoordinates
