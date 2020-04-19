import sprSrc from './PNG/Layer_0009_2.png'
import { _Sprite } from '../../classes/_Sprite'

const image = new Image(40, 40)
image.src = sprSrc

export const SprTreesInBg = new _Sprite({
  default: {
    animation: [image]
  }
}, {width: 928, height: 413})