// task 1
var timeNow=new Date();
document.write(timeNow)
document.write("<br><br><br>")

// task 2
var timeNow=new Date();
var monthNow=timeNow.getMonth()
var months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
alert("Current Month: "+months[monthNow])

// task 3
var timeNow=new Date();
var daynow=timeNow.getDay();
var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] 
alert("Today is "+days[daynow])

// task 4
var timeNow=new Date();
var daynow=timeNow.getDay();
if(daynow==0||daynow==6){
    document.write("It's Fun day")
}
document.write("<br><br><br>")


// task 5
var timeNow=new Date();
var dateNow=timeNow.getDate();
if(dateNow<16){
    document.write("First fifteen days of the month")
}else{
    document.write("Last fifteen days of the month")
}
document.write("<br><br><br>")

// task 6
var timeNow=new Date();
document.write("Current date: "+timeNow+"<br>");
var timeSince1970=timeNow.getTime();
document.write("Elapsed milliseconds since 1st january 1970:"+timeSince1970+"<br>")
var minutesSince1970=timeSince1970/360;
document.write("Elapsed Minutes since 1st January 1970:"+minutesSince1970+"<br>")
document.write("<br><br><br>")

// task 7
var timeNow=new Date();
var hourNow=timeNow.getHours()
if(hourNow<=12){
    document.write("It's AM")
}else{
    document.write("It's PM")
}
document.write("<br><br><br>");

// task 8
var timeLater=new Date();
timeLater.setMonth(11,31);
timeLater.setHours(0,0,0,0)
var laterDate=timeLater
document.write("Later Date: "+laterDate)
document.write("<br><br><br>");

// task 9
var timeNow =new Date();
var ramadanTime=new Date();
ramadanTime.setMonth(3,24)
var daysSinceRamadan=(timeNow-ramadanTime)/(1000*60*60*24)
alert(daysSinceRamadan+" days have passed since 1st Ramadan 2020")

// task 10
var timeNow =new Date();
var refTime=new Date();
refTime.setFullYear(2015);
var daysSinceRef=(timeNow-refTime)/1000;
document.write("On reference date "+timeNow+" , "+daysSinceRef+" seconds has passed since begining of 2015")

document.write("<br><br><br>");

// task 11
var timeNow =new Date();
var oneHourAgo=new Date();
oneHourAgo.setHours(timeNow.getHours()-1)
document.write("Current date: "+timeNow+"<br>1 hour ago it was: "+oneHourAgo)
document.write("<br><br><br>");

// task 12
var timeNow =new Date();
var hundredYearsBack=new Date();
hundredYearsBack.setFullYear(timeNow.getFullYear()-100)
document.write("Current date: "+timeNow+"<br>100 years ago it was: "+hundredYearsBack)

document.write("<br><br><br>");

// task 13
var timeNow =new Date();
var age=+prompt("Enter your age: ")
var birthYear= new Date();
birthYear.setFullYear(timeNow.getFullYear()-age);
document.write("Your Birth year is "+birthYear.getFullYear())

document.write("<br><br><br>");

// task 14
var timeNow =new Date();
document.write("<h1>K-Electic bill</h1><br><br>")
document.write("Customer name: <b>ABC customer</b><br>")
document.write("Month: <b>"+timeNow.getMonth()+"</b><br>")
document.write("Number of units: <b>410</b><br>")
document.write("Charges per unit: <b>16</b><br><br>")
var amountPayable=410*16
var lateCharge=350
var amountAfterDue=amountPayable+lateCharge;
document.write("Net amount payable (within due date): <b>"+amountPayable+"</b><br>")
document.write("Late payment surcharges: <b>"+lateCharge+"</b><br>")
document.write("Gross amount payable: <b>"+amountAfterDue+"</b><br>")
