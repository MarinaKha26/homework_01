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

//Part 3//
let userLengthMainArr = +prompt('Enter the length of the first array')
let userLengthNestedArr = +prompt('Enter the length of the second array')
let userValueArr = +prompt('Enter the value of the array') 

let  table = document.createElement('table')
let tBody = document.createElement('tbody')

function createArr(a,b,c){
    let nestedArr = []
    let mainArr = []
    for ( let i = 0; i < a; i++){
       nestedArr[i] = c
    }
    for (let i = 0; i < b; i++){
        mainArr[i] = nestedArr
    }

   return mainArr

}

let resultNewArr = createArr(userLengthNestedArr,userLengthMainArr,userValueArr)

function createTable(arr){
    for(i = 0; i <  resultNewArr.length; i++){
        let row = document.createElement('tr')
        for(j = 0; j < resultNewArr[i].length; j++){
        let cell = document.createElement('td')
        let cellText = document.createTextNode(resultNewArr[i][j])
        cell.appendChild(cellText)
        row.appendChild(cell)
        }
     tBody.appendChild(row)
     table.appendChild(tBody)
    }
    return table
}

document.write(`<br> 3. two-dimensional array <br> [`)
document.body.appendChild(createTable(resultNewArr))
document.write(`]`)
//

//Part 4//
let userStr = prompt('Write your string').toLowerCase()
let  userSym = prompt('Write letter which we need deleted').toLowerCase()

function deleteSym(str, ...sym) {
  const symStr = sym.filter(sym => typeof sym != 'function' )
  const symFunc = sym.filter(sym => typeof sym === 'function')
    symStr.forEach((sym) => {
        str = str.replaceAll(sym, '')
    })

     symFunc.forEach(symFunc =>{
        str = symFunc(str)
    })

    return str
}

let changeStr = deleteSym(userStr,...userSym,(a) => a.toUpperCase())
document.write(`<br> 4. ${changeStr}`)
//