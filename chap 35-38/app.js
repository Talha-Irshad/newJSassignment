// task 1
function timeNow() {
    var dateNow = new Date()
    document.write(dateNow + "<br>")
}

timeNow();

// task 2
function greet(firstName, lastName) {
    alert("Welcome " + firstName + " " + lastName)
}
var fName = prompt("Enter your first name: ")
var lName = prompt("Enter your Last name: ")
greet(fName, lName)

// task 3
function addnum(num1, num2) {
    num1 = +prompt("Enter first number")
    num2 = +prompt("Enter Second number")
    var sum = num1 + num2
    return sum
}
addnum()

// task 4
function calc(numA, numB, operator) {
    numA = prompt("Enter first number")
    numB = prompt("Enter second number")
    operator = prompt("Enter operator")
    var opr = numA + operator + numB
    var result = eval(opr)
    document.write(result + "<br>")
    return result;

}
calc();

// task 5
function square(num) {
    var result1 = num * num
    return result1
}

// task 6
function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}

// task 7
function counting(n1, n2) {
    n1 = prompt("enter starting num")
    n2 = prompt("enter Ending num")
    for (let index = n1; index <= n2; index++) {
        document.write(index + " ")

    }
}
counting();

// task 8
function hypotenuse(base, perp) {
    base = prompt("Enter base")
    perp = prompt("Enter perp")
    var hyp = Math.sqrt(square(base) + square(perp))
    return hyp

}

// task 9
function areaOfRect(width, height) {
    var a = width * height
    return a
}
areaOfRect(12, 15)
var widtha = 13
var heighta = 21
areaOfRect(widtha, heighta)

// task 10

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// task 11
function toUpper(str) {
    var string1 = str.split(" ")
    var resStr = ""
    for (let index = 0; index < string1.length; index++) {
        var firstchar = string1[index].slice(0, 1)
        firstchar = firstchar.toUpperCase()
        var restchar = string1[index].slice(1)
        restchar = restchar.toLowerCase()
        string1[index] = firstchar + restchar
        resStr += " " + string1[index]
    }
    console.log(resStr)
    return resStr
}
var string2 = "blah blah abc blah"
toUpper(string2)

// task 12
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}

// task 13
function countLetter(str,letter){
    var string1=str.split("")
    var wcount=0;
    for (let index = 0; index < string1.length; index++) {
        if(string1[index]==letter){
            wcount++
        }
    }
    console.log(wcount)
    return wcount
}
countLetter("The Quick brown fox jumps over the lazy dog","o")

// task 14
function calcCircumference(r){
    var circumference=2*Math.PI*r
    document.write("Circumference of the circle is "+circumference+"<br>")
}
function calcArea(r){
    var area=Math.PI*square(r)
    document.write("Area of the circle is "+area+"<br>")
}
