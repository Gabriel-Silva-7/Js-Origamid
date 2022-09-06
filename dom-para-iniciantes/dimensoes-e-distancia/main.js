const listaAnimais = document.querySelector('.animais-lista')
const height = listaAnimais.scrollHeight;
const animaistop = listaAnimais.offsetTop
console.log(animaistop)

const raposah2 = document.querySelector('h2')
const h2left = raposah2.offsetLeft
console.log(h2left)

const rect = raposah2.getBoundingClientRect()
console.log(rect)
console.log(
window.innerHeight,
window.innerWidth,
window.outerWidth,
window.outerHeight
)
