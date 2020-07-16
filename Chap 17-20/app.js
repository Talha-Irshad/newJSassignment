// task 1
var arr = [[], [], []];

// task 2
var arr2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

// task 3
for (let index = 1; index <= 10; index++) {
    document.write(index + "<br>")

}
document.write("<br><br><br>")

// task 4
var num_table = prompt("Enter a number to show its multiplication table: ");
var num_to = prompt("Enter Length of multiplication table: ")

document.write("Multiplication table of: " + num_table + "<br>");
document.write("Length: " + num_to + "<br><br>")

for (let index = 1; index <= num_to; index++) {
    document.write(num_table + "x" + index + "=" + num_table * index + "<br>")

}
document.write("<br><br><br>")

// task 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    document.write(element + "<br>")
}
document.write("<br><br>");

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    document.write("Elemet at index " + index + " is " + element + "<br>")
}

// task 6
document.write("<br><br>");

document.write("Counting:<br><br>");
for (let index = 1; index <= 15; index++) {
    document.write(index + ",");

}
document.write("<br>")
document.write("<br>")

document.write("Reverse Counting:<br><br>");
for (let index = 10; index >= 1; index--) {
    document.write(index + ",");

}
document.write("<br>")
document.write("<br>")

document.write("Even :<br><br>");
for (let index = 0; index <= 20; index = index + 2) {
    document.write(index + ",");

}
document.write("<br>")
document.write("<br>")

document.write("Odd :<br><br>");
for (let index = 1; index < 20; index = index + 2) {
    document.write(index + ",");

}
document.write("<br>")
document.write("<br>")

document.write("Series :<br><br>");
for (let index = 2; index <= 20; index = index + 2) {
    document.write(index + "k,");

}
document.write("<br>")
document.write("<br>")


// task 7
document.write("<br><br>");
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery. What do you want to order? ")
var match_found = false;
var i;

for (let index = 0; index < a.length; index++) {
    if (search == a[index]) {
        match_found = true;
        i = index
    }

}
if (match_found == true) {
    document.write(search + " is available at index " + i + " in our bakery<br>")
} else {
    document.write("We are sorry. " + search + " is not available in our bakery<br>")
}
document.write("<br><br>");

// task 8
var a = [24, 53, 78, 91, 12];
document.write("Array Items: " + a + "<br>")
a.sort();
document.write("Largest Item: " + a[a.length - 1] + "<br>")
document.write("<br><br>");

// task 9
var a = [24, 53, 78, 91, 12];
document.write("Array Items: " + a + "<br>")
a.sort();
document.write("Smallest Item: " + a[0] + "<br>")
document.write("<br><br>");

// task 10
for (let index = 5; index <= 100; index=index+5) {
    document.write(index+",")
    
}
