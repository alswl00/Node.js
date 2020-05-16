//os:코어
const os=require('os');
console.log('os 타입 : '+os.type());
console.log(os.hostname());
console.log(os.freemem());

console.log(process.env);
console.log(process.versions);
console.log(process.platform);
