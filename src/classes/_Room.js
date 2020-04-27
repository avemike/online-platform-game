export class _Room {
  constructor() {
    this.data = {
      renderableReferences: [],
      collisionableReferences: [],
      playerReference: [],
      updatableReferences: [],

      camera: {
        x: 0,
        y: 0,
      },
    };
  }

  pushWindowProperties(width, height) {
    this.data.camera = {
      ...this.data.camera,
      width,
      height,
    };
  }

  // adding objects to room
  // args is array of possible object options
  // ['collisionable', 'renderable', 'player', 'grounded']
  addObjectReference(ObjectReferences, args) {
    // error handling
    if (!ObjectReferences) {
      throw "ObjectReferences does not exist";
    }
    ObjectReferences.map((ObjectReference) => {
      if (args.includes("collisionable"))
        this.data.collisionableReferences.push(ObjectReference);
      if (args.includes("updatable"))
        this.data.updatableReferences.push(ObjectReference);
      if (args.includes("renderable"))
        this.data.renderableReferences.push(ObjectReference);
      if (args.includes("player"))
        this.data.playerReference.push(ObjectReference);
    });
  }

  update() {
    this.data.updatableReferences.map((obj) => {
      obj.update();
    });
  }

  collisions() {
    const CR = this.data.collisionableReferences;
    let standing = false;
    for (let i = 0; i < CR.length; i++) {
      if (this.data.playerReference[0].collide(CR[i].data.hitbox) === "up") {
        standing = true;
      }
    }
    if (standing) this.data.playerReference[0].turnOnStanding();
    else this.data.playerReference[0].turnOffStanding();
  }
  render(ctx) {
    const { playerReference, camera } = this.data;
    // cleaning up
    ctx.fillRect(0, 0, camera.width, camera.height);

    // calculating objects camera shift (suppose that centre is player)
    const newCameraY =
      playerReference[0].data.y +
      playerReference[0].data.height / 2 -
      camera.height / 2 -
      40;
    const newCameraX =
      playerReference[0].data.x +
      playerReference[0].data.width / 2 -
      camera.width / 2;

    // acceptable camera borders
    camera.x = newCameraX;
    camera.y = newCameraY > 45 ? 45 : newCameraY;

    // rendering every object's sprite
    this.data.renderableReferences.map((obj) => {
      const { ImageReference, width, height, x, y } = obj.run(ctx);

      ctx.drawImage(
        ImageReference,
        x - this.data.camera.x * obj.data.depth,
        y - this.data.camera.y * obj.data.depth,
        width,
        height
      );
    });
  }
}
