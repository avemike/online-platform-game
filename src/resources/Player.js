import {
  _Object
} from '../classes/Object';

export class _Player extends _Object {
  constructor(SpriteReference = null, args) {
    super(SpriteReference, args)
    this.data = {
      ...this.data,
      keyState: [],
      moving: 
        {
          left: false,
          up: false,
          right: false,
          down: false
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

  // inifinite loop checking if key is pressed for every 100ms
  listeners() {
    const moving = this.data.moving

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

    setTimeout(this.listeners.bind(this), 100);
  }
}