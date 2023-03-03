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
