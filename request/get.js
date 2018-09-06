/* 
  客户端get请求
*/
const http = require('http')
const url = require('url')
const util = require('util')

// 启动服务
http.createServer((req, res) => {
  let params = url.parse(req.url, true)
  console.log('解析完成')
  console.log(util.inspect(params)) //通过url模块可以解析路径
  console.log('向客户端返回')
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf-8"
  })
  console.log(params.pathname)
  if (params.pathname == '/user') {
    res.end('user路由传过来的参数' + params.query.name + ';' + params.query.age)
  } else if (params.pathname == '/ajax'){
    res.end('ajax路由传过来的ID' + params.query.id)
  }else{
    res.write('<a href="/user?name=marico&age=21">user</a><br><a href="/ajax?id=10">ajax</a>')
  }

}).listen(3000)

// 客户端请求
http.get({
  host: 'localhost',
  path: '/user?name=marico&age=21',
  port: 3000
}, (res) => {
  res.setEncoding('utf-8')
  res.on('data', data => {
    console.log('服务端响应回来的数据为1:' + data)
  })
})

http.get({
  host: 'localhost',
  path: '/ajax?id=10',
  port: 3000
}, (res) => {
  res.setEncoding('utf-8')
  res.on('data', data => {
    console.log('服务端响应回来的数据为2:' + data)
  })
})