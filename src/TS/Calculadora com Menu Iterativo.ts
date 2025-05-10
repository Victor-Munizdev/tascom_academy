let readlineSync = require("readline-sync");

console.log("Escolha a operação:");
console.log("1 - Adição (+)");
console.log("2 - Subtração (-)");
console.log("3 - Multiplicação (*)");
console.log("4 - Divisão (/)");

let operacao: string = readlineSync.question("Digite o número da operação: ");

let primeiroNumero: number = +readlineSync.question("Digite o primeiro número: ");
let segundoNumero: number = +readlineSync.question("Digite o segundo número: ");


let resultado: number | string;

switch (operacao) {
  case "1":
  case "+":
    resultado = primeiroNumero + segundoNumero;
    break;
  case "2":
  case "-":
    resultado = primeiroNumero - segundoNumero;
    break;
  case "3":
  case "*":
    resultado = primeiroNumero * segundoNumero;
    break;
  case "4":
  case "/":
    if (segundoNumero !== 0) {
      resultado = primeiroNumero / segundoNumero;
    } else {
      resultado = "Erro: Divisão por zero";
    }
    break;
  default:
    resultado = "Erro no calculo";
    break;
}

console.log(`O resultado da operação é: ${resultado}`);
