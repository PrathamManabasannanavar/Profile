let btns = document.getElementsByClassName("btns");
let optrs = document.getElementsByClassName("optr");
let screen = document.getElementById("screen");
screen.focus();

function clearScreen(){
    screen.value = "";
}

function computeMath(){
    screen.value = eval(screen.value);
    screen.focus();
}

Array.from(btns).forEach(btn => {
    btn.addEventListener('click',  ()=>{
        screen.value += btn.value;
        screen.focus();  
    })
});

Array.from(optrs).forEach(optr => {
    optr.addEventListener('click', (()=>{
        screen.value += optr.value;
        screen.focus();
    }))
});

screen.addEventListener('keyup', (event)=>{
    if(event.keyCode == 13){
        computeMath();
    }
});

