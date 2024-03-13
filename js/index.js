toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
    div.classList.remove('active')
    div.classList.toggle('inactive')
    div.classList.add('active')
})

