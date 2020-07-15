console.log("var Keyword");
// String Variable
var name="ABC";
console.log("name:",name);
// Number variable
var age=20;
console.log("Age:",age);
// Boolean variable
var a=true;
console.log(a);
// Array
var fruits=['Mango','Banana','Orange'];
console.log(fruits);
console.log(fruits[1]);
// Object
var fruits1={name:"Mango",Color:"Green"}
console.log(fruits1);
// A var should be defined ,oterwise it will be undefined
var b;
console.log(b);
var name="Raksha";
console.log(name);

// let keyword
console.log("let Keyword");
{
    let name="Suraksha";
    console.log("Using let name:",name);
}
console.log("Using var:",name);

// const keyword
console.log("const Keyword");
const c=23;
console.log(c);
// cannot change value of const variable
c=21;
