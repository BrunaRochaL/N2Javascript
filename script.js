document.addEventListener("DOMContentLoaded", function () {
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const telefoneInput = document.getElementById("telefone");
  const cadastroBtn = document.getElementById("cadastro");
  const listaContatos = document.getElementById("lista-contatos");

  cadastroBtn.addEventListener("click", function () {
    const nome = nomeInput.value;
    const email = emailInput.value;
    const telefone = telefoneInput.value;

    if (nome && email && telefone) {
      const newRow = listaContatos.insertRow();
      newRow.innerHTML = `
                <td>${nome}</td>
                <td>${email}</td>
                <td>${telefone}</td>
                <td><button class="excluir btn btn-danger">Excluir</button></td>
            `;

      nomeInput.value = "";
      emailInput.value = "";
      telefoneInput.value = "";

      const excluirBtn = newRow.querySelector(".excluir");
      excluirBtn.addEventListener("click", function () {
        const rowToRemove = this.closest("tr");
        listaContatos.removeChild(rowToRemove);
      });
    }
  });
});
