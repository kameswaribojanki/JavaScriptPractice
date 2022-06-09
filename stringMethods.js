let str="hello kameswari";
//JavaScript String Length
console.log(str.length);
//Extracting String Parts
//slice()
let substr = str.slice(0,5);
console.log(substr);
substr=str.slice(-9);
console.log(substr);
substr=str.slice(6);
console.log(substr);
//substring()
//substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().
let substr1 = str.substring(0,5);
console.log(substr1);
substr1=str.substring(-9);
console.log(substr1);
substr1=str.substring(6);
console.log(substr1);
//substr()
//substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
let substr2 = str.substr(0,5);
console.log(substr2);
substr2=str.substr(6,3);
console.log(substr2);
substr2=str.substr(5);
console.log(substr2);
//Replacing String Content
//relace()
let rstr=str.replace("hello","welcome");
console.log(rstr);
console.log(str);
let rstr1=str.replace(/e/g,"@");
console.log(rstr1);
let rstr2=str.replace(/KAMESWARI/i,"Qualminds");
console.log(rstr2);
//Converting to Upper and Lower Case
//toUpperCase()
let ustr=str.toUpperCase();
console.log(ustr);
console.log(str);
//toLowerCase()
let lstr=ustr.toLowerCase();
console.log(lstr);
console.log(ustr);
//JavaScript String concat
//concat()
let str1="hello";
let str2="world";
let cstr=str1.concat(str2);
console.log(cstr);
//JavaScript String trim
//trim()
let str12="     hello   world";
console.log(str12);
let tstr=str12.trim();
console.log(tstr);
//JavaScript String Padding
//padStart()
let str11="helllo";
let psstr=str11.padStart(10,"*");
console.log(psstr);
//padEnd()
let pestr=str11.padEnd(10,"*");
console.log(pestr);
//Extracting String Characters
//charAt(position)
let catstr=str11.charAt(3);
console.log(catstr);
//Converting a String to an Array
//split()
let str22="kameswari";
let astr=str22.split("");
console.log(astr);
