import { _Room } from './classes/_Room'
import { _Window } from './classes/_Window'
import { _Sprite } from './classes/_Sprite'

import { Player } from './resources/Player'
import { Block } from './resources/Block'

const MainWindow = new _Window(document.querySelector('#canvas'))
const MainRoom = new _Room()

MainWindow.selectRoom(MainRoom)

MainRoom.addObjectReference(Player)
MainRoom.addObjectReference(Block)

MainWindow.start()