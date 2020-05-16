function sort(cb){
    cb();
}

function b(){
    console.log('hello callback');
}
sort(b); //sort함수를 호출하는데 매개변수로 함수를 넘김. 이때의 함수를 callback함수라고 함.
//여기서 callback함수는 b이다.

sort(function(){console.log('hello callback2')});
sort(()=>{
    console.log('hello callback2');
})