import { readFile } from '../../utils.js'

/**
 * - find the one with the larger difference
 * - turn that into an array x...y
 * - loop through that array, check if it contains lower/upper bounds of other
 * - if it does, add it to total count
 *
 *
 * Bigger one (B), Smaller one (S)
 *
 * -- if same length then bounds need to be equal--
 * S.lower === B.lower AND s.upper === B.upper
 *
 * S contained in B IF: S.lower >= B.lower AND S.upper <= B.upper
 */
function getLength(start, end) {
  return end - start + 1
}

/**
 *
 * @param {number[]} a array with lower and upper bounds
 * @param {number[]} b array with lower and upper bounds
 * @returns [bigger, smaller]
 */
function getBiggerOrSmaller(a, b) {
  // a: [2, 4]
  // b: [6, 8]
  const lengthA = getLength(...a)
  const lengthB = getLength(...b)

  if (lengthA === lengthB) return []

  const longerLength = Math.max(lengthA, lengthB)
  const longer = longerLength === lengthA ? a : b
  const shorter = longerLength !== lengthA ? a : b

  return [longer, shorter]
}

let total = 0
const lines = readFile()

for (let line of lines) {
  const [x, y] = line.split(',')
  const a = x.split('-').map((n) => +n)
  const b = y.split('-').map((n) => +n)

  const [bigger, smaller] = getBiggerOrSmaller(a, b)

  const sameSize = !bigger
  const boundsEqual = a[0] === b[0] && a[1] === b[1]

  if (sameSize) {
    if (boundsEqual) {
      total += 1
    }
    continue
  }

  const smallerContained = smaller[0] >= bigger[0] && smaller[1] <= bigger[1]

  if (smallerContained) {
    total += 1
  }
}

console.log(total)

/**
 *
 *  0 . 1 . 2 . 3 . 4 . 5 . 6 . 7 . 8 . 9
 *  0 . 1 . 2 . 3 . 4 . 5 . 6 . 7 . 8 . 9
 */
