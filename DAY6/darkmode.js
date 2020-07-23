let title=document.getElementById('title');
title.onclick=()=>{
const name=prompt("Enter your Name","Your name here");
title.innerText+=`\n\n Welcome to my family ${name}`;
}
const clock=document.getElementById('time');
function clockTime()
{
    let date=new Date()
    let time=date.toLocaleTimeString();
    clock.innerText=time;
}
setInterval(clockTime,1000);
function dmode()
{
    let elmnt=document.body;
    elmnt.classList.toggle("dark-mode");
}


