window.onload=()=>{
    var seconds=00;
    var tens=00;
    var appendtens=document.getElementById("tens");
    var appendseconds=document.getElementById("seconds");
    var buttonStart=document.getElementById("buttonstart");
    var buttonStop=document.getElementById("buttonstop");
    var buttonReset=document.getElementById("buttonreset");
    var Interval;
    buttonStart.onclick=()=>{
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);
    }
    buttonStop.onclick=()=>{
        clearInterval(Interval);
    }
    buttonReset.onclick=()=>{
        clearInterval(Interval);
        tens="00";
        seconds="00";
    appendtens.innerHTML = tens;
  	appendseconds.innerHTML = seconds;
    }
    startTimer=()=>{
        tens++;
        if(tens<=9)
        {
            appendtens.innerHTML="0"+tens;
        }
        if(tens>9)
        {
            appendtens.innerHTML=tens;
        }
        if(tens>99){
            seconds++;
            appendseconds.innerHTML="0"+seconds;
            tens=0;
            appendtens.innerHTML="0"+tens;
        }
        if(seconds>9){
            appendseconds.innerHTML=seconds;
        }
    }
    
}

