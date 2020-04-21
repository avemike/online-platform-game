import { _Room } from './classes/_Room'
import { _Window } from './classes/_Window'
import { _Sprite } from './classes/_Sprite'

import { Player } from './resources/Player'
import { GroundForeground, GroundBackground } from './resources/Ground'
import Background from './resources/Background';

const MainWindow = new _Window(document.querySelector('#canvas'))
const MainRoom = new _Room()

MainWindow.selectRoom(MainRoom)

// Background objects
MainRoom.addObjectReference(Background, ['renderable'])
MainRoom.addObjectReference(GroundBackground, ['renderable'])

// 
MainRoom.addObjectReference([Player], ['updatable', 'player', 'renderable', 'gravity'])

// Foreground objects
MainRoom.addObjectReference(GroundForeground, ['collisionable', 'renderable'])

MainWindow.start()