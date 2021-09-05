const os = require('os')

//info about current user
console.log(os.userInfo())

//method returns the system's uptime in seconds
console.log(`System Uptime: ${os.uptime()} seconds`)

//Other system info
const currentOS = {
	name: os.type(),
	release: os.release(),
	TOTAL_MEMORY: os.totalmem(),
	FREE_MEMORY: os.freemem(), 
}

console.log(currentOS)
