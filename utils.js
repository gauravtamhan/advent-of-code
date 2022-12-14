import fs from 'fs'
import path from 'path'
import readline from 'readline'

/**
 * Reads in a file's input
 * @param {string} fileName relative path to the file
 * @returns {string[]}
 */
export const readFile = (fileName = './input.txt') =>
  fs.readFileSync(path.resolve(process.cwd(), fileName), 'utf8').split('\n')

/**
 * Reads in a file's input asynchronously.
 * @param {string} fileName relative path to the file
 * @returns {Promise<string[]>}
 */
export const old_readFile = async (fileName = './input.txt') => {
  const lines = []
  const inStream = fs.createReadStream(path.resolve(process.cwd(), fileName))
  const rl = readline.createInterface({ input: inStream })

  for await (const line of rl) {
    lines.push(line)
  }

  return lines
}

// Ex: old_readFile().then(lines => {})

/**
 * Finds the smallest number in an array.
 * @param {number[]} arr
 * @returns {number} the smallest number in the array
 */
export function min(arr) {
  return arr.reduce((acc, cur) => (cur < acc ? cur : acc))
}

/**
 * Finds the largest number in an array.
 * @param {number[]} arr
 * @returns {number} the largest number in the array
 */
export function max(arr) {
  return arr.reduce((acc, cur) => (cur > acc ? cur : acc))
}
