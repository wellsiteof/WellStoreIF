const formContato = document.getElementById("formContato");
const respostaFormulario = document.getElementById("respostaFormulario");

if (formContato) {
  formContato.addEventListener("submit", function (evento) {
    evento.preventDefault();

    limparErros();

    let valido = true;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const assunto = document.getElementById("assunto");
    const mensagem = document.getElementById("mensagem");

    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const telefoneValor = telefone.value.trim();
    const assuntoValor = assunto.value;
    const mensagemValor = mensagem.value.trim();

    if (nomeValor === "") {
      mostrarErro(nome, "O campo nome é obrigatório.");
      valido = false;
    } else if (nomeValor.length < 3) {
      mostrarErro(nome, "O nome precisa ter pelo menos 3 letras.");
      valido = false;
    } else if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nomeValor)) {
      mostrarErro(nome, "O nome deve conter apenas letras.");
      valido = false;
    }

    if (emailValor === "") {
      mostrarErro(email, "O campo e-mail é obrigatório.");
      valido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValor)) {
      mostrarErro(email, "Digite um e-mail válido. Exemplo: nome@email.com");
      valido = false;
    }

    const telefoneNumeros = telefoneValor.replace(/\D/g, "");

    if (telefoneValor === "") {
      mostrarErro(telefone, "O campo telefone é obrigatório.");
      valido = false;
    } else if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
      mostrarErro(telefone, "Digite um telefone válido com DDD.");
      valido = false;
    }

    if (assuntoValor === "") {
      mostrarErro(assunto, "Escolha um assunto.");
      valido = false;
    }

    if (mensagemValor === "") {
      mostrarErro(mensagem, "O campo mensagem é obrigatório.");
      valido = false;
    } else if (mensagemValor.length < 10) {
      mostrarErro(mensagem, "A mensagem precisa ter pelo menos 10 caracteres.");
      valido = false;
    }

    if (valido) {
      respostaFormulario.textContent =
        "Contato enviado com sucesso! Em breve a Well Store responderá sua mensagem.";

      respostaFormulario.className = "sucesso";

      formContato.reset();
    }
  });
}

function mostrarErro(campo, texto) {
  campo.classList.add("erro");

  const erro = document.createElement("small");
  erro.className = "erro-campo";
  erro.textContent = texto;

  campo.insertAdjacentElement("afterend", erro);
}

function limparErros() {
  const mensagensErro = document.querySelectorAll(".erro-campo");

  mensagensErro.forEach(function (mensagem) {
    mensagem.remove();
  });

  const campos = document.querySelectorAll("input, select, textarea");

  campos.forEach(function (campo) {
    campo.classList.remove("erro");
  });

  respostaFormulario.textContent = "";
  respostaFormulario.className = "";
}
