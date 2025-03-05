let btns = document.getElementsByClassName("btns");
let player1 =  document.getElementById("player1");
let player2 =  document.getElementById("player2");

var player = true;
let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function checkWinner(){
        for(let i=0; i<3; i++){
            if(arr[i][0] != 0 && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]){
                return arr[i][0];
            }
            if(arr[0][i] != 0 && arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]){
                return arr[0][i];
            }
        }
        if (arr[0][0] != 0 && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] !== 0) {
            return arr[0][0];
        }
        if (arr[0][2] != 0 && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0] && arr[0][2] !== 0) {
            return arr[0][2];
        }
        return 0;
}

function clearArray(){
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            arr[i][j] = 0;
        }
    }
}

function clearBox(){
    let btnArray = Array.from(btns);
    btnArray.forEach((btn) => {
    btn.disabled = false;
    btn.innerText = "";
    clearArray();
    window.player = true;
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
    clearArray()
    window.player = true;
});

}

let btnArray = Array.from(btns);
btnArray.forEach((btn) => {
    btn.addEventListener('click', (event)=>{
        const index = btnArray.indexOf(event.target);
        document.getElementById("resultBox").innerHTML = "";
        // console.log(Math.floor(index/3), index%3);

        if(player){
            event.target.innerHTML = "<b>X</b>";
            arr[Math.floor(index/3)][index%3] = "X";
            event.target.disabled = true;
        }
        else{
            event.target.innerHTML = "<b>O</b>";
            arr[Math.floor(index/3)][index%3] = "O";
            event.target.disabled = true;
        }
        console.log(arr);
        player = !player;
        // console.log(player);
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