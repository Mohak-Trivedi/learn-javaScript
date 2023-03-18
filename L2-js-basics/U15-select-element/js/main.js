// Get the #star-wars-characters list with id and tag selectors.
const ulEleById = document.querySelector('#star-wars-characters')
const ulEleByTag = document.querySelector('ul')
console.log(ulEleById)
console.log(ulEleByTag)


/*
From the #star-wars-characters list, get the following:
Luke Skywalker with class, tag and attribute selectors
Yoda with class and attribute selectors
Darth Vader with class and attribute selectors
*/
const lukeByClass = document.querySelector('.luke')
const lukeByTag = document.querySelector('li')
const lukeByAttr = document.querySelector('[data-type="hero"]')
console.log(lukeByClass)
console.log(lukeByTag)
console.log(lukeByAttr)

const yodaByClass = document.querySelector('.yoda')
const yodaByAttr = document.querySelector('[data-type="master"]')
console.log(yodaByClass)
console.log(yodaByAttr)

const badboyByClass = document.querySelector('.badboy')
const badboyByAttr = document.querySelector('[data-type="villain"]')
console.log(badboyByClass)
console.log(badboyByAttr)