var inputInt = document.getElementById("input-int");

inputInt.addEventListener("click", intToRoman);
inputInt.addEventListener("keyup", intToRoman);

inputIntValue = inputInt.value;

function intToRoman() {
  var romanValue = "Ingresar un número entero válido";
  var resultRoman = document.getElementById("result-roman");
  
  actualInputIntValue = inputInt.value;
  if (actualInputIntValue == inputIntValue) return;
  
  inputIntValue = actualInputIntValue;
  if (inputIntValue >= 1 && inputIntValue <= 3999) {
	 romanValue = inputIntValue;
  }
  
  resultRoman.textContent = romanValue;
}