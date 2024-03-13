toggle = document.getElementById('toggle')
container = document.querySelector('.container')

toggle.addEventListener('click', () => {
    container.classList.toggle('inactive')
})

