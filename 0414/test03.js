//1.
// var vscope='global';
// function fscope(){
//     var vscope='local';
// }
// console.log(vscope); //global

//2.
// var vscope='global';
// function fscope(){
//     var vscope='local';
//     console.log(vscope);
// }
// fscope(); //local
// console.log('밖의 값' +vscope); //global

//3.
var vscope='global';
function fscope(){
    vscope='local';  //var없이 선언했을 때는 전역변수로 됨.
    console.log(vscope);
}
fscope(); //local
console.log('밖의 값' +vscope); //local