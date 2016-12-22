//2016-12-21 
//node.js
// const net = require('net');

// let client = net.connect({port:9999, host:'localhost'}, () => {
//     console.log('서버와 연결되었습니다.');
// });

let socket = io.connect("http://localhost:9999");

socket.on('connection',(socket)=>{
    alert("서버와 연결되었습니다");
})