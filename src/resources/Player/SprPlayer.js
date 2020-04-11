import { _Sprite } from '../../classes/_Sprite'
import { assignSprites } from '../../shared/assignSprites';

const importAll = req  => {
  return req.keys().map(req); 
}



const run_right = importAll(require.context('./imgs/run_right', false, /\.(png)$/))
const run_left = importAll(require.context('./imgs/run_left', false, /\.(png)$/))
const idle_right = importAll(require.context('./imgs/idle_right', false, /\.(png)$/))
const idle_left = importAll(require.context('./imgs/idle_left', false, /\.(png)$/))
const jump_right = importAll(require.context('./imgs/jump_right', false, /\.(png)$/))
const fall_right = importAll(require.context('./imgs/fall_right', false, /\.(png)$/))


const KnightRunRight = assignSprites(run_right)
const KnightRunLeft = assignSprites(run_left)
const KnightIdleRight = assignSprites(idle_right)
const KnightIdleLeft = assignSprites(idle_left)
const KnightJumpRight = assignSprites(jump_right)
const KnightFallRight = assignSprites(fall_right)

const length = 60
export const SprPlayer = new _Sprite(
  {
    default: {
      animation: KnightIdleRight
    },
    run_left: {
      animation: KnightRunLeft
    },
    run_right: {
      animation: KnightRunRight
    },
    idle_right: {
      animation: KnightIdleRight
    },
    idle_left: {
      animation: KnightIdleLeft
    },
    jump_right: {
      animation: KnightJumpRight,
      once: true
    },
    fall_right: {
      animation: KnightFallRight,
      once: true,
      next: 'idle_right'
    }
  }, {
    width: length, height: length
  })