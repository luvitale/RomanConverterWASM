document.getElementById("input-int").addEventListener("keyup", intToRoman);
document.getElementById("input-int").addEventListener("click", intToRoman);
var i = 0;
function intToRoman() {
  i++;
  var resultRoman = document.getElementById("result-roman");
  resultRoman.textContent = "Hola mundo " + i;
}