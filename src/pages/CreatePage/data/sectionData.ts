import { Section } from '../createPageTypes'

export const sections: Section[] = [
  {
      name: 'Objects',
      sectionId: 'Objects_Items' ,
      listId: 'list_objects',
      items: [
          { label: 'Background',       fileName: 'background' },
          { label: 'Ninja',            fileName: 'ninja' },
          { label: 'Gold',             fileName: 'entityGold' },
          { label: 'Exit Door',        fileName: 'entityDoorExit' },
          { label: 'Exit Switch',      fileName: 'entityDoorExitSwitch' },
          { label: 'Regular Door',     fileName: 'entityDoorRegular' },
          { label: 'Locked Door',      fileName: 'entityDoorLocked', indices: [0, 1, 2, 4, 7, 3, 5, 6] },
          { label: 'Trap Door',        fileName: 'entityDoorTrap', indices: [0, 1, 4, 6, 5, 7, 2, 3] },
          { label: 'Bounce Block',     fileName: 'entityBounceBlock' },
          { label: 'One-way Platform', fileName: 'entityOneWayPlatform' },
          { label: 'Launchpad',        fileName: 'entityLaunchPad' },
          { label: 'Boost Pad',        fileName: 'entityBoostPad' },
          { label: 'Mine',             fileName: 'entityMine' },
          { label: 'Zap Drones',       fileName: 'entityDroneZap' },
          { label: 'Chaser Drone',     fileName: 'entityDroneChaser' },
          { label: 'Chaingun Drone',   fileName: 'entityDroneChaingun' },
          { label: 'Laser Drone',      fileName: 'entityDroneLaser' },
          { label: 'Floorguard',       fileName: 'entityFloorGuard' },
          { label: 'Rocket Turret',    fileName: 'entityRocket' },
          { label: 'Gauss Turret',     fileName: 'entityTurret' },
          { label: 'Laser Turret',     fileName: 'entityDualLaser' },
          { label: 'Evil Ninja',       fileName: 'entityEvilNinja' },
          { label: 'Thwump',           fileName: 'entityThwomp' },
          { label: 'Shove Thwump',     fileName: 'entityShoveThwomp' },
          { label: 'Deathball',        fileName: 'entityBat' },
          { label: 'Mini (Eyebat)',    fileName: 'entityEyeBat' },
      ]
  },
  {
      name: 'Menu',
      sectionId: 'Menu_Items',
      listId: 'list_menu',
      items: [
          { label: 'Basic Menus',      fileName: 'menu', indices: [0, 3, 17, 29, 4, 10] },
          { label: 'Menu Tabs',        fileName: 'menu', indices: [8, 12, 25, 26, 27, 31, 33, 37] },
          { label: 'Leaderboards',     fileName: 'menu', indices: [1, 2, 13, 16, 32] },
          { label: 'Episode Grid',     fileName: 'menu', indices: [5, 23, 7, 30, 9, 22] },
          { label: 'Pause Menu',       fileName: 'menu', indices: [18, 19, 20, 21] },
          { label: 'Profile',          fileName: 'menu', indices: [14, 15] },
          { label: 'Other Texts',      fileName: 'menu', indices: [24, 28, 34, 35, 38, 40, 41] },
          { label: 'Unknown',          fileName: 'menu', indices: [6, 11, 36, 39] },
      ]
  },
  {
      name: 'Editor',
      sectionId: 'Editor_Items',
      listId: 'list_editor',
      items: [
          { label: 'Lines',            fileName: 'editor', indices: [0, 2, 5] },
          { label: 'Selections',       fileName: 'editor', indices: [3, 6, 7, 8] },
          { label: 'Other',            fileName: 'editor', indices: [4, 1, 9] },
      ]
  },
  {
      name: 'Timebar',
      sectionId: 'Timebar_Items',
      listId: 'list_timebar',
      items: [
          { label: 'Basic Timebar',        fileName: 'timeBar',     indices: [0, 2, 1, 4, 6] },
          { label: 'Race Timebar (P1)*',   fileName: 'timeBarRace', indices: [0, 1, 5, 6, 7] },
          { label: 'Race Timebar (P2)',    fileName: 'timeBarRace', indices: [2, 8, 9, 10] },
          { label: 'Race Timebar (P3)',    fileName: 'timeBarRace', indices: [3, 11, 12, 13] },
          { label: 'Race Timebar (P4)',    fileName: 'timeBarRace', indices: [4, 14, 15, 16] },
          { label: 'Unknown',              fileName: 'timeBar',     indices: [3, 5, 7] },
      ]
  },
  {
      name: 'Headbands',
      sectionId: 'Headbands_Items',
      listId: 'list_headbands',
      items: [
          { label: 'Headbands',        fileName: 'headbands', indices: [0, 2, 4, 6] },
          { label: 'Unknown',          fileName: 'headbands', indices: [1, 3, 5, 7] },
          { label: 'Unknowner',        fileName: 'headbands', indices: [8, 9, 10, 11] },
          { label: 'Unknownest',       fileName: 'headbands', indices: [12, 13, 14, 15, 16] },
      ]
  },
  {
      name: 'Effects',
      sectionId: 'Effects_Items',
      listId: 'list_effects',
      items: [
          { label: 'Explosions',       fileName: 'explosions' },
          { label: 'Drone BZZT',       fileName: 'fxDroneZap' },
          { label: 'Floorguard BZZT',  fileName: 'fxFloorguardZap' },
          { label: 'Ground Dust',      fileName: 'fxNinja' }
      ]
  }
]

export default sections
