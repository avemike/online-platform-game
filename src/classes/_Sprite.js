export class _Sprite {
  constructor(imageObjects, args) {
    this.data = {
      imageObjects,
      properties: {
        width: args.width || 40,
        height: args.height || 40
      },
      animStage: args.animStage || 0,
      lastAnimStage: imageObjects.default.length - 1,
    }
  }
  getProperties() {
    return this.data.properties
  }

  changeSprite(name) {
    if(this.data.imageObjects.default === this.data.imageObjects[name]) return ;
    if(!this.data.imageObjects[name]) {
      throw ("Given sprite name doesn't exist")
      return ; 
    }
    this.data.imageObjects.default = this.data.imageObjects[name]
    this.updateAnimStages()
  }
  updateAnimStages() {
    this.data.lastAnimStage = this.data.imageObjects.default.length - 1
    this.data.animStage = 0
  }
  getImageReference() {
    const currentAnimStage = this.data.animStage
    if(this.data.animStage === this.data.lastAnimStage)  this.data.animStage = 0
    else this.data.animStage += 1
    
    return this.data.imageObjects.default[currentAnimStage]
  }
}