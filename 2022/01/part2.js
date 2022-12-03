import { readFile } from '../../utils.js'

const data = readFile()

let i = 0
let acc = 0
let totals = []

for (let d of data) {
  const num = +d
  if (num) {
    acc = acc + num
  } else {
    totals.push(acc)
    acc = 0
  }
  if (i === data.length - 1) {
    totals.push(acc)
  }
  i++
}

totals.sort((a, b) => b - a)
console.log(totals[0] + totals[1] + totals[2])
