const numbersArrayOriginal = [16,-37 ,54 ,-4 ,72 ,-56 ,47 ,4,-16 ,25 ,-37 ,46 ,4 ,-51 ,27 ,-63 ,4 ,-54 ,76 ,-4 ,12 ,-35 ,4 ,47 ]
const numbersArray = [...numbersArrayOriginal]

let sortedArr = numbersArray.sort(function(a, b){return a - b});
let minEl = sortedArr[0]
let maxEl = sortedArr[sortedArr.length-1]
let minElId = numbersArrayOriginal.indexOf(minEl)
let maxElId = numbersArrayOriginal.indexOf(maxEl)
