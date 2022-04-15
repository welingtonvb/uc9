// sites
// https://jquery.com/download/

// jquery

$(document).ready(function () {

  $("#carrosel img:eq(0)").addClass("banner-ativo").show()

  setInterval(slide, 3000)

  function slide() {
    if ($(".banner-ativo").next().length) {
      $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    } else {
      $(".banner-ativo").removeClass().hide()
      $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    }
  }

  $("#barras").click(function () {
    $("#menu").toggleClass("menu-ativo")
    // if ($("#menu").hasClass("menu-ativo")) {
    //   $("#menu").removeClass("menu-ativo")
    // } else {
    //   $("#menu").addClass("menu-ativo")
    // }
  })
})

// DOM

let listaNoticias = [
  {
    titulo: "titulo 1",
    descricao: "descricao 1"
  },
  {
    titulo: "titulo 2",
    descricao: "descricao 2"
   },
   {
    titulo: "titulo 3",
    descricao: "descricao 3"
   },
   {
    titulo: "titulo 4",
    descricao: "descricao 4"
   },
   {
    titulo: "titulo 5",
    descricao: "descricao 5"
   },
   {
    titulo: "titulo 6",
    descricao: "descricao 6"
   }            
]

function renderizarNoticias() {
  let espaco = document.getElementById("espaco-noticias")

  let template = "";

  for(let index = 0; index < listaNoticias.length; index++) {
    const noticia = listaNoticias[index];

    template += `<div class="cardnews"><img src="img/cardnews.jpg" alt="Foto de uma profissional"><h3>${noticia.titulo}</h3><p>${noticia.descricao}</p></div>`
    
  } 

  espaco.innerHTML = template;

}

let menu = document.getElementById("menu")

function mostrarMenu() {
  if(menu.style.display == "none"){
    menu.style.display = "flex"
  }else {
    menu.style.display = "none"
  }
}

// onload pop

function mostrarPopup() {
  window.alert("Olá!!!")
}

// form

let email = document.getElementById("campo-email")

function enviarEmail() {
  let emailDigitado = email.value
  console.log(emailDigitado)
}