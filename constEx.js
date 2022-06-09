//const cannot be Redeclared
const x=0;
//const x;-->SyntaxError: Identifier 'x' has already been declared
console.log(x);
//const variable cannot be reassigned
//x=1;-->TypeError: Assignment to constant variable.
console.log(x);
//const variables must be assigned a value when they are declared
//const pi;-->SyntaxError: Missing initializer in const declaration
const arr=[1,2,3,4,5];
//arr=[1,11,2,3,3];-->TypeError: Assignment to constant variable.
arr[0]=10;
console.log(arr);
arr.pop();
console.log(arr);
const obj={
    name:"kameswari",
    age:25
};
console.log(obj);
// obj={
//     name:"kameswari bojanki",
//     age:25
// };-->TypeError: Assignment to constant variable.
obj.name="kameswari bojanki";
delete obj.age;
console.log(obj);
//const block scope
{
    const block_scope=10;
}
//console.log(block_scope);-->ReferenceError: block_scope is not defined