// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man'];

// console.log(heroes); // lista todos os items do array
// console.log(heroes[0]); // exibe o item com o index especificado
// console.log(heroes[3 - 2]);

// heroes[2] = 'Spider-Man'; // atribui um novo valor ao index especificado

// console.log(heroes);

// const ages = [31, 25, 39, 40];
const ages = [31, 25, 39, 40, 25];
// console.log(ages[2]);

const randomArray = ['Parker', 'Diana', 19, 18];

// console.log(randomArray);

// Métodos de arrays
// console.log(heroes.length); // retorna a quantidade de items no array

// const joinHeroes = heroes.join(); // retorna uma nova string concatenada e separada por vírgula (padrão)
// const joinHeroes = heroes.join('|'); // retorna uma nova string concatenada e separada por um pipe
const joinHeroes = heroes.join('-'); // retorna uma nova string concatenada e separada por um hífen
const indexOf25 = ages.indexOf(25); // retorna a primeira ocorrência do item no array. Retorna -1 se não existir
const moreHeroes = heroes.concat(['Superman', 'Wolverine']); // concatena arrays e strings
const pushToHeroes = heroes.push('Cyclops', 'Hulk'); // adiciona e depois retorna o número de items no array
const popHeroes = heroes.pop(); // remove o último item do array e retorna qual item foi removido

// console.log(joinHeroes);
// console.log(indexOf25);
// console.log(moreHeroes);
// console.log(pushToHeroes);
// console.log(heroes);
// console.log(popHeroes);
// console.log(heroes);
