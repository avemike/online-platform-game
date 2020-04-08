import { _Collisionable } from '../../classes/_Collisionable';

export class ObjPlayer extends _Collisionable {
  constructor(SpriteReference = null, args) {
    super(SpriteReference, args)

    const {width, height, x, y} = this.data

    this.data = {
      ...this.data,
      keyState: [],
      moving: 
      {
        left: false,
        right: false
      },
      baseSpeed: 10,
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
      if(e.code === 'KeyW' || e.code === 'Space') {
        if(this.data.standing) {
          this.data.speedY = 0;
          this.data.accY = -6.4;
        }
      }
      else {
        this.data.keyState[e.code] = true;
      }
    }, true);

    window.addEventListener('keyup', (e) => {
      this.data.keyState[e.code] = false;
    }, true);

    this.listeners()
  }

  // inifinite loop checking if key is pressed for every 80ms
  listeners() {
    const {moving, x, y, width, height} = this.data

    if (this.data.keyState['KeyA']){
      this.data.speedX = -this.data.baseSpeed
      moving.left = true
    } else if (moving.left) {
      this.data.speedX = 0
      moving.left = false
    }

    if (this.data.keyState['KeyD']){
      this.data.speedX = this.data.baseSpeed
      moving.right = true
    } else if (moving.right) {
      moving.right = false
      if (!moving.left)
        this.data.speedX = 0
    }

    this.data.hitbox = {
      left: x - width/2,
      right: x + width/2,
      up: y - height/2,
      down: y + height/2
    }
    setTimeout(this.listeners.bind(this), 80);
  }

  update() {
    this.gravity()
    super.update()
  }
}