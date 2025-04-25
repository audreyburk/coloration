import { Field } from '../createPageTypes'

// having the sprites in fileData is REALLY DUMB
// there is not a color-to-sprite relationship, not like this
// we just need a sprites list that points to fileData/colors
// yeah, when we want to draw something, fileData should not be involved.

export const objects: { [index: string]: Field[] } = {
  background: [
    { text: 'Tiles' },
    { text: 'Tile outline. Underline in pause menu.' },
    { text: 'Background', sprite: 'outlineTester.png', outline: true },
    { text: '?' },
    { text: '?' },
    { text: 'Entity outline' }
  ],

  editor: [
    { text: 'Regular grid lines', sprite: 'editor0.png' },
    { text: '?' },
    { text: 'Fine grid lines', sprite: 'editor2.png' },
    { text: 'Rectangular tile selection and crosshair' },
    { text: 'Direction arrows for entity movement' },
    { text: 'Door-switch connections', sprite: 'editor5.png' },
    { text: 'Circular entity selection' },
    { text: 'Cut mode outline' },
    { text: 'Selected tile' },
    { text: '?' }
  ],

  explosions: [
    { text: 'Fine particles. Also: Rocket flare. (LINK ME?)' },
    { text: 'Light dust.' },
    { text: 'Heavy dust.' },
    { text: 'Blood.' }
  ],

  fxDroneZap: [
    { text: 'Zap effect, ray 1' },
    { text: 'Zap effect, ray 2' }
  ],

  fxFloorguardZap: [
    { text: 'Zap effect, ray 1' },
    { text: 'Zap effect, ray 2' }
  ],

  fxNinja: [
    { text: 'Jumping dust (usually higher-contrast)' },
    { text: 'Falling dust (usually lower-contrast)' }
  ],

  headbands: [
    { text: 'Headband, standard. \'Ready\' for player 1 in race mode (unless headband/ninja selection is shifted).' },
    { text: '?' },
    { text: 'Headband, x type' },
    { text: '?' },
    { text: 'Headband, y type' },
    { text: '?' },
    { text: 'Headband, z type' },
    { text: '?' },
    { text: '?' },
    { text: '?' },
    { text: '?' },
    { text: '?' },
    { text: '?' },
    { text: '?' },
    { text: '?' },
    { text: '?' },
    { text: '?' }
  ],

  menu: [
    { text: 'General UI background. Empty space when game doesn´t fit screen resolution.' },
    { text: 'Leaderboard: Background. Editor: Side panel background (darkened later).' },
    { text: 'Leaderboard: Other player´s scores, your rank (see 14, 17). Also, race options text. Editor side panel: Unselected text.' },
    { text: '\'Color / Music\' and \'Social\' menu panels background.' },
    { text: 'Main menu: Text, unselected (see 11). Help: Directional arrows. Also, uncompleted challenges (both requirements text and brackets) while playing the level (see 11, also see timeBarRace 1 and 2).' },
    { text: 'Uncompleted episode background (see 8). Profile: Uncompleted episode. Editor: Level name when not being played.' },
    { text: '?' },
    { text: 'Completed episode background (see 6). Profile: Completed episode.' },
    { text: 'Episode tabs background, unselected (see 13). + userlevel' },
    { text: 'Episode box outline (see 33).' },
    { text: 'Main menu: Text, selected (see 5). Logo color. Cursor color. Also, completed challenges (brackets) when playing the level (see 5, also see timeBarRace 1 and 2).' },
    { text: '?' },
    { text: 'Episode tabs background, selected (see 9).+ userlevel' },
    { text: 'Leaderboards: Other player´s names, your score (see 3, 17). Profile: Header text in side panel (see 15, 16).' },
    { text: 'Profile: Numbers and some text (see 14, 16). Options: Unselected text, scrollbar triangles, upper dividing line. Credits: Regular text. Story: Upper dividing line.' },
    { text: 'Profile: Remaining text and percentages (see 14, 15). Story: Text. Options: Selected text, little bar in scrollbar. Credits: Header text.' },
    { text: 'Leaderboards: Other player´s ranks, your name (see 3, 14). Also, messages that appear in the leaderboard (\'Server error\', \'Player 2 needed for score submission\', race options header, etc). Profile: Death count bars. Editor: Header text in side panel, messages when publishing, naming, etc. (not sure the editor stuff is true. maybe just the side panels)' },
    { text: '\'Color / Music\' and \'Social\' menus header text (see 30). The other text is the same, but more transparent.' },
    { text: 'Pause menu and editor panels unselected text (see 20).' },
    { text: 'Pause menu and editor panels selected text (see 19).' },
    { text: 'Pause menu and editor panels background.' },
    { text: 'Pause menu and editor panels outline.' },
    { text: 'Outline for selected episode / level / panel. Separator between level name and info. Level loading spiral. Scroll bar and its triangle in level view and in the editor level list. Also \'Server error\' when loading userlevels.' },
    { text: 'Uncompleted episode text (see 31).' },
    { text: 'Bottom info text (key controls, \'paint tiles\' in editor, etc.).' },
    { text: 'Leaderboard tabs background, unselected (see 27).' },
    { text: 'Leaderboard tabs background, selected (see 26).' },
    { text: 'Leaderboard tabs text.' },
    { text: 'Level name when playing.' },
    { text: '\'Color / Music\' selected option; \'Social\' menu option names (see 18).' },
    { text: 'Completed episode text (see 24).' },
    { text: 'Tabs text (episodes and userlevels), unselected (see 34).' },
    { text: 'Leaderboard entry selection box (see 10).' },
    { text: 'Tabs text (episodes and userlevels), selected (see 32). Sub-tab text, selected (e.g. \'By Date\' in the userlevels) (see 38).' },
    { text: 'Soundtrack name.' },
    { text: 'Level information text (level name, author, success rate...). Also, upper big header text in every submenu. Game messages: \'Press X to start replay\', \'Success!\', \'Oops!\', \'Press X to continue\', \'Press X to try again\', \'submitting...\', etc.' },
    { text: '?' },
    { text: 'Sub-tab text, unselected (e.g. \'By Date\' in the userlevels) (see 34).' },
    { text: 'Text after level / episode completion (\'Your Global Rank\', level times, etc.).' },
    { text: '?' },
    { text: 'Help menu header text.' },
    { text: 'Help menu text.' }
  ],

  timeBar: [
    { text: 'Time remaining.' },
    { text: 'Hardcore time gained.' },
    { text: 'Empty timebar.' },
    { text: '?' },
    { text: 'Numbers.' },
    { text: '?' },
    { text: 'Little triangle that separates both sections of the time bar. (tell audrey to add this)' },
    { text: '?' }
  ],

  timeBarRace: [
    { text: 'Text \'Player 2/3/4 press X\' in the menu. Uncompleted challenges (both requirements text and brackets) in level view (see menu 5 and 11).' },
    { text: 'Text \'Player 1\' in the menu (the \'ready\' is controlled by #3 in headbands.tga). Completed challenges (brackets) in level view (see menu 5 and 11).' },
    { text: 'Text \'Player 2 ready\' in the menu.' },
    { text: 'Text \'Player 3 ready\' in the menu.' },
    { text: 'Text \'Player 4 ready\' in the menu.' },
    { text: 'Player 1 timebar outline.' },
    { text: 'Player 1 timebar background.' },
    { text: 'Player 1 timebar numbers.' },
    { text: 'Player 2 timebar outline.' },
    { text: 'Player 2 timebar background.' },
    { text: 'Player 2 timebar numbers.' },
    { text: 'Player 3 timebar outline.' },
    { text: 'Player 3 timebar background.' },
    { text: 'Player 3 timebar numbers.' },
    { text: 'Player 4 timebar outline.' },
    { text: 'Player 4 timebar background.' },
    { text: 'Player 4 timebar numbers.' }
  ],

  ninja: [
    { text: 'Ninja 1. Also, replay inputs.', sprite: 'ninja0.png', outline: true },
    { text: 'Ninja 2.', sprite: 'ninja1.png', outline: true },
    { text: 'Ninja 3.', sprite: 'ninja2.png', outline: true },
    { text: 'Ninja 4.', sprite: 'ninja3.png', outline: true }
  ],

  entityMine: [
    { text: 'Mine exterior.', sprite: 'entityMine0.png', outline: true },
    { text: 'Mine interior.', sprite: 'entityMine1.png' },
    { text: 'Toggle mine.', sprite: 'entityMine2.png', outline: true },
    { text: 'Toggle mine (toggling).', sprite: 'entityMine3.png', outline: true }
  ],

  entityGold: [
    { text: 'Gold interior.', sprite: 'entityGold0.png' },
    { text: 'Gold exterior. Golden blood color.', sprite: 'entityGold1.png', outline: true },
    { text: 'Gold shine.', sprite: 'entityGold2.png' }
  ],

  entityDoorExit: [
    { text: 'Exit panels.', sprite: 'entityDoorExit0.png' },
    { text: 'Exit border.', sprite: 'entityDoorExit1.png', outline: true },
    { text: 'Opened exit, upper.', sprite: 'entityDoorExit2.png' },
    { text: 'Opened exit, lower.', sprite: 'entityDoorExit3.png' },
    { text: 'Opened exit, upper, after challenge.', sprite: 'entityDoorExit4.png' },
    { text: 'Opened exit, lower, after challenge.', sprite: 'entityDoorExit5.png' },
    { text: '[!?] text in episode view.', sprite: 'entityDoorExit6.png' },
    { text: '[!?] text in level view.', sprite: 'entityDoorExit7.png' }
  ],

  entityDoorExitSwitch: [
    { text: 'Exit switch border.', sprite: 'entityDoorExitSwitch0.png', outline: true },
    { text: 'Exit switch border (collected).', sprite: 'entityDoorExitSwitch1.png', outline: true },
    { text: 'Exit switch center (collected and not).', sprite: 'entityDoorExitSwitch2.png' },
    { text: 'Exit switch background.', sprite: 'entityDoorExitSwitch3.png' },
    { text: 'Exit switch background (collected).', sprite: 'entityDoorExitSwitch4.png' }
  ],

  entityDoorRegular: [
    { text: 'Regular door.', sprite: '05-0.png' }
  ],

  entityDoorLocked: [
    { text: 'Locked door bar.', sprite: '06-0.png' },
    { text: 'Locked door center.', sprite: '06-1.png' },
    { text: 'Switch button.', sprite: '07-0.png' },
    { text: 'Switch button (collected).', sprite: '07-0b.png' },
    { text: 'Switch border.', sprite: '07-1.png' },
    { text: 'Switch border (collected).', sprite: '07-1b.png' },
    { text: 'Switch background (collected).', sprite: '07-4b.png' },
    { text: 'Switch background.', sprite: '07-4.png' }
  ],

  entityDoorTrap: [
    { text: 'Trap door bar.', sprite: '08-1.png' },
    { text: 'Trap door bulges.', sprite: '08-2.png' },
    { text: '?' },
    { text: '?' },
    { text: 'Untoggled switch border.', sprite: '09-2.png' },
    { text: 'Toggled switch border.', sprite: '09-2b.png' },
    { text: 'Untoggled switch background.', sprite: '09-4.png' },
    { text: 'Toggled switch background.', sprite: '09-4b.png' }
  ],

  entityLaunchPad: [
    { text: 'Launchpad long pad.', sprite: '0A-0.png' },
    { text: 'Launchpad short pad.', sprite: '0A-1.png' }
  ],

  entityOneWayPlatform: [
    { text: 'Oneway platform long platform.', sprite: '0B-0.png' },
    { text: 'Oneway platform short platform.', sprite: '0B-1.png' }
  ],

  entityDroneChaingun: [
    { text: 'Chaingun drone background.', sprite: '0C-0.png' },
    { text: 'Chaingun drone border, chaingun bullets.', sprite: '0C-1.png' }
  ],

  entityDroneLaser: [
    { text: 'Laser drone interior while firing. Also, laser 1.' },
    { text: 'Laser drone laser 2.' },
    { text: 'Laser drone border.', sprite: '0D-2.png' },
    { text: 'Laser drone aiming line.' }
  ],

  entityDroneZap: [
    { text: 'Zap drone and minidrone background.', sprite: '0E-0.png' },
    { text: 'Zap drone and minidrone border.', sprite: '0E-1.png' }
  ],

  entityDroneChaser: [
    { text: 'Chaser drone background.', sprite: '0F-0.png' },
    { text: 'Chaser drone border.', sprite: '0F-1.png' }
  ],

  entityFloorGuard: [
    { text: 'Floorguard main color.', sprite: '10-0.png' },
    { text: 'Floorguard eye.', sprite: '10-1.png' }
  ],

  entityBounceBlock: [
    { text: 'Bounceblock interior.', sprite: '11-0.png' },
    { text: 'Bounceblock border.', sprite: '11-1.png' }
  ],

  entityRocket: [
    { text: 'Rocket turret center.', sprite: '12-0.png' },
    { text: 'Rocket turret border.', sprite: '12-1.png' },
    { text: 'Rocket color.' },
    { text: 'Rocket fumes.' }
  ],

  entityTurret: [
    { text: 'Turret center dot.', sprite: '13-0.png' },
    { text: 'Turret exterior.', sprite: '13-1.png' },
    { text: 'Crosshairs.' },
    { text: 'Bullet.' },
    { text: 'Squiggly lines.' }
  ],

  entityThwomp: [
    { text: 'Thwump border.', sprite: 'entityThwomp0.png' },
    { text: 'Thwump interior.', sprite: 'entityThwomp1.png' },
    { text: 'Thwump ray.', sprite: 'entityThwomp2.png' }
  ],

  entityEvilNinja: [
    { text: 'Evil ninja spawn.', sprite: 'entityEvilNinja0.png' },
    { text: 'Evil ninja.' }
  ],

  entityDualLaser: [
    { text: 'Laser turrets turret.', sprite: 'entityDualLaser0.png' },
    { text: 'Laser turrets laser.', sprite: 'entityDualLaser1.png' }
  ],

  entityBoostPad: [
    { text: 'Boost pad (inactive).', sprite: '18-0.png' },
    { text: 'Boost pad (active).', sprite: '18-0b.png' }
  ],

  entityBat: [
    { text: 'Deathball inner dot. Part of deathball´s zap.', sprite: '19-0.png' },
    { text: 'Deathball middle circle. Part of deathball´s zap.', sprite: '19-1.png' },
    { text: 'Deathball outer circle.', sprite: '19-2.png' }
  ],

  entityEyeBat: [
    { text: 'Mini background. Editor: QWEASD letters.', sprite: '1A-1.png' },
    { text: 'Mini eye (gets merged with the background). Editor: Entity menu hotkeys.', sprite: '1A-0.png' }
  ],

  entityShoveThwomp: [
    { text: 'Shove thwump center.', sprite: '1C-0.png' },
    { text: 'Shove thwump ray.', sprite: '1C-1.png' },
    { text: 'Shove thwump armor.', sprite: '1C-2.png' }
  ]
}

// export function cget(filename, indices) {
//   const file = objects[filename]
//   if (!indices) {
//     return file
//   }
//   return indices.map(i => file[i])
// }

export default objects
