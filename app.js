const http = require('http')

const server = http.createServer((req , res)=>{

    if(req.url === '/'){
        res.end('This is our home page')
    }
    if(req.url === '/about'){
        res.end('tell me something about yourself')
    }
    res.end(`
        <h1>oops!!<h1>
        <p>We can't find your endpoint</p>
    `)
})

server.listen(5000)