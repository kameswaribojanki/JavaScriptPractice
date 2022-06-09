//let cannot be re-declared
let example="Hello World";
console.log(example);
//let example;->redeclaration of variable is error
var x=0;
var x;
console.log(x);
//let block scoped
{
    let x1=0;
}
//console.log(x1);->ReferenceError: x1 is not defined
{
    var y1=0;
}
console.log(y1);
//let hoisting
x2=0;
let x2;
//console.log(x2);->ReferenceError: Cannot access 'x2' before initialization