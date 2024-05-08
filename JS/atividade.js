// 1. Qual o resultado da operação executada pelo trecho de código abaixo?
// const a = 2, b = 3;
// console.log(`O resultado da operação é: ${3 % 2}`)

//O resultado da operação é: 1

// 2. Qual o resultado da operação executada pelo trecho de código abaixo?
// if(true) {
//  const a = 2;
// }
// console.log(a);
// O resultado apresentara um erro pois è uma variavel constante e está dentro do escopo if.
// O resultado seria verdadeiro ser fosse uma variavel var(escopo global) ou const a estivesse 
// fora do if, assim varíavel pode ser acessada.

// 3. Qual o resultado da operação executada pelo trecho de código abaixo?
// console.log(2 != '2')
//false --- (number != string)

// 4. Qual o nome do operador utilizado para fazer a comparação no trecho de código abaixo?
// const age = 17;
// age >= 18 ? console.log('Maior de idade') : console.log('Menor de idade')

//Operador ternário 
// 5. Qual o resultado da operação executada pelo trecho de código abaixo?
// const age = 17;
// if(age < 16) {
//  console.log('Menor de idade. Não pode votar...!')
// } else if(age < 18 || age >= 70) {
//  console.log('Voto opcional...!')
// } else {
//  console.log('Voto obrigatório...!')
// }

//Voto opcional...!

// 6. Qual a saída da operação executada pelo trecho de código abaixo?
// const number = 7;
// switch(number){
//  case 1:
//  console.log('Opção 1');
//  break;
//  case 2:
//  console.log('Opção 2');
//  break;
//  case 3:
//  console.log('Opção 3');
//  break;
//  default:
//  console.log('Opção inválida')
// }

//Opção inválida

// 7. Qual a saída da operação executada pelo código abaixo?
// const myFunction = (arr) => {
//  let result = [ ];
//  arr.forEach((value) => {
//  if(value % 2 === 0) {
//  result.push(value);
//  }
//  })
//  return result; }
// const array = [1,2,3,4,5]
// const res = myFunction(array)
// console.log(res)

//[2, 4]

// 8. Qual a saída da operação executada pelo código abaixo?
// let names = ['João', 'Rodrigo', 'Ana'];
// names[1] = 'Maria'
// console.log(names)
// console.log(names[0], ' e ', names[1]);

//João e Maria
// 10. Qual a saída da operação executada pelo código abaixo?
// const numbers = [ 1, 2, 3, 4]
// const newNumbers = numbers.map((number) => number + 1)
// console.log('newNumbers: ', newNumbers);

//newNumbers: [2, 3, 4, 5]
// 11. Qual a saída da operação executada pelo código abaixo?
// const names = ['Ana', 'Fernando', 'Maria', 'Pedro'];
// const filtro = names.filter((name) => name.length > 5);
// console.log(filtro);

//[Fernando]

// 12. Qual a saída da operação executada pelo código abaixo?
// let names = ['ana', 'maria', 'joão', 'pedro'];
// const result = names.slice(1, 3)
// console.log(result)
//R: ['maria', 'joão']
// 13. Qual a saída da operação executada pelo código abaixo?
// const aluno = {
//  nome: 'Ana',
//  universidade: 'Satc'
// }
// aluno.nome = 'João';
// console.log(aluno.nome)

//João

