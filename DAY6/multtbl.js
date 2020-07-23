function printTable()
{
    let no=Number(document.getElementById('num').value);
    for(let i=1;i<=10;i++)
    {
        let p=document.getElementById('pprint');

      p.innerHTML+=no+"*"+i+"="+(no*i)+"<br>"
    }
    document.getElementById('num').value="";
}
