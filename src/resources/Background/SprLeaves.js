import sprSrc from './PNG/Layer_0002_7.png'
import { _Sprite } from '../../classes/_Sprite'

const image = new Image(40, 40)
image.src = sprSrc

const ratioWidthHeight = 928 / 793

export const height = 570
export const width = height * ratioWidthHeight

export const SprLeaves = new _Sprite({
  default: {
    animation: [image]
  }
}, {width: height * ratioWidthHeight, height: height})