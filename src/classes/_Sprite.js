export class _Sprite {
  constructor(imageObjects, args) {
    this.data = {
      imageObjects,
      properties: {
        width: args.width || 40,
        height: args.height || 40
      },
      animStage: args.animStage || 0,
      lastAnimStage: imageObjects.default.animation.length - 1,
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
    this.updateLastAnimeStage()
  }
  updateLastAnimeStage() {
    this.data.lastAnimStage = this.data.imageObjects.default.animation.length - 1
    this.data.animStage = 0
  }
  updateAnimStages() {
    const currentAnimStage = this.data.animStage
    if(currentAnimStage === this.data.lastAnimStage) {
      if (this.data.imageObjects.default.once ) {
        if(this.data.imageObjects.default.next) {
          this.changeSprite(this.data.imageObjects.default.next)
        }
      }
      else this.data.animStage = 0
    }
    else this.data.animStage += 1
  }
  getImageReference() {
    return this.data.imageObjects.default.animation[this.data.animStage]
  }
}