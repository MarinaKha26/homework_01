const BASE_URL = 'https://api.chucknorris.io/jokes/'

let form = document.querySelector("form")
let content = document.querySelector("#content")
let favourite = document.querySelector("#favourite")
let categories = document.querySelector("#from-categories")


let removeFavourite = (joke, store) => {
    let updatedStore = store.filter(el => el.id !== joke.id)
    localStorage.setItem('favourite',JSON.stringify(updatedStore))
    favourite.querySelector(`div`).remove()
  
    let img = content.querySelector(`p[data-id=${joke.id}] img`)
    img.src = './img/Vector.svg'
}

let addFavourite = (joke) => {
    let store = getStore()
    store.push({...joke, like: true} )
    
    localStorage.setItem('favourite', JSON.stringify(store))
    
    render({...joke, like: true})
}
let getStore = () => JSON.parse(localStorage.getItem(' favourite ')) ?? []

let clickHeart = (joke) => {
    let img = document.querySelector(`p[data-id=${joke.id}] img`)
    let store = getStore()

    if(img.src.includes('heart')){
        img.src = './img/Vector.svg'
        removeFavourite(joke, store)
    }else{
        img.src = './img/heart.svg'
        addFavourite(joke, store)
    }

}
let markIfFavourite = (joke, img) => {
    let store = getStore()
    store.findIndex(el => el.id === joke.id) >= 0 && (img.src = './img/heart.svg')
}  

let render = (joke) => {
    let wrapper = document.createElement('div')
    let div = document.createElement('div')
    let p = document.createElement('p')
    let img = document.createElement('img')
    let wrappID = document.createElement('p')
    let jokeID = document.createElement('a')
    
    let messageImg = document.createElement('img')
    let messageImgWrapp = document.createElement('div')
 
    
    p.innerHTML = joke.value
    p.dataset.id = joke.id
    jokeID.innerHTML = joke.id
    jokeID.href = joke.id
    img.src = './img/Vector.svg' 
    
    img.addEventListener('click', () => clickHeart(joke))
    p.append(img)
    
    if (joke.like){
        img.src = './img/heart.svg'
        messageImg.src = './img/message.svg'
        messageImgWrapp.append(messageImg)
        wrappID.append('ID:')
        wrappID.append(jokeID)
        p.append(wrappID)
        p.append(img)
        div.append(p)
        p.insertBefore(wrappID, p.firstChild)
        wrapper.append(messageImgWrapp)
        wrapper.append(div)
        div.insertBefore(messageImgWrapp, div.firstChild)
        favourite.append(wrapper)

    }else {
       markIfFavourite(joke, img)
       content.append(p)
    }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputs = document.querySelectorAll("input[name='joke-type']:checked");
  let selectedCategories = [];
  for (let i = 0; i < inputs.length; i++) {
      selectedCategories.push(inputs[i].value);
  }
  let input = document.querySelector("input[name='freeSpeech']").value.trim();
  if (input !== "") {
      fetch(`${BASE_URL}search?query=${input}`)
          .then(response => response.json())
          .then(response => {
              if (response && response.result) {
                  response.result.forEach(joke => {
                      render(joke);
                  });
              }
          });
  }

  if (selectedCategories.length > 0) {
      selectedCategories.forEach(category => {
          let url;

          switch (category) {
              case "random":
                  url = `${BASE_URL}random`;
                  break;
              case "animal":
                  url = `${BASE_URL}random?category=animal`;
                  break;
              case "career":
                  url = `${BASE_URL}random?category=career`;
                  break;
              case "celebrity":
                  url = `${BASE_URL}random?category=celebrity`;
                  break;
              default:
                  console.log("Invalid joke category");
                  return;
          }

          fetch(url)
              .then(response => response.json())
              .then(response => {
                  if (response && response.result) {
                      response.result.forEach(joke => {
                          render(joke);
                      });
                  }
              });
      });
  }
});

let renderFavourite = () => {
    let store = getStore()
    store.forEach( joke => render(joke))
}

renderFavourite()