// task 1
function hello() {
    alert("Hello there")
}

// task 2
function phoneclick() {
    alert("Thanks for purchasing a phone from us")
}

// task 3
function removeRow(row) {
    var d = document.getElementById("delbtn").parentNode.parentNode.rowIndex
    document.getElementById('dsTable').deleteRow(d);
}

// task 5
var counter=0
function increase(){
    counter++
    document.getElementById('counter').innerHTML=counter
}
function decrease(){
    counter--
    document.getElementById('counter').innerHTML=counter
}