console.log("Number:");
let n=myfn();
  function myfn()
  {
    let num=prompt("Enter a number");
    if(num<=100)
    {
        alert("Enter Another number");
        myfn();
    }
    else
    {
    console.log(num);
    }
}
 
