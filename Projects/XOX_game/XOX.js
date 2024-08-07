let btns = document.getElementsByClassName("btns");
let player1 =  document.getElementById("player1");
let player2 =  document.getElementById("player2");

let player = true;
let arr = [0, 0, 0,  0, 0, 0,  0, 0, 0];

function checkWinner(){
        if (arr[0] == arr[1] && arr[1] == arr[2])
			return arr[0];
		if (arr[3] == arr[4] && arr[4] == arr[5])
			return arr[3];
		if (arr[6] == arr[7] && arr[7] == arr[8])
			return arr[6];
		if (arr[0] == arr[3] && arr[3] == arr[6])
			return arr[0];
		if (arr[1] == arr[4] && arr[4] == arr[7])
			return arr[1];
		if (arr[2] == arr[5] && arr[5] == arr[8])
			return arr[2];
		if (arr[0] == arr[4] && arr[4] == arr[8])
			return arr[0];
		if (arr[2] == arr[4] && arr[4] == arr[6])
			return arr[2];
        return 0;
}

function clearBox(){
    let btnArray = Array.from(btns);
    btnArray.forEach((btn) => {
    btn.disabled = false;
    btn.innerText = "";
    arr = [0, 0, 0,  0, 0, 0,  0, 0, 0];
    player = true;
    })
}
function resetFunct(){
    document.getElementById("resultBox").innerHTML = "";
    player1.innerHTML = 0;
    player2.innerHTML = 0;
    let btnArray = Array.from(btns);
    btnArray.forEach((btn) => {
    btn.disabled = false;
    btn.innerText = "";
    arr = [0, 0, 0,  0, 0, 0,  0, 0, 0];
    player = true;
});

}

let btnArray = Array.from(btns);
btnArray.forEach((btn) => {
    btn.addEventListener('click', (event)=>{
        const index = btnArray.indexOf(event.target);
        document.getElementById("resultBox").innerHTML = "";
        if(player){
            event.target.innerHTML = "<b>X</b>";
            arr[index] = "X";
            event.target.disabled = true;
            player = false;
        }
        else{
            event.target.innerHTML = "<b>O</b>";
            arr[index] = "O";
            event.target.disabled = true;
            player = true;
        }
       
        let winner = checkWinner();
        if(winner == "O" || winner == "X"){
            if(winner == "X" ){
                player1.innerHTML = parseInt(player1.innerHTML) + 1;
                document.getElementById("resultBox").innerHTML = "<b>Player 1 won!!</b>";
            }
            else if(winner == "O"){
                player2.innerHTML = parseInt(player2.innerHTML) + 1;
                document.getElementById("resultBox").innerHTML = "<b>Player 2 won!!</b>";
            }
            clearBox();
        }
    })
});

