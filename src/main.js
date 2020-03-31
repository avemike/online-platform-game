import { _Object } from './classes/Object'
import { _Room } from './classes/Room'
import { _Window } from './classes/Window'
import { _Sprite } from './classes/Sprite'
import { _Player } from './resources/Player'

import DotSrc from './classes/dot_40x40.png'
const DotImage = new Image(40, 40)
DotImage.src = DotSrc

const SprPlayer = new _Sprite(DotImage, {width: 40, height: 40})
const MainWindow = new _Window(document.querySelector('#canvas'))
const MainRoom = new _Room()

const Player = new _Player( SprPlayer, {x: 20, y: 380})

MainWindow.selectRoom(MainRoom)
MainRoom.addObjectReference(Player)
MainWindow.start()