import { readFile } from '../../utils.js'

const data = readFile()

let i = 0
let acc = 0
let most = 0

for (let d of data) {
  const num = +d
  if (num) {
    acc = acc + num
  } else {
    most = acc > most ? acc : most
    acc = 0
  }
  if (i === data.length - 1) {
    most = acc > most ? acc : most
  }
  i++
}

console.log(most)
