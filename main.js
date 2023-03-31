const div = document.querySelector('#block')

div.style.left = '350px'
div.style.top = '350px'
div.style.height = '100px'
div.style.width = '100px'

function movement(event){
    //down
    if (event.charCode === 115) {
        div.style.height = "40px";
        div.style.width = "125px";
        div.style.transition = '1s'
    setTimeout(() => {
        if(event.charCode === 115){
        div.style.height = '100px'
        div.style.width = '100px'                
    }}, 500)
    }
    //top   
    if(event.charCode === 32){
        div.style.top = (parseInt(div.style.top) - 10) + 'px'
        div.style.transition = '1s'
    }
    setTimeout(() => {
        if(event.charCode === 32){
            div.style.top = (parseInt(div.style.top) + 10) + 'px'
    }}, 500)
    //left 
    if(event.charCode === 97){
        if(parseInt(div.style.left) === 0){
            div.style.left = (parseInt(div.style.left) + 20) + 'px'
            const bems = document.createElement('div');
            div.appendChild(bems)
            bems.textContent = 'БЕМС';
            setTimeout(() => {
            div.removeChild(bems);
            }, 2000);
        } else if(parseInt(div.style.left) < 10){
            div.style.left = '0px'
        } else {div.style.left = (parseInt(div.style.left) - 10) + 'px'
    }}
    //right 
    if(event.charCode === 100){
        if(parseInt(div.style.left) === 700){
            div.style.left = (parseInt(div.style.left) - 20) + 'px'
            const bems = document.createElement('div');
            div.appendChild(bems)
            bems.textContent = 'БЕМС';
            setTimeout(() => {
                div.removeChild(bems);
            }, 2000);
        }else if(parseInt(div.style.left) > 690){
            div.style.left = '700'
        } else {div.style.left = (parseInt(div.style.left) + 10) + 'px'
    }}
}

document.addEventListener('keypress', movement)