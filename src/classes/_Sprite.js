export class _Sprite {
  constructor(imagesReference, args) {
    this.data = {
      imagesReference: imagesReference,
      properties: {
        width: args.width || 40,
        height: args.height || 40
      },

    }
  }
  getProperties() { return this.data.properties }
  getImageReference() { return this.data.imagesReference }
}