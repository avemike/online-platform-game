import { ObjGround } from "./ObjGround";
import { SprGround } from "./SprGround";
import { ObjGroundBg } from "./ObjGroundBg";
import { SprGroundBg } from "./SprGroundBg";

const GroundForeground = [];
const GroundBackground = [];
const baseGroundNum = 5;

const startingX = -300;
const startingY = 630;
const gap = 394;

// basic ones; kinda core ground, stem
for (let i = 0; i < baseGroundNum; i++) {
  GroundForeground.push(
    new ObjGround(SprGround, {
      x: startingX + i * gap,
      y: startingY,
      height: 322,
      width: 375,
    })
  );

  GroundBackground.push(
    new ObjGroundBg(SprGroundBg, { x: startingX + i * gap, y: startingY - 155 })
  );
}

// adding another levels of ground (higher level) - unregular grounds

// left upper
GroundForeground.push(
  new ObjGround(SprGround, {
    x: startingX - gap,
    y: startingY - 145,
    height: 322,
    width: 375,
  })
);
// right upper
GroundForeground.push(
  new ObjGround(SprGround, {
    x: startingX + gap * baseGroundNum,
    y: startingY - 145,
    height: 322,
    width: 375,
  })
);

export { GroundForeground };
export { GroundBackground };
