toggle = document.getElementById('toggle')
container = document.querySelector('.inacitve')

toggle.addEventListener('click', () => {
    container.classList.toggle('inactive')
})

