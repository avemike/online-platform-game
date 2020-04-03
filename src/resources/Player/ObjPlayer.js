import {
  _Object
} from '../../classes/_Object';
import { obj } from 'from2';

export class ObjPlayer extends _Object {
  constructor(SpriteReference = null, args) {
    super(SpriteReference, args)

    const {width, height, x, y} = this.data

    this.data = {
      ...this.data,
      keyState: [],
      moving: 
      {
        left: false,
        up: false,
        right: false,
        down: false
      },
      hitbox:
      {
        left: x - width/2,
        right: x + width/2,
        up: y - height/2,
        down: y + height/2
      }
    }

    // setting up listeners
    window.addEventListener('keydown', (e) => {
      this.data.keyState[e.code] = true;
    }, true);

    window.addEventListener('keyup', (e) => {
      this.data.keyState[e.code] = false;
    }, true);

    this.listeners()
    // 
  }

  // inifinite loop checking if key is pressed for every 80ms
  listeners() {
    const {moving, x, y, width, height} = this.data

    if (this.data.keyState['KeyA'] || this.data.keyState['ArrowLeft']){
      this.data.speedX = -3
      moving.left = true
    } else if (moving.left) {
      this.data.speedX = 0
      moving.left = false
    }

    if (this.data.keyState['KeyD'] || this.data.keyState['ArrowRight']){
      this.data.speedX = 3
      moving.right = true
    } else if (moving.right) {
      moving.right = false
      if (!moving.left)
        this.data.speedX = 0
    }

    if (this.data.keyState['KeyW'] || this.data.keyState['ArrowUp']){
      this.data.speedY = -3
      moving.up = true
    } else if (moving.up) {
      this.data.speedY = 0
      moving.up = false
    }

    if (this.data.keyState['KeyS'] || this.data.keyState['ArrowDown']){
      this.data.speedY = +3
      moving.down = true
    } else if (moving.down) {
      moving.down = false
      if (!moving.up)
        this.data.speedY = 0
    }

    this.data.hitbox = {
      left: x - width/2,
      right: x + width/2,
      up: y - height/2,
      down: y + height/2
    }
    setTimeout(this.listeners.bind(this), 80);
  }

  // RETURNS info about collision:
  // - false if not
  // - object with data {x, y} if true
  // x and y represents how deep object is colliding
  // ARGUMENT {left, right, up, down} hitbox of possible colliding element
  collide(objHitbox) {
    let {left,right,up,down} = this.data.hitbox
  
    // left -= this.data.speedX
    // right += this.data.speedX
    // up -= this.data.speedY
    // down += this.data.speedY

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

    switch (shift[0]) {
      case 'left':
        this.data.x -= shift[1]
        break;
      case 'right':
        this.data.x += shift[1]
        break;
      case 'up':
        this.data.y -= shift[1]
        break;
      case 'down':
        this.data.y += shift[1]
        break;
      default:
        throw new Error("Unknown collision's direction")
        break;
    }
  }
}