const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');
console.log(h1.innerHTML)
console.log(h1.outerHTML)

// h1.outerHTML = ' <p> Novo Titulo </p>'

const lista = document.querySelector('.animais-lista')

console.log(lista.previousElementSibling)


const novoh1 = document.createAttribute('h1');
novoh1.innerText = 'Novo Titulo';

