const btnEle = document.querySelector('button')
btnEle.addEventListener('click', function () {
    console.log('clicked the button')

    btnEle.classList.toggle('is-clicked')
})