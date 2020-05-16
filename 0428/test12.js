console.log('hello nodejs');

console.log('숫자입니다.  %d',10);

console.log('문자열입니다. %s','nodejs');

const person={
    name:'kim',
    age:19
}
console.log('json객체입니다 %j',person);
console.dir(person);

console.log(__finolename); //현재 실행한 파일의 이름
console.log(__dirname);  //현재 실행한 파일의 패스(경로)

console.log(process.argv); //실행한 명령어와 파일
console.log(process.argv.length);

console.log(process.version);  //nodejs버전(process객체의 버전)