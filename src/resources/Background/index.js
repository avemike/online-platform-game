import { ObjBg } from './ObjBg'
import { SprBg } from './SprBg';
import { ObjTreesInBg } from './ObjTreesInBg';
import { SprTreesInBg } from './SprTreesInBg';
import { SprLeaves, width as leavesWidth } from './SprLeaves';
import { ObjLeaves } from './ObjLeaves';

const TreesInBg = []
const treesInBgY = 315

const Leaves = []
const leavesY = 210

const rowNumber = 5
const gap = 880

for (let i = 0; i < rowNumber; i++) {
  TreesInBg.push(
    new ObjTreesInBg( SprTreesInBg, {x: -400 + gap * i, y: treesInBgY})
  )
  Leaves.push(
    new ObjLeaves( SprLeaves, {x: -400 + leavesWidth * i, y: leavesY})
  )
}

const Background = new ObjBg( SprBg, {x: 464, y: 240})

// const Leaves = new ObjLeaves( SprLeaves, {x: 464, y: 140})

export default [Background, ...TreesInBg, ...Leaves]