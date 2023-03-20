// var username = prompt('please enter your name')
// document.write(`<h1> Welcome ${username.split("").reverse().join("")}</h1>`)
// Question No.1
for (var i=1;i<=10;i++){
    document.write(`<h2>The NUM is ${i}.</h2>`)
}
// Question No.2
var sayHi = "Hello World"

console.log(sayHi)
document.write(`<h2>${sayHi}</h2>`)
// alert(sayHi)
// Question No.3
for (var i=0;i<=10;i++){
    if(i % 2 != 0){
    document.write(`<h2>This NUM (${i}) is odd .</h2>`)
    }
}
// Question No.4
var sum = ""
for (var i=1;i<=8;i++){
    var str = i.toString()
    sum = sum + " " + str
    document.write(`<h2>${sum}</h2>`)
}
// Question No.5
function sqr(n){
    var sqrNum = n * n
    return sqrNum
}
var number = prompt("Enter a number to square it? ")
document.write(`<h2>Square of ${number} is ${sqr(number)}</h2>`)
