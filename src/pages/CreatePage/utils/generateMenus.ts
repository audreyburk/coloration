import Color from 'color'

// TODO: editor lines are HORRIBLE with background #010103

function pick(base: string, ...rest: string[] ): string {
  const baseC = Color(base)
  if (!rest[0]) {
    return '#000000'
  }
  return rest.sort((a, b) => {
    return baseC.contrast(Color(a)) - baseC.contrast(Color(b))
  }).pop()!
}

export function generateMenus(colors: { [index: string]: string[] }) {
  const newColors = structuredClone(colors)

  // tile color -> menu background
  newColors.menu[0] = colors.background[0]

  const leaderboardColor = colors.background[2]
  newColors.menu[1] = leaderboardColor // leaderboard background
  newColors.menu[7] = leaderboardColor // episode background, completed

  // tile outline -> episode outline
  newColors.menu[9] = colors.background[1] // episode outline

  // main time bar -> tabs background
  const tabColor = colors.timeBar[0]
  newColors.menu[8] =           tabColor // main tabs
  newColors.menu[25] =          tabColor // leaderboard tabs
  newColors.entityDoorExit[6] = tabColor // [!?]

  // hc timebar -> selected tab & incomplete episodes
  newColors.menu[12] = colors.timeBar[1] // selected tab
  newColors.menu[26] = colors.timeBar[1] // selected leaderboard tab
  newColors.menu[5] =  colors.timeBar[1] // selected leaderboard tab

  // tab text = time bar text
  const timebarText = colors.timeBar[4]
  newColors.menu[31] = timebarText // unselected
  newColors.menu[33] = timebarText // selected
  newColors.menu[27] = timebarText // leaderboard (both)
  newColors.menu[23] = timebarText // episode, uncompleted

  // ninja color -> completed tab text
  newColors.menu[30] = colors.ninja[0]

  // bottom [!?] -> selectors & level view brackets
  newColors.menu[22] =          colors.menu[10] // general selector
  newColors.menu[32] =          colors.menu[10] // leaderboard selector
  newColors.timeBarRace[1] =    colors.menu[10] // "Player 1"
  newColors.entityDoorExit[7] = colors.menu[10] // level view [!?]

  // in-game lower text ->  Press U & level details & subtab text
  newColors.timeBarRace[0] = colors.menu[28]
  newColors.menu[35] =       colors.menu[28] // episode/level information
  newColors.menu[37] =       colors.menu[28] // subtab text

  // ninja colors -> Player X Ready
  newColors.timeBarRace[2] = colors.ninja[1]
  newColors.timeBarRace[3] = colors.ninja[2]
  newColors.timeBarRace[4] = colors.ninja[3]

  // explosion colors -> leaderboard text
  newColors.menu[16] = colors.explosions[0]
  newColors.menu[2] =  colors.explosions[1]
  newColors.menu[13] = colors.explosions[2]

  // bottom text: lighter or darker tile color
  const a = Color(colors.background[0])
  const b = a.lightness(a.lightness() + (a.isLight() ? -20 : 20))
  newColors.menu[24] = b.hex()

  // ninja colors -> race timebar colors
  const c = Color(colors.ninja[0])
  newColors.timeBarRace[5] = colors.ninja[0]
  newColors.timeBarRace[6] = c.lightness(c.lightness() + (c.isLight() ? -20 : 20)).hex()
  newColors.timeBarRace[7] = c.isLight() ? '#000000' : '#FFFFFF'

  const d = Color(colors.ninja[1])
  newColors.timeBarRace[8] = colors.ninja[1]
  newColors.timeBarRace[9] = d.lightness(d.lightness() + (d.isLight() ? -20 : 20)).hex()
  newColors.timeBarRace[10] = d.isLight() ? '#000000' : '#FFFFFF'

  const e = Color(colors.ninja[2])
  newColors.timeBarRace[11] = colors.ninja[2]
  newColors.timeBarRace[12] = e.lightness(e.lightness() + (e.isLight() ? -20 : 20)).hex()
  newColors.timeBarRace[13] = e.isLight() ? '#000000' : '#FFFFFF'

  const f = Color(colors.ninja[3])
  newColors.timeBarRace[14] = colors.ninja[3]
  newColors.timeBarRace[15] = f.lightness(f.lightness() + (f.isLight() ? -20 : 20)).hex()
  newColors.timeBarRace[16] = f.isLight() ? '#000000' : '#FFFFFF'

  // mine color -> shift & pause menu background
  newColors.menu[3] =  colors.entityMine[0] // shift
  newColors.menu[20] = colors.entityMine[0] // pause

  // background -> shift & pause menu text
  newColors.menu[17] = colors.background[2] // shift
  newColors.menu[18] = colors.background[2] // pause
  newColors.menu[21] = colors.background[2] // pause outline

  // shift & pause menu highlights
  const g = pick(
    colors.entityMine[0],
    colors.background[0],
    colors.background[1],
    colors.entityMine[1]
  )
  newColors.menu[29] = g // shift
  newColors.menu[19] = g // pause

  // shift & pause menu soundtrack
  newColors.menu[34] = colors.entityGold[1]

  // in-game messages
  newColors.menu[38] = colors.menu[4]

  // editor lines
  const h = Color(colors.background[2])
  const light = h.lightness()
  const delta = 0.5 * (light > 40 ? -1 : 1)
  let i = h

  while (h.contrast(i) < 1.2) {
    i = i.lightness(i.lightness() + delta)
  }
  newColors.editor[2] = i.hex()

  while (h.contrast(i) < 1.5) {
    i = i.lightness(i.lightness() + delta)
  }
  newColors.editor[0] = i.hex()

  // rocket fumes -> door-switch lines
  newColors.editor[5] = colors.entityRocket[3]

  // best headband -> editor selections cursor
  const j = pick(
    colors.background[2],
    colors.headbands[0],
    colors.headbands[2],
    colors.headbands[4],
    colors.headbands[6]
  )
  newColors.editor[3] = j // selection cursor
  newColors.editor[4] = j // arrow
  newColors.editor[6] = j // circle
  newColors.editor[7] = j // object highlights

  // toggle mine toggling -> copied tiles
  newColors.editor[8] = colors.entityMine[3]

  // mai menu colors -> profile colors & help colors
  newColors.menu[14] = colors.menu[10] // profile
  newColors.menu[15] = colors.menu[4] // profile
  newColors.menu[40] = colors.menu[10] // help
  newColors.menu[41] = colors.menu[4] // help

  return newColors
}

export default generateMenus
