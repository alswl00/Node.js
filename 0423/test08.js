// const users=[
//     {name:'kim',age:20},
//     {name:'lee',age:30},
//     {name:'park',age:40},
// ]
// console.log(users.length);
// users.push({name:'kang',age:15});

// users.pop();
// users.forEach(function(value){
//     console.log(value);
// });

// users.unshift({name:'ko',age:25});
// users.forEach(function(value){
//     console.log(value);
// });

// users.shift();
// users.forEach(function(value){
//     console.log(value);
// });

// const pr=function(){
//     return 'hello nodejs';
// }
// users.push(pr);
// console.log(users[3]());


// const users=[
//     {name:'kim',age:20},
//     {name:'lee',age:30},
//     {name:'park',age:40},
// ]
// delete users[1];
// console.dir(users);

// users.forEach(function(value,index){
//     console.log(index,value.name);
// });


// const users=[
//     {name:'kim',age:20},
//     {name:'lee',age:30},
//     {name:'park',age:40},
// ]
// // splice(index,removeCount,[object]);
// users.splice(1,0,{name:'seo',age:35});
// console.dir(users);
// users.splice(2,1);
// console.dir(users);


const users=[
    {name:'kim',age:20},
    {name:'lee',age:30},
    {name:'park',age:40},
]
const users2=users.slice(1,2);
console.dir(users);
console.dir(users2);
