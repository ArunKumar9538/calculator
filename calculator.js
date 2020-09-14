console.log("Script loaded");
var val_a = document.getElementById('vala');
var val_b = document.getElementById('valb');
var Add = document.getElementById('add');
var Sub = document.getElementById('sub');
var Mul = document.getElementById('mul');
var Div = document.getElementById('div');
var Clear = document.getElementById('clear');
var Ans = document.getElementById('ans');

function addition(){
	Ans.value = Number(val_a.value) + Number(val_b.value);
}
function subtraction(){
	Ans.value = Number(val_a.value) - Number(val_b.value);
}
function multiplication(){
	Ans.value = Number(val_a.value) * Number(val_b.value);
}
function division(){
	if (Number(val_b.value == 0)) {
	Ans.value = "Infinity";
	}
	else{
	Ans.value = Number(val_a.value) / Number(val_b.value);		
	}
}
function ClearAll(){
	val_a.value = null;
	val_b.value = null;
	Ans.value = null;
}
Add.onclick = addition;
Sub.onclick = subtraction;
Mul.onclick = multiplication;
Div.onclick = division;
Clear.onclick = ClearAll;