class Stuffing {
    static STUFFING_CHEESE = {name: 'STUFFING_CHEESE', price: 10, calories: 20}
    static STUFFING_SALAD = {name: 'STUFFING_SALAD', price: 20, calories: 5}
    static STUFFING_POTATO = {name: 'STUFFING_POTATO', price: 15, calories: 10}
}

class Topping {
    static TOPPING_SPICE = {name: 'TOPPING_SPICE', price: 15, calories: 0}
    static TOPPING_MAYO = {name: 'TOPPING_MAYO', price: 20, calories: 5}
}

class Size {
    static SIZE_SMALL = {name: 'SIZE_SMALL', price: 50, calories: 20}
    static  SIZE_BIG = {name: 'SIZE_BIG', price: 100, calories: 40}
}

class Hamburger{
    #toppings
    #size
    #stuffing
    constructor(size, stuffing, topping){
        this.#size = size;
        this.#stuffing = stuffing;
        this.#toppings = topping ? [topping] : []
    }

    addTopping(topping){
        this.#toppings.push(topping)
    }

    get toppings (){
        let toppingName = ''
        this.#toppings.forEach(el => toppingName += el['name'] + ' ')
        return console.log('Selected toppings :'+ toppingName)
    }

    calculateCalories(){
        let  toppingsCalories = 0
        this.#toppings.forEach(el => toppingsCalories += el['calories'])
        return this.#size.calories + this.#stuffing.calories + toppingsCalories
    }

    calculatePrice(){
        let toppingsPrice = 0
        this.#toppings.forEach(el => toppingsPrice += el['price'])
        return  this.#size.price + this.#stuffing.price + toppingsPrice
    }
}

const hamburger = new Hamburger(Size.SIZE_SMALL, Stuffing.STUFFING_CHEESE)
hamburger.addTopping(Topping.TOPPING_MAYO)
console.log(`Calories:` + hamburger.calculateCalories())
console.log(`Price:` + hamburger.calculatePrice())
hamburger.addTopping(Topping.TOPPING_SPICE)
console.log(`Price:` + hamburger.calculatePrice())
console.log(hamburger.toppings)