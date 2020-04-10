import { _Sprite } from '../../classes/_Sprite'
import { assignSprites } from '../../shared/assignSprites';

const importAll = (r)  => {
  return r.keys().map(r); 
}



const run_right = importAll(require.context('./imgs/run_right', false, /\.(png)$/))
const run_left = importAll(require.context('./imgs/run_left', false, /\.(png)$/))
const idle_right = importAll(require.context('./imgs/idle_right', false, /\.(png)$/))
const idle_left = importAll(require.context('./imgs/idle_left', false, /\.(png)$/))

const length = 60

const KnightRunLeft = assignSprites(run_left)
const KnightRunRight = assignSprites(run_right)
const KnightIdleRight = assignSprites(idle_right)
const KnightIdleLeft = assignSprites(idle_left)

export const SprPlayer = new _Sprite(
  {
    default: KnightIdleRight,
    run_left: KnightRunLeft,
    run_right: KnightRunRight,
    idle_right: KnightIdleRight,
    idle_left: KnightIdleLeft
  }, {
    width: length, height: length
  })