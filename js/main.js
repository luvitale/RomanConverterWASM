window.onload = loadPage;

var inputInt = document.getElementById("input-int");
var lastInputIntValue = inputInt.value;

function loadPage() {
	inputInt.addEventListener("click", intToRoman);
	inputInt.addEventListener("keyup", intToRoman);
}

function intToRoman() {
	const MIN = 1;
	const MAX = 3999;
	inputIntValue = inputInt.value;
	if (inputIntValue == lastInputIntValue) return;
	
	lastInputIntValue = inputIntValue;
	var str_length = 0;
	
	if (inputIntValue < MIN || inputIntValue > MAX) {
		console.log("Ingresar un número entre " + MIN + " y " + MAX);
		document.getElementById("result-roman").textContent = "Ingresar un número entre " + MIN + " y " + MAX;
		document.getElementById("result-style").href = "css/continue.css";
		return;
	}
	
	str_length = _int_to_roman(inputIntValue);
	
	if (str_length == 0) {
		console.log("No se pudo calcular número romano");
		return;
	}
	
	var romanValue = '';
	for (let i = 0; i < str_length; i++) {
		romanValue += String.fromCharCode(_get_roman_character(i));
	}
	
	console.log(inputIntValue + " = " + romanValue);
	document.getElementById("result-roman").textContent = romanValue;
	document.getElementById("result-style").href = "css/success.css";
}