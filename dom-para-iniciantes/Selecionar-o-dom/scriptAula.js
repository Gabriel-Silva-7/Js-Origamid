const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[1])

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"')
console.log(linkInterno)

const linksInternos = document.querySelectorAll('[href^="#"')
console.log(linksInternos[0].innerHTML)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[0])

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')
console.log(gridSectionHTML)
console.log(gridSectionNode)

gridSectionNode.forEach(function(item, index){
    console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)
console.log(arrayGrid)