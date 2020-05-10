var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")

button1.onclick = function () {
  button2.click()
}
button2.onclick = function () {
  alert("clicked")
}
