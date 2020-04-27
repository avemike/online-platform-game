import { ObjBg } from "./ObjBg";
import { SprBg } from "./SprBg";
import { ObjTreesInBgLast, ObjTreesInBgFirst } from "./Trees/ObjTreesInBg";
import {
  SprTreesInBgLast,
  SprTreesInBgFirst,
  TreesInBgFirstWidth,
} from "./Trees/SprTreesInBg";
import { SprLeaves, width as leavesWidth } from "./Leaves/SprLeaves";
import { ObjLeaves } from "./Leaves/ObjLeaves";

const TreesInBg = [];
const treesInBgY = 315;

const Leaves = [];
const leavesY = 210;

const rowNumber = 3;
const gap = 880;

// last layer of trees & upper leaves
for (let i = 0; i < rowNumber; i++) {
  TreesInBg.push(
    new ObjTreesInBgLast(SprTreesInBgLast, { x: -400 + gap * i, y: treesInBgY })
  );
  Leaves.push(
    new ObjLeaves(SprLeaves, { x: -400 + leavesWidth * i, y: leavesY })
  );
}

// first layer of trees
for (let i = 0; i < rowNumber; i++) {
  TreesInBg.push(
    new ObjTreesInBgFirst(SprTreesInBgFirst, {
      x: -400 + TreesInBgFirstWidth * i,
      y: treesInBgY + 70,
    })
  );
}

const Background = new ObjBg(SprBg, { x: 464, y: 240 });

export default [Background, ...TreesInBg, ...Leaves];
