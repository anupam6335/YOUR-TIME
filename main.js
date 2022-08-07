const hour = document.getElementById("hr");
const minute = document.getElementById("min");
const second = document.getElementById("sec");

setInterval(() => {
  let toDay = new Date();
  let hr = toDay.getHours() * 30;
  let min = toDay.getMinutes() * 6;
  let sec = toDay.getSeconds() * 6;

  hour.style.transform = `rotateZ(${hr + min / 12}deg)`;
  minute.style.transform = `rotateZ(${min}deg)`;
  second.style.transform = `rotateZ(${sec}deg)`;
});

// fun start here

var audio = new Audio('./sound/bellSound.wav');
var audio2 = new Audio('./sound/sound2.wav');
function ringBell() {
    audio.play();
}

var start= document.getElementById('start');
var reset= document.getElementById('reset');

var h = document.getElementById('hour');
var m =document.getElementById('minute');
var s = document.getElementById('secs');

// store a ref to the variable

var startTimer = null;

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    }else if(s.value != 0){
        var nS=s.value;
        if(s.value < 10){
            s.value = "0"+s.value;
        }
        s.value--
    }else if(m.value!=0 && s.value==0){
        s.value = 59;  
        var nM= m.value; 
        m.value--;
        if(m.value < 10){
            m.value = "0"+m.value;
        }
    }else if(h.value!=0 && m.value == 0){
        s.value = 59;
        m.value = 59;
        var nH = h.value;
        h.value--;
        if(h.value < 10){
            h.value = "0"+h.value;
        }
    }
    
    return;
}

function stopTimer(){
    clearInterval(startTimer)
    ringBell2();
}

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        },1000)
    }
    startInterval()
})
reset.addEventListener('click', function(){
    h.value = '00';
    m.value = '00';
    s.value = '00';
    stopTimer()
})