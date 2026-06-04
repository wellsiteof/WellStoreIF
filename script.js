const btnContatos = document.getElementById("btnContatos");
const secaoContatos = document.getElementById("contatos");
const formContato = document.getElementById("formContato");
const respostaFormulario = document.getElementById("respostaFormulario");

btnContatos.addEventListener("click", function () {
  secaoContatos.scrollIntoView({
    behavior: "smooth"
  });
});

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
    respostaFormulario.textContent = "Por favor, preencha todos os campos.";
    respostaFormulario.className = "mensagem-erro";

    marcarErro(nome);
    marcarErro(email);
    marcarErro(telefone);
    marcarErro(assunto);
    marcarErro(mensagem);
    return;
  }

  if (!validarEmail(email.value)) {
    respostaFormulario.textContent = "Digite um e-mail válido.";
    respostaFormulario.className = "mensagem-erro";
    email.classList.add("erro");
    return;
  }

  if (telefone.value.length < 8) {
    respostaFormulario.textContent = "Digite um telefone válido.";
    respostaFormulario.className = "mensagem-erro";
    telefone.classList.add("erro");
    return;
  }

  respostaFormulario.textContent =
    "Contato enviado com sucesso! Em breve a Well Store responderá sua mensagem.";
  respostaFormulario.className = "sucesso";

  formContato.reset();
});

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}

function marcarErro(campo) {
  if (campo.value.trim() === "") {
    campo.classList.add("erro");
  }
}

function limparErros() {
  const campos = document.querySelectorAll("input, select, textarea");

  campos.forEach(function (campo) {
    campo.classList.remove("erro");
  });

  respostaFormulario.textContent = "";
  respostaFormulario.className = "";
}
