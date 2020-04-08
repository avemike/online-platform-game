export class _Window {
  constructor(elementReference) {
    this.data = {
      elementReference,
      ctx: canvas.getContext('2d', {alpha: false}), // set alpha channel on false
      RoomReference: null,
      work: true,
    }
    this.data.ctx.imageSmoothingEnabled = false
  }
  selectRoom(RoomReference) {
    this.data.RoomReference = RoomReference
  }
  start() {
    if(this.data.work) {
      this.data.RoomReference.update()
      this.data.RoomReference.collisions()
      this.data.RoomReference.render(this.data.ctx)
      this.data.work = false
    } else this.data.work = true

    window.requestAnimationFrame(this.start.bind(this))
  }
}