let userValue = +prompt('Enter the length of the array') 
userValue = Math.abs(Math.round(userValue)) 

while (( userValue <2) || ( userValue > 10)) {
    alert('Please enter another value')
   userValue = +prompt('Enter the length of the array')
   userValue = Math.abs(Math.round(userValue))
} 
