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

  // RETURNS info about collision:
  // - false if not
  // - object with data {x, y} if true
  // x and y represents how deep object is colliding
  // ARGUMENT {left, right, up, down} hitbox of possible colliding element
  collidingData(objHitbox) {
    const {left,right,up,down} = this.data.hitbox
    // check if object is too far away to even think of colliding
    if(
      objHitbox.right < left ||
      objHitbox.left > right ||
      objHitbox.down < up ||
      objHitbox.up > down
    ) return false

    return true
  }
}