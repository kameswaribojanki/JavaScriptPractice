let num=10;
//toString()
let tonum=num.toString(num);
console.log(tonum);
console.log(typeof(tonum));
//toExponential()-->returns string
let num1=234.777;
let toenum=num1.toExponential();
console.log(toenum);
toenum=num1.toExponential(2);
console.log(toenum);
toenum=num1.toExponential(10);
console.log(toenum);
//toFixed()-->returns string
let tofnum=num1.toFixed(0);
console.log(tofnum);
tofnum=num1.toFixed(1);
console.log(tofnum);
tofnum=num1.toFixed(2);
console.log(tofnum);
//toPrecision()-->returns string
let topnum=num1.toPrecision();
console.log(topnum);
topnum=num1.toPrecision(2);
console.log(topnum);
topnum=num1.toPrecision(3);
console.log(topnum);
//valueOf()-->returns a number
let vnum=num.valueOf();
console.log(vnum);
//Converting Variables to Numbers
//Number()
console.log(Number(true));
console.log(Number(10));
console.log(Number("10"));
console.log(Number("Tiger"));
//parseInt()
console.log(parseInt(true));
console.log(parseInt("10.888"));
console.log(parseInt("10 20 30"));
console.log(parseInt("20 Tiger"));
console.log(parseInt("Tiger"));
//parseFloat()
console.log(parseFloat(true));
console.log(parseFloat("10.888"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("20 Tiger"));
console.log(parseFloat("Tiger"));
//Number Properties-->can not applied on variables
//MAX_VALUE 
console.log(Number.MAX_VALUE);
//MIN_VALUE
console.log(Number.MIN_VALUE);
//POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);
console.log(1/0);
//NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY);
console.log(-1/0);
//NaN
console.log(Number.NaN);