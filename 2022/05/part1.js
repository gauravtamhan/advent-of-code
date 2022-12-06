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
  const [amount, startStack, endStack] = line
    .replace(/\D+/g, ' ')
    .split(' ')
    .slice(1)
    .map((x) => +x)

  const startIndex = startStack - 1
  const endIndex = endStack - 1

  // Repeat the following steps `amount` times
  for (let i = 0; i < amount; i++) {
    // pop the last item of the `startStack`
    const x = stacks[startIndex].pop()
    // and add it to the `endStack`
    stacks[endIndex].push(x)
  }
}

let ans = ''
for (let stack of stacks) {
  const lastCrate = stack[stack.length - 1]
  ans += lastCrate
}

console.log(ans)
