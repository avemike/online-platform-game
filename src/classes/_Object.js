// create handling for SpriteReference as null
export class _Object {
  constructor(SpriteReference, args) {
    const sprProperties = SpriteReference.getProperties();
    this.data = {
      SpriteReference,
      x: args.x || 0,
      y: args.y || 0,

      width: args.width || sprProperties.width,
      height: args.height || sprProperties.height,

      speedX: args.speedX || 0,
      speedY: args.speedY || 0,

      accX: 0,
      accY: 0,

      speedXMax: args.speedXmax || 10,
      speedYMax: args.speedYmax || 10,

      spriteProperties: sprProperties,

      updateAnimStageMeter: {
        stage: 0,
        max: 2,
      },

      listeners: [],
      depth: args.depth !== undefined ? args.depth : 1,
    };
  }

  // every fps adds vertical acceleration
  gravity() {
    if (this.data.accY < 12) this.data.accY += 1.1;
  }

  update() {
    if (this.data.speedY > 4) this.data.speedY = 4;
    this.data.x += this.data.speedX;

    this.data.speedY += this.data.accY;
    this.data.y += this.data.speedY;
  }
  updateAnimStage() {
    if (
      this.data.updateAnimStageMeter.stage ===
      this.data.updateAnimStageMeter.max
    ) {
      this.data.updateAnimStageMeter.stage = 0;
      this.data.SpriteReference.updateAnimStages();
    } else {
      this.data.updateAnimStageMeter.stage += 1;
    }
  }
  run() {
    this.updateAnimStage();
    return {
      ImageReference: this.data.SpriteReference.getImageReference(),
      width: this.data.spriteProperties.width,
      height: this.data.spriteProperties.height,
      x: this.data.x - this.data.spriteProperties.width / 2,
      y: this.data.y - this.data.spriteProperties.height / 2,
    };
  }
}
