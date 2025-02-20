// métodos comuns de strings

const email = 'laracroft@teste.com.br';

// ? exibe a última ocorrência do caracter especificado
// const lastIndexOfA = email.lastIndexOf('a');
// console.log(lastIndexOfA);

// ? fatia uma string .slice(início, final_ignorado); obs: passando só início, vai até o fim da string
// const emailSlice = email.slice(0, 9); // laracroft
// const emailSlice = email.slice(0, 4); // lara
// const emailSlice = email.slice(4, 9); // croft
// console.log(emailSlice);
// console.log(emailSlice, email);

// ? substitui uma string por outra .replace(string_original, string_substituta) na primeira ocorrência
// const emailReplace = email.replace('l', 'y');
const emailReplace = email.replace('laracroft', 'chun-li');
// console.log(emailReplace);
console.log(emailReplace, email);
