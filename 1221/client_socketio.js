let socket = io.conect("http://localhost:9999");

socket.on('connection',(socket)=>{
    console.log("서버와 연걸되었습니다_client_socketio.js");
})