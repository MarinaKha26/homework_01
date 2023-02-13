let userValue = +prompt('Enter the length of the array') 
userValue = Math.abs(Math.round(userValue)) 

while (( userValue <2) || ( userValue > 10)) {
    alert('Please enter another value')
   userValue = +prompt('Enter the length of the array')
   userValue = Math.abs(Math.round(userValue))
}

let newArr = []
 for ( let i = 0; i < userValue; i++){
        newArr[i] = Math.round(Math.random()*10)
} console.log(newArr)

let result = newArr.reduce((acc, curr) => acc * curr);
console.log(result)
