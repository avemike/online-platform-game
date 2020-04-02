import DotSrc from './dot_40x40.png'
import { _Sprite } from '../../classes/_Sprite'

const DotImage = new Image(40, 40)
DotImage.src = DotSrc

export const SprPlayer = new _Sprite(DotImage, {width: 40, height: 40})