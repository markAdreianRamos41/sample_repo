const path = require('path')

console.log(`RELATIVE PATH: C:\\Users\\USER\\Desktop\\nodeCourse\\Contents\\SubFolder\\sample.txt `)

//File joining file paths or directories (normalized path)
const filePath = path.join('Contents', 'SubFolder', 'sample.txt')
console.log(`PATH : ${filePath}`)

//Basename of the file path
const base = path.basename(filePath)
console.log(`BASENAME : ${base}`)

//Absolute path
const absolute = path.resolve(__dirname, 'Contents', 'SubFolder', 'sample.txt')
console.log(`ABSOLUTE : ${absolute}`)
