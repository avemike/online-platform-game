import { _Object } from "../../../classes/_Object";

export class ObjLeaves extends _Object {
  constructor(SpriteReference, args) {
    args.depth = 0.5;
    super(SpriteReference, args);
  }
}
