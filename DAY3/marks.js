console.log("Course 1");
// Using conditional statement
let mark=prompt("Enter your mark");
let grade;
if(mark>=80)
{
   grade='A';
}
else if(mark>=50 && mark<80)
{
    grade='B';
}
else if(mark>=35 && mark<50)
{
    grade='C';
}
else 
{
console.log("failed");
}
console.log("Marks are "+mark+"and Grade is "+grade);

// using Switch statement
console.log("Using Switch Case");
let mark2=Number(prompt("Enter second mark","Enter as 90 ,80,70....."));
let grade2;
switch(mark2)
{
    case 90:
        grade2='A+';
    break;
    case 80:
         grade2='A';
         break;
    case 70:
        grade2='B+';
        break;
     case 50:
        grade2='B';
        break;
    case 45:
        grade2='C';
        break;
    default:
}
console.log("mark is "+mark2+"and grade is ",grade2);

// using ternary operator
let mark3=Number(prompt("Enter third mark"));
// let grade;
let grade3=(mark3>=90)?"A+":(mark>=80&&mark<90)?"A":(mark>=70&&mark<80)?"B+":(mark>=60&&mark<70)?"B":(mark>=50&&mark<60)?"C+":"failed";

console.log("mark is "+mark3+"and grade is ",grade3);

