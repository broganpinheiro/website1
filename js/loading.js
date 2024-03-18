loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')
code = document.getElementById('toggle')
container = document.querySelector('.ccontainer')
button = document.querySelector('.fa-solid')

load = 0

int = setInterval(blurring, 30)

function blurring()  {
    load++

    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100

    bg.style.filter = `blur(${30 - (load/100)*30}px)`
}





code.addEventListener('click', () => {
    container.classList.toggle('inactive')
    button.classList.toggle('fa-angle-down')
    button.classList.toggle('fa-angle-up')
})
