let name = prompt('What is your name?')

let surname = prompt('What is your surname?')

let day = +prompt('What day were you born?')

let month = +prompt('What month were you born?')

let userYear = +prompt('What year were you born?')
const year = 2022
let age = year - userYear

let astrologicalZodiac;
if (day >= 20 && month === 1 || day <=18 && month === 2){
    astrologicalZodiac = ('Aquarius')
    } else if (day >= 19 && month === 2 || day <=20 && month === 3){
    astrologicalZodiac = ('Pisces')
    } else if (day >= 21 && month === 3 || day <=19 && month === 4){
    astrologicalZodiac = ('Aries')
    } else if (day >= 20 && month === 4 || day <=20 && month === 5){
    astrologicalZodiac = ('Taurus')
    }else if (day >= 21 && month === 5 || day <=20 && month === 6){
    astrologicalZodiac =  ('Gemini')
    }else if (day >= 21 && month === 6 || day <=22 && month === 7){
    astrologicalZodiac = ('Cancer')
    }else if (day >= 23 && month === 7 || day <=22 && month === 8){
    astrologicalZodiac =  ('Leo')
    }else if (day >= 23 && month === 8 || day <=22 && month === 9){
    astrologicalZodiac = ('Virgo')
    }else if (day >= 23 && month === 9 || day <=22 && month === 10){
    astrologicalZodiac = ('Libra')
    }else if (day >= 23 && month === 10 || day <=21 && month === 11){
    astrologicalZodiac = ('Scorpio')
    }else if (day >= 22 && month === 11 || day <=21 && month === 12){
    astrologicalZodiac = ('Sagittarius')
    }else if (day >= 22 && month === 12 || day <=19 && month === 1){
    astrologicalZodiac = ('Capricorn')
    } else 
    astrologicalZodiac = ('Data entry error')

