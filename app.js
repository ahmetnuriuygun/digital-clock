
session = document.querySelector(".session")



const updateScreen=()=>{
let date = new Date();
let h = date.getHours()
let m = date.getMinutes()
let s = date.getSeconds() 


const session = document.querySelector(".session")
    if(h==0){
        h = 12;
    }
    if(h>12){
        h = h-12
        session.innerHTML = '' + 'PM'         
    }else{
        session.innerHTML = '' + 'AM' 
    }


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


document.querySelector(".hour").innerHTML = `${h}`
document.querySelector(".minute").innerHTML = `${m}`
document.querySelector(".second").innerHTML = `${s}`

}

setInterval("updateScreen()", 1000);









