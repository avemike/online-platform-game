export class _Room {
  constructor() {
    this.data = { objectsReferences: [], x: 0 }
  }
  addObjectReference(ObjectReference) {
    this.data.objectsReferences.push(ObjectReference)
  }
  run(ctx) {
    this.data.x += 1
    ctx.fillStyle = "#333333";
    // ctx.fillRect(0, 0, size.width, size.height);

    ctx.fillRect(this.data.x, 25, 100, 100)
  }
}