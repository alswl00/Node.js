//EventEmitter를 상속받는다.
//process객체는 기본적으로 eventemitter를 상속받는다.
//on()으로 이벤트 받고 emit()으로 실행
//1. 기존의 있는 이벤트 사용(exit)
process.on('exit',(code)=>{
    console.log('bye nodejs');
    console.log(code);  //code가 0이면 정상종료
})

console.log('실행중입니다');

/******************************************** */

//2. 'tick'이라는 내 맘대로의 이벤트 만들기

//eventemitter를 가지고 옴.
const EventEmitter = require('events');

//eventemitter 객체 생성
const customEmitter = new EventEmitter(); //EventEmitter는 클래스(new 생성)

customEmitter.on('tick',()=>{
    console.log('tick이벤트 발생함')
})

customEmitter.emit('tick');