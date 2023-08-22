//display the multiplication table of a given integer
let num = 8
for (let i = 1; i <= 10; i = i+1){
    sum = num*i
    console.log(num, " x ", i, " = ",sum)
}

//check whether a string is a palindrome or not
let string = "wadaw"
let reverse = ""
for(let k = string.length - 1; k >= 0; k = k - 1){
    reverse += string[k]
} console.log(reverse) 
if (reverse === string){
    console.log("palindrome")
} else {
    console.log("not palindrome")
}

//convert centimeter to kilometer
let cm = 80000
const km = cm/1000
console.log(cm," cm"," is equals to ",km," km")

//format number as currency (IDR)
let number = 90000; 
let strNumber = String(number)
let currency = "";
let currency1 = strNumber.split("").reverse().join(""); 
for (let i = 0; i < currency1.length; i++) {
  if (i > 0 && i % 3 === 0) {
    currency += ".";
  }
  currency += currency1[i];
}
currency = "Rp. "+ currency.split("").reverse().join(""); 
currency += ",00"; 
console.log(currency)
 
//remove the first occurrence of a given “search string” from a string
let search = "eak"
let given = "breakfast"
console.log(given.replace("eak",""))

//capitalize the first letter of each word in a string
let oriWords = "hello good morning world";
let wordsSplit = oriWords.split(" ");
let newWords = ""
for(let i = 0; i < wordsSplit.length; i++){
  let upperFirst = wordsSplit[i][0].toUpperCase()+wordsSplit[i].slice(1);
  newWords = newWords.concat(upperFirst, " ");
  if(newWords.length == oriWords.length){
    return newWords;
  }
}
// let newWords = oriWords.split(" ").map((item) => item[0].toUpperCase() + item.slice(1)).join(" ")
console.log(newWords)

//reverse a string
let word = "point"
let reverse1 = ""
for(let j = word.length - 1; j >= 0; j = j - 1){
    reverse1 += word[j]
} console.log(reverse1)

//swap the case of each character from string
let swap = "SeLaMaT pAgI";
let swap1 = "";
for (let i = 0; i < swap.length; i++) {
  const swap2 = swap[i];
  if (swap2 >= "a" && swap2 <= "z") {
    swap1 += swap2.toUpperCase();
  } else if (swap2 >= "A" && swap2 <= "Z") {
    swap1 += swap2.toLowerCase();
  } else {
    swap1 += swap2;
  }
} console.log(swap1)

//find the largest of two given integers
let a = 12
let b = 15
if(a > b){
    console.log("The bigger number is ",a)
}else if (b > a){
    console.log("The bigger number is ",b)
} else {
    console.log("Probably equal")
}

//conditional statement to sort three numbers
let num1 = 1
let num2 = 10
let num3 = 7
if(num1 < num2 && num2 < num3){
    console.log(num1, num2, num3)
}else if (num1 < num3 && num3 < num2){
    console.log(num1, num3, num2)
}else if(num2 < num1 && num1 < num3){
    console.log(num2, num1, num3)
}else if(num2 < num3 && num3 < num1){
    console.log(num2, num3, num1)
}else if(num3 < num1 && num1 < num2){
    console.log(num3, num1, num2)
}else if(num3 < num2 && num2 < num1){
    console.log(num3, num2, num1)
}else{
    console.log("else")
}

//a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
let n = 90
if(typeof n === "string"){ 
    console.log("code = 1")
}else if (typeof n === "number"){
    console.log("code = 2")
}else {
    console.log("code = 3")
}

//change every letter a into * from a string of input
let letter = "makan masam main mahat";
let change = "";
for (let i = 0; i < letter.length; i++) {
  const change1 = letter[i];
  if (change1 === "a") {
    change += change1.replace("a", "*");
  } else {
    change += change1;
  }
} console.log(change)
