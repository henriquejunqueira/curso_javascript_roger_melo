// strings
console.log('hello, world');

const email = 'henriquejunqueira.dev@gmail.com';

console.log(email);

// concatenação de strings
const firstName = 'Nathan';
const lastName = 'Drake';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// acessando caracteres
// console.log(fullName[0]);
console.log(fullName[2]);

// comprimento de uma string
console.log(fullName.length); // exibe o comprimento da string

// métodos de string
console.log(fullName.toUpperCase()); // exibe a string em maiúsculo

const result = fullName.toLowerCase(); // armazena a string em minúsculo

console.log(result, fullName);

const index = email.indexOf('@'); // encontra a posição do caracter especificado nos parênteses

console.log(index);
