import { readFile } from '../../utils.js'

/**
 * - Figure out who's lower bound is bigger = B
 * - Compare 2 lower bounds, find the bigger one = Big Guy and call other one = Small guy
 * - S.upper >= B.lower
 */

let total = 0
const lines = readFile()

for (let line of lines) {
  const [x, y] = line.split(',')
  const a = x.split('-').map((n) => +n)
  const b = y.split('-').map((n) => +n)

  // are lower bounds equal? then there's overlap
  if (a[0] === b[0]) {
    total += 1
    continue
  }

  const bigGuy = a[0] < b[0] ? b : a
  const smallGuy = a[0] < b[0] ? a : b

  if (smallGuy[1] >= bigGuy[0]) {
    total += 1
  }
}

console.log(total)
