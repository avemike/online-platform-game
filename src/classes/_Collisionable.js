import { _Object } from './_Object'

export class _Collisionable extends _Object {
  constructor(SpriteReference = null, args) {
    super(SpriteReference, args)
      
    const {width, height, x, y} = this.data
    this.data = {
      ...this.data,
      standing: false,
      hitbox: {
        left: x - width/2,
        right: x + width/2,
        up: y - height/2,
        down: y + height/2
      }
    }
  }

  turnOnStanding() {
    this.data.standing = true
  }
  turnOffStanding() {
    this.data.standing = false
  }
  // RETURNS info about collision:
  // - false if not
  // - object with data {x, y} if true
  // x and y represents how deep object is colliding
  // ARGUMENT {left, right, up, down} hitbox of possible colliding element
  collide(objHitbox) {
    let {left,right,up,down} = this.data.hitbox
  
    left += this.data.speedX
    right += this.data.speedX
    up += this.data.speedY
    down += this.data.speedY

    // check if object is too far away to even think of colliding
    if(
      objHitbox.right < left ||
      objHitbox.left > right ||
      objHitbox.down < up ||
      objHitbox.up > down
    ) return false

    const howManyPxToBorders = Object.entries({
      down: objHitbox.down - up,
      up: down - objHitbox.up,
      left: right - objHitbox.left,
      right: objHitbox.right - left
    })

    const shift = howManyPxToBorders.reduce((p, c) => {
      if(c[1] < p[1]) return c
      return p
    })

    const {width, height} = this.data
    
    switch (shift[0]) {
      case 'right':
        console.log(howManyPxToBorders)
        this.data.x = objHitbox.right + width/2 
        break;
      case 'left':
        console.log(howManyPxToBorders)
        this.data.x = objHitbox.left - width/2 
        break;
      case 'up':
        if(this.data.accY) this.data.accY = 0
        this.data.y = objHitbox.up - height/2 
        break;
      case 'down':
        this.data.y = objHitbox.down + height/2
        this.data.speedY = -this.data.speedY/2 
        break;
      default:
        throw new Error("Unknown collision's direction")
    }

    return shift[0]
  }
}