// ? Booleans e comparações
// console.log(true, false, 'true', 'false');

// ? Métodos podem retornar booleans
const email = 'brucewayne@teste.com.br';

// o método includes verifica se algo existe dentro da string ou array e retorna um boolean
// const includes = email.includes('@'); // true
// const includes = email.includes('#'); // false
const includes = email.includes('wayne'); // false
const names = ['dio', 'roger', 'robert'];
// const arrayIncludes = names.includes('roger');
const arrayIncludes = names.includes('rob');

// console.log(includes);
// console.log(arrayIncludes);

// ? Operadores de comparação
const age = 31;
const name = 'roger';

// console.log(age == 31); // true
// console.log(age == 35); // false
// console.log(age != 35); // true
// console.log(age != 31); // false
// console.log(age > 30); // true
// console.log(age > 31); // true
// console.log(age < 31); // false
// console.log(age < 32); // true
// console.log(age <= 31); // true
// console.log(age >= 31); // true

console.log(name == 'roger'); // true
console.log(name == 'Roger'); // true
console.log(name > 'belinha'); // true (compara de forma alfabética sendo que letras maiúsculas vem depois das minúsculas)
console.log(name > 'Roger'); // true
console.log(name > 'Belinha'); // true
