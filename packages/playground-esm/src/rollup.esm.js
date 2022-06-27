import { add } from 'module-exercise-rollup'

const args = process.argv.slice(2)
const a = parseInt(args[0])
const b = parseInt(args[1])

console.log(`Sum of ${a} and ${b} is ${add(a, b)}`)
