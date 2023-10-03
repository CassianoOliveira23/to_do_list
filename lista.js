const inputTarefa = document.getElementById('entrada-pergunta');
const botaoAdicionar = document.getElementById('adicionarBotao');
const listaTarefasPendentes = document.getElementById('tarefasPendentes');
const listaTarefasConcluidas = document.getElementById('tarefasConcluidas');

function adicionarTarefa() {
  const tarefa = inputTarefa.value;
  if (tarefa) {
    const li = document.createElement('li');
    li.textContent = tarefa;

    const acoes = document.createElement('div');
    acoes.classList.add('acoes');

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.classList.add('excluir-button');
    botaoExcluir.addEventListener('click', () => {
      li.remove();
    });

    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.classList.add('concluir-button');
    botaoConcluir.addEventListener('click', () => {
      li.classList.toggle('concluido');
      if (li.classList.contains('concluido')) {
        listaTarefasConcluidas.appendChild(li);
        botaoConcluir.disabled = true;
      } else {
        listaTarefasPendentes.appendChild(li);
        botaoConcluir.disabled = false;
      }
    });

    acoes.appendChild(botaoExcluir);
    acoes.appendChild(botaoConcluir);

    li.appendChild(acoes);
    listaTarefasPendentes.appendChild(li);

    inputTarefa.value = '';
  }
}

botaoAdicionar.addEventListener('click', adicionarTarefa);
