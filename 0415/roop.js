//num=23일떼 홀수인지 짝수인지판별
let num=23;
if(num%2) {
    console.log("홀수");
}
else {console.log("짝수");}

//1부터 100까지 정수중 4의 배수출력
for(let i=1;i<=100;i++) {
    if(i%4==0) console.log(i);
}

//100-999사이에 7의배수의 갯수와 합
let cnt=0; let total=0;
for(i=100;i<=999;i++) {
    if(i%7==0) {
        cnt++;
        total+=i;
    }
}
console.log(`100-999 사이에 7의 배수 갯수: ${cnt} 합:${total}`);

//100-999사이에 4의 배수가 아닌수들의 갯수아ㅘ 합
for(i=100;i<=999;i++) {
    if(i%4!=0) {
        cnt++;
        total+=i;
    }
}
console.log(`100-999 사이에 4의 배수가 아닌 수의 갯수: ${cnt} 합:${total}`);

//1부터 30까지 짝수와 홀수의 합 각각 
let hsum=0; let jsum=0;
for(i=1;i<=30;i++) {
    if(i%2==0){
        jsum+=i;
    }
    else hsum+=i;
}
console.log(`1-30의 짝수의 합: ${jsum}, 홀수의 합: ${hsum}`);

//오늘의 요일 출력(switch-case)
let day='목';
switch(day){
    case '월':num=day; break;
    case '화':num=day; break;
    case '수':num=day; break;
    case '목':num=day; break;
    case '금':num=day; break;
    case '토':num=day; break;
    case '일':num=day;
}
console.log(num+'요일');