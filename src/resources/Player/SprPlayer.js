import { _Sprite } from '../../classes/_Sprite'

const importAll = (r)  => {
  return r.keys().map(r); 
}

const run_right = importAll(require.context('./imgs/run_right', false, /\.(png)$/))
const run_left = importAll(require.context('./imgs/run_left', false, /\.(png)$/))

const length = 60
const KnightRunRight = []
const KnightRunLeft = []

for (let i = 0; i < 8; i++) {
  KnightRunRight.push(new Image(length, length))
  KnightRunLeft.push(new Image(length, length))

  KnightRunRight[i].src = run_right[i].default
  KnightRunLeft[i].src = run_left[i].default
}

export const SprPlayer = new _Sprite(
  {
    default: KnightRunRight,
    run_left: KnightRunLeft,
    run_right: KnightRunRight
  }, {
    width: length, height: length
  })