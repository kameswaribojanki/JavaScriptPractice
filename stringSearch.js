let str = "Hello Qualminds user, welcome to Qualminds Technologies";
//indexOf()
let istr=str.indexOf("Qualminds");
console.log(istr);
istr=str.indexOf("kameswari");
console.log(istr);
//lastIndexOf
let listr=str.lastIndexOf("Qualminds");
console.log(listr);
listr=str.lastIndexOf("kameswari");
console.log(listr);
//search()
let sstr=str.search("Qualminds");
console.log(sstr);
//match()
let mstr=str.match(/qualminds/gi);
console.log(mstr);
//includes()
let instr=str.includes("Qualminds");
console.log(instr);
instr=str.includes("kameswari");
console.log(instr);
instr=str.includes("welcome",20);
console.log(instr);
//startsWith()
let ststr=str.startsWith("Hello");
console.log(ststr);
ststr=str.startsWith("welcome");
console.log(ststr);
ststr=str.startsWith("Qualminds",6);
console.log(ststr);
//endsWith()
let enstr=str.endsWith("Technologies");
console.log(enstr);
enstr=str.endsWith("Qualminds");
console.log(enstr);
enstr=str.endsWith("user",20);
console.log(enstr);

