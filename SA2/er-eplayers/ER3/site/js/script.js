// DOM

let menu = document.getElementById("menu")

function mostrarMenu() {
  if(menu.style.display == "none"){
    menu.style.display = "flex"
  }else {
    menu.style.display = "none"
  }
}

// onload

function mostrarPopup() {
  window.alert("Olá!!!")
}

// form

let email = document.getElementById("campo-email")

function enviarEmail() {
  let emailDigitado = email.value
  console.log(emailDigitado)
}