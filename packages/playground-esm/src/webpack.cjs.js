import { default as myMaths } from 'module-excercise-webpack'

const args = process.argv.slice(2)
const a = parseInt(args[0])
const b = parseInt(args[1])

console.log(`Sum of ${a} and ${b} is ${myMaths.add(a, b)}`)
