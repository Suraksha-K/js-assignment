let colors=['red','orange','yellow','pink','blue','lightgreen'];
function colorchange()
{
    setTimeout(function loop(){
        document.bgColor=colors.shift();
        if(colors.length)
    {
        setTimeout(loop,5000);
    }   
 },5000);
}
function start()
{
    setInterval(colorchange(),20000);

}
start();
