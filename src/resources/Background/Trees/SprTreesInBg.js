import sprLastSrc from '../PNG/Layer_0009_2.png'
import sprFirstSrc from '../PNG/Layer_0003_6.png'

import { _Sprite } from '../../../classes/_Sprite'

const imageLast = new Image(40, 40)
const imageFirst = new Image(40, 40)

// ratio of image (keep the ratio!)
const TreesInBgFirstRatioWidthHeight = 740 / 271
const TreesInBgFirstHeight = 300

// Exporting width of sprite, useful when calculating the gap
export const TreesInBgFirstWidth = TreesInBgFirstHeight * TreesInBgFirstRatioWidthHeight

imageLast.src = sprLastSrc
imageFirst.src = sprFirstSrc

// Last layer of trees in bg
export const SprTreesInBgLast = new _Sprite({
  default: {
    animation: [imageLast]
  }
}, {width: 928, height: 1300})

// First layer of trees in bg
export const SprTreesInBgFirst = new _Sprite({
  default: {
    animation: [imageFirst]
  }
}, {width: TreesInBgFirstWidth, height: TreesInBgFirstHeight})