/**
 * HTTP服务端
 * Created by ligang on 17/5/28.
 */
const http = require('http');

var server = http.createServer((request, response) => {
    // 接受客户端请求时触发
    if (request.url !== '/favicon.ico') {
        response.setTimeout(2 * 60 * 1000, () => {
            console.error('请求超时！');
        });
        response.on('close', () => {
            console.error('请求中断！');
        });
        let result = '';
        request.on('data', (data) => {
            result += data;
        });
        request.on('end', () => {
            console.log(`服务器数据接收完毕：${result}`);
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            response.write('收到!');
            response.end(); // 结束本次请求
        });
    }
});
server.listen(8000, () => {
    console.log('监听成功')
});
// 开始监听
server.on('listening', () => {
    console.log('开始监听');
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log('端口被占用');
    } else {
        console.log(`发生错误：${e.code}`);
    }
});
