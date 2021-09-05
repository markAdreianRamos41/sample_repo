const http = require('http')

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  if (req.url == '/') res.write('<h1>This is the homepage</h1>')
  if (req.url == '/about') res.write('<h1>This is the about</h1>')
  else res.write(`<h1>Not Found</h1> <a href="/">Back to homepage</a>`)
})

server.listen(PORT, (err) => {
  if (err) console.log(err)
  else console.log(`The server is running on PORT:${PORT}`)
})
