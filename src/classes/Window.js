export class _Window {
  constructor(elementReference) {
    this.data = {
      elementReference,
      ctx: canvas.getContext('2d', {alpha: false}), // set alpha channel on false
      RoomReference: null
    }
  }
  selectRoom(RoomReference) {
    this.data.RoomReference = RoomReference
  }
  start() {
    this.data.RoomReference.run(this.data.ctx)

    window.requestAnimationFrame(this.start.bind(this))
  }
}