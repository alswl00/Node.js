
//1.
// var arr=new Array();
// var arr=[1,2,3,4,5]; //배열

// const grades={'kim':10, 'lee':30, 'park':50} //초기화
//이름이 grades란 객체
//객체는 {}로 시작
//key-value로 데이터 입력
// console.log(grades.kim);
// console.log(grades['lee']);

// console.dir(grades);

//2. 
// const grades={}; //const grades=new Object();
// grades.kim=10;
// grades.lee=30;
// grades.park=50;

// console.log(grades['park']);

//3. 생성자 함수 이용
// function Grades(name, score){
//     this.name=name;
//     this.score=score;
// }

// Grades('kim',10); //함수 호출

// const kim=new Grades('kim',10);  //객체 생성
// const lee=new Grades('lee',50);

const grades4={
    list:{name:'kim', age:30, height:180},
    show:function(){
        console.log('hello javascript');
    }
}

console.log(grades4.list);
console.log(grades4.list.name);
grades4.show(); //grades4['show']();

const grades5={
    list:{name:'kim', age:30, height:180},
    show:function(){
        for(var key in this.list) { //for-in문
            console.log(this.list[key]); //
        }
    }
}

grades5.show();