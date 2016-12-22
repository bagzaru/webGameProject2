let io = require('socket.io')(9999);

io.on('conection',(client)=>{
    console.log("클라이언트가 연결되었습니다_server_socketio.js");
})