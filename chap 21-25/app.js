// // task 1
var firstName = prompt("Enter your First Name: ");
var lastName = prompt("Enter your Last Name");
var fullName = firstName + " " + lastName;
alert("Welcome " + fullName + "!");

// // task 2
var mobName = prompt("Enter your favourite Mobile Phone Model: ");
var lenMobName = mobName.length;
document.write("My favourite Mobile Phone is: " + mobName + "<br>");
document.write("Length of string: " + lenMobName+ "<br>");
document.write("<br><br><br>")

// task 3
var nation = "Pakistani"
var position = nation.indexOf("n")
document.write("String: " + nation + "<br>");
document.write("Index of 'n': " + position + "<br>")
document.write("<br><br><br>")

// task 4
var secondString = "Hello World";
var position2 = secondString.lastIndexOf("l")
document.write("String: " + secondString + "<br>");
document.write("Index of 'l': " + position2 + "<br>")
document.write("<br><br><br>")

// task 5
var nation = "Pakistani"
var nationIndex3 = nation.charAt(3);
document.write("String: " + nation + "<br>");
document.write("Character at index 3: " + nationIndex3 + "<br>")
document.write("<br><br><br>")

// //  task 6
var firstName = prompt("Enter your First Name: ");
var lastName = prompt("Enter your Last Name");
var name = firstName.concat(lastName);
alert("Welcome " + name + "!");

// task 7
var city = "Hyderabad";
document.write("City: " + city + "<br>");
var newcity = city.replace("Hyder", "Islam")
document.write("After replacement: " + newcity);
document.write("<br><br><br>")

// task 8
var message = "Ali and Sami are best friends. They play cricket and football together"
document.write("Before Replacing 'and': " + message + "<br>")
var newMessage = message.replace(/and/g, "&");
document.write("After Replacing 'and': " + newMessage + "<br>")
document.write("<br><br><br>")

// task 9
var value = "472";
document.write("Value: " + value + "<br>");
document.write("Type: " + typeof value + "<br>");
var newValue = +value
document.write("Value: " + newValue + "<br>");
document.write("Type: " + typeof newValue + "<br>");
document.write("<br><br><br>")

// task 10
var userInput=prompt("Enter String: ")
document.write("User Input: "+userInput+"<br>");
document.write("Upper case: "+userInput.toUpperCase()+"<br>")
document.write("<br><br><br>");

// task 11
var userInput=prompt("Enter String to convert to title case: ")
document.write("User Input: "+userInput+"<br>");
var firstChar=userInput.slice(0,1)
firstChar=firstChar.toUpperCase();
var remainChar=userInput.slice(1);
remainChar=remainChar.toLowerCase();
var convertedChar=firstChar+remainChar;
document.write("Title case: "+convertedChar+"<br>")
document.write("<br><br><br>")

// task 12
var num = 35.56;
document.write("Number: " + num + "<br>")
var newnum = num.toString();
var newnum1 = newnum.slice(0, 2) + newnum.slice(3, 5)
document.write("Result: " + newnum1 + "<br>");
document.write("<br><br><br>")

// task 13
var userName=prompt("Enter your username: ");
for (let index = 0; index < userName.length; index++) {
    var i=userName[index].charCodeAt()
    if(i==33 || i==44 || i==46 || i==64){
        alert("Please enter a valid username");
        break;
    }
}

// task 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var dessertInput = prompt("Welcome to ABC bakery! What do you want to order? ")
var chars = dessertInput.toLowerCase();
var dessertAvailable = false
for (let index = 0; index < A.length; index++) {
    const element = A[index];
    if (chars == element) {
        alert(chars + " is available at index " + index + " in our bakery")
        dessertAvailable = true;
    }
}
if (dessertAvailable == false) {
    alert("We are sorry! " + chars + " is not available in our bakery")
}


// task 16
var uni="University of Karachi"
var uniarr=uni.split("")
for (let index = 0; index < uniarr.length; index++) {
    const element = uniarr[index];
    document.write(element+"<br>")
}
document.write("<br><br><br>")

// task 17
var inp=prompt("Input: ")
document.write("User Input: "+inp+"<br>")
var lastchar=inp[inp.length-1]
document.write("Last Character of input: "+lastchar+"<br>");
document.write("<br><br><br>")

// task 18
var str="the quick brown fox jumps over the lazy dog"
var strsplit=str.split(" ")
var temp1=0
for (let index = 0; index < strsplit.length; index++) {
    if(strsplit[index]=="the"){
        temp1=temp1+1;
    }
}
document.write("Text: "+str+"<br>");
document.write("There are "+temp1+" occurence(s) of the word 'the'")
document.write("<br><br><br>")

// task 15
var pass=prompt("Enter your password")
document.write("Entered Password: "+pass+"<br>")
if (pass.length-1<6) {
    document.write("Password must be longer than 6 characters<br>")
}
if(pass[0].charCodeAt>=48 && pass[0].charCodeAt<=57){
    document.write("Password cannot start with a number <br>")
}
var haveAlphabets=false;
var haveNums=false;
for (let index = 0; index < pass.length; index++) {
    var temp= pass[index].charCodeAt()
    if(temp>=48 && temp<=57){
        haveNums=true;
    }
    if(temp>=65 && temp <=90){
        haveAlphabets=true;
    }
    if(temp>=97 && temp<=122){
        haveAlphabets=true;
    }
}
if(haveAlphabets==false){
    document.write("Your password must have alphabets<br>")
}
if(haveNums==false){
    document.write("Your password must have numbers<br>")
}
document.write("<br><br><br>")
