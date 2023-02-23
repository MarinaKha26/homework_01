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

//Part 2//
let firstUserNumb = +prompt('Enter the first number')
let mathSings = prompt('Enter the mathematical sign')
let secondUserNumb = +prompt('Enter the second number')
let result = 0
function doMath(a,b,c){
    switch(b) {
        case '+':
             result = firstUserNumb + secondUserNumb
            break
    
        case '-':
             result = firstUserNumb - secondUserNumb
            break
    
        case '*':
             result = firstUserNumb * secondUserNumb
            break
    
        case '/':
             result = firstUserNumb / secondUserNumb
            break

         case '%':
            result = firstUserNumb % secondUserNumb
            break
            
        case '^':
            result = firstUserNumb ** secondUserNumb
            break

        default:
            alert('Please write only number or mathematical sign');
            break
        }
        return result
    }

doMath(firstUserNumb,mathSings,secondUserNumb)
document.write(`<br> 2. Result of mathematical operations ${result}`)
//
