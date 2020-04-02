// create handling for SpriteReference as null
export class _Object {
  constructor(SpriteReference, args) {
    const sprProperties = SpriteReference.getProperties()
    this.data = {
      SpriteReference,
      x: args.x || 0,
      y: args.y || 0,

      width: args.width || sprProperties.width,
      height: args.height || sprProperties.height,

      speedX: args.speedX || 0,
      speedY: args.speedY || 0,
      
      speedXMax: args.speedXmax || 10,
      speedYMax: args.speedYmax || 10,
      
      spriteProperties : sprProperties,
      

      listeners: []
    }
  }
  update() {
    this.data.x += this.data.speedX
    this.data.y += this.data.speedY
  }
  run() {
    return {
      ImageReference: this.data.SpriteReference.getImageReference(),
      width: this.data.spriteProperties.width,
      height: this.data.spriteProperties.height,
      x: this.data.x - this.data.spriteProperties.width / 2,
      y: this.data.y - this.data.spriteProperties.height / 2
    }
  }
}