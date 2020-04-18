import { _Object } from '../../classes/_Object'

export class ObjBg extends _Object {
  constructor(SpriteReference, args) {
    args.depth = 0
    super(SpriteReference, args)
  }
}