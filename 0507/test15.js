const user=require('./user');
function showUser(){
    console.log(user.getUser().name+" "+user.group.name);
}
showUser();