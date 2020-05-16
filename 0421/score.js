// const score={
//     kor:50, eng:80, math:100,
//     sum:function(){
//         console.log(this.kor+this.eng+this.math);
//     },
//     ave:function(){
//         console.log((this.kor+this.eng+this.math)/3);
//     }
// }
// score.sum();
// score.ave();


// const score={};
// score.kor=50;
// score.eng=80;
// score.math=100;
// score.sum=function(){
//     console.log(this.kor+this.eng+this.math);
// }
// score.ave=function(){
//     console.log((this.kor+this.eng+this.math)/3);
// }
// score.sum();
// score.ave();


function score(kor,eng,math){
    this.kor=kor;
    this.eng=eng;
    this.math=math;
}

score.prototype.sum=function(){
    console.log(this.kor+this.eng+this.math);
}
score.prototype.ave=function(){
    console.log((this.kor+this.eng+this.math)/3);
}
const s=new score(50,80,100);
s.sum();
s.ave();