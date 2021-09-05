const fs = require('fs')

fs.readFile('./Contents/first.txt', 'utf8', (err, result) => {
	if(err) {
		console.log('err')
		return
	}
	const first = result

	fs.readFile('./Contents/second.txt', 'utf8', (err, result) => {
		if(err) {
			console.log('err')
			return
		}
		const second = result

		fs.writeFile(
			'./Contents/result-async.txt', 
			`\nThe text from the first.txt and second.txt \n\nFIRST:\n\t${first}\nSECOND:\n\t${second}`,
			(err, result) => {
				if(err) {
					console.log(err)
					return
				}
				console.log("File Created SuccessFully!")
			}
		)
	})
})