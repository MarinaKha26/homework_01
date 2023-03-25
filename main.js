let block = document.querySelector('.block')
block.innerHTML = 'Hello'
let bodyWidth = document.body.clientWidth
let bodyHeight = document.body.clientHeight

setInterval(
    () => {
        let left = Math.round(Math.random() * bodyWidth)
        let top = Math.round(Math.random() * bodyHeight)
        let right = Math.round(Math.random() * bodyWidth)
        let botton = Math.round(Math.random() * bodyHeight)
        block.style.left = left + 'px'
        block.style.top = top + 'px'
        block.style.right = right + 'px'
        block.style.botton = botton + 'px'
        block.style.background = '#' + Math.round(Math.random() * 999999)
        block.style.color = '#' + ((Math.random() + '').slice(2,8))
    }, 1000)