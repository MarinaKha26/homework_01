const Size = {
    SIZE_SMALL : {name: 'SIZE_SMALL', price: 50, calories: 20},
    SIZE_BIG : {name: 'SIZE_BIG', price: 100, calories: 40}
}
  
const Stuffing =  {
    STUFFING_CHEESE: {name: 'STUFFING_CHEESE', price: 10, calories: 20},
    STUFFING_SALAD: {name: 'STUFFING_SALAD', price: 20, calories: 5},
    STUFFING_POTATO: {name: 'STUFFING_POTATO', price: 15, calories: 10}
}
  
  const Topping = {
    TOPPING_SPICE : {name: 'TOPPING_SPICE', price: 15, calories: 0},
    TOPPING_MAYO : {name: 'TOPPING_MAYO', price: 20, calories: 5}
}
  
let name = document.querySelector('#user-name')
let size = document.querySelector('#burger-size')
let orderText= document.querySelector('#order-message')
let btn = document.querySelector('#button')
let form = document.querySelector('#order-form')
let messageContainer =  document.querySelector('#message-container')
  
const userForm = {}
form.addEventListener('submit', (event) =>{
     event.preventDefault()
     let stuffing = [...document.querySelectorAll('input[name="stuffing"]:checked' )]
     stuffing.forEach((el) => {
         valueStuff = el.value
    })
    
     valueToppings = []
     let toppings = [...document.querySelectorAll('input[name="topping"]:checked' )]
     toppings.forEach((el) => {
        valueToppings.push(el.value)
    })
  
    userForm.name = name.value
    userForm.size = size.value
    userForm.stuffing = valueStuff
    userForm.toppings = valueToppings

    let toppingsPrice = Number
    if (valueToppings.length >= 2){
    toppingsPrice = Topping['TOPPING_MAYO'].price + Topping['TOPPING_SPICE'].price
    }else{
    toppingsPrice = Topping[userForm.toppings].price
    }
  
    let toppingsCalories = Number
    if (valueToppings.length >= 2){
    toppingsCalories = Topping['TOPPING_MAYO'].calories + Topping['TOPPING_SPICE'].calories
    }else{
    toppingsCalories = Topping[userForm.toppings].calories
    }
  
    burgerPrice = Size[userForm.size].price + Stuffing[userForm.stuffing].price + toppingsPrice
    burgerCalories = Size[userForm.size].calories + Stuffing[userForm.stuffing].calories + toppingsCalories 
    userForm.orderText =  orderText.value
    if (name && toppings && stuffing) {
    const randomValue = Math.floor(Math.random() * 20) + 10;
    const messageUser = document.createElement('div')
    messageUser.setAttribute('class','message-user');
    messageUser.textContent = ` Привет ${userForm.name} \n 
    Ваш заказ ${userForm.size} бургер с ${userForm.stuffing} и ${userForm.toppings} будет готов в течении ${randomValue} минут \n
    Стоимость заказа: ${burgerPrice} тугриков ( ${burgerCalories} калорий)`
    messageContainer.appendChild(messageUser);
    }
    if (form.checkValidity()) { 
    form.reset(); 
}})