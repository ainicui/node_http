# http模块-客户端
  ## 代码实例：
  *用request方法创建服务，以下简单案例:
```Javascript
const http = require('http')
//启动服务
// http.request(options, callback)
const options = {
  host: 'localhost',
  path: '/',
  port: 3000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': contents.length
  }
};
//发送请求
const req = http.request(options, (res)=>{
  res.setEncoding('utf-8');
  res.on('data', function (data) {
    console.log('后台返回数据');
    console.log(data);
  })
});
req.write(contents);
//必须调用end()
req.end();
req.setTimeout(60* 1000, () => {
    console.log('超时了');
    req.abort();// 当请求已被客户端终止时触发。 该事件仅在首次调用 abort() 时触发
});
req.on('error', (error) => {
    if(error.code === 'ECONNERSET') {
        console.log('socket端口超时');
    }else {
        console.log(`发送错误：${error.code}`);
    }
});

```