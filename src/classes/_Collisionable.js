import { _Object } from './_Object'

export class _Collisionable extends _Object {
  constructor(SpriteReference = null, args) {
    super(SpriteReference, args)
    
    const {width, height, x, y} = this.data
    this.data = {
      ...this.data,
      hitbox: {
        left: x - width/2,
        right: x + width/2,
        up: y - height/2,
        down: y + height/2
      }
    }
  }

}