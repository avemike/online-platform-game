export class _Window {
  constructor(elementReference) {
    this.data = {
      elementReference,
      ctx: canvas.getContext('2d', {alpha: false}), // set alpha channel on false
      RoomReference: null,
      render: true  // reducing fps by 2 i guess
    }
  }
  selectRoom(RoomReference) {
    this.data.RoomReference = RoomReference
  }
  start() {
    this.data.RoomReference.update()
    if(this.data.render)
      this.data.RoomReference.run(this.data.ctx)
    this.data.render = !this.data.render

    window.requestAnimationFrame(this.start.bind(this))
  }
}