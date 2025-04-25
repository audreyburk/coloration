export const menus: {
  [index: string]: {
    fileName: string;
    index: number;
    description?: string;
    space?: boolean;
  }[]
} = {
  // Entities
  'Background': [
    { fileName: 'background', index: 0 },
    { fileName: 'background', index: 1 },
    { fileName: 'background', index: 2 },
    { fileName: 'background', index: 5 },
  ],
  'Exit': [
    { fileName: 'entityDoorExit', index: 0 },
    { fileName: 'entityDoorExit', index: 1, space: true },
    { fileName: 'entityDoorExit', index: 2 },
    { fileName: 'entityDoorExit', index: 3, space: true },
    { fileName: 'entityDoorExit', index: 4 },
    { fileName: 'entityDoorExit', index: 5 },
  ],
  'Exit Switch': [
    { fileName: 'entityDoorExitSwitch', index: 0 },
    { fileName: 'entityDoorExitSwitch', index: 3 },
    { fileName: 'entityDoorExitSwitch', index: 1 },
    { fileName: 'entityDoorExitSwitch', index: 4 },
    { fileName: 'entityDoorExitSwitch', index: 2 },
  ],
  'Normal Door': [
    { fileName: 'entityDoorRegular', index: 0 },
  ],
  'Locked Door': [
    { fileName: 'entityDoorLocked', index: 0 },
    { fileName: 'entityDoorLocked', index: 1, space: true },
    { fileName: 'entityDoorLocked', index: 2 },
    { fileName: 'entityDoorLocked', index: 4 },
    { fileName: 'entityDoorLocked', index: 7, space: true },
    { fileName: 'entityDoorLocked', index: 3 },
    { fileName: 'entityDoorLocked', index: 5 },
    { fileName: 'entityDoorLocked', index: 6 },
  ],
  'Trap Door': [
    { fileName: 'entityDoorTrap', index: 0 },
    { fileName: 'entityDoorTrap', index: 1, space: true },
    { fileName: 'entityDoorTrap', index: 4 },
    { fileName: 'entityDoorTrap', index: 5, space: true },
    { fileName: 'entityDoorTrap', index: 6 },
    { fileName: 'entityDoorTrap', index: 7 },
  ],
  'Gold': [
    { fileName: 'entityGold', index: 0 },
    { fileName: 'entityGold', index: 1 },
    { fileName: 'entityGold', index: 2 },
  ],
  'Thwumps': [
    { fileName: 'entityThwomp', index: 0 },
    { fileName: 'entityThwomp', index: 1 },
    { fileName: 'entityThwomp', index: 2, space: true },
    { fileName: 'entityShoveThwomp', index: 0 },
    { fileName: 'entityShoveThwomp', index: 1 },
    { fileName: 'entityShoveThwomp', index: 2 },
  ],
  'Kindly Objects': [
    { fileName: 'entityBounceBlock',    index: 0 },
    { fileName: 'entityBounceBlock',    index: 1 , space:true},
    { fileName: 'entityOneWayPlatform', index: 0 },
    { fileName: 'entityOneWayPlatform', index: 1, space: true },
    { fileName: 'entityLaunchPad',      index: 0 },
    { fileName: 'entityLaunchPad',      index: 1, space: true },
    { fileName: 'entityBoostPad',       index: 0 },
    { fileName: 'entityBoostPad',       index: 1 },
  ],
  'Evil Ninja': [
    { fileName: 'entityEvilNinja', index: 0 },
    // we need a way to add informational segments
    // like, explaining the evil ninja's color without adding a color field
  ],
  'Zappy Drones': [
    { fileName: 'entityDroneZap', index: 0 },
    { fileName: 'entityDroneZap', index: 1, space: true },
    { fileName: 'entityDroneChaser', index: 0 },
    { fileName: 'entityDroneChaser', index: 1, space: true },
    { fileName: 'fxDroneZap', index: 0 },
    { fileName: 'fxDroneZap', index: 1 },
  ],
  'Chaingun': [
    { fileName: 'entityDroneChaingun', index: 0 },
    { fileName: 'entityDroneChaingun', index: 1 },
  ],
  'Deadly Balls': [
    { fileName: 'entityBat', index: 0 },
    { fileName: 'entityBat', index: 1 },
    { fileName: 'entityBat', index: 2, space: true },
    {
      fileName: 'entityEyeBat', // also editor stuff
      index: 0
    },
    {
      fileName: 'entityEyeBat',  // also editor stuff
      index: 1
    },
  ],
  'Mines': [
    { fileName: 'entityMine', index: 0 },
    { fileName: 'entityMine', index: 1, space: true },
    { fileName: 'entityMine', index: 2 },
    { fileName: 'entityMine', index: 3 },
  ],
  'Floorguard': [
    { fileName: 'entityFloorGuard', index: 0 },
    { fileName: 'entityFloorGuard', index: 1, space: true },
    { fileName: 'fxFloorguardZap', index: 0 },
    { fileName: 'fxFloorguardZap', index: 1 },
  ],
  'Lasers': [
    { fileName: 'entityDroneLaser', index: 2 },
    { fileName: 'entityDroneLaser', index: 0 },
    { fileName: 'entityDroneLaser', index: 1 },
    { fileName: 'entityDroneLaser', index: 3, space: true },
    { fileName: 'entityDualLaser',  index: 0 },
    { fileName: 'entityDualLaser',  index: 1 },
  ],
  'Gauss Turret': [
    { fileName: 'entityTurret', index: 0 },
    { fileName: 'entityTurret', index: 1 },
    { fileName: 'entityTurret', index: 2 },
    { fileName: 'entityTurret', index: 3 },
    { fileName: 'entityTurret', index: 4 },
  ],
  'Rocket Turret': [
    { fileName: 'entityRocket', index: 0 },
    { fileName: 'entityRocket', index: 1 },
    { fileName: 'entityRocket', index: 2 },
    { fileName: 'entityRocket', index: 3 },
    { fileName: 'explosions',   index: 0, description: 'Rocket flare.\nAlso: Fine explosion particles. (LINK ME)' },
  ],
  'Ninjas': [
    { fileName: 'ninja',      index: 0 },
    { fileName: 'ninja',      index: 1 },
    { fileName: 'ninja',      index: 2 },
    { fileName: 'ninja',      index: 3, space: true },
    { fileName: 'headbands',  index: 0 },
    { fileName: 'headbands',  index: 2 },
    { fileName: 'headbands',  index: 3 },
    { fileName: 'headbands',  index: 4 },
  ],
  'Ninja Effects': [
    { fileName: 'fxNinja',    index: 0 },
    { fileName: 'fxNinja',    index: 1, space: true },
    { fileName: 'explosions', index: 3, space: true },
    { fileName: 'explosions', index: 0 },
    { fileName: 'explosions', index: 1 },
    { fileName: 'explosions', index: 2 },
  ],
  'Time Bar': [
    { fileName: 'timeBar', index: 0 },
    { fileName: 'timeBar', index: 1 },
    { fileName: 'timeBar', index: 2 },
    { fileName: 'timeBar', index: 4 },
    { fileName: 'timeBar', index: 6 },
  ],
  'Objects Lower Text': [
    { fileName: 'menu', index: 28 },
    { fileName: 'menu', index: 4 },
    { fileName: 'menu', index: 10 },
  ],

  // Leaderboard + Episodes
  'Episode Grid': [
    {
      fileName: 'menu',
      index: 0,
      description: // we can make descriptions optional and only override fileNameData if it's present. seems most sensible.
        'Uncompleted episode background.' + '\n' +
        'ProfileName: Uncompleted episode.' + '\n' +
        'Editor: Level name when not being played. (show)'
    },
    // null,
    {
      fileName: 'menu',
      index: 1,
      // description:
      //   'Uncompleted episode background.' + '\n' +
      //   'ProfileName: Uncompleted episode.' + '\n' +
      //   'Editor: Level name when not being played. (show)'
    },
  ]
}

export default menus
