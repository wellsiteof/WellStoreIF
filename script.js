const formContato = document.getElementById("formContato");

const respostaFormulario = document.getElementById("respostaFormulario");

if (formContato) {

  formContato.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const assunto = document.getElementById("assunto");
    const mensagem = document.getElementById("mensagem");

    limparErros();

    if (
      nome.value.trim() === "" ||
      email.value.trim() === "" ||
      telefone.value.trim() === "" ||
      assunto.value === "" ||
      mensagem.value.trim() === ""
    ) {

      respostaFormulario.textContent =
        "Por favor, preencha todos os campos.";

      respostaFormulario.className = "mensagem-erro";

      return;
    }

    if (!validarEmail(email.value)) {

      respostaFormulario.textContent =
        "Digite um e-mail válido.";

      respostaFormulario.className = "mensagem-erro";

      email.classList.add("erro");

      return;
    }

    respostaFormulario.textContent =
      "Contato enviado com sucesso! Em breve responderemos.";

    respostaFormulario.className = "sucesso";

    formContato.reset();

  });

}

function validarEmail(email) {

  return email.includes("@") && email.includes(".");

}

function limparErros() {

  const campos =
    document.querySelectorAll("input, select, textarea");

  campos.forEach(function (campo) {

    campo.classList.remove("erro");

  });

  respostaFormulario.textContent = "";

  respostaFormulario.className = "";

}
