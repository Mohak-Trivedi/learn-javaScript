// Start writing JavaScript here!
const btnEle = document.querySelector('button')
btnEle.addEventListener('click', function() {
    const bodyEle = document.querySelector('body')
    bodyEle.classList.toggle('offsite-is-open')
});