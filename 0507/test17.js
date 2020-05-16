const fs=require('fs');

//동기식
// console.log('A');
// console.log('B');
// console.log('C');

/************************************* */
//비동기식
// console.log('A');
// setTimeout(()=> {   //setTime: 몇 초 후에 실행
//     console.log('B');
// },2000);
// console.log('C');

/************************************* */
//동기식
// console.log('A');
// const content = fs.readFileSync('./data.txt');
// console.log(content.toString());
// console.log('B');
//A, content, B

/************************************* */
//비동기식
console.log('A');
fs.readFile('./data.txt',(err,result)=> {   //읽은 결과는 result에 저장
    if(err){ console.log(err); return;}
    console.log(result.toString());
    console.log('B');
})
console.log('C');

/*********************************** */
fs.writeFileSync('./data2.txt',"writeFileSync");
fs.writeFile('./data3.txt',"writeFile",(err)=>{
    if(err) throw err;
});