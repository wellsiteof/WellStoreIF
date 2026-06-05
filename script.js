const formContato = document.getElementById("formContato");

const respostaFormulario =
  document.getElementById("respostaFormulario");

if (formContato) {

  formContato.addEventListener("submit", function (evento) {

    evento.preventDefault();

    limparMensagens();

    const nome =
      document.getElementById("nome");

    const email =
      document.getElementById("email");

    const telefone =
      document.getElementById("telefone");

    const assunto =
      document.getElementById("assunto");

    const mensagem =
      document.getElementById("mensagem");

    let formularioValido = true;

    /* ===== NOME ===== */

    if (nome.value.trim() === "") {

      mostrarErro(nome,
        "Digite seu nome.");

      formularioValido = false;

    } else if (nome.value.trim().length < 3) {

      mostrarErro(nome,
        "O nome deve ter pelo menos 3 letras.");

      formularioValido = false;
    }

    /* ===== EMAIL ===== */

    if (email.value.trim() === "") {

      mostrarErro(email,
        "Digite seu e-mail.");

      formularioValido = false;

    } else if (!validarEmail(email.value)) {

      mostrarErro(email,
        "Digite um e-mail válido.");

      formularioValido = false;
    }

    /* ===== TELEFONE ===== */

    if (telefone.value.trim() === "") {

      mostrarErro(telefone,
        "Digite seu telefone.");

      formularioValido = false;

    } else if (telefone.value.replace(/\D/g, "").length < 10) {

      mostrarErro(telefone,
        "Telefone inválido.");

      formularioValido = false;
    }

    /* ===== ASSUNTO ===== */

    if (assunto.value === "") {

      mostrarErro(assunto,
        "Escolha um assunto.");

      formularioValido = false;
    }

    /* ===== MENSAGEM ===== */

    if (mensagem.value.trim() === "") {

      mostrarErro(mensagem,
        "Digite uma mensagem.");

      formularioValido = false;

    } else if (mensagem.value.trim().length < 10) {

      mostrarErro(mensagem,
        "A mensagem deve ter pelo menos 10 caracteres.");

      formularioValido = false;
    }

    /* ===== SUCESSO ===== */

    if (formularioValido) {

      respostaFormulario.textContent =
        "Contato enviado com sucesso!";

      respostaFormulario.className =
        "sucesso";

      formContato.reset();
    }

  });

}

/* ===== VALIDAR EMAIL ===== */

function validarEmail(email) {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);

}

/* ===== MOSTRAR ERRO ===== */

function mostrarErro(campo, mensagem) {

  campo.classList.add("erro");

  const mensagemErro =
    document.createElement("div");

  mensagemErro.className =
    "mensagem-erro";

  mensagemErro.innerText = mensagem;

  campo.parentNode.appendChild(mensagemErro);

}

/* ===== LIMPAR ===== */

function limparMensagens() {

  const erros =
    document.querySelectorAll(".mensagem-erro");

  erros.forEach(function (erro) {

    erro.remove();

  });

  const campos =
    document.querySelectorAll("input, select, textarea");

  campos.forEach(function (campo) {

    campo.classList.remove("erro");

  });

  respostaFormulario.textContent = "";

}
