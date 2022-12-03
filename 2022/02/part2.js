import { readFile } from '../../utils.js'

/**
 *          Opponent
 * Rock       A = 1
 * Paper      B = 2
 * Scissor    C = 3
 */

/**
 * X = Lose = 0
 * Y = Draw = 3
 * Z = Win = 6
 */

/**
 *       X Y Z
 *     --------
 *   A | 3 1 2
 *   B | 1 2 3
 *   C | 2 3 1
 *
 *
 */

/**
 * I'm given the outcomes `matchScore`
 */

// matrix[theirs][outcome]
const matrix = [
  [3, 1, 2],
  [1, 2, 3],
  [2, 3, 1],
]

const matrixInput = {
  A: 0,
  B: 1,
  C: 2,
  X: 0,
  Y: 1,
  Z: 2,
}

const results = {
  X: 0,
  Y: 3,
  Z: 6,
}

readFile().then((lines) => {
  let total = 0
  for (let line of lines) {
    const [them, outcome] = line.split(' ')

    const i = matrixInput[them]
    const j = matrixInput[outcome]

    const myScore = matrix[i][j]

    const roundScore = results[outcome] + myScore
    total += roundScore
  }
  console.log(total)
})
