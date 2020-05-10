var cross = "X";
var circle = "O";

var index = document.getElementById("index_0").getAttribute("index");

console.log(index);

document.getElementById("index_0").innerHTML = circle;

function clickCell(index){
	var id = "index_" + index;
	document.getElementById(id).innerHTML = cross;
}