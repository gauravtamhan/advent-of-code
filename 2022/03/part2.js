import { readFile } from '../../utils.js'

/**
 * Finds the common item between 3 arrays
 * @param {string[]} a
 * @param {string{}} b
 * @param {string{}} c
 * @returns {string}
 */
function intersect(a, b, c) {
  var setB = new Set(b)
  var setC = new Set(c)
  return [...new Set(a)].filter((x) => setB.has(x) && setC.has(x))[0]
}

let i = 0
let groups = []
let sharedChars = []

readFile().then((lines) => {
  for (let line of lines) {
    groups.push(line)
    i++
    if (i % 3 === 0) {
      const shared = intersect(...groups)
      sharedChars.push(shared)
      groups = []
    }
  }

  const sum = sharedChars.reduce((acc, curr) => {
    const subtract = curr === curr.toLowerCase() ? 96 : 38
    const priority = curr.charCodeAt(0) - subtract
    return acc + priority
  }, 0)

  console.log(sum)
})
