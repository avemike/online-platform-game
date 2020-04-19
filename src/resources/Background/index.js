import { ObjBg } from './ObjBg'
import { SprBg } from './SprBg';
import { ObjTreesInBg } from './ObjTreesInBg';
import { SprTreesInBg } from './SprTreesInBg';

export const Background = new ObjBg( SprBg, {x: 464, y: 240})
export const TreesInBg1 = new ObjTreesInBg( SprTreesInBg, {x: 463, y: 230})
export const TreesInBg2 = new ObjTreesInBg( SprTreesInBg, {x: 463 + 880, y: 230})
export const TreesInBg3 = new ObjTreesInBg( SprTreesInBg, {x: 463 - 880, y: 230})