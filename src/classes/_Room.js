export class _Room {
  constructor() {
    this.data = { objectsReferences: [], x: 0 }
  }
  addObjectReference(ObjectReference) {
    if (ObjectReference) this.data.objectsReferences.push(ObjectReference)
  }
  update() {
    
    this.data.objectsReferences.map(obj => {
      obj.update()
    })
  }
  run(ctx) {
    // cleaning up
    ctx.fillRect(0, 0, 1000, 400)

    // rendering every object's sprite
    this.data.objectsReferences.map(obj => {
      const {ImageReference, width, height, x, y} = obj.run(ctx)
      ctx.drawImage(ImageReference, x, y, width, height)
    })
  }
}