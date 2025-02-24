// let emptiness; // o js atribui undefined sempre que tentamos usar uma variável sem valor atribuído
// console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`); // undefined NaN 'o valor é undefined'

let emptiness = null;

console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`); // null 3 (js transforma o null em 0 pra fazer cálculo) 'o valor é null'
