//Part 1//
const arr = [2, 3, 'string', 4, 5, 'string2']
let sumEl = 0
let amountEl = 0
function mean(arr){
    for( i = 0; i <arr.length; i++){
        if( typeof arr[i] === 'number'){
            sumEl += arr[i]
            amountEl += 1
            meanArray = sumEl / amountEl
        }
    }
    return meanArray
}
mean(arr)
document.write(`1. Mean of array ${meanArray}`)
//