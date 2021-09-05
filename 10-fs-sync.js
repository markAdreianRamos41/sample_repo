const fs = require('fs')

const first = fs.readFileSync('./Contents/first.txt', 'utf8')
const second = fs.readFileSync('./Contents/second.txt', 'utf8')

console.log(`${first}\n${second}`)

fs.writeFileSync(
	'./Contents/result-sync.txt', 
	`\nThe text from the first.txt and second.txt \n\nFIRST:\n\t${first}\nSECOND:\n\t${second}`,
	{ flag: 'a' }
)