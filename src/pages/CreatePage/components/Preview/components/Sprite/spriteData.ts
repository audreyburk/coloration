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
      [ 'blood-1.png', 'ninja', 0 ],
      [ 'blood-outline.png', 'background', 5 ],
    ]
  },
  bloodGolden: {
    width: 113,
    height: 132,
    layers: [
      [ 'blood-0.png', 'entityGold', 1 ],
      [ 'blood-1.png', 'ninja', 0 ],
      [ 'blood-outline.png', 'background', 5 ],
    ]
  },
  booster: {
    layers: [
      [ 'booster-0.png', 'entityBoostPad', 0 ],
      [ 'booster-outline.png', 'background', 5 ],
    ]
  },
  boosterActive: {
    layers: [
      [ 'booster-0.png', 'entityBoostPad', 1 ],
      [ 'booster-outline.png', 'background', 5 ],
    ]
  },
  bounceBlock: {
    layers: [
      [ 'bounce-block-0.png', 'entityBounceBlock', 0 ],
      [ 'bounce-block-1.png', 'entityBounceBlock', 1 ],
      [ 'bounce-block-outline.png', 'background', 5 ],
    ]
  },
  chaingunDrone: {
    layers: [
      [ 'chaingun-0.png', 'entityDroneChaingun', 0 ],
      [ 'chaingun-1.png', 'entityDroneChaingun', 1 ],
      [ 'drone-outline.png', 'background', 5 ],
    ]
  },
  chaseDrone: {
    layers: [
      [ 'chase-drone-0.png', 'entityDroneChaser', 0 ],
      [ 'chase-drone-1.png', 'entityDroneChaser', 1 ],
      [ 'drone-outline.png', 'background', 5 ],
    ]
  },
  deathball: {
    layers: [
      [ 'deathball-0.png', 'entityBat', 0 ],
      [ 'deathball-1.png', 'entityBat', 1 ],
      [ 'deathball-2.png', 'entityBat', 2 ],
      [ 'deathball-outline.png', 'background', 5 ],
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
      [ 'evil-ninja-outline.png', 'background', 5 ],
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
      [ 'exit-outline.png', 'background', 5 ],
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
      [ 'exit-open-outline.png', 'background', 5 ],
    ]
  },
  exitChallenge: {
    width: 92,
    layers: [
      [ 'exit-open-0.png', 'entityDoorExit', 0 ],
      [ 'exit-open-1.png', 'entityDoorExit', 1 ],
      [ 'exit-open-2.png', 'entityDoorExit', 4 ],
      [ 'exit-open-3.png', 'entityDoorExit', 5 ],
      [ 'exit-open-outline.png', 'background', 5 ],
    ]
  },
  exitSwitch: {
    layers: [
      [ 'exit-switch-0.png', 'entityDoorExitSwitch', 2 ],
      [ 'exit-switch-1.png', 'entityDoorExitSwitch', 3 ],
      [ 'exit-switch-2.png', 'entityDoorExitSwitch', 0 ],
      [ 'exit-switch-outline.png', 'background', 5 ],
    ]
  },
  exitSwitchCollected: {
    layers: [
      [ 'exit-switch-collected-0.png', 'entityDoorExitSwitch', 2 ],
      [ 'exit-switch-collected-1.png', 'entityDoorExitSwitch', 4 ],
      [ 'exit-switch-2.png',           'entityDoorExitSwitch', 1 ],
      [ 'exit-switch-outline.png', 'background', 5 ],
    ]
  },
  explosion: {
    width: 372,
    height: 346,
    layers: [
      [ 'explosion-outline.png', 'background', 5 ],
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
      [ 'floorguard-outline.png', 'background', 5 ],
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
      [ 'floorguard-zapping-outline.png', 'background', 5 ],
    ]
  },
  gaussTurret: {
    layers: [
      [ 'gauss-turret-0.png', 'entityTurret', 0 ],
      [ 'gauss-turret-1.png', 'entityTurret', 1 ],
      [ 'gauss-turret-outline.png', 'background', 5 ],
    ]
  },
  gaussTurretFiring: {
    height: 176,
    layers: [
      [ 'gauss-turret-firing-outline.png', 'background', 5 ],
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
      [ 'gauss-turret-aiming-outline.png', 'background', 5 ],
    ]
  },
  gold: {
    layers: [
      [ 'gold-0.png', 'entityGold', 0 ],
      [ 'gold-1.png', 'entityGold', 1 ],
      [ 'gold-2.png', 'entityGold', 2 ],
      [ 'gold-outline.png', 'background', 5 ],
    ]
  },
  groundDust: {
    width: 64,
    height: 54,
    layers: [
      [ 'ground-dust-0.png', 'fxNinja', 0 ],
      [ 'ground-dust-1.png', 'fxNinja', 1 ],
      [ 'ground-dust-2.png', 'ninja', 0 ],
      [ 'ground-dust-outline.png', 'background', 5 ],
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
      [ 'laser-drone-outline.png', 'background', 5 ],
    ]
  },
  laserDroneAiming: {
    height: 176,
    layers: [
      [ 'laser-drone-aiming-outline.png', 'background', 5 ],
      [ 'laser-drone-aiming-0.png', 'entityDroneLaser', 0 ],
      [ 'laser-drone-aiming-1.png', 'entityDroneLaser', 2 ],
      [ 'laser-drone-aiming-2.png', 'entityDroneLaser', 3 ],
    ]
  },
  laserDroneFiring: {
    height: 176,
    layers: [
      [ 'laser-drone-firing-outline.png', 'background', 5 ],
      [ 'laser-drone-firing-0.png', 'entityDroneLaser', 0 ],
      [ 'laser-drone-firing-1.png', 'entityDroneLaser', 2 ],
      [ 'laser-drone-firing-2.png', 'entityDroneLaser', 1 ],
    ]
  },
  laserTurret: {
    layers: [
      [ 'laser-turret-0.png', 'entityDualLaser', 0 ],
      [ 'laser-turret-outline.png', 'background', 5 ],
    ]
  },
  laserTurretFiring: {
    height: 176,
    layers: [
      [ 'laser-turret-firing-0.png', 'entityDualLaser', 0 ],
      [ 'laser-turret-firing-1.png', 'entityDualLaser', 1 ],
      [ 'laser-turret-firing-outline.png', 'background', 5 ],
    ]
  },
  launchpad: {
    layers: [
      [ 'launchpad-0.png', 'entityLaunchPad', 0 ],
      [ 'launchpad-1.png', 'entityLaunchPad', 1 ],
      [ 'launchpad-outline.png', 'background', 5 ],
    ]
  },
  lockedDoor: {
    height: 46,
    layers: [
      [ 'locked-door-0.png', 'entityDoorLocked', 0 ],
      [ 'locked-door-1.png', 'entityDoorLocked', 1 ],
      [ 'locked-door-outline.png', 'background', 5 ],
    ]
  },
  lockedDoorSwitch: {
    layers: [
      [ 'locked-door-switch-0.png', 'entityDoorLocked', 2 ],
      [ 'locked-door-switch-1.png', 'entityDoorLocked', 4 ],
      [ 'locked-door-switch-2.png', 'entityDoorLocked', 7 ],
      [ 'locked-door-switch-outline.png', 'background', 5 ],
    ]
  },
  lockedDoorSwitchCollected: {
    layers: [
      [ 'locked-door-switch-0.png', 'entityDoorLocked', 3 ],
      [ 'locked-door-switch-1.png', 'entityDoorLocked', 5 ],
      [ 'locked-door-switch-2.png', 'entityDoorLocked', 6 ],
      [ 'locked-door-switch-outline.png', 'background', 5 ],
    ]
  },
  mine: {
    layers: [
      [ 'mine-0.png', 'entityMine', 0 ],
      [ 'mine-1.png', 'entityMine', 1 ],
      [ 'mine-outline.png', 'background', 5 ],
    ]
  },
  mini: {
    layers: [
      [ 'mini-0.png', 'entityEyeBat', 0 ],
      [ 'mini-outline.png', 'background', 5 ],
    ]
  },
  miniActive: {
    layers: [
      [ 'mini-0.png',        'entityEyeBat', 0 ],
      [ 'mini-active-0.png', 'entityEyeBat', 1 ],
      [ 'mini-outline.png', 'background', 5 ],
    ]
  },
  miniDrone: {
    layers: [
      [ 'mini-drone-0.png', 'entityDroneZap', 0 ],
      [ 'mini-drone-1.png', 'entityDroneZap', 1 ],
      [ 'mini-drone-outline.png', 'background', 5 ],
    ]
  },
  ninja: {
    layers: [
      [ 'ninja-0.png', 'ninja', 0 ],
      [ 'ninja-outline.png', 'background', 5 ],
    ]
  },
  ninjaA: {
    layers: [
      [ 'ninja-0.png', 'ninja', 1 ],
      [ 'ninja-outline.png', 'background', 5 ],
    ]
  },
  ninjaB: {
    layers: [
      [ 'ninja-0.png', 'ninja', 2 ],
      [ 'ninja-outline.png', 'background', 5 ],
    ]
  },
  ninjaC: {
    layers: [
      [ 'ninja-0.png', 'ninja', 3 ],
      [ 'ninja-outline.png', 'background', 5 ],
    ]
  },
  normalDoor: {
    height: 46,
    layers: [
      [ 'normal-door-0.png', 'entityDoorRegular', 0 ],
      [ 'normal-door-outline.png', 'background', 5 ],
    ]
  },
  oneway: {
    layers: [
      [ 'oneway-0.png', 'entityOneWayPlatform', 0 ],
      [ 'oneway-1.png', 'entityOneWayPlatform', 1 ],
      [ 'oneway-outline.png', 'background', 5 ],
    ]
  },
  rocketTurret: {
    layers: [
      [ 'rocket-turret-0.png', 'entityRocket', 0 ],
      [ 'rocket-turret-1.png', 'entityRocket', 1 ],
      [ 'rocket-turret-outline.png', 'background', 5 ],
    ]
  },
  rocket: {
    width: 484,
    height: 118,
    layers: [
      [ 'rocket-0.png',       'entityRocket', 2 ],
      [ 'rocket-trail-0.png', 'entityRocket', 3 ],
      [ 'rocket-flare-0.png', 'explosions', 0 ],
      [ 'rocket-outline.png', 'background', 5 ],
    ]
  },
  shoveThwump: {
    width: 50,
    height: 50,
    layers: [
      [ 'shove-thwump-0.png', 'entityShoveThwomp', 0 ],
      [ 'shove-thwump-1.png', 'entityShoveThwomp', 1 ],
      [ 'shove-thwump-2.png', 'entityShoveThwomp', 2 ],
      [ 'shove-thwump-outline.png', 'background', 5 ],
    ]
  },
  thwump: {
    layers: [
      [ 'thwump-0.png', 'entityThwomp', 0 ],
      [ 'thwump-1.png', 'entityThwomp', 1 ],
      [ 'thwump-2.png', 'entityThwomp', 2 ],
      [ 'thwump-outline.png', 'background', 5 ],
    ]
  },
  toggleMine: {
    layers: [
      [ 'toggle-mine-0.png', 'entityMine', 2 ],
      [ 'toggle-mine-outline.png', 'background', 5 ],
    ]
  },
  toggleMineToggling: {
    layers: [
      [ 'toggle-mine-0.png', 'entityMine', 3 ],
      [ 'toggle-mine-outline.png', 'background', 5 ],
    ]
  },
  trapDoor: {
    height: 46,
    layers: [
      [ 'trap-door-0.png', 'entityDoorTrap', 0 ],
      [ 'trap-door-1.png', 'entityDoorTrap', 1 ],
      [ 'trap-door-outline.png', 'background', 5 ],
    ]
  },
  trapDoorSwitch: {
    layers: [
      [ 'trap-door-switch-0.png', 'entityDoorTrap', 4 ],
      [ 'trap-door-switch-1.png', 'entityDoorTrap', 6 ],
      [ 'trap-door-switch-outline.png', 'background', 5 ],
    ]
  },
  trapDoorSwitchCollected: {
    layers: [
      [ 'trap-door-switch-collected-0.png', 'entityDoorTrap', 5 ],
      [ 'trap-door-switch-collected-1.png', 'entityDoorTrap', 7 ],
      [ 'trap-door-switch-collected-outline.png', 'background', 5 ],
    ]
  },
  zapDrone: {
    layers: [
      [ 'zap-drone-0.png', 'entityDroneZap', 0 ],
      [ 'zap-drone-1.png', 'entityDroneZap', 1 ],
      [ 'drone-outline.png', 'background', 5 ],
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
      [ 'zap-drone-zapping-outline.png', 'background', 5 ],
    ]
  },
}

export default spriteData
