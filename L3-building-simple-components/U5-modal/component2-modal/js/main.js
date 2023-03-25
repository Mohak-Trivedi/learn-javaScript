// Start writing JavaScript here!

const modalOpenBtn = document.querySelector('.jsModalButton')
modalOpenBtn.addEventListener('click', function () {
    document.body.classList.add('modal-is-open')
})

const modalCloseBtn = document.querySelector('.jsModalClose')
modalCloseBtn.addEventListener('click', function () {
    document.body.classList.remove('modal-is-open')
})