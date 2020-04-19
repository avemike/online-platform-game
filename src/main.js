import { _Room } from './classes/_Room'
import { _Window } from './classes/_Window'
import { _Sprite } from './classes/_Sprite'

import { Player } from './resources/Player'
import { Ground1, Ground2, Ground3, GroundBg1, GroundBg2, GroundBg3 } from './resources/Ground'
import { Background, TreesInBg1, TreesInBg2, TreesInBg3} from './resources/Background';

const MainWindow = new _Window(document.querySelector('#canvas'))
const MainRoom = new _Room()

MainWindow.selectRoom(MainRoom)

// Background objects
MainRoom.addObjectReference(Background, ['renderable'])
MainRoom.addObjectReference(TreesInBg1, ['renderable'])
MainRoom.addObjectReference(TreesInBg2, ['renderable'])
MainRoom.addObjectReference(TreesInBg3, ['renderable'])
MainRoom.addObjectReference(GroundBg1, ['renderable'])
MainRoom.addObjectReference(GroundBg2, ['renderable'])
MainRoom.addObjectReference(GroundBg3, ['renderable'])
// 
MainRoom.addObjectReference(Player, ['updatable', 'player', 'renderable', 'gravity'])

// Foreground objects
MainRoom.addObjectReference(Ground1, ['collisionable', 'renderable'])
MainRoom.addObjectReference(Ground2, ['collisionable', 'renderable'])
MainRoom.addObjectReference(Ground3, ['collisionable', 'renderable'])


MainWindow.start()