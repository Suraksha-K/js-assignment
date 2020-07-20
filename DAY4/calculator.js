function dis(val)
{
    document.getElementById("demo").value+=val
}
function solve()
{
   
    let x=document.getElementById("demo").value;
    let y=eval(x)
    document.getElementById("demo").value=y
}
function clr()
{
    document.getElementById("demo").value=" "
}