//convert celsius to fahrenheit
let C = 27
const F = (C * 9 / 5) + 32
console.log(F)

//check whether the number is odd or even
let num = 5
if (num % 2 == 0) {
  console.log("This number is even")
} else {
  console.log("This number is odd")
}

//check whether the number is prime number or not
let no = 49 // yang ini salah
for (let i = 2; i <= Math.sqrt(no); i = i + 1) {
  if (no % i === 0) {
    console.log("not prime")
  } else {
    console.log("prime")
    break
  }
}

let j = 2
let isPrime = true
let number2 = 7
while(j < number2){
  if(number2 % j ===0){
    console.log(number2, " is not a prime number")
    break;
  }
  j++
}
if(isPrime){
  console.log(number2, " is a prime number")
} else{
  console.log(number2, " is not a prime number")
}

//find the sum of the numbers 1 to N
let sum = 0;
let N = 6
for (let k = 1; k <= N; k = k + 1) {
  sum += k;
}
console.log(sum)

//find factorial of a number
let x = 5
let fact = 1
for (let l = x; x >= 1; l = x - 1){
  fact *= 1;
}
console.log(fact)

//print the first N fibonacci numbers
let n = 7
let first = 0;
let second = 1;
console.log(first); 
console.log(second);
for (let m = 2; m < n; m = m+1) {
  const Fib = first + second;
  console.log(Fib);
  first = second;
  second = Fib;
}