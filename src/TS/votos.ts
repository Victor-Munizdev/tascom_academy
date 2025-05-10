// Importa o módulo readline, para ler as entradas do teclado e mostrar as saídas no terminal.
import * as readline from 'readline';

// Define o tipo andidato que é um objeto:

type Candidato = { nome: string; numero: number; categoria: string; votos: number };

// Define os candidatos 
const candidatos: Candidato[] = [];

// Cria uma interface de entrada/saída para ler do teclado e escrever na tela 
const entrada = readline.createInterface({ input: process.stdin, output: process.stdout });
entrada.on('close', () => process.exit(0));

// função menu 
console.clear();
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

// função para cadastrar o candidato
console.clear();
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

// função votar em um candidato 
console.clear();
function votar(): void {
  if (!candidatos.length) { console.log('Sem candidatos'); return menu(); }
  console.log('\nCandidatos:');
  candidatos.forEach(c => console.log(`${c.numero} - ${c.nome}`));
  entrada.question('Número: ', numeroStr => {
    const numero = Number(numeroStr);
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

// mostrar os candidatos cadastrados
console.clear();  
function mostrar(): void {
  console.log('\nResultados:');
  if (!candidatos.length) console.log('Sem candidatos');
  else candidatos.forEach(c => console.log(`${c.nome} - ${c.votos} voto(s)`));
  entrada.question('\nAperte Enter para voltar ao menu', () => menu());
}

menu();