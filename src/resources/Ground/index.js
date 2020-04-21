import { ObjGround } from './ObjGround'
import { SprGround } from './SprGround'
import { ObjGroundBg } from './ObjGroundBg'
import { SprGroundBg } from './SprGroundBg'

const GroundForeground = []
const GroundBackground = []
const groundNumber = 15

const startingX = -300
const startingY = 630
const gap = 400

// basic ones; kinda core ground, stem 
for(let i = 0; i < groundNumber; i++) {
  GroundForeground.push(
    new ObjGround( SprGround, {x: startingX + i*gap, y: startingY, height: 322, width: 375})
  )
  GroundBackground.push(
    new ObjGroundBg( SprGroundBg, {x: startingX + i*gap, y: startingY})
  )
}

export { GroundForeground }
export { GroundBackground }