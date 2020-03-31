// create handling for SpriteReference as null
export class _Object {
  constructor(SpriteReference = null, args) {
    this.data = {
      SpriteReference,
      x: args.x || 0,
      y: args.y || 0,
      spriteProperties : SpriteReference.getProperties(),

      listeners: []
    }
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