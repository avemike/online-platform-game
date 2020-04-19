import DotSrc from './ground.png'
import { _Sprite } from '../../classes/_Sprite'

const image = new Image(40, 340)
image.src = DotSrc

export const SprGround = new _Sprite({
  default: {
    animation: [image]
  }
}, {width: 400, height: 340})