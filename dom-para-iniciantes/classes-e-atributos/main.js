const menu = document.querySelector('.menu');

console.log(menu.className);
console.log(menu.classList[0]);

const animais = document.querySelector('.animais');
console.log(animais)

const img = document.querySelector('img');
img.setAttribute('alt','é uma raposa')
const possuialt = img.hasAttribute('alt')
const srcimg = img.getAttribute('alt');
console.log(srcimg);
console.log(possuialt)

const carro = {
    andou: function(e){
        console.log(`andou ${e} kms`)
    },
    portas: 4
}

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((e , i) => {
    e.classList.add('ativo')
})
console.log(itensMenu)
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((e , i) => {
    e.classList.remove('ativo')
})
itensMenu[0].classList.add('ativo')
