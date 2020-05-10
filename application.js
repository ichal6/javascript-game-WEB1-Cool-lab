var cross = "X";
var circle = "O";
var actual_user = "X";
var gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function restartGame(){
	document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
	gameState = ["", "", "", "", "", "", "", "", ""];
	actual_user = "X";
}

function clickCell(index){
	var id = "index_" + index;
	if(document.getElementById(id).innerHTML == ""){
		document.getElementById(id).innerHTML = actual_user;
		gameState[parseInt(index)] = actual_user;
		console.log(gameState);
		handleResultValidation();
		switchUser();
	}
	else
	{
		alert("This field was used.");
	}
}

function switchUser(){
	if(actual_user == cross){
		actual_user = circle;
	}
	else{
		actual_user = cross;
	}
}



function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
	if (roundWon) {
		winningMessage();
        restartGame();
        return;
    }
}

function winningMessage(){
	alert(actual_user + " has won!");
}
