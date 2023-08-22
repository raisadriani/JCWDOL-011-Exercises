// weekend //
const date = new Date("August 20, 2023")
let day = date.getDay()
if(day == 0 || day == 6){
    console.log("It's weekend!")
} else {
    console.log("It's weekday:(")
}

//no 2//
// let j = 1;
// while (j <= 10){
//     console.log("j => ", j);
//     j = j+1;
// }

// gcd //

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

// common character //
function commonCharacter(str){
    let char = null
    let charMax = 0
    for(let i = 0; i < str.length; i++){
        let charCount = 0
        for(let j = 0; j < str.length; j++){
            if(str[i] === str[j] && i !== j){
                charCount += 1

            }
        }

        if(charCount > charMax){
            charMax = charCount

            char = str[i]
        }
    }

    return char

}

console.log(commonCharacter("RAISA"))

// sort string alphabetically //
function sortString(arr){
    for(let i = 0; i < arr.length; i++){
        let temp = null
        for(let j = 0; j < arr.length; j++){
            if(arr[i][0] < arr[j][0]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }

        
    }
    return arr
}

console.log(sortString(["RAISA", "ADRIANI"]))

// minimum date //
function minimumDate(dates){
    let minDate = new Date(dates[0])

    for(let i = 1; i < dates.length; i++){
        if(minDate > new Date(dates[i])){
            minDate = new Date(dates[i])

        }
    }
    return minDate
}

console.log(minimumDate(["2022-10-05", "1998-11-11", "2010-09-08"]))

// sum multi-dimensional array //
function multiDimensi(arr){
    let result = 0
    for(let i = 0; i < arr.length; i++){
        let row = 0
        for(let j = 0; j < arr[0].length; j++){
            row += arr[i][j]
        }
        result += row
    }
    return result
}

console.log(multiDimensi([
    [1,2,3],
    [3,4],
    [1],
    [4,3,5],
    [5,6,2,6]
]))