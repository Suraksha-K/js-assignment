function isPrime(num)
{
    for(var i=2;i<num/2;i++)
    {
        if(num%i==0)
        {
            return false;
        }
    }
    return true;
}
function disp(n)
{
    var arr=[2];
    for(var i=3;i<n;i+=2)
    {
        if(isPrime(i))
        {
            arr.push(i);
        }
    }
    console.log("Prime numbers are:");
    console.log(arr);
}
let no=prompt("Enter n");
disp(no);