// task 1
var studentname1 = [];

// task 2
var studentname2 = {};

// task 3
var stringArray = ["Apple", "Banana", "Mango"];

// task 4
var numberArray = [2, 4, 5, 12]

// task 5
var booleanArray = [true, false, true, false];

// task 6
var mixedArray = ["string", 14, true];

// task 7
var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("Qualification<br><br>");
for (let index = 0; index < qual.length; index++) {
    const element = qual[index];
    document.write(index + 1 + ") " + element + "<br>");
}
document.write("<br><br><br>")
// task 8
var stuName = ["Usman", "Bilal", "Hamza"];
var marks = [300, 430, 473];
var totalMarks = 500;
for (let index = 0; index < stuName.length; index++) {
    const element = stuName[index];
    const element2 = marks[index];
    var per = (element2 / 500) * 100
    document.write("The Score of " + element + " is " + element2 + ". Percentage: " + per + "%<br>");
}

document.write("<br><br><br>");


// task 10
var student_score = [330, 410, 240, 500, 350]
document.write("Score of students: ");
for (let index = 0; index < student_score.length; index++) {
    const element = student_score[index];
    document.write(element + " ");
}
document.write("<br>");
student_score.sort();
document.write("Ordered Score of students: ");
for (let index = 0; index < student_score.length; index++) {
    const element = student_score[index];
    document.write(element + " ");
}
document.write("<br><br><br>");

// task 11
var cities = ["Karachi", "Islamabad", "Peshawar", "Lahore", "Rawalpindi"];
document.write("Cities list:<br>");
for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    document.write(element + " ");
}
document.write("<br>")
var s_cities = cities.slice(1, 4)
document.write("Selected Cities list:<br>");
for (let index = 0; index < s_cities.length; index++) {
    const element = s_cities[index];
    document.write(element + " ");
}
document.write("<br><br><br>");

// task 12
var arr = ["This", "is", "my", "cat"]
document.write("Array: <br>")
document.write(arr)
document.write("<br>")
var str = arr.join(" ");
document.write("String: <br>")
document.write(str);
document.write("<br><br><br>");

// task 13
var dev = [];
dev.push("keyboard");
dev.push("mouse");
dev.push("printer");
dev.push("monitor");
document.write("Devices:<br>" + dev + "<br>")
document.write("Out:<br>" + dev[0] + "<br>");
dev.shift();
document.write("Out:<br>" + dev[0] + "<br>");
dev.shift();
document.write("Out:<br>" + dev[0] + "<br>");
dev.shift();
document.write("Out:<br>" + dev[0] + "<br>");
dev.shift();

document.write("<br><br><br>")

// task 14
var dev = [];
dev.push("keyboard");
dev.push("mouse");
dev.push("printer");
dev.push("monitor");
document.write("Devices:<br>" + dev + "<br>")
document.write("Out:<br>" + dev[3] + "<br>");
dev.pop();
document.write("Out:<br>" + dev[2] + "<br>");
dev.pop();
document.write("Out:<br>" + dev[1] + "<br>");
dev.pop();
document.write("Out:<br>" + dev[0] + "<br>");
dev.pop();
document.write("<br><br><br>")

