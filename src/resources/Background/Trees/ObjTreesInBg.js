import { _Object } from "../../../classes/_Object";

export class ObjTreesInBgLast extends _Object {
  constructor(SpriteReference, args) {
    args.depth = 0.12;
    super(SpriteReference, args);
  }
}

export class ObjTreesInBgFirst extends _Object {
  constructor(SpriteReference, args) {
    args.depth = 0.3;
    super(SpriteReference, args);
  }
}
