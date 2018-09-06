const http = require('http');
const querystring = require('querystring');
//启动服务
http.createServer(function (req, res) {
  console.log('请求到来，解析参数');
  //解析post请求
  let post = '';
  console.log(req.headers);
  req.on('data', function (chunk) {
    post += chunk;
  });
  req.on('end', function () {
    post = querystring.parse(post);
    //解析完成
    console.log('参数解析完成，返回name参数');
    res.end(post.name);
  });
}).listen(3000);


//客户端请求
const contents = querystring.stringify({
  name: 'marico',
  age: 21,
  address: 'beijing'
});
//声明请求参数
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
const req = http.request(options, function (res) {
  res.setEncoding('utf-8');
  res.on('data', function (data) {
    console.log('后台返回数据');
    console.log(data);
  })
});
req.write(contents);
//必须调用end()
req.end();