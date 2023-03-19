const addClassEle = document.querySelector('.add')
addClassEle.classList.add('red')
console.log(addClassEle)

const removeClassEle = document.querySelector('.remove')
removeClassEle.classList.remove('remove')
console.log(removeClassEle)

const contains1ClassEle = document.querySelector('.contains1')
console.log(contains1ClassEle.classList.contains('blue'))

const contains2ClassEle = document.querySelector('.contains2')
console.log(contains2ClassEle.classList.contains('blue'))

const toggleClassEle = document.querySelector('.toggle')
if(toggleClassEle.classList.contains('red')) {
    toggleClassEle.classList.remove('red')
} else {
    toggleClassEle.classList.add('red')
}
console.log(toggleClassEle)