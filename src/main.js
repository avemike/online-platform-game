import { _Room } from './classes/_Room'
import { _Window } from './classes/_Window'
import { _Sprite } from './classes/_Sprite'

import { Player } from './resources/Player'
import { Ground1, Ground2, Ground3 } from './resources/Ground'
import { Background } from './resources/Background';

const MainWindow = new _Window(document.querySelector('#canvas'))
const MainRoom = new _Room()

MainWindow.selectRoom(MainRoom)

MainRoom.addObjectReference(Background, ['renderable'])
MainRoom.addObjectReference(Player, ['updatable', 'player', 'renderable', 'gravity'])
MainRoom.addObjectReference(Ground1, ['collisionable', 'renderable'])
MainRoom.addObjectReference(Ground2, ['collisionable', 'renderable'])
MainRoom.addObjectReference(Ground3, ['collisionable', 'renderable'])

MainWindow.start()