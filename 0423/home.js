//test1. 객체이름: user / name:kim,  name:lee, name:kang, name:park
// 3가지 방법으로 만듬
// 메서드:  show() : 위에 있는 다  출력

//1.
// const users=[{name:'kim'},{name:'lee'},{name:'kang'},{name:'park'},
//     {show:function(){
//         users.forEach(function(value){
//             console.log(value);
//         })
//     }}];
// users[4].show();

//2.
// const users=[];
// users.push({name:'kim'});
// users.push({name:'lee'});
// users.push({name:'kang'});
// users.push({name:'park'});
// var show=function(){
//     users.forEach(function(value){
//         console.log(value);
//     })
// }
// users.push(show);
// users[4]();

//3.
function users(name){
    this.name=name;
}
users.prototype.show=function(){
    // console.log(users);
    // users.forEach(function(value){
    //     console.log(value);
    // })
    // for(let value in users){
    //     console.log(value);
    // }
    console.log(this.name);
}
// const kim=new users('kim');
// const lee=new users('lee');
// const kang=new users('kang');
// const park=new users('park');
const u=[];
u[0]=new users('kim');
u[1]=new users('lee');
u[2]=new users('kang');
u[3]=new users('park');
// u.show;
console.log(u[1]);

// test2. 배열: user /{name:'kim', kor:80, eng:70, math:50}
//                         {name:'lee', kor:60, eng:30, math:50}
//                         {name:'kim', kor:80, eng:70, math:50}
//   for문을 이용해서 출력

const users2=[{name:'kim', kor:80, eng:70, math:50}
            ,{name:'lee', kor:60, eng:30, math:50}
            ,{name:'kim', kor:80, eng:70, math:50}
];

users2.forEach(function(value,index) {
    console.log(`key : ${index}, name : ${value.name}, kor : ${value.kor}, eng : ${value.eng}, math : ${value.math}`);
});