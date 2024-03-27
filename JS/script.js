//console.log(10 != '10')

// var a = 2;
// let b = 3;
// const c = 4; 

if(true) {
    //var d = 2;
    //let e = 3;
    //const f = 4;
    //console.log(a)
    //console.log(b)
    //console.log(c)
}

//Apenas d pode ser acessada por ser var onde contém o escopo globa, não é recomendado
//Voce pode fazer declaração multípla 

const g = 10, h = 20, i = 30;

const user = 'Ana Beatriz'
if (user === 'Ana Beatriz') {
    console.log('Usuário logado..!')
}
else {
    console.log('Usuário não logado!')
}

//operador tenário
user === 'Ana Beatriz' ? console.log('Usuário logado...!') : console.log('Usuário não logado')

//switch-case
const curso = 'SW'

switch (curso) {
    case 'SW':
        console.log('Engenharia de Software')
        break;
    case 'ENC':
        console.log('Engenharia da computação')
        break;
    case "EE":
        console.log("Você é um aluno de Engenharia Elétrica");
        break;
    default:
        console.log('Curso não cadastrado')
}

//while

let j = 0

while(j < 10) {
    
    console.log(j)
    j++;
}

let k = 0
do {
    console.log(k)
    k++;
} while (k < 10)


for(let i = 0; i < 10; i++) {
    if(i === 3) {
        break;
    }
    console.log(i)
}

for(let i = 0; i < 10; i++) {
    if(i === 3) {
        continue;
    }
    console.log(i)
}

//funções sem passagem passagem de parâmentro e sem retorno

function myFunction() {
    console.log('oi')
}

myFunction() //chamando a função 

const myArrowFunction = () => {
    console.log('Isso é arrow function..!') }

myArrowFunction()

//função com passagem de parâmetro e sem retorno

function defineParOuImpar(numero) {
    if(numero % 2 === 0) {
        console.log(`${numero} é par` )
    } else {
    console.log(`${numero} é impar!`)
    } };
   
console.log(defineParOuImpar_1(3));


//função com passagem de parâmetro e com retorno

function calculaRaiz(numero) {
    return Math.sqrt(numero)
};

console.log(calculaRaiz(25));


let nomes = ['Maria', 'Helena', 'Angela'];

//console.log(nomes[0])
//console.log(typeof nomes)
//console.log(nomes.length)
//console.log(Object.keys(nomes))

//metódos 

//nomes.unshift('Ana') //insere o nome no inicio da lista
//nomes.push('Alice') //insere o nome para o final da lista 
//nomes.pop() //remove o nome no final da fila
//nomes.shift() //remove o nome no inicio da lista

const filteredArray = nomes.filter((nomes) => nomes.lenght == 4);
console.log(filteredArray);

const foundName = nomes.find((nomes) => nomes.length > 4);

const foundIndex = nomes.findIndex((nomes) => nomes.length >= 5);
console.log('foundIndex: ', foundIndex)

console.log(nomes);
const slicedNames = nomes.slice(1,3); //Sempre ignora o último, nesse caso o 3
console.log(slicedNames);

const reversedNames = nomes.reverse()
console.log(reversedNames);

const numeros = [2, 3, 4, 7, 8]
for (let i = 0; i < numeros.length; i++) {
    //console.log(numeros[i])
}

//OBJETOS
//forma literal

//criação por função construtora

const aluno = {
    nome: 'joão',
    email: 'joao@email.com',
    id: 1,
    info: function() {
console.log(`Nome: ${this.nome}\nEmail: ${this.email}` ) }
}

console.log(aluno);

//Via função 
const pessoa = new Object()
pessoa.nome = 'maria';
pessoa.email = 'maria22@email.com';
pessoa.idade = 20;
console.log(pessoa);

//criação por classe

class Carro {
    #potencia
    constructor(marca, cor, potencia) {
        this.marca = marca;
        this.cor = cor
        this.#potencia = potencia

    }
}
//#potencia deixa privado, precisa usar o metódo get para conseguir o atributo privado

const carro = new Carro('vw', 'preto', '65')



