const numbersArrayOriginal = [16,-37 ,54 ,-4 ,72 ,-56 ,47 ,4,-16 ,25 ,-37 ,46 ,4 ,-51 ,27 ,-63 ,4 ,-54 ,76 ,-4 ,12 ,-35 ,4 ,47 ]
const numbersArray = [...numbersArrayOriginal]

let sortedArr = numbersArray.sort(function(a, b){return a - b});
let minEl = sortedArr[0]
let maxEl = sortedArr[sortedArr.length-1]
let minElId = numbersArrayOriginal.indexOf(minEl)
let maxElId = numbersArrayOriginal.indexOf(maxEl)

let sumPositivEl  = 0
let amountPositivEl = 0
let amountEvenPosEl =  0
let sumEvenPosEl = 0
let amountOddPosEl = 0
let sumOddPosEl = 0
let amountNegativEl = 0
let resultMultipPositivEl = 1
for (let i = 0; i < numbersArray.length; i++){
   if (numbersArray[i] > 0){
        sumPositivEl += numbersArray[i];
        amountPositivEl += 1
        resultMultipPositivEl *=  numbersArray[i]
   }if (((numbersArray[i] > 0)) && ((numbersArray[i] % 2 === 0))){
        amountEvenPosEl +=1
        sumEvenPosEl += numbersArray[i]
   }if (((numbersArray[i] > 0)) && ((numbersArray[i] % 2 != 0))){
        amountOddPosEl +=1
        sumOddPosEl += numbersArray[i]
   }if(numbersArray[i] < 0){
        amountNegativEl += 1
   }
}

for (let i = 0; i < numbersArrayOriginal.length; i++){
    if (numbersArrayOriginal[i] != maxEl){
        numbersArrayOriginal[i] = 0
    }
}

document.write(`minimum element in array is ${minEl} with index ${minElId} <br> maximum element in array is ${maxEl} with index ${maxElId} <br>sum of positive elements ${sumPositivEl} <br> amount of positive elements ${amountPositivEl} <br> amount of negative elements ${amountNegativEl} <br> amount of even positive elements ${amountEvenPosEl} <br> amount of odd positive elements ${amountOddPosEl} <br> sum of even positive elements ${sumEvenPosEl} <br> sum of odd positive elements ${sumOddPosEl} <br> result multiplication positive elements ${resultMultipPositivEl}
<br> is the largest element in the array with another elements values 0 ${numbersArrayOriginal}`)
