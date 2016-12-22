//2016-12-21
//node.js
// const net = require('net');

// let server = net.createServer((client) => {
//     console.log('클라이언트가 연결되었습니다.');
// });

// server.listen(9999, 'localhost', () => {
//     console.log('서버가 연결 대기 중입니다.')
// });
let io = require('socket.io')(9999);

let ids=[];
let i=0;
io.on('connection',(client)=>{
    console.log(`클라이언트 : ${client.id}`);
    ids[i]=client.id;
    io.emit('id check',{message:ids[i], num:i});
    client.on('on chat',(a)=>{
        io.emit('on chat',{
        message : a.message,
        name : a.name
        })
    });
    client.on('join',(a)=>{
        io.emit('join',{
        name : a.myname
        })
    });
    i++;
})