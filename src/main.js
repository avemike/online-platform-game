import { _Object } from './classes/Object'
import { _Room } from './classes/Room'
import { _Window } from './classes/Window'

const MainWindow = new _Window(document.querySelector('#canvas'))
const MainRoom = new _Room()
const Player = new _Object()
MainWindow.selectRoom(MainRoom)
MainRoom.addObjectReference()
MainWindow.start()