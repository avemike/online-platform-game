export class _Room {
  constructor() {
    this.data = {
      renderableReferences: [],
      collisionableReferences: [],
      playerReference: [],
      updatableReferences: [],

      camera: {
        x: 0,
        y: 0
      }
    }
  }
  
  pushWindowProperties(width, height) {
    this.data.camera = {
      ...this.data.camera,
      width,
      height
    } 
  }
  
  // adding objects to room
  // args is array of possible object options
  // ['collisionable', 'renderable', 'player', 'grounded']
  addObjectReference(ObjectReferences, args) {
    // error handling
    if (!ObjectReferences) {
      throw ('ObjectReferences does not exist')
      return ;
    }
    ObjectReferences.map(ObjectReference => {
      if (args.includes('collisionable')) this.data.collisionableReferences.push(ObjectReference)
      if (args.includes('updatable')) this.data.updatableReferences.push(ObjectReference)
      if (args.includes('renderable')) this.data.renderableReferences.push(ObjectReference)
      if (args.includes('player')) this.data.playerReference.push(ObjectReference)
    })
  }

  update() {
    this.data.updatableReferences.map(obj => {
      obj.update()
    })
  }

  collisions() {
    const CR = this.data.collisionableReferences
    let standing = false
    for(let i = 0; i < CR.length; i++) {
      if(this.data.playerReference[0].collide(CR[i].data.hitbox) === 'up') {
        standing = true
      }
    }
    if(standing) this.data.playerReference[0].turnOnStanding()
    else this.data.playerReference[0].turnOffStanding()
  }
  render(ctx) {
    // cleaning up
    ctx.fillRect(0, 0, this.data.camera.width, this.data.camera.height)
    this.data.camera.x = this.data.playerReference[0].data.x + this.data.playerReference[0].data.width/2 - this.data.camera.width /2
    this.data.camera.y = this.data.playerReference[0].data.y + this.data.playerReference[0].data.height/2 - this.data.camera.height /2 - 40

    // rendering every object's sprite
    this.data.renderableReferences.map(obj => {
      const {ImageReference, width, height, x, y} = obj.run(ctx)

      ctx.drawImage(ImageReference, x - (this.data.camera.x * obj.data.depth), y - (this.data.camera.y * obj.data.depth), width, height)
    })
  }
}