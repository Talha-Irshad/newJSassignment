// task 1
var num1=+prompt("Enter a positive number: ")
document.write("number: "+num1+"<br>")

var num1Round=Math.round(num1)
document.write("Round off value: "+num1Round+"<br>")

var num1Floor=Math.floor(num1)
document.write("Floor value: "+num1Floor+"<br>")

var num1Ciel=Math.ceil(num1)
document.write("Ceil value: "+num1Ciel+"<br>")

document.write("<br><br><br>")


// task 2
var num2=parseFloat(prompt("Enter a negative number: "))
document.write("number: "+num2+"<br>")

var num2Round=Math.round(num2)
document.write("Round off value: "+num2Round+"<br>")

var num2Floor=Math.floor(num2)
document.write("Floor value: "+num2Floor+"<br>")

var num2Ciel=Math.ceil(num2)
document.write("Ceil value: "+num2Ciel+"<br>")

document.write("<br><br><br>")

// task 3
var num3=+prompt("Enter a number to find its absolute: ")
var num3Abs=Math.abs(num3)
document.write("The absolute value of "+num3+" is "+num3Abs+"<br>")

document.write("<br><br><br>")

// task 4
var randNum=Math.random();
var impNum=(randNum*6)+1;
var result=Math.floor(impNum);

document.write("Random Dice number="+result);

document.write("<br><br><br>")

// task 5
var randNum=Math.random();
var impNum1=(randNum*2)+1;
var result1=Math.floor(impNum1);
var coin=["Heads","Tails"]
document.write(result1+"<br>")
document.write("Random coin value: "+coin[result1-1])

document.write("<br><br><br>")

// task 6
var randNum=Math.random();
var impNum2=(randNum*100)+1;
var result2=Math.floor(impNum2);
document.write("Random number between 1 and 100: "+result2)

document.write("<br><br><br>")

// task 7
var weight=prompt("Enter your weight in kilograms: ");
var matches=weight.match(/\d+(?:\.\d+)?/)
document.write("The weight of user is "+matches[0]+" kilograms")
document.write("<br><br><br>")

// task 8
var randNum=Math.random();
var impNum3=(randNum*10)+1;
var result3=Math.floor(impNum3);
var userInput=prompt("Enter the secret number between 1 and 10: ")
console.log(result3)
if(userInput==result3){
    alert("Congratulations! your answer is correct")
}else{
    alert("try again")
}
