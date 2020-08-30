
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

function ringBell() {
    audio.play();
}

let inputalarm = document.getElementById('inputalarm')
let btn = document.querySelector("#btnalarm")
let msg=document.getElementById('alarmvalid')
btn.addEventListener("click", setalaram);

function setalaram() {
    console.log('setting alarm');

    let alarm = new Date(inputalarm.value);
     //reg expression
     msg.innerHTML=`${alarm}`

    //  let reg = /^[0-9]/;
    //  let s = alarm;
    //  if (reg.test(s)) {
            
    //     inputalarm.classList.remove('is-invalid');
    //     setTimeout(() => {
    //         console.log("Ringing now")
    //         ringBell();
    //     }, alarmsound);
    // }
    // else{
    //     console.log('invalid date')
    //   inputalarm.classList.add('is-invalid');

    // }
 
  

    let now = new Date();

    let alarmsound = alarm - now;
    console.log(alarmsound);

   

    if (alarmsound >= 0) {
     
        setTimeout(() => {
            console.log("ringing alarm");
            ringBell();
        }, alarmsound);

        
     }
}