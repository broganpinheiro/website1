btn = document.querySelector('.btn')
search = document.querySelector('.search')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
})




code = document.getElementById('toggle')
container = document.querySelector('.ccontainer')
button = document.querySelector('.fa-solid')

code.addEventListener('click', () => {
    container.classList.toggle('inactive')
})
