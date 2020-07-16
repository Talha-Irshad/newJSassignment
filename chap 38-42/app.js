// task 1
function power(a, b) {
    var pow = Math.pow(a, b)
    return pow
}

// task 2
function leapyear() {
    year = prompt("Enter any year")
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

// task 3
function calcS(a, b, c) {
    var S = (a + b + c) / 2
    console.log(S)
    return S
}
function calcArea(a, b, c) {
    var s = calcS(a, b, c)
    var area = s * (s - a) * (s - b) * (s - c)
    console.log(area)
    return area
}

// task 4
function calcPer(sub1, sub2, sub3) {
    return ((sub1 + sub2 + sub3) / 300) * 100
}
function calcAvg(sub1, sub2, sub3) {
    return (sub1 + sub2 + sub3) / 3
}
function mainFunction(sub1, sub2, sub3) {
    var per = calcPer(sub1, sub2, sub3)
    var avg = calcArea(sub1, sub2, sub3)
    document.write("Marks of 3 subjects are: " + sub1 + ", " + sub2 + ", " + sub3 + "<br>")
    document.write("Average mark is: " + avg + "<br>")
    document.write("Percentage is " + per + "<br>")
}

// task 5
function findIndex(str, char) {
    var str1 = str.split("");
    for (let index = 0; index < str1.length; index++) {
        if (str1[index] == char) {
            console.log(index);
            return index

        }
    }
}

// task 6
function delVowel(str) {
    return str.replace(/[aeiou]/gi, '');
}


// task 7




// task 8
var distanceInKm = +prompt("Enter distance in Km")
function toMeter(distanceInKm) {
    return distanceInKm * 1000
}
function toInches(distanceInKm) {
    return distanceInKm * 39370.0787
}
function tofeet(distanceInKm) {
    return distanceInKm * 3280.8399
}
function toCm(distanceInKm) {
    return distanceInKm * 100000
}

// task 9
function overtime(hours) {
    var over=0
    if (hours>40){
        over=hours-40
        return over*12
    }
}

// task 10
var inHundreds=0
var inFifties=0
var inTens=0
var amount = +prompt("Enter amount to withdraw")
inHundreds= Math.floor((amount/100))
var temp =amount- (inHundreds*100)
if (temp>50) {
    inFifties++
    inTens=(temp-50)/10
}else if (temp==50) {
    inFifties++
}else{
    inTens=temp/10
}

document.write("you will have "+inHundreds+" hundred notes, "+inFifties+" fifty notes and "+inTens+" ten notes")