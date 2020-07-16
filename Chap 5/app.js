// task 1
var firstNum = +prompt("enter first number:");
var secondNum = +prompt("enter second number:");
var sum =firstNum+secondNum;
document.write("Sum of " + firstNum + " and " + secondNum + " is " + sum +"<br>")

// task 2
// for subtraction
var firstNum = +prompt("enter first number:");
var secondNum = +prompt("enter second number:");
var sub =firstNum-secondNum;
document.write("Subtraction of " + firstNum + " and " + secondNum + " is " + sub +"<br>");

// for multiplication
var firstNum = +prompt("enter first number:");
var secondNum = +prompt("enter second number:");
var mul =firstNum*secondNum;
document.write("Multiplication of " + firstNum + " and " + secondNum + " is " + mul +"<br>");

// for division
var firstNum = +prompt("enter first number:");
var secondNum = +prompt("enter second number:");
var divi =firstNum/secondNum;
document.write("Division of " + firstNum + " and " + secondNum + " is " + divi +"<br><br><br>");

// task 3
var someVariable;
document.write("Value after variable declaration is: " + someVariable +"<br>");
someVariable = 12;
document.write("Initial Value is: "+someVariable + "<br>");
someVariable++;
document.write("Variable after increment is: "+someVariable+"<br>");
someVariable = someVariable + 7;
document.write("Value after addition is: "+someVariable+"<br>");
someVariable--;
document.write("Value after decrement is:"+ someVariable + "<br>");
someVariable=someVariable%3;
document.write("The remainder is: "+ someVariable +"<br><br><br>");

// task 4
var ticketCost=600;
var quan_ofTicket=5;
var totalCost=ticketCost*quan_ofTicket;
document.write("Total cost to buy "+ quan_ofTicket +" tickets to a movie is " + totalCost +"PKR<br><br><br>");

// task 5
document.write("Table of 7<br>");
var num=7;
var prod;
for (let i = 1; i <= 10; i++) {
    prod = num*i;
    console.log(prod);
    document.write(num + "x" + i + "=" + prod +"<br>");
}
document.write("<br><br><br>")

// task 6
var temp_in_c=32;
var temp_in_f=(temp_in_c*(9/5))+32;
document.write(temp_in_c+"\u00B0 C is " + temp_in_f+"\u00B0 F <br>")

var temp_in_f=92;
var temp_in_c=(temp_in_f-32)*5/9;
document.write(temp_in_f+"\u00B0 F is " + temp_in_c+"\u00B0 C <br>")
document.write("<br><br><br>")

// task 7
document.write("<h1>Shopping Cart</h1><br>")
document.write("<br>")
var priceItem1=550;
var quantityItem1=4;
var priceItem2=670;
var quantityItem2=9;
var shippingCharges=100;
document.write("Price of item 1: "+priceItem1+"<br>");
document.write("Quantity of item 1: "+quantityItem1+"<br>");
document.write("Price of item 2: "+ priceItem2+"<br>")
document.write("Quantity of item 2: "+quantityItem2+"<br>");
document.write("Shipping Charges: " + shippingCharges+"<br><br><br>");
var total_cost = (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges;
document.write("Total Cost of your order: " + total_cost);
document.write("<br><br><br>");

// task 8
var totalMarks=1100;
var obtMarks=990;
var per=(obtMarks/totalMarks)*100
document.write("<h1>Marks Sheet</h1><br>");
document.write("<br><br>");
document.write("Total marks: "+totalMarks +"<br>");
document.write("Obtained marks: "+obtMarks +"<br>");
document.write("Percentage: "+per+"%"+"<br>")
document.write("<br><br><br>");

// task 9
document.write("<h1>Currency in PKR</h1><br>");
var usd=10;
var saudiR=25;
var totalCurrency=(usd*104.80)+(saudiR*28);
document.write("Total currency in PKR: "+totalCurrency+"<br>");
document.write("<br><br>");

// task 10
var numb=12
var result = ((numb+5)*10)/2;
document.write("Result is "+result+"<br>");
document.write("<br><br><br>");

// task 11
document.write("<h1>Age Calculator</h1><br>");
var thisYear=2020;
var birthYear=1995;
var age=thisYear-birthYear;
document.write("Current Year: "+thisYear+"<br>");
document.write("Birth Year: "+birthYear+"<br>");
document.write("Age: "+age+"<br>");
document.write("<br><br><br>");

// task 12
document.write("<h1>The Geometrize</h1><br>");
document.write("<br>");
var radius = 23;
var circumference = 2*3.142*radius;
var area = 3.142*Math.pow(radius,2);
document.write("Radius of a circle: "+radius+"<br>");
document.write("circumference of a circle is: "+circumference+"<br>");
document.write("Area of circle is: "+area+"<br>");
document.write("<br><br><br>");

// task 13
document.write("<h1>Lifetime Supply Calculator</h1><br>");
document.write("<br>");
var snack="Chilli Milli";
var myAge=21;
var maxAge=80;
var maxPerDay=2;
var supplyLeft=((maxAge-myAge)*365)*maxPerDay;
document.write("Favourite Snack: "+snack+"<br>");
document.write("Current Age: "+myAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of Snack per day: "+maxPerDay+"<br>");
document.write("You will need "+supplyLeft+" "+snack+" to last you until the ripe old age of "+maxAge+"<br>");
document.write("<br><br><br>");

