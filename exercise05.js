// no 1//
let myArray = [7,3,5]
function sortArray(param){
    let lowest = param[0];
    let highest = param[0];
    let sum = param[0]
    for(let j = 1; j < param.length; j++){
        const sort = param[j];
        if (sort < lowest){
            lowest = sort;
        } else if (sort > highest){
            highest = sort;
        }
        sum += sort
    }
    const average = sum/param.length;
    return [
        "lowest: "+lowest,
        "highest: "+highest,
        "average: "+average
    ];
}
console.log(sortArray(myArray))

// no 2//
let arrWords = ["mango","chocolate","strawberry","coffee"];
// let result = "mango, chocolate, strawberry, and coffee"
let lastWord = " and "+arrWords.pop();
let newWords = arrWords.join(", ")+lastWord
console.log(newWords)
// let joinWords = arrWords.join(", ");
// let z = arrWords.length
// let newJoin = ""
// for (let i = 0; i < z; i++){
//     newJoin += arrWords.join(", ");

// }
// console.log(newJoin)


//no 3//
function mySplit(input){
    const group = [];
    let word = "";
    const needle = " ";
        for (let i = 0; i < input.length; i++){
            const x = input[i];
            if (x !== needle) {
                word += x
            } else {
                group.push(word);
                word = needle
            }
        }
        group.push(word);
        return group
}
const input = "Coba kita tes";
console.log(mySplit(input))

//no 4//
function calculate(arr1, arr2){
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];
    for (let i = 0; i < maxLength; i++) {
        const element1 = arr1[i] || 0;
        const element2 = arr2[i] || 0;
        result.push(element1 + element2); 
  }
  return result;
}
const array1 = [2,3,6,7];
const array2 = [4,1,3,2];
console.log(calculate(array1,array2))

//no 5//
let arr = ["item1", "item2", "item3"]
let n = "item4"
function add(arr, n){
    if (arr.indexOf(n) <= 0 ){
        arr.push(n)
    }
    return arr
}
console.log(add(arr,n))

//no 6//
let array = [1,2,3,4,5,6,7,8,9,10]
function evenArray(array){
    function even(number){
        return number % 2 === 0;
    }
    let even1 = array.filter(even);
    return even1;
}
console.log(evenArray(array))
