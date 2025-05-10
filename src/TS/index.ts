//  const idade: number = 17;
//  if (idade >=18) {
//      console.log("Você é maior de idade");
// }
//     else{
//         console.log("Você é menor de idade")
//     }

// let nota1: number = 3;
// let nota2: number = 9;
// let nota3: number = 5;
// let nota4: number = 5;

// let media = (nota1 + nota2 + nota3 + nota4) / 4;

// let resultado: string = media > 6 ? "Aprovado!" : "Reprovado";

// console.log(media);
// console.log(resultado);


//  const numero: number = 5;
//  const restante: number = numero % 2;

//  if (restante === 0){
//     console.log("O numero é par");
//  }else{
// console.log("O numero é impar");
// }

// const idade: number = 18;

// if (idade >= 6 && idade <= 12) {
//     console.log("Você é Criança");
// } else if (idade >= 13 && idade <= 18) {
//     console.log("Você é Adolescente");
// } else if (idade >= 19 && idade <= 24) {
//     console.log("Você é Adulto Jovem");
// } else if (idade >= 25 && idade <= 44) {
//     console.log("Você é Adulto");
// } else {
//     console.log("Classificação não encontrada");
// }

// const ano: number = 2024;
// if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 == 0) {
//     console.log("É um ano Bisexto");
// } else{
//     console.log("Não é um ano Bisexto");
// }


// const primeiroNumero: number = 5;
// const segundoNumero: number = 7;
// const operacao: string = "6";
// let resultado: number | string;

// switch (operacao) {
//   case "+":
//     resultado = primeiroNumero + segundoNumero;
//     break;
//   case "-":
//     resultado = primeiroNumero - segundoNumero;
//     break;
//   case "*":
//     resultado = primeiroNumero * segundoNumero;
//     break;
//   case "/":
//     resultado = primeiroNumero / segundoNumero;
//     break;

//   default:
//     resultado = "inválido";

//     break;
// }

// console.log(`O resultado da operação é ${resultado}`);

// let n: number = 23

// for (let contador = 0; contador < n; contador++) {
//   if (contador % 2 === 0) {
//     console.log(contador + " é par");
//   }
// }

// let numero2 = 10
// let contador = 0

// while (numero2 >= contador) {
//     if (contador % 2 === 0) {
//         console.log(`Par encontrado: ${contador}`);
//     }
//     contador++
// }

// const numero: number = 7

// for (let contador = 1; contador <= 10; contador++) {
//   console.log(`${contador} * ${numero} = ${contador * numero}`)
// }

// const numero2:number = 7
// let contador2:number = 1

// while (contador2 <= 10) {
//   console.log(`${contador2} * ${numero2} = ${contador2 * numero2}`)
//   contador2++
// }

// const numero: number = 58 / 10
// console.log(Math.floor(numero))
// console.log(numero);
// let numero: number = 54
// let contador: number = 0

// while (numero !== 0) {
//   numero = Math.floor(numero / 10)
//   contador++
// }

// console.log(`O número possui ${contador} dígitos`)

// let readlineSync = require("readline-sync");

// let finalizar: boolean = false;
// let usuario: string = "";

// while (finalizar === false) {
//   console.clear();
//   console.log("Bem vindo ao sistema");
//   console.log("");
//   console.log("1 - Criar usuário");
//   console.log("2 - Ver seu usuário");
//   console.log("3 - Sair");
//   console.log("");

//   let resposta: number = parseFloat(
//     readlineSync.question("Escolha uma opcao: ")
//   );

//   switch (resposta) {
//     case 1:
//       console.clear();
//       console.log("Informe seu nome: ");
//       usuario = readlineSync.question();

//       console.clear();
//       console.log("Usuário criado com sucesso");
//       console.log("");
//       readlineSync.question("Pressione qualquer tecla para voltar ao inicio");
//       continue;
//     case 2:
//       console.clear();
//       console.log(`Usuário cadastrado: ${usuario}`);
//       console.log("");
//       readlineSync.question("Pressione qualquer tecla para voltar ao inicio");
//       continue;
//     case 3:
//       finalizar = true;
//       break;

//     default:
//       console.clear();
//       console.log("Informe um valor válido");
//       readlineSync.question("Pressione qualquer tecla para voltar ao inicio");
//       continue;
//   }
//   finalizar = true;
// }
// console.clear()
// console.log("Até depois");

// função sem retorno
// function exibirMensagem(mensagem:string){
//   console.log(mensagem);

// }
// exibirMensagem("Olá, Mundo!");


//  função com retorno
//  function dividir(a: number, b: number){
//    return a / b;
//  }
//  const resultado = dividir(3,5);
//  console.log(resultado); 8

//  function somarParametros(...numeros: number[]){
//   let soma = 0;
//   for (let numero of numeros){
//     soma += numero;
//   }
//   return soma;
//  }
//  console.log(somarParametros(1,2,3,4,5,6,8,9,10));

// function suadacao(nome:string = "Usuario"):void {
//   console.log(`Olá, ${nome}, Seja bem-vindo(a) ao sistema`);
// }

// suadacao() // Olá, Usuario, Seja bem-vindo(a) ao sistema  <-- uma mensagem com base no nome que o usuario digitou
// suadacao("João");  // Olá, João, Seja bem-vindo(a) ao sistema  <-- valor padrão ou seja uma mensgem pré-definida

// const somar = (a: number, b: number): number | string => {
//   if (b === 0) {
//     return "Não é possível somar por 0";
//   }else{ return a + b;

//   }
 
// };
// console.log("Resultado da Soma:", somar(3, 6)); 

// const subtrair = (a: number = 3, b: number = 6): number => {
//   return a - b;
// };
// console.log("Resultado da Subtração:", subtrair()); 

// const dividir = (a: number = 3, b: number = 6): number => {
//   return a / b;
// };
// console.log("Resultado da Divisão:", dividir()); 

// const multiplicar = (a: number = 3, b: number = 6): number => {
//   return a * b;
// };
// console.log("Resultado da Multiplicação:", multiplicar());
// ;


// function somar(a: number, b: number): number {
//   return a + b;
// }

// function subtrair(a: number, b: number): number {
//   return a - b;
// }

// function multiplicar(a: number, b: number): number {
//   return a * b;
// }

// function dividir(a: number, b: number): number {
//   return b !== 0 ? a / b : NaN;
// }

// const operacoes: { [key: string]: (a: number, b: number) => number } = {
//   soma: somar,
//   subtracao: subtrair,
//   multiplicacao: multiplicar,
//   divisao: dividir
// };

// const operacaoEscolhida = 'multiplicacao';
// const numero1 = 10;
// const numero2 = 2;

// const funcao = operacoes[operacaoEscolhida];
// if (funcao) {
//   const resultado = funcao(numero1, numero2);
//   console.log(`Resultado da ${operacaoEscolhida}: ${resultado}`);
// } else {
//   console.log('Operação inválida.');
// }

// Seleção dos numeros já setadas 
// const celsius = 19;
// const fahrenheit = 66.2;

// funções para os calculos 
// function celsiusParaFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// function fahrenheitParaCelsius(fahrenheit: number): number {
//   return ((fahrenheit - 32) * 5) / 9;
// }


//  exibição dos valores
// console.log(`${celsius}°C = ${celsiusParaFahrenheit(celsius)}°F`);
// console.log();
// console.log(`${fahrenheit}°F = ${fahrenheitParaCelsius(fahrenheit).toFixed(2)}°C`);

/*
const numero = 16;

function eNumeroPrimo(numero: number): boolean {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

console.log(`${numero} é primo? ${eNumeroPrimo(numero)}`);
*/

// const numeros = ['10,20,30,40'];
// for (let i = 0; i < numeros.length; i++){
//   console.log(`Indice: ${i}, Valor: ${numeros[i]}`);
// }

// const numeros = [10,20,30,40];
//   for (const indice in numeros){
//     console.log(`indice: ${indice}, Valor: ${numeros[indice]}`);
// }

// const numeros = [10,20,30,40];
// for (const valor of numeros){
//   console.log(`Valor: ${valor}`);
// }

// const numbers = [1,2,3];
// const doubled = numbers.map((n) => n * 2); // aqui fica o numero para a operação determinada
// console.log(doubled);

  // const numbers = [1,2,3,4];
  // const evens = numbers.filter((n) => n % 2 === 0); 
  // console.log(evens); // 2, 4

//  const users = [{id: 1},{id: 2}];
//  const user = users.find((u) => u.id === 2);
//  console.log(user); // {id: 2}
 
// const numbers = [1,2,3];
// console.log(numbers.some((n) => n > 2));
// console.log(numbers.every((n) => n > 0));

// const numbers = [1,2,3];
// const sum = numbers.reduce((acc, n) => acc + n, 0);
// console.log(sum); //6

// interface IPersons {
//   name: string;
//   age: number;
// }

// const persons: IPersons[] = [
//   {name: "Nicolas", age: 18},
//   {name: "Maria", age: 20},
//   {name: "Lucas", age: 25},
// ];
// function newPerson(name:string, age: number){
//   return persons.push({name: name,age: age});
// }


// newPerson("Bruno",23);

// console.log(persons);

// const salarios = [800, 1000, 1200, 1400, 1600];

// const somaTotal = salarios.reduce((valor, salario) => {
//   return valor + salario;
// }, 0);

// console.log(somaTotal); 


//   interface produtos {
//    nome: string;
//    preco: number;
//    estoque: number
//  }

//  const produto: produtos[] = [
//    {nome: "Notebook", preco: 5000, estoque:30},
//    {nome: "Celular", preco: 7000, estoque:20},
//    {nome: "Teclado Gamer", preco: 350, estoque:150},
   
//   ];
//   produto.splice( nome:"fone sem fio",preco: 150,estoque:5000);

//   function novosProdutos(nome:string, preco: number, estoque: number){
//    return produto.push({nome: nome,preco: preco, estoque:estoque});
// }

import * as readline from 'readline';

type Candidato = { nome: string; numero: number; categoria: string; votos: number };

const candidatos: Candidato[] = [];

const entrada = readline.createInterface({ input: process.stdin, output: process.stdout });
entrada.on('close', () => process.exit(0));

function menu(): void {
  console.log('\n1 - Cadastrar candidato');
  console.log('2 - Votar em candidato');
  console.log('3 - Mostrar resultados');
  console.log('4 - Sair');
  entrada.question('Opção: ', opcao => {
    switch (opcao) {
      case '1': return cadastrar();
      case '2': return votar();
      case '3': return mostrar();
      case '4': return entrada.close();
      default:
        console.log('Inválido');
        menu();
    }
  });
}

function cadastrar(): void {
  entrada.question('Nome: ', nome => {
    entrada.question('Número: ', numeroStr => {
      const numero = Number(numeroStr);
      if (isNaN(numero) || candidatos.some(c => c.numero === numero)) {
        console.log('Número inválido ou já usado');
        return menu();
      }
      entrada.question('Categoria: ', categoria => {
        candidatos.push({ nome, numero, categoria, votos: 0 });
        console.log('Candidato cadastrado');
        menu();
      });
    });
  });
}

function votar(): void {
  if (!candidatos.length) { console.log('Sem candidatos'); return menu(); }
  console.log('\nCandidatos:');
  candidatos.forEach(c => console.log(`${c.numero} - ${c.nome}`));
  entrada.question('Número: ', numeroStr => {
    const numero = Number();
    const candidato = candidatos.find(c => c.numero === numero);
    if (candidato) {
      candidato.votos++;
      console.log('Voto registrado');
    } else {
      console.log('Número inválido');
    }
    menu();
  });
}

function mostrar(): void {
  console.log('\nResultados:');
  if (!candidatos.length) console.log('Sem candidatos');
  else candidatos.forEach(c => console.log(`${c.nome} - ${c.votos} voto(s)`));
  entrada.question('\nAperte Enter para voltar ao menu', () => menu());
}

menu();