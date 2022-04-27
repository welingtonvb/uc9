// submenu

let submenu = document.getElementById("submenu")

function mostrarMenu() {
  if(submenu.style.display == "none") {
    submenu.style.display = "block"
  } else {
    submenu.style.display = "none"
  }
}

// popup seja bem vindo

function monstrarPopup() {
  window.alert("Seja bem-vindo!\n\n Nas compras acima de R$ 150,00 o frete é grátis.")
}

// popup email sucesso

function emailSucesso(email) {

  let valor = email

  window.alert("Seu e-mail " + valor + " foi enviado com sucesso!")
}

let email = document.getElementById("campo-email")

function enviarEmail() {
  let emailDigitado = email.value;
  emailSucesso(emailDigitado)
}

