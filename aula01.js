/*
function vermelho() {
     Limpar()
     document.getElementById("titulo").classList.add("vermelho");
}

function laranja() {
     Limpar()
     document.getElementById("titulo").classList.add("laranja");
}

function roxo() {
     Limpar()
     document.getElementById("titulo").classList.add("roxo");
}
function Limpar() {
     document.getElementById("titulo").classList.remove("vermelho");
     document.getElementById("titulo").classList.remove("laranja");
     document.getElementById("titulo").classList.remove("roxo");
}
*/

/*
//Objetos em JS
let carros = {
     nome: "Paulo",
     Idade: 51,
     Peso: 95
}

console.log(carros["nome"]);
console.log(carros.nome);


//Arrays
let familia = {
    ["Juceli", "Josué", "Julinho", "Jamil"]
}
*/
/*
let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);
*/

/*
let valorMonitor = 3000;

valorMonitor = valorMonitor + valorMonitor;

valorMonitor += valorMonitor;
*/

/*
console.log(1 == 1); //valor
console.log("2" === 2); //valor e tipo
*/

//Usando comparador tenário
// Tem um cliente, 100 premium, comum

//Falsy
//undefined
//null
//0
//false
//''
//NaN - not a number

//Truthy

/*
let a = "roxo";
let b = "laranja";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
*/

/*
let hora = 19;

if (hora > 6 && hora < 12) {
   console.log("Bom dia !");
}else if (hora > 12 && hora < 18) {
   console.log("Boa tarde! "); 
}else {
     console.log("Boa noite! ");
}
*/
/*
let permissao; //comum, gerente, diretor

 carro = "Amarelo";

switch (carro) {
          case 'Verde':
          console.log("Pode passar");
          break;

          case 'Amarelo':
          console.log("Atenção");
          break;

          case 'Vermelho':
          console.log("Pare");
          break;
}
*/

/*
carro = "Amarelo";

switch (carro) {
     case "Vermelho":
     console.log("Pare! ");
     break;
      
     case 'Verde':
     console.log("Pode passar! ");
     break;
     
     case 'Amarelo':
     console.log("Atenção");
     break;
}
*/
/*
//for 

for(let i = 0; i < 20; i++) {
     if(i % 2 !== 0) {
          console.log(i);
     }
}


//while
let i = 0;

while(i < 1) {
     if(i % 2 !== 0) {
          console.log(i);
     }
     i++
}

//Do while

let y = 0;

do {
     console.log("Luiz e Kethelyn", y);
     y++;
} while (y < 0);

*/

/*
//Array Objeto
const pessoa = {
     nome: "Luiz",
     idade: 23
}
//Key-value
for(let chave in pessoa) {
     console.log(chave,pessoa.nome);
}
//Arrys Normal
const cores = ["vermelho","Azul","verde"];

for(let indice in cores) {
    console.log(indice,cores[indice])
}
*/

//Divisível por 3 => Fizz
//Divisível por 5 => Buz
//Divisível por 3 e 5 => FizzBuzz
//Não é um número por 3 ou 5 => entrada
//Não é um número => 'não é um número'
/*
const resultado = fizzBuzz(true);
console.log(resultado);

function fizzBuzz(entrada){
   if (typeof entrada !== 'number')
   return 'não é um número';

   if (entrada  % 3 !== 0)
   return 'Fizz';

   if (entrada % 5 === 0)
   return 'Buz';

   if(entrada % 3 && entrada % 5)
   return 'FizBuzz';
}
*/
/*
//Objeto Literal
var produto = {
     id: 9,
     nome: "Liquidificador",
     preco: 99.99
 };

 console.log(produto.id);
 
//Arrays
 const carros = ["Picape", "jip", "Gol"]

 console.log(carros[0]);

 */
/*
//Objeto
var familia = {
     id: 1,
     nome: "Luiz",
     idade: 23,
     rua: "Rod Oswaldo Cruz, 4879",
     bairro: "Horto"
}


// Coleção de Objetos
var colecao_objeto = [
     {id: 1, nome: "Português", carga_horaria: 240 }, //indice 0
     {id: 2, nome: "Matemática", carga_horaria: 560} //indice 1
];

console.log(colecao_objeto[1].carga_horaria);
 
*/
/*
var numero_1 = 10;
var numero_2 = 6;
var numero_3 = 4;


console.log(numero_1 >= (numero_2 + numero_3)); //incorreto
console.log(++numero_1 <= (numero_3 + numero_2));
console.log(numero_2 == (numero_1 - numero_3));
console.log(numero_1 % numero_2 == numero_3);
*/

/*
let sinal = "verde";

if(sinal == "verde") {
     console.log("Pode passar !");
}
else if(sinal == "amarelo") {
     console.log("Atenção !");
}
else if(sinal == "vermelho") {
     console.log("Pare !");
}
else {
     console.log("Porfavor digite amarelo, vermelho ou verde !!!");
}
*/
/*
let permissao = 'luiz'; //comum, gerente, diretor, 


switch (permissao) {
     case 'comum':
     console.log('usuário comum');
     break;

     case 'gerente':
     console.log('usuário gerente');
     break;

     case 'diretor':
     console.log('usuário diretor');
     break;

     default:
     console.log('usuário não conhecido !!!');
}
*/
/*
let cores = ['Amarelo', 'Vermelho', 'Verde'];
let nomes = ['Luiz', 'Jonathan', 'Rafael'];

//for..of
for(let cor of cores) {
    console.log(cor);
}

for(let nome of nomes) {
     console.log(nome);
}
*/
/*
let diaDaSemana = "Segunda-feira";

if(diaDaSemana == "Segunda-feira") {
     console.log("Você trabalha !!!");
}
else if(diaDaSemana == "Terça-feira") {
     console.log("Você trabalha !!!");
}
else if(diaDaSemana == "Quarta-feira"){
     console.log("Você trabalha !!!");
}
else if(diaDaSemana == "Quinta-feira"){
     console.log("Você trabalha !!!");
}
else if(diaDaSemana == "Sexta-feira"){
     console.log("Você trabalha !!!");
}
else if(diaDaSemana == "Sábado"){
     console.log("Folga");
}
else if(diaDaSemana == "Domingo"){
     console.log("Folga");
}
else {
    console.log("Seleciona um dia da semana correto !!!");
}
*/
/*
let ddd = 11;

switch (ddd) {
     case 11:
          console.log('são paulo');
     break;

     case 21:
          console.log('Rio de Janeiro');
     break;

     case 19:
          console.log('Itapira');
     break;
}
*/
/*
let x = 10; //mesmo valor, porem tipo number
let y = "10"; // mesmo valor, porem tipo string

if(x == y)
{
    console.log("X é igual a Y"); 
}
else
{
    console.log("X é diferente de Y");
}
*/

/*
var menssagem = (mes== 11 || mes == 12) ? "Promoção" : "Preço normal";
*/








