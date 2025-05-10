import * as readline from 'readline';

type Produto = {
  nome: string;
  preco: number;
  estoque: number;
};

let produtos: Produto[] = [
  { nome: "Notebook", preco: 3000, estoque: 5 },
  { nome: "Teclado", preco: 200, estoque: 10 }
];

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on('close', () => {
  console.log("\nSistema encerrado.");
  process.exit(0);
});

function menu(): void {
  console.log("\n1 - Adicionar produto");
  console.log("2 - Ver produtos");
  console.log("3 - Atualizar estoque");
  console.log("4 - Calcular valor total");
  console.log("5 - Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    if (opcao === "1") return adicionarProduto();
    else if (opcao === "2") return verProdutos();
    else if (opcao === "3") return atualizarEstoque();
    else if (opcao === "4") return calcularValor();
    else if (opcao === "5") return rl.close();

    console.log("Opção inválida.");
    menu();
  });
}

function adicionarProduto(): void {
  rl.question("Nome: ", (nome) => {
    rl.question("Preço: ", (preco) => {
      rl.question("Estoque: ", (estoque) => {
        produtos.push({ nome, preco: Number(preco), estoque: Number(estoque) });
        console.log("Produto adicionado.");
        menu();
      });
    });
  });
}

function verProdutos(): void {
  console.log("\nProdutos:");
  if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
  } else {
    produtos.forEach((p, i) => {
      console.log(`${i + 1}. ${p.nome} - R$${p.preco.toFixed(2)} - Estoque: ${p.estoque}`);
    });
  }
  // Aguarda Enter antes de voltar ao menu
  rl.question("\nPressione Enter para continuar...", () => menu());
}

function atualizarEstoque(): void {
  rl.question("Nome do produto: ", (nome) => {
    const produto = produtos.find(p => p.nome === nome);
    if (produto) {
      rl.question("Novo estoque: ", (novo) => {
        produto.estoque = Number(novo);
        console.log("Estoque atualizado.");
        menu();
      });
    } else {
      console.log("Produto não encontrado.");
      menu();
    }
  });
}

function calcularValor(): void {
  let total = produtos.reduce((acc, p) => acc + p.preco * p.estoque, 0);
  console.log(`\nValor total do estoque: R$${total.toFixed(2)}`);
  // Aguarda Enter antes de voltar ao menu
  rl.question("\nPressione Enter para continuar...", () => menu());
}

menu();

//😖