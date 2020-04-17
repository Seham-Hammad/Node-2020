const http = require('http');
const server = http.createServer();
server.on('Connection', (socket)=> {
    console.log('New Connection...')

});
server.listen(3999);

console.log('Listening on port 3999');

