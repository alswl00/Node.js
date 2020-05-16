//https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=nodejs

const url=require('url');
const queryString=require('querystring');  //query를 알고 싶을 때

const urlStr="https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=nodejs";

const curUrl=url.parse(urlStr);  //curUrl 타입 : 객체
// console.log(curUrl);

// const curStr=url.format(curUrl);
// console.log(curStr);
const param=queryString.parse(curUrl.query);  //객체만 가능
console.log(param);
console.log(`검색어 : ${param.query}`);