import img from './groundbg.png'
import { _Sprite } from '../../classes/_Sprite'

const image = new Image(40, 40)
image.src = img

export const SprGroundBg = new _Sprite({
  default: {
    animation: [image]
  }
}, {width: 400, height: 77})