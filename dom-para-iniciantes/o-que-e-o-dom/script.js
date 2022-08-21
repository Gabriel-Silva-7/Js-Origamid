const href = window.location.href;
console.log(href);

const h1Selecionado = document.querySelector('.ativo');
h1Selecionado.addEventListener('click', callbackclick)

function callbackclick (){
  console.log("clicou", h1Selecionado.innerText)
}

const lang = window.navigator.language;
console.log(lang)
