import DotSrc from './ground.png'
import { _Sprite } from '../../classes/_Sprite'

const DotImage = new Image(40, 40)
DotImage.src = DotSrc

export const SprBlock = new _Sprite({
  default: {
    animation: [DotImage]
  }
}, {width: 400, height: 40})