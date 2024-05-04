document.addEventListener("DOMContentLoaded", function () {
  // Funções para mudar de página
  function changePage(href) {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  }

  // Eventos para botões de navegação
  var btnContato = document.getElementById("btnContato");
  if (btnContato) {
    btnContato.addEventListener("click", function (event) {
      event.preventDefault();
      changePage("contato.html");
    });
  }

  var btnPortfolio = document.getElementById("btnPortfolio");
  if (btnPortfolio) {
    btnPortfolio.addEventListener("click", function (event) {
      event.preventDefault();
      changePage("portfolio.html");
    });
  }

  var btnCurriculo = document.getElementById("btnCurriculo");
  if (btnCurriculo) {
    btnCurriculo.addEventListener("click", function (event) {
      event.preventDefault();
      changePage("curriculo.html");
    });
  }

  // Adicione este evento de escuta para o botão de envio
  var btnEnviar = document.querySelector(".btn");
  if (btnEnviar) {
    btnEnviar.addEventListener("click", function (event) {
      event.preventDefault(); // Impede o envio do formulário
      if (validarFormulario()) {
        enviarMensagemParaWhatsApp();
      }
    });
  }
});

// Função para validar o formulário
function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var numero = document.getElementById("numero").value;
  var mensagem = document.getElementById("mensagem").value;

  // Validações aqui...

  // Se todas as validações passarem, retorne true
  return true;
}

// Função para enviar mensagem para o WhatsApp
function enviarMensagemParaWhatsApp() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;
  var numero = document.getElementById("numero").value;

  const seuNumero = "5581994490621"; // Seu número de WhatsApp

  const nomeEncoded = encodeURIComponent(nome);
  const emailEncoded = encodeURIComponent(email);
  const mensagemEncoded = encodeURIComponent(mensagem);
  const numeroEncoded = encodeURIComponent(numero);

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${seuNumero}&text=Olá, meu nome é ${nomeEncoded}. Meu email é ${emailEncoded}. Mensagem: ${mensagemEncoded}`;

  window.open(whatsappUrl, "_blank");
}

