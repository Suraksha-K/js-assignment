console.log("String Methods");
let strn="Hello Java_Script";
console.log(strn);
console.log("Substring:"+strn.substring(6,10));
console.log("using Substr()method:"+strn.substr(6,2));
let res=strn.replace("Java","JS");
console.log("After replacing Java by JS in string:",res);
let n=strn.charCodeAt(0);
console.log("Using charCodeAt() method:",n,"is the unicode of 0th character");
let strng="Have a nice day";
let reslt=strn.concat(strng);
console.log(reslt);
let i=strn.includes("Java")
console.log(i)
console.log("Array Methods");
let arr=['a','b','c'];
console.log(arr);
console.log(arr.slice(1));
console.log(arr.toString());
console.log(arr.join("*"));

