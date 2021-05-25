var showTime = document.getElementById('show-time');

var [h,m,s,ms] = [0,0,0,0];

var interval = 0;


document.getElementById('start-timer').addEventListener('click',() =>{
        document.getElementById('start-timer').style.display = 'none';
        interval = setInterval(calcTime,100);
})

document.getElementById("pause-timer").addEventListener('click',() =>{
    clearInterval(interval);
    document.getElementById('start-timer').style.display = 'block';
})

document.getElementById('reset-timer').addEventListener('click',() =>{
    document.getElementById('start-timer').style.display = 'block';
    clearInterval(interval);
    [h,m,s,ms] = [0,0,0,0]
    showTime.innerText = `00 : 00 : 00 : 00`
})

function calcTime(){

    ms+=10;
    if(ms==100){
        ms = 0;
        s++;
        if(s==60){
            s = 0;
            m++;
            if(m == 60){
                m = 0;
                h++;
            }
        }
    }

    let hh = h < 10 ? "0"+h : h; 
    let mm = m < 10 ? "0"+m : m; 
    let ss = s < 10 ? "0"+s : s; 
    let mls = ms < 10 ? "0"+ms : ms; 

    showTime.innerText = `${hh} : ${mm} : ${ss} : ${mls}`
}