import { readFile } from '../../utils.js'

/**
 *          Opponent    Me
 * Rock       A         X
 * Paper      B         Y
 * Scissor    C         Z
 */

/**
 *       X Y Z
 *     --------
 *   A | 3 6 0
 *   B | 0 3 6
 *   C | 6 0 3
 *
 *
 */

/**
 * Outcomes:
 * AX = Draw = 0
 * AY = Win
 * AZ = Lose
 */

/**
 * Points:
 * X = 1
 * Y = 2
 * Z = 3
 */

// matrix[theirs][mine]
const matrix = [
  [3, 6, 0],
  [0, 3, 6],
  [6, 0, 3],
]

const matrixInput = {
  A: 0,
  B: 1,
  C: 2,
  X: 0,
  Y: 1,
  Z: 2,
}

readFile().then((lines) => {
  let total = 0
  for (let line of lines) {
    const [them, me] = line.split(' ')

    const i = matrixInput[them]
    const j = matrixInput[me]

    const matchScore = matrix[i][j]
    const myScore = j + 1

    const roundScore = matchScore + myScore
    total += roundScore
  }
  console.log(total)
})
