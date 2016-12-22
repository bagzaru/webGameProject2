//2016-12-21 
//node.js
// const net = require('net');

// let client = net.connect({port:9999, host:'localhost'}, () => {
//     console.log('서버와 연결되었습니다.');
// });

let socket = io.connect("http://localhost:9999");

let myid = "";
let str = "";
let count = 0;

var texttext;

socket.on('id check',(data)=>{
    document.getElementById("chat").innerHTML= "서버에 연결되었습니다.";
    myid+=data.message;
    mynum=data.num;
    socket.emit('join',{
      name : myname
    });
    
})

socket.on('join',(data)=>{
    count++;
    document.getElementById("chat").innerHTML= "총"+count+"명 참가하셨습니다.";
})

socket.on('on chat',(data)=>{

     document.getElementById("chatarea").innerHTML+= data.name+" : "+data.message+"<br>";
})



function submitsave(){
    var a;
    a=document.getElementById("a")
    str=a.value;
    document.getElementById("a").value="";
    myname=document.getElementById("myname").value;
    socket.emit('on chat',{
      name : myname,
      message : str
    });
}

window.addEventListner("keydown",function(data){
    if(data==13){
        submitsave();
    }
})
