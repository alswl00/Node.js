//1. for each() : array 객체에 있는 함수
const fruits=['apple','banana','grape'];
fruits.forEach(function(index, value){ //매개변수 2개일때 앞의값이 값, 뒤의값이 index
    console.log(index, value);
});

//2. for -in
const obj={
    name:'kim',
    age:30,
    height:180
}
//in 뒤의 객체에서 키값이 차례대로 name에 들어감
for(var name in obj){ //
    console.log('key: '+name+', value: '+obj[name]);
}

//3. for -of
let arr=[10,20,30];
//of 뒤 객체에서 value값이 차례대로 들어감
for(let value of arr){
    console.log(value);
}

let str='foo'; //bar

for(let value of str){
    console.log(value);
}
