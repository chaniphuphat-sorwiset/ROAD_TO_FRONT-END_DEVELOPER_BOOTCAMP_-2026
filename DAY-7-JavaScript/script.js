// console.log("Hello Dech")

// document.getElementById("greetings").innerHTML = "abc1234"
// document.getElementById("greetings").style.color = "blue"

function changeColor() {
  document.getElementById("greetings").style.color = "yellow"
}

// document.getElementById("changeBtn").addEventListener("click", changeColor)
// document.getElementById("changeBtn").onclick = function () {
//   document.getElementById("greetings").style.color = "yellow"
// }

function hideElement() {
  document.querySelector("#titleText").classList.add("title")
}
