const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    // 监听客户端发送的点餐消息
    socket.on('order', (data) => {
        // 在这里处理点餐消息，例如更新待做清单

        // 广播点餐消息给所有连接的客户端
        io.emit('update', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, () => {
    console.log('WebSocket server listening on port 3000');
});
