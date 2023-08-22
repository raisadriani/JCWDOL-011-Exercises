//area of a rectangle
const p = 10;
const l = 4;
let rectArea = p*l;
console.log(rectArea);

//perimeter of a rectangle
let Per = (p + l)*2;
console.log(Per);

// diameter, circumference, area of a circle
const r = 2;
const PI = 3.14;
let diameter = r * 2;
let circum = r * PI * 2;
let circArea = PI * (r ** 2);
console.log(diameter);
console.log(circum);
console.log(circArea);

//find angle of triangle if two angles are given
const sumAngles = 180;
const angle1 = 60;
const angle2 = 45;
const angle3 = sumAngles - angle1 - angle2;
console.log(angle3);

// get difference between dates in days
let start = new Date ("2023-09-24");
let end = new Date ("2024-02-30");
let diffTime = end.getTime() - start.getTime();
let diffDays = diffTime/(24*3600*1000);
console.log(diffDays);

//convert days to years, months, and days
let daysGiven = 900;
let years = Math.floor(daysGiven/365);
let months = Math.floor(daysGiven%365/30);
let days = daysGiven%365%30;
let convert = years+" years"+" "+months+" months"+" "+days+" days";
console.log(convert);