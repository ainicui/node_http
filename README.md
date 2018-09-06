# http模块
   参考网站(https://blog.csdn.net/ligang2585116/article/details/72827781)
   参考网站(http://nodejs.cn/api/http.html)
   ## 代码实例：
```Javascript
const http = require('http')
//启动服务
http.createServer(function(req,res){
     console.log('请求到来，解析参数');
     //解析post请求
     res.writeHead(200, {"content-type": "text/html"})
     res.end()
}).listen(3000);
```
  
