//http모듈을 가져와서 http 상수에 대입
// const http=require('http');

//server객체를 생성
// const server=http.createServer();

//서버실행 (.listen(포트번호, 콜백함수))
// server.listen(3000, ()=>{   //nodejs에서는 보통 포트번호 3000번 많이 사용
//     console.log('Running Web Server at localhost......');
// })


//2. request, connection 이벤트 활용
// const http=require('http');
// const server=http.createServer();
// server.on('request',()=>{   //.on()같은 서버객체는 eventemitter 내장
//     console.log('request이벤트 발생함');
// })
// server.on('connection',()=>{
//     console.log('connection이벤트 발생함');
// })

// server.listen(3000,()=>{
//     console.log('Running Web Server at localhost......');
// })


//3.request이벤트가 발생했을 때 이벤트핸들러의 매게변수로 '요청'과 '응답'을 주어야 한다.
//3번 방법을 제일 많이 씀.
const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Hello nodejs</h1>');
    res.end();
})
//request요청이 들어왔을 때 응답을 보내줘야 한다. 그게 바로 function(req,res){}이다 <=이벤트핸들러이다.
server.listen(3000,()=>{
    console.log('Running Web Server at localhost......');
})

