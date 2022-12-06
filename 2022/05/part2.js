import { readFile } from '../../utils.js'

const lines = readFile()
const emptyLine = lines.indexOf('')
const instructions = lines.slice(emptyLine + 1)

// I ain't got time to decipher the drawing
// so we just gonna re-create it in a way I can use it
const stacks = [
  ['Q', 'F', 'M', 'R', 'L', 'W', 'C', 'V'],
  ['D', 'Q', 'L'],
  ['P', 'S', 'R', 'G', 'W', 'C', 'N', 'B'],
  ['L', 'C', 'D', 'H', 'B', 'Q', 'G'],
  ['V', 'G', 'L', 'F', 'Z', 'S'],
  ['D', 'G', 'N', 'P'],
  ['D', 'Z', 'P', 'V', 'F', 'C', 'W'],
  ['C', 'P', 'D', 'M', 'S'],
  ['Z', 'N', 'W', 'T', 'V', 'M', 'P', 'C'],
]

for (let line of instructions) {
  const [amount, startStackNum, endStackNum] = line
    .replace(/\D+/g, ' ')
    .split(' ')
    .slice(1)
    .map((x) => +x)

  const startIndex = startStackNum - 1
  const endIndex = endStackNum - 1

  // starting from the end of `startStack`
  const startStack = stacks[startIndex]
  // go back `amount` items
  const index = startStack.length - amount
  // chop it off
  const chopped = startStack.splice(index)
  // add it onto `endStack`
  for (let val of chopped) {
    stacks[endIndex].push(val)
  }
}

let ans = ''
for (let stack of stacks) {
  const lastCrate = stack[stack.length - 1]
  ans += lastCrate
}

console.log(ans)
