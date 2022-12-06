import { readFile } from '../../utils.js'

const MARKER_SIZE = 4

const lines = readFile()
const arr = lines[0].split('')

for (let i = MARKER_SIZE - 1; i < arr.length; i++) {
  const m = []
  for (let j = 0; j <= MARKER_SIZE - 1; j++) {
    m.push(arr[i - j])
  }
  const mSet = new Set(m)

  if (mSet.size === MARKER_SIZE) {
    console.log(i + 1)
    break
  }
}
