// Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 45;
const Id = Symbol('123')
const EmailId = Symbol('123')
//console.log(Id === EmailId)

//Reference (Non Primitive)

//Array, Objects, Functions
const heros = ["IronMan", "SpiderMan", "Hulk", "Thor"];
//console.log(typeof heros);
let obj1 = {
    name: "Akshay",
    age: 27,
}
//console.log(typeof obj1);
const myFunction = function(){
    console.log("hello world");
}
//console.log(typeof myFunction);

//+++++++++++++++++++++++++++++
// Stack(Primitive) Head(Non-Primitive)

let user1 = {
    email: "user1@gmail.com",
    upi: "user1@ybl"
}
let user2 = user1;
user2.email = "user2@gmail.com"

console.log(user1.email)
console.log(user2.email)