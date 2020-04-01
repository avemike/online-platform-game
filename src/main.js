import { _Room } from './classes/Room'
import { _Window } from './classes/Window'
import { _Sprite } from './classes/Sprite'

import { Player } from './resources/Player'

const MainWindow = new _Window(document.querySelector('#canvas'))
const MainRoom = new _Room()

MainWindow.selectRoom(MainRoom)
MainRoom.addObjectReference(Player)
MainWindow.start()