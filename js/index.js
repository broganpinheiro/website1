toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
    container.classList.remove('active')
    container.classList.toggle('inactive')
    container.classList.add('active')
})

