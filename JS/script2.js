console.log(document.body.childNodes)

//seleção do elemento pelo nome da tag

const nameTag = document.getElementsByTagName('h2')
console.log(nameTag);

//seleção pelo nome do ID

const nameId = document.getElementById('title')
console.log(nameId)
console.log(nameId.textContent)

//seleção do elemento pela classe
const nameClass = document.getElementsByClassName('posts')

const nameQuery = document.querySelector("#title");
console.log(nameQuery);
nameQuery.style.color = 'red'

const p2 = document.createElement("p")
console.log(p2)
p2.textContent = 'Eu sou o novo parágrafo';
posts[0].appendChild(p2);


//Eventos
const bnt = document.querySelector('button')

bnt.addEventListener()