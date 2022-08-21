const siteImg = document.querySelectorAll('img');
console.log(siteImg)

const Imagem = document.querySelectorAll('[src^="/img/imagem"');
console.log(Imagem)

const linksInternos = document.querySelectorAll('[href^="#"')
console.log(linksInternos)

const firtH2 = document.querySelector('.animais-descricao h2')
console.log(firtH2.innerHTML)

const ultimoP = document.querySelectorAll('p')
const arrayp = Array.from(ultimoP)
console.log(arrayp[arrayp.length - 1].innerText)