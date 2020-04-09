export class _Sprite {
  constructor(imageObjects, args) {
    this.data = {
      imageObjects,
      properties: {
        width: args.width || 40,
        height: args.height || 40
      },
      animStage: args.animStage || 0,
      lastAnimStage: args.lastAnimStage || imageObjects.default.length - 1

    }
  }
  getProperties() {
    return this.data.properties
  }

  getImageReference() {
    const currentAnimStage = this.data.animStage
    
    if(this.data.animStage === this.data.lastAnimStage)  this.data.animStage = 0
    else this.data.animStage += 1

    return this.data.imageObjects.default[currentAnimStage]
  }
}