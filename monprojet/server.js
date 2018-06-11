let http = require('http')
let port = 3000

let server = http.createServer((request, response) => {
    response.end("Hello NodeJS !")
})

server.listen(port, (err) => {
    if (err)
        return console.log('something bad happened', err)
    console.log(`server is listening on ${port}`)
})