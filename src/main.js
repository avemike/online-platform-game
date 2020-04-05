import { _Room } from './classes/_Room'
import { _Window } from './classes/_Window'
import { _Sprite } from './classes/_Sprite'

import { Player } from './resources/Player'
import { Block1, Block2, Block3 } from './resources/Block'

const MainWindow = new _Window(document.querySelector('#canvas'))
const MainRoom = new _Room()

MainWindow.selectRoom(MainRoom)

MainRoom.addObjectReference(Player, ['updatable', 'player', 'renderable', 'gravity'])
MainRoom.addObjectReference(Block1, ['collisionable', 'renderable'])
MainRoom.addObjectReference(Block2, ['collisionable', 'renderable'])
MainRoom.addObjectReference(Block3, ['collisionable', 'renderable'])

MainWindow.start()