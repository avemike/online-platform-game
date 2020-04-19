import { ObjGround } from './ObjGround'
import { SprGround } from './SprGround'
import { ObjGroundBg } from './ObjGroundBg'
import { SprGroundBg } from './SprGroundBg'

export const Ground1 = new ObjGround( SprGround, {x: 140, y: 630, height: 322})
export const Ground2 = new ObjGround( SprGround, {x: 540, y: 630, height: 322})
export const Ground3 = new ObjGround( SprGround, {x: 940, y: 630, height: 322})

export const GroundBg1 = new ObjGroundBg( SprGroundBg, {x: 140, y: 460})
export const GroundBg2 = new ObjGroundBg( SprGroundBg, {x: 540, y: 460})
export const GroundBg3 = new ObjGroundBg( SprGroundBg, {x: 940, y: 460})