# http模块-服务端
  ## 简单实例
   参考网站(https://blog.csdn.net/ligang2585116/article/details/72827781)
   ### 代码实例：
   *用createServer方法创建服务，该方法自动添加`request`事件方法，以下简单案例:
```Javascript
const http = require('http')
//启动服务
http.createServer(function(req,res){
  console.log('请求到来，解析参数');
  //解析post请求
  res.writeHead(200, {"content-type": "text/html;charset=utf-8"})
  res.write('Hello World)
  res.end()
}).listen(3000);
```
    *用server方法创建服务，以下简单案例:
```Javascript
// 启动服务
const server = http.Server()
// 先绑定request事件，进行启动服务
server.on('request', (req, res)=>{
  res.statusCode = 200
  res.getHeader('Content-Type', 'text/html;charset=utf-8')
  res.write('Hello World')
  res.end()
})
server.listen(3000)
```    
  ## 事件介绍:
  ### request事件：服务端主要核心事件，当客户端请求时触发改事件，该事件提供两个参数 request response 来提供请求和响应信息
```Javascript
server.on('request', (req, res)=>{
  console.log(req.url) //请求从客户端传过来的url
  res.write('Hello World') // 主要响应给客户端的信息
  res.end()
})
```
  ### close事件：服务端关闭事件，当服务器关闭时触发改事件，该事件提供两个参数 request response 来提供请求和响应信息
```Javascript
server.on('close', ()=>{
  console.log('服务端关闭')
})
```

  ## request response 参数介绍:
  ### request参数主要获取客户端请求信息
    从客户端请求流中读取时会触发data事件， 当读取完客户端请求中数据时触发end事件
  >> request 中一些属性
  * method       获取请求方法，是Get请求还是Post请求，包含(Get、Post、Put、Delete)
  * url          客户端发送请求时使用的url参数字符串,用来判断请求页面
  * headers       获取请求头
  * httpVersion  获取HTTP版本(HTTP1.0或者HTTP1.1)
  * socket       服务器用于监听客户端请求的socket对象
``` Javascript
server.on('request', (req, res)=>{
  if(req.url !== '/favicon.ico'){ // 请求从客户端传过来的路由
    console.log(req.method); // 默认为get
    console.log(req.headers); // 请求头返回 { 'content-type': 'application/x-www-form-urlencoded','content-length': '34',host: 'localhost:3000',connection: 'close'}
    console.log(req.httpVersion); // 请求http版本号
    console.log(req.socket); // 请求的socket
  }
  res.end()
})
```
  
  
