import sprSrc from './bg.png'
import { _Sprite } from '../../classes/_Sprite'

const image = new Image(40, 40)
image.src = sprSrc

export const SprBg = new _Sprite({
  default: {
    animation: [image]
  }
}, {width: 928, height: 793})