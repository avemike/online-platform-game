import knight_run_0 from './imgs/run_right/run_1.png'
import knight_run_1 from './imgs/run_right/run_2.png'
import knight_run_2 from './imgs/run_right/run_3.png'
import knight_run_3 from './imgs/run_right/run_4.png'
import knight_run_4 from './imgs/run_right/run_5.png'
import knight_run_5 from './imgs/run_right/run_6.png'
import knight_run_6 from './imgs/run_right/run_7.png'
import knight_run_7 from './imgs/run_right/run_8.png'

import { _Sprite } from '../../classes/_Sprite'

const length = 60

const KnightRun = []
for (let i = 0; i < 8; i++) {
  KnightRun.push(new Image(length, length))
}


KnightRun[0].src = knight_run_0
KnightRun[1].src = knight_run_1
KnightRun[2].src = knight_run_2
KnightRun[3].src = knight_run_3
KnightRun[4].src = knight_run_4
KnightRun[5].src = knight_run_5
KnightRun[6].src = knight_run_6
KnightRun[7].src = knight_run_7

export const SprPlayer = new _Sprite(KnightRun, {width: length, height: length})