let t=prompt("Enter the Time in seconds","00");
var upgradeTime = 1;
var sec = upgradeTime;

function timer() {
  var days        = Math.floor(sec/24/60/60);
  var hoursLeft  = Math.floor((sec) - (days*86400));
  var hours      = Math.floor(hoursLeft/3600);
  var minLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes    = Math.floor(minLeft/60);
  var remainingSeconds = sec % 60;
  function pad(n) 
  {
    return (n < 10 ? "0" + n : n);
  }
  document.getElementById('countdown').innerHTML =pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
if (sec == t)
  {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "Time "+t+" seconds Expired...!";
    let b=document.getElementById('btn')
    b.innerText="Stopped";
  }
   else
  {
    sec++;
  }

}
function start()
{
var countdown = setInterval('timer()', 1000);
}