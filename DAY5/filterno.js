let num=prompt("Enter a number");
let arr=[];
for(i=1;i<=num;i++)
{
     arr.push(i);
}
console.log("Array Elements are:\n",arr);
let odd=arr.filter(el=>el%2!=0);
console.log("OddNumbers:\n",odd);
let oddsquares=odd.map(el=>el**2);
console.log("Squares of Odd Numbers:\n",oddsquares);
