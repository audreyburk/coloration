export const spriteData: {
  [index: string]: {
    width?: number;
    height?: number;
    layers: [ string, string, number ][];
  }
} = {
  blood: {
    width: 113,
    height: 132,
    layers: [
      [ 'blood-0.png', 'explosions', 3 ],
      [ 'blood-1.png', 'ninja', 0 ]
    ]
  },
  bloodGolden: {
    width: 113,
    height: 132,
    layers: [
      [ 'blood-0.png', 'entityGold', 1 ],
      [ 'blood-1.png', 'ninja', 0 ]
    ]
  },
  booster: {
    layers: [
      [ 'booster-0.png', 'entityBoostPad', 0 ]
    ]
  },
  boosterActive: {
    layers: [
      [ 'booster-0.png', 'entityBoostPad', 1 ]
    ]
  },
  bounceBlock: {
    layers: [
      [ 'bounce-block-0.png', 'entityBounceBlock', 0 ],
      [ 'bounce-block-1.png', 'entityBounceBlock', 1 ],
    ]
  },
  chaingunDrone: {
    layers: [
      [ 'chaingun-0.png', 'entityDroneChaingun', 0 ],
      [ 'chaingun-1.png', 'entityDroneChaingun', 1 ],
    ]
  },
  chaseDrone: {
    layers: [
      [ 'chase-drone-0.png', 'entityDroneChaser', 0 ],
      [ 'chase-drone-1.png', 'entityDroneChaser', 1 ],
    ]
  },
  deathball: {
    layers: [
      [ 'deathball-0.png', 'entityBat', 0 ],
      [ 'deathball-1.png', 'entityBat', 1 ],
      [ 'deathball-2.png', 'entityBat', 2 ],
    ]
  },
  editorArrow: {
    width: 26,
    height: 56,
    layers: [
      [ 'editor-arrow-0.png', 'editor', 4 ],
    ]
  },
  editorOutline: {
    width: 88,
    height: 44,
    layers: [
      [ 'editor-outline-0.png', 'editor', 7 ],
    ]
  },
  evilNinja: {
    layers: [
      [ 'evil-ninja-0.png', 'entityEvilNinja', 0 ],
    ]
  },
  evilNinjaNinja: {
    layers: [
      [ 'evil-ninja-ninja-0.png', 'ninja', 0 ],
    ],
  },
  exit: {
    width: 48,
    layers: [
      [ 'exit-0.png', 'entityDoorExit', 0 ],
      [ 'exit-1.png', 'entityDoorExit', 1 ],
    ]
  },
  // these sprites (and maybe the one above) are actually a bit off, redo?
  exitOpen: {
    width: 92,
    layers: [
      [ 'exit-open-0.png', 'entityDoorExit', 0 ],
      [ 'exit-open-1.png', 'entityDoorExit', 1 ],
      [ 'exit-open-2.png', 'entityDoorExit', 2 ],
      [ 'exit-open-3.png', 'entityDoorExit', 3 ],
    ]
  },
  exitChallenge: {
    width: 92,
    layers: [
      [ 'exit-open-0.png', 'entityDoorExit', 0 ],
      [ 'exit-open-1.png', 'entityDoorExit', 1 ],
      [ 'exit-open-2.png', 'entityDoorExit', 4 ],
      [ 'exit-open-3.png', 'entityDoorExit', 5 ],
    ]
  },
  exitSwitch: {
    layers: [
      [ 'exit-switch-0.png', 'entityDoorExitSwitch', 2 ],
      [ 'exit-switch-1.png', 'entityDoorExitSwitch', 3 ],
      [ 'exit-switch-2.png', 'entityDoorExitSwitch', 0 ],
    ]
  },
  exitSwitchCollected: {
    layers: [
      [ 'exit-switch-collected-0.png', 'entityDoorExitSwitch', 2 ],
      [ 'exit-switch-collected-1.png', 'entityDoorExitSwitch', 4 ],
      [ 'exit-switch-2.png',           'entityDoorExitSwitch', 1 ],
    ]
  },
  explosion: {
    width: 372,
    height: 346,
    layers: [
      [ 'explosion-4.png', 'ninja', 0 ],
      [ 'explosion-0.png', 'explosions', 0 ],
      [ 'explosion-1.png', 'explosions', 1 ],
      [ 'explosion-2.png', 'explosions', 2 ],
      [ 'explosion-3.png', 'explosions', 3 ],
    ]
  },
  explosionRocket: {
    width: 144,
    height: 124,
    layers: [
      [ 'explosion-rocket-0.png', 'explosions', 1 ],
      [ 'explosion-rocket-1.png', 'explosions', 2 ],
    ]
  },
  floorguard: {
    layers: [
      [ 'floorguard-0.png', 'entityFloorGuard', 0 ],
      [ 'floorguard-1.png', 'entityFloorGuard', 1 ],
    ]
  },
  floorguardZapping: {
    width: 132,
    height: 46,
    layers: [
      [ 'floorguard-zapping-0.png', 'entityFloorGuard', 0 ],
      [ 'floorguard-zapping-1.png', 'entityFloorGuard', 1 ],
      [ 'floorguard-zapping-2.png', 'fxFloorguardZap', 0 ],
      [ 'floorguard-zapping-3.png', 'fxFloorguardZap', 1 ],
    ]
  },
  gaussTurret: {
    layers: [
      [ 'gauss-turret-0.png', 'entityTurret', 0 ],
      [ 'gauss-turret-1.png', 'entityTurret', 1 ],
    ]
  },
  gaussTurretFiring: {
    height: 176,
    layers: [
      [ 'gauss-turret-firing-0.png', 'entityTurret', 0 ],
      [ 'gauss-turret-firing-1.png', 'entityTurret', 1 ],
      [ 'gauss-turret-firing-2.png', 'entityTurret', 4 ],
      [ 'gauss-turret-firing-3.png', 'entityTurret', 3 ],
    ]
  },
  gaussTurretAiming: {
    height: 176,
    layers: [
      [ 'gauss-turret-firing-0.png', 'entityTurret', 0 ],
      [ 'gauss-turret-firing-1.png', 'entityTurret', 1 ],
      [ 'gauss-turret-aiming-0.png', 'entityTurret', 2 ],
    ]
  },
  gold: {
    layers: [
      [ 'gold-0.png', 'entityGold', 0 ],
      [ 'gold-1.png', 'entityGold', 1 ],
      [ 'gold-2.png', 'entityGold', 2 ],
    ]
  },
  groundDust: {
    width: 64,
    height: 54,
    layers: [
      [ 'ground-dust-0.png', 'fxNinja', 0 ],
      [ 'ground-dust-1.png', 'fxNinja', 1 ],
      [ 'ground-dust-2.png', 'ninja', 0 ],
    ]
  },
  headband: {
    width: 112,
    height: 50,
    layers: [
      [ 'headband-0.png', 'headbands', 0 ],
    ]
  },
  headbandX: {
    width: 112,
    height: 50,
    layers: [
      [ 'headband-0.png', 'headbands', 2 ],
    ]
  },
  headbandY: {
    width: 112,
    height: 50,
    layers: [
      [ 'headband-0.png', 'headbands', 4 ],
    ]
  },
  headbandZ: {
    width: 112,
    height: 50,
    layers: [
      [ 'headband-0.png', 'headbands', 6 ],
    ]
  },
  laserDrone: {
    layers: [
      [ 'laser-drone-0.png', 'entityDroneLaser', 2 ],
    ]
  },
  laserDroneAiming: {
    height: 176,
    layers: [
      [ 'laser-drone-aiming-0.png', 'entityDroneLaser', 0 ],
      [ 'laser-drone-aiming-1.png', 'entityDroneLaser', 2 ],
      [ 'laser-drone-aiming-2.png', 'entityDroneLaser', 3 ],
    ]
  },
  laserDroneFiring: {
    height: 176,
    layers: [
      [ 'laser-drone-firing-0.png', 'entityDroneLaser', 0 ],
      [ 'laser-drone-firing-1.png', 'entityDroneLaser', 2 ],
      [ 'laser-drone-firing-2.png', 'entityDroneLaser', 1 ],
    ]
  },
  laserTurret: {
    layers: [
      [ 'laser-turret-0.png', 'entityDualLaser', 0 ],
    ]
  },
  laserTurretFiring: {
    height: 176,
    layers: [
      [ 'laser-turret-firing-0.png', 'entityDualLaser', 0 ],
      [ 'laser-turret-firing-1.png', 'entityDualLaser', 1 ],
    ]
  },
  launchpad: {
    layers: [
      [ 'launchpad-0.png', 'entityLaunchPad', 0 ],
      [ 'launchpad-1.png', 'entityLaunchPad', 1 ],
    ]
  },
  lockedDoor: {
    layers: [
      [ 'locked-door-0.png', 'entityDoorLocked', 0 ],
      [ 'locked-door-1.png', 'entityDoorLocked', 1 ],
    ]
  },
  lockedDoorSwitch: {
    layers: [
      [ 'locked-door-switch-0.png', 'entityDoorLocked', 2 ],
      [ 'locked-door-switch-1.png', 'entityDoorLocked', 4 ],
      [ 'locked-door-switch-2.png', 'entityDoorLocked', 7 ],
    ]
  },
  lockedDoorSwitchCollected: {
    layers: [
      [ 'locked-door-switch-0.png', 'entityDoorLocked', 3 ],
      [ 'locked-door-switch-1.png', 'entityDoorLocked', 5 ],
      [ 'locked-door-switch-2.png', 'entityDoorLocked', 6 ],
    ]
  },
  mine: {
    layers: [
      [ 'mine-0.png', 'entityMine', 0 ],
      [ 'mine-1.png', 'entityMine', 1 ],
    ]
  },
  mini: {
    layers: [
      [ 'mini-0.png', 'entityEyeBat', 0 ],
    ]
  },
  miniActive: {
    layers: [
      [ 'mini-0.png',        'entityEyeBat', 0 ],
      [ 'mini-active-0.png', 'entityEyeBat', 1 ],
    ]
  },
  miniDrone: {
    layers: [
      [ 'mini-drone-0.png', 'entityDroneZap', 0 ],
      [ 'mini-drone-1.png', 'entityDroneZap', 1 ],
    ]
  },
  ninja: {
    layers: [
      [ 'ninja-0.png', 'ninja', 0 ],
    ]
  },
  ninjaA: {
    layers: [
      [ 'ninja-0.png', 'ninja', 1 ],
    ]
  },
  ninjaB: {
    layers: [
      [ 'ninja-0.png', 'ninja', 2 ],
    ]
  },
  ninjaC: {
    layers: [
      [ 'ninja-0.png', 'ninja', 3 ],
    ]
  },
  normalDoor: {
    layers: [
      [ 'normal-door-0.png', 'entityDoorRegular', 0 ],
    ]
  },
  oneway: {
    layers: [
      [ 'oneway-0.png', 'entityOneWayPlatform', 0 ],
      [ 'oneway-1.png', 'entityOneWayPlatform', 1 ],
    ]
  },
  rocketTurret: {
    layers: [
      [ 'rocket-turret-0.png', 'entityRocket', 0 ],
      [ 'rocket-turret-1.png', 'entityRocket', 1 ],
    ]
  },
  rocket: {
    width: 484,
    height: 118,
    layers: [
      [ 'rocket-0.png',       'entityRocket', 2 ],
      [ 'rocket-trail-0.png', 'entityRocket', 3 ],
      [ 'rocket-flare-0.png', 'explosions', 0 ],
    ]
  },
  shoveThwump: {
    width: 50,
    height: 50,
    layers: [
      [ 'shove-thwump-0.png', 'entityShoveThwomp', 0 ],
      [ 'shove-thwump-1.png', 'entityShoveThwomp', 1 ],
      [ 'shove-thwump-2.png', 'entityShoveThwomp', 2 ],
    ]
  },
  thwump: {
    layers: [
      [ 'thwump-0.png', 'entityThwomp', 0 ],
      [ 'thwump-1.png', 'entityThwomp', 1 ],
      [ 'thwump-2.png', 'entityThwomp', 2 ],
    ]
  },
  toggleMine: {
    layers: [
      [ 'toggle-mine-0.png', 'entityMine', 2 ]
    ]
  },
  toggleMineToggling: {
    layers: [
      [ 'toggle-mine-0.png', 'entityMine', 3 ]
    ]
  },
  trapDoor: {
    layers: [
      [ 'trap-door-0.png', 'entityDoorTrap', 0 ],
      [ 'trap-door-1.png', 'entityDoorTrap', 1 ],
    ]
  },
  trapDoorSwitch: {
    layers: [
      [ 'trap-door-switch-0.png', 'entityDoorTrap', 4 ],
      [ 'trap-door-switch-1.png', 'entityDoorTrap', 6 ],
    ]
  },
  trapDoorSwitchCollected: {
    layers: [
      [ 'trap-door-switch-0.png', 'entityDoorTrap', 5 ],
      [ 'trap-door-switch-1.png', 'entityDoorTrap', 7 ],
    ]
  },
  zapDrone: {
    layers: [
      [ 'zap-drone-0.png', 'entityDroneZap', 0 ],
      [ 'zap-drone-1.png', 'entityDroneZap', 1 ],
    ]
  },
  zapDroneZapping: {
    width: 176,
    height: 70,
    layers: [
      [ 'zap-drone-zapping-0.png', 'entityDroneZap', 0 ],
      [ 'zap-drone-zapping-1.png', 'entityDroneZap', 1 ],
      [ 'zap-drone-zapping-2.png', 'fxDroneZap', 0 ],
      [ 'zap-drone-zapping-3.png', 'fxDroneZap', 1 ],
    ]
  },
}

export default spriteData
