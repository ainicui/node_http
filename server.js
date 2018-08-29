const http = require('http')
const server = http.Server()

var sockets = []
server.on("request", function (req, res) {
  res.writeHead(200, {
    "content-type": "text/plain"
  })
  res.write("Hello Node.js")
  res.end()
})
server.listen(80)
server.on("connection", function (socket) {
  sockets.push(socket);
  socket.once("close", function () {
    sockets.splice(sockets.indexOf(socket), 1)
  })
})
function closeServer() {
  sockets.forEach(function (socket) {
    socket.destroy()
  })
  server.close(function () {
    console.log('服务器已断开')
  })
}
setTimeout(function () {
  closeServer()
}, 30000);

console.log('服务开启端口号为3000')