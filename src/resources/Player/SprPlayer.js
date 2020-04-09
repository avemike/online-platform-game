import knight_run_right_0 from './imgs/run_right/run_1.png'
import knight_run_right_1 from './imgs/run_right/run_2.png'
import knight_run_right_2 from './imgs/run_right/run_3.png'
import knight_run_right_3 from './imgs/run_right/run_4.png'
import knight_run_right_4 from './imgs/run_right/run_5.png'
import knight_run_right_5 from './imgs/run_right/run_6.png'
import knight_run_right_6 from './imgs/run_right/run_7.png'
import knight_run_right_7 from './imgs/run_right/run_8.png'

import knight_run_left_0 from './imgs/run_left/run_1.png'
import knight_run_left_1 from './imgs/run_left/run_2.png'
import knight_run_left_2 from './imgs/run_left/run_3.png'
import knight_run_left_3 from './imgs/run_left/run_4.png'
import knight_run_left_4 from './imgs/run_left/run_5.png'
import knight_run_left_5 from './imgs/run_left/run_6.png'
import knight_run_left_6 from './imgs/run_left/run_7.png'
import knight_run_left_7 from './imgs/run_left/run_8.png'

import { _Sprite } from '../../classes/_Sprite'

const length = 60

const KnightRunRight = []
const KnightRunLeft = []

for (let i = 0; i < 8; i++) {
  KnightRunRight.push(new Image(length, length))
  KnightRunLeft.push(new Image(length, length))
}


KnightRunRight[0].src = knight_run_right_0
KnightRunRight[1].src = knight_run_right_1
KnightRunRight[2].src = knight_run_right_2
KnightRunRight[3].src = knight_run_right_3
KnightRunRight[4].src = knight_run_right_4
KnightRunRight[5].src = knight_run_right_5
KnightRunRight[6].src = knight_run_right_6
KnightRunRight[7].src = knight_run_right_7

KnightRunLeft[0].src = knight_run_left_0
KnightRunLeft[1].src = knight_run_left_1
KnightRunLeft[2].src = knight_run_left_2
KnightRunLeft[3].src = knight_run_left_3
KnightRunLeft[4].src = knight_run_left_4
KnightRunLeft[5].src = knight_run_left_5
KnightRunLeft[6].src = knight_run_left_6
KnightRunLeft[7].src = knight_run_left_7

export const SprPlayer = new _Sprite(
  {
    default: KnightRunRight,
    run_left: KnightRunLeft,
    run_right: KnightRunRight
  }, {
    width: length, height: length
  })