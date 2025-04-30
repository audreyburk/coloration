export const objects: { [index: string]: string[] } = {
  background: [
    'Tiles',
    '<objects> Tile outline.\n' +
      '<ingame> Underline in pause menu.',
    'Background',
    '?',
    '?',
    'Entity outline',
  ],

  editor: [
    'Regular grid lines',
    '?',
    'Fine grid lines',
    'Rectangular tile selection and crosshair',
    'Direction arrows for entity movement',
    'Door-switch connections',
    'Circular entity selection',
    'Cut mode outline',
    'Selected tile',
    '?',
  ],

  explosions: [
    'Fine particles.\n' +
      'Rocket flare.',
    'Thin dust.',
    'Fat dust.',
    'Blood.',
  ],

  fxDroneZap: [
    'Zap effect, ray 1',
    'Zap effect, ray 2',
  ],

  fxFloorguardZap: [
    'Zap effect, ray 1',
    'Zap effect, ray 2',
  ],

  fxNinja: [
    'Jumping dust (usually higher-contrast)',
    'Falling dust (usually lower-contrast)',
  ],

  headbands: [
    '<objects> Headband, standard.\n' +
      '<episodes> Episode Grid: "Ready" for Player 1 (unless headband/ninja selection is shifted).',
    '?',
    'Headband, X type',
    '?',
    'Headband, Y type',
    '?',
    'Headband, Z type',
    '?',
    '?',
    '?',
    '?',
    '?',
    '?',
    '?',
    '?',
    '?',
    '?',
  ],

  menu: [
    'General UI background. Empty space when game doesn´t fit screen resolution.',
    'Leaderboard background.\n' +
      '(np) Editor: Side panel background (darkened later).',
    'Leaderboard: Other players´ scores, your rank.\n' +
      '(np) Race options text.\n' +
      '(np) Editor side panel: Unselected text.',
    'Panel background.',
    '<menus> Main menu: Text, unselected.\n' +
      '<ingame> Uncompleted challenges (requirements and brackets) while playing.\n' +
      '<episodes> Episode Grid: N++ deathless time\n' +
      '(np) Help: Directional arrows.\n',
    '<episodes> Uncompleted episode background.\n' +
      '<editor> Editor: Level name when not being played.\n' +
      '(np) Profile: Uncompleted episode.',
    '?',
    'Completed episode background.\n' +
      '(np) Profile: Completed episode.',
    'Tabs background, unselected (Episode Grid and Level List)',
    'Episode box outline.',
    '<menus> Main menu: Text, selected.\n' +
      '<ingame> In Game: Completed challenges (brackets).\n' +
      '<episodes> Episode Grid: N++ deathless label\n' +
      '(np) Logo color. Cursor color.',
    '?',
    'Tabs background, selected (Episode Grid and Level List)',
    'Other players´ names, your score.\n' +
      '(np) Profile: Header text in Badges/Killcount panel.',
    'Profile: Numbers and some text.\n' +
      '(np) Options: Unselected text, scrollbar triangles, upper dividing line.\n' +
      '(np) Credits: Regular text.\n' +
      '(np) Story: Upper dividing line.',
    'Profile: Remaining text and percentages.\n' +
      '(np) Story: Text.\n' +
      '(np) Options: Selected text, little bar in scrollbar.\n' +
      '(np) Credits: Header text.',
    'Other players´ ranks, your name, and messages ("Server error", etc.).\n' +
      '(np) Race Options header\n' +
      '(np) Profile: Death count bars.\n' +
      '(np) Editor: Header text in side panel, messages when publishing, naming, etc. (not sure this is true; might just be the side panels)',
    'Header text and main text. Non-selected Colour menus are the same but slightly transparent (np).',
    'Text.',
    'Selected text.',
    'Background.',
    'Outline.',
    '<episodes> Episode Grid: Selected episode cursor. Selected panel (np).\n' +
      '<levels> Level List: Selected level cursor. Level name underline. Scrollbar.\n' +
      '(np) Browse loading spiral and "Server error".\n' +
      '(np) Editor level list scrollbar.',
    'Uncompleted episode text.',
    'Bottom info text:\n' +
      '<levels> hotkeys in menus \n' +
      '<editor> edit mode & active entity in editor',
    'Leaderboard tabs background, unselected.',
    'Leaderboard tabs background, selected.',
    'Leaderboard tabs text.',
    'Level name when playing.',
    'Social commands. Color/Music selected option (np).',
    'Completed episode text.',
    'Tabs text, unselected (Episode Grid and Level List)',
    'Leaderboard entry selection box.',
    'Tabs text, selected (Episode Grid and Level List)',
    'Soundtrack name.',
    '<levels> Level information text (level name, author, etc.).\n' +
      '<levels> Big header text in every submenu.\n' +
      '<ingame> Game messages: "Press X to start replay", "Success!", "Oops!", "Press X to continue", etc.',
    '?',
    'Subtab text, unselected.',
    'Text after level/episode completion ("Your Global Rank", level times, etc.).',
    '?',
    'Help menu header text.',
    'Help menu text.',
  ],

  timeBar: [
    'Time remaining.',
    'Hardcore time gained.',
    'Empty timebar.',
    '?',
    'Numbers.',
    '?',
    '?',
    '?',
  ],

  timeBarRace: [
    '<episodes> Episode Grid: "Player 5 press U".\n' +
      '<levels> Level List: Uncompleted challenges.',
    '<episodes> Episode Grid: "Player 1".\n' +
      '<levels> Level List: Completed challenges (brackets).',
    '"Player 2 Ready".',
    '"Player 3 Ready".',
    '"Player 4 Ready".',
    'Player 1 timebar.',
    'Player 1 timebar bonus time.',
    'Player 1 timebar numbers.',
    'Player 2 timebar.',
    'Player 2 timebar bonus time.',
    'Player 2 timebar numbers.',
    'Player 3 timebar.',
    'Player 3 timebar bonus time.',
    'Player 3 timebar numbers.',
    'Player 4 timebar.',
    'Player 4 timebar bonus time.',
    'Player 4 timebar numbers.',
  ],

  ninja: [
    'Ninja. Also, replay inputs.',
    'Ninja, A type.',
    'Ninja, B type.',
    'Ninja, C type.',
  ],

  entityMine: [
    'Mine exterior.',
    'Mine interior.',
    'Toggle mine.',
    'Toggle mine (toggling).',
  ],

  entityGold: [
    'Gold interior.',
    'Gold exterior. Golden blood color.',
    'Gold shine.',
  ],

  entityDoorExit: [
    'Exit panels.',
    'Exit border.',
    'Opened exit, upper.',
    'Opened exit, lower.',
    'Opened exit, upper (after challenge).',
    'Opened exit, lower (after challenge).',
    '[!?] challenge indicators.',
    '[!?] challenge indicators and ++s.',
  ],

  entityDoorExitSwitch: [
    'Exit switch border.',
    'Exit switch border (collected).',
    'Exit switch center (collected and not).',
    'Exit switch background.',
    'Exit switch background (collected).',
  ],

  entityDoorRegular: [
    'Normal door.',
  ],

  entityDoorLocked: [
    'Locked door bar.',
    'Locked door center.',
    'Switch button.',
    'Switch button (collected).',
    'Switch border.',
    'Switch border (collected).',
    'Switch background (collected).',
    'Switch background.',
  ],

  entityDoorTrap: [
    'Trap door bar.',
    'Trap door bulges.',
    '?',
    '?',
    'Switch border.',
    'Switch border (collected).',
    'Switch background.',
    'Switch background (collected) (usually background color).',
  ],

  entityLaunchPad: [
    'Launchpad long pad.',
    'Launchpad short pad.',
  ],

  entityOneWayPlatform: [
    'Oneway long platform.',
    'Oneway short platform.',
  ],

  entityDroneChaingun: [
    'Chaingun drone background.',
    'Chaingun drone border, chaingun bullets.',
  ],

  entityDroneLaser: [
    'Laser drone interior while firing. Also, laser 1.',
    'Laser drone laser 2.',
    'Laser drone border.',
    'Laser drone aiming line.',
  ],

  entityDroneZap: [
    'Zap drone and minidrone background.',
    'Zap drone and minidrone border.',
  ],

  entityDroneChaser: [
    'Chase drone background.',
    'Chase drone border.',
  ],

  entityFloorGuard: [
    'Floorguard body.',
    'Floorguard eye.',
  ],

  entityBounceBlock: [
    'Bounceblock interior.',
    'Bounceblock border.',
  ],

  entityRocket: [
    'Rocket turret center.',
    'Rocket turret border.',
    'Rocket color.',
    'Rocket fumes.',
  ],

  entityTurret: [
    'Turret center dot.',
    'Turret exterior.',
    'Crosshairs.',
    'Bullet.',
    'Squiggly lines.',
  ],

  entityThwomp: [
    'Thwump border.',
    'Thwump interior.',
    'Thwump ray.',
  ],

  entityEvilNinja: [
    'Evil ninja spawner.',
    '?',
  ],

  entityDualLaser: [
    'Laser turret turret.',
    'Laser turret laser.',
  ],

  entityBoostPad: [
    'Boost pad.',
    'Boost pad (whooshing).',
  ],

  entityBat: [
    'Deathball inner dot. Part of deathball´s zap.',
    'Deathball middle circle. Part of deathball´s zap.',
    'Deathball outer circle.',
  ],

  entityEyeBat: [
    '<objects> Mini body.\n' +
      '(np) Editor: QWEASD letters.',
    '<objects> Mini eye (must be lighter than body).\n' +
      '<editor> Editor: Entity menu hotkeys.',
  ],

  entityShoveThwomp: [
    'Shove thwump center.',
    'Shove thwump ray.',
    'Shove thwump armor.',
  ]
}

export default objects
