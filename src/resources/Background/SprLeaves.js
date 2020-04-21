import sprSrc from './PNG/Layer_0002_7.png'
import { _Sprite } from '../../classes/_Sprite'

const image = new Image(40, 40)
image.src = sprSrc

export const SprLeaves = new _Sprite({
  default: {
    animation: [image]
  }
}, {width: 928, height: 793})