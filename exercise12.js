// no 1 // 
function excel(alphabet){
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = 0

    for(var i = 0; i < alphabet.length; i++){
        let findAlphaNumber = 0
        let temp = 0
        for(var j = 0; j < alphabets.length; j++){
            if(alphabets[j] == alphabet[i]){
                findAlphaNumber = j + 1
            }
        }

        temp = findAlphaNumber * Math.pow(26, alphabet.length - i - 1)
        result += temp
    }
    
    return result;

}

console.log(excel("B")) // 2
console.log(excel("Z")) //26
console.log(excel("AA")) //27
console.log(excel("AL")) // 38 // (26) + (1*12)
console.log(excel("AZ")) // 52 // (26) + (1*26) 
console.log(excel("ZZ")) // 702
console.log(excel("ABC")) // 731 // (26 * 26 *1) + (26*2 )+ (1 *3)
//                                      676          52          3

// (1 * 26^2) + (2 * 26^1) + (3 * 26^0)

console.log(excel("B") == 2 ? "SUCCESS" : "FAILED") // 2
console.log(excel("AA") == 27 ? "SUCCESS" : "FAILED") //27
console.log(excel("AZ") == 52 ? "SUCCESS" : "FAILED") // 52 // (26) + (1*26) 
console.log(excel("ZZ") == 702 ? "SUCCESS" : "FAILED") // 702
console.log(excel("ABC") == 731 ? "SUCCESS" : "FAILED") // 731

// no 2 //
// let nums = [5,4,5,3,2,1,2,4,3];
// let out = "";
// for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < nums.length; j++){
//         if(nums[i] == nums[j] && i != j){
//             break;
//         } else if(j == nums.length - 1){
//             out += nums[i]
//         }
//     }
// }
// console.log(out)

let nums = [5,4,3,2,1,2,4,3];
let out = [];
for(let i = 0; i < nums.length; i++){
    let count = 0
    for(let j = 0; j < nums.length; j++){
        if(nums[i] == nums[j]){
            count += 1;
        }
    }
    if(count === 1){
        out.push(nums[i])
    } 
}

console.log(out)

// dari mas aries //
function singleInteger(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let isSame = false
        for(let j = 0; j < arr.length; j++){
            if(i != j && arr[i] == arr[j]){
                isSame = true
                break
            }

        }

        if(!isSame){
            result.push(arr[i])

        }
    }

    return result
}

console.log(singleInteger([5,4,3,2,1,2,4,3]))


// no 3 //

let words = "geram";
let words2 = "gemar";

function anagram(s, t){
    let newWord = 0;
    for(let k = 0; k < s.length; k++){
        if(s.split("").findIndex((item) => item == t[k]) !== -1){
            newWord += 1
        }
    }

    if (newWord === s.length){
        return true;
    } else {
        return false;
    }
}

console.log(anagram("tom marvolo riddle", "i am lord voldemort"))


//dari mas aries//
function anagram2(s, t){
    let s2 = s.split("").sort().join("")
    let t2 = t.split("").sort().join("")
    if(s2 != t2){
        return false
    }
    return true
}
console.log(anagram2("geram", "gemar"))

// no 4 //

let stair = 10;
let first = 0;
let second = 1;
let arr = [];
for (let l = 1; l <= stair; l++) {
    const x = first + second;
    first = second;
    second = x
    arr.push(x)
  }
let steps = arr.pop()
console.log(steps)

// 1 2 3 5 8 13

//dari mas aries//
function stairway(stair){
    if(stair < 4){
        return stair
    } else {
        return stairway(stair - 1) + stairway(stair - 2)
    }
}
console.log(stairway(4))


// ada tangga
// tiap naik bisa antara 1 langkah atau 2 langkah
// 1
// 1

// 2
// 1 1
// 2


// 3
// 1 1 1
// 2 1
// 1 2

// 4
// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 2

// 5
// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 2 2 1
// 2 1 2
// 1 2 2

// 6
// 1 1 1 1 1 1
// 1 1 1 1 2
// 1 1 1 2 1
// 1 1 2 1 1
// 1 2 1 1 1
// 2 1 1 1 1
// 2 2 1 1
// 2 1 2 1
// 2 1 1 2
// 1 1 2 2
// 1 2 1 2
// 1 2 2 1
// 2 2 2