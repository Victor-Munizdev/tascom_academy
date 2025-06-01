let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let contadorCriadas = Number(localStorage.getItem("contadorCriadas")) || 0;
let contadorConcluidas = Number(localStorage.getItem("contadorConcluidas")) || 0;

document.getElementById("contadorCriadas").textContent = contadorCriadas;
document.getElementById("contadorConcluidas").textContent = contadorConcluidas;

function adicionarTarefa() {
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;

  if (!titulo || !descricao) {
    alert("Preencha todos os campos!");
    return;
  }

  const novaTarefa = {
    id: Date.now(),
    titulo,
    descricao,
    dataCriacao: new Date().toLocaleString(),
    concluida: false
  };

  tarefas.push(novaTarefa);
  contadorCriadas++;
  salvarDados();
  renderizarTarefas();

  document.getElementById("titulo").value = "";
  document.getElementById("descricao").value = "";
}

function concluirTarefa(id) {
  tarefas = tarefas.map(tarefa => {
    if (tarefa.id === id && !tarefa.concluida) {
      tarefa.concluida = true;
      contadorConcluidas++;
    }
    return tarefa;
  });
  salvarDados();
  renderizarTarefas();
}

function salvarDados() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  localStorage.setItem("contadorCriadas", contadorCriadas);
  localStorage.setItem("contadorConcluidas", contadorConcluidas);

  document.getElementById("contadorCriadas").textContent = contadorCriadas;
  document.getElementById("contadorConcluidas").textContent = contadorConcluidas;
}

function renderizarTarefas() {
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  tarefas.forEach(tarefa => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <h3>${tarefa.titulo}</h3>
      <p>${tarefa.descricao}</p>
      <small>${tarefa.dataCriacao}</small>
      <div class="task-buttons">
        <button class="edit-btn" onclick="editarTarefa(${tarefa.id})">Editar</button>
        ${!tarefa.concluida ? `<button class="done-btn" onclick="concluirTarefa(${tarefa.id})">Concluir</button>` : ""}
      </div>
    `;

    lista.appendChild(div);
  });
}

function editarTarefa(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    const novoTitulo = prompt("Editar título:", tarefa.titulo);
    const novaDescricao = prompt("Editar descrição:", tarefa.descricao);

    if (novoTitulo && novaDescricao) {
      tarefa.titulo = novoTitulo;
      tarefa.descricao = novaDescricao;
      salvarDados();
      renderizarTarefas();
    }
  }
}

renderizarTarefas();
