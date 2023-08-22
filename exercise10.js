// SOAL 1 //

let str = "Pig latin is cool !"
let result1 = "igPay atinlay siay oolcay !ay"
function string(str){
    let splitStr = str.split(" ");
    let newString = [];
    for(let i = 0; i < splitStr.length; i++){
        let rest = splitStr[i].slice(1)
        let addAy = splitStr[i][0]+"ay";
        newString.push(rest+addAy);
    }
    return newString.join(" ");
}

// function string(str){
//     return str.split(" ").map((item) => item.slice(1) + item[0] + "ay").join(" ")
// }

console.log(string(str))

// SOAL 2 //

let phone = [1,2,3,4,5,6,7,8,9,0]
let result2 = "(123) 456-7890"

console.log(phone.slice(6, phone.length-1).join(""))

function phoneNumber(number){
    let first = number.slice(0,3).join("");
    let second = number.slice(3,6).join("");
    let third = number.slice(6, number.length).join("");
    return "("+first+")"+" "+second+"-"+third;
}

console.log(phoneNumber(phone))



// function phoneNumber(arr){
//     let result = "(xxx) xxx-xxxx";
//     arr.map(item => {
//         result = result.replace("x", item);
//         console.log(result)
//     })
//     return result;
// }

// console.log(phoneNumber([2,3,4,5,6,1,7,8,9,0]))