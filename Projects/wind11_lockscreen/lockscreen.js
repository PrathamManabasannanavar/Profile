const currentDate = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
const months = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
  ];  

setInterval(()=>{
    // currentTime.getHours
    const currentTime = new Date();
    document.getElementById("timeBox").innerHTML ="<b>" + `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}` + "</b>";
}, 1000);

document.getElementById("dateBox").innerHTML = days[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()];

let blurBox = document.getElementById("blurBox");

document.getElementById("bodyTag").addEventListener('click', ()=>{
    blurBox.style.display = "block";
});

Array.from(document.getElementsByClassName("usernames")).forEach(username => {
    username.addEventListener('click', ()=>{
        document.getElementById("password").value="";
        document.getElementById("username").innerHTML = username.innerText;
    })
});