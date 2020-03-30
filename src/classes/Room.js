export class _Room {
  constructor() {
    this.data = { objectsReferences: [], x: 0 }
  }
  addObjectReference(ObjectReference) {
    if (ObjectReference) this.data.objectsReferences.push(ObjectReference)
  }
  run(ctx) {
    this.data.objectsReferences.map(obj => {
      // console.log(obj.run())
      const {ImageReference, width, height, x, y} = obj.run(ctx)

      ctx.drawImage(ImageReference, x, y, width, height)
    })
  }
}