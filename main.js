const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
} 

function convert(a){
    const newObj = {}
    for( let key in a){
        if(typeof(a[key]) === 'object'){
           subObj = convert(a[key])
        for(let subKey in subObj){
            newObj[subKey] = subObj[subKey]
        }
        } else{
            newObj[key] = a[key]
        }
    }
    
    return newObj

}

let newObj =  convert(obj)
console.log(newObj)