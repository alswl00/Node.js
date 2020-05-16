const users=[
    {name:'kim',age:20},
    {name:'lee',age:30},
    {name:'park',age:40}
]
console.log(`배열의 갯수 : ${users.length}`);

// users[3]={name:'ko',age:50};

users.push({name:'ko',age:50});
console.log(users[3]);
console.log(users[3].name);

//함수도 값이므로 변수에 대입할 수 있다.
var add=function(x,y){
    return (x+y);
}
users.push(add);
console.log(`배열의 갯수 : ${users.length}`);
console.dir(users);
console.log(users[4](10,3));