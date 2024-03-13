toggle = document.getElementById('toggle')
container = document.querySelector('.container')
button = document.querySelector('.fa-solid')

toggle.addEventListener('click', () => {
    container.classList.toggle('inactive')
    button.classList.toggle('fa-angle-down')
    button.classList.toggle('fa-angle-up')
})


