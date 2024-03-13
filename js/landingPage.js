toggle = document.getElementById('toggle')
open = document.getElementById('open')
close = document.getElementById('close')

// Toggle Nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

// Show Modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

//Hide modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

// Hide modal on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})



code = document.getElementById('toggle')
container = document.querySelector('.container')
button = document.querySelector('.fa-solid')

code.addEventListener('click', () => {
    container.classList.toggle('inactive')
    button.classList.toggle('fa-angle-down')
    button.classList.toggle('fa-angle-up')
})
