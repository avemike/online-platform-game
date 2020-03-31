import {
  _Object
} from '../classes/Object';

export class _Player extends _Object {
  constructor(SpriteReference = null, args) {
    super(SpriteReference, args)
    this.data = {
      ...this.data,
      keyState: []
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
    if (this.data.keyState['KeyA'] || this.data.keyState['ArrowLeft']){
      this.data.x -= 10;
    }    
    if (this.data.keyState['KeyD'] || this.data.keyState['ArrowRight']){
      this.data.x += 10;
    }
    if (this.data.keyState['KeyW'] || this.data.keyState['ArrowUp']){
      this.data.y -= 10;
    }    
    if (this.data.keyState['KeyS'] || this.data.keyState['ArrowDown']){
      this.data.y += 10;
    }

    setTimeout(this.listeners.bind(this), 100);
  }
}