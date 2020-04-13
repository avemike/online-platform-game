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
      recentDirection: 'right',
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
    window.addEventListener('keydown', e => {
      if(e.code === 'KeyW' || e.code === 'Space') {
        if(this.data.standing) {
          this.data.SpriteReference.changeSprite(`jump_${this.data.recentDirection}`)
          this.data.speedY = 0
          this.data.accY = -6.4
        }
      }
      else {
        this.data.keyState[e.code] = true;
      }
    }, true);

    window.addEventListener('keyup', (e) => {
      this.data.keyState[e.code] = false
    }, true)

    this.listeners()
  }

  // inifinite loop checking if key is pressed for every 80ms
  listeners() {
    const {moving, x, y, width, height} = this.data

    if (this.data.keyState['KeyA']){
      this.data.recentDirection = 'left'

      if(this.data.standing) this.data.SpriteReference.changeSprite('run_left')
      else this.data.SpriteReference.changeSprite('jump_left')

      this.data.speedX = -this.data.baseSpeed
      moving.left = true
    } else if (moving.left) {
      if(this.data.standing) this.data.SpriteReference.changeSprite('idle_left')
      this.data.speedX = 0
      moving.left = false
    }

    if (this.data.keyState['KeyD']){
      this.data.recentDirection = 'right'

      if(this.data.standing) this.data.SpriteReference.changeSprite('run_right')
      else this.data.SpriteReference.changeSprite('jump_right')

      this.data.speedX = this.data.baseSpeed
      moving.right = true
    } else if (moving.right) {
      moving.right = false
      if(this.data.standing) this.data.SpriteReference.changeSprite('idle_right')
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
  gravity() {
    super.gravity()
  }
  update() {
    this.gravity()
    super.update()
  }

  // super.turnOnStanding returns false when already are standing
  turnOnStanding() {
    if( super.turnOnStanding() ) this.data.SpriteReference.changeSprite(`fall_${this.data.recentDirection}`)
  }

  // super.turnOffStanding returns false when already are not standing
  turnOffStanding() {
    if( super.turnOffStanding() ) {
      this.data.SpriteReference.changeSprite(`jump_${this.data.recentDirection}`)
    } 
  }
}