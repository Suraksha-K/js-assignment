console.log("Sales Department");
let s=prompt("Enter the sales amde by the employee...!");
let c;
if(s>=0&&s<=5000)
{
     c=s*0.02;
}
else if(s>=5001&&s<=10000)
{
    
     c=s*0.05;
}
else if(s>=10001&&s<=20000)
{
    
     c=s*0.07;
}
else 
{
    
     c=s*0.1;
}
console.log("Total Sale:",s);
console.log("Total commission:",c);