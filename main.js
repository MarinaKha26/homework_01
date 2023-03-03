class Vegetable{

    constructor({name,icon,price,season}){
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;
        this.name = name;
        this.icon =  icon;
        this.price =  price;
        this.season =  season ? this.season = true : ''
    }
    
    getPrice(){
        return this.season ? this.price * this.seasonKoef : this.price;
    }

    getInfo(){
        return `Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. 
        Name:${this.name}. Icon ${this.icon}. Price ${this.getPrice()}.
         Season: ${this.season}`
    }

}

const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
]

const vegetable = vegetables.map((el) => new Vegetable(el))
 vegetable.forEach(el => document.write(`<li> ${(el.getInfo())}</li>`))