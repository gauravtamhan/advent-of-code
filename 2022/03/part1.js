import { readFile } from '../../utils.js'

/**
 * Finds the common item between 2 arrays
 * @param {string[]} a
 * @param {string{}} b
 * @returns {string}
 */
function intersect(a, b) {
  var setB = new Set(b)
  return [...new Set(a)].filter((x) => setB.has(x))[0]
}

const lines = readFile()
let sum = 0

for (let line of lines) {
  const arr = line.split('')
  const half = arr.length / 2

  const p1 = arr.slice(0, half)
  const p2 = arr.slice(half)
  const shared = intersect(p1, p2)

  const subtract = shared === shared.toLowerCase() ? 96 : 38
  const priority = shared.charCodeAt(0) - subtract
  sum += priority
}

console.log(sum)
