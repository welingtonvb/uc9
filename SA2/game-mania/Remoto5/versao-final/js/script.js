// jquery

$(document).ready(function () {

  $("#novidade-produto-carrosel img:eq(0)").addClass("carrosel-ativo").show()

  setInterval(slide, 3000)

  function slide() {
    if ($(".carrosel-ativo").next().length) {
      $(".carrosel-ativo").removeClass("carrosel-ativo").hide().next().addClass("carrosel-ativo").show()
    } else {
      $(".carrosel-ativo").removeClass().hide()
      $("#novidade-produto-carrosel img:eq(0)").addClass("carrosel-ativo").show()
    }
  }
}) 

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

// bootstrap

// galeria

let listaXbox = [
  {
    imagem : "img/galeria/jogos/xbox/50/battefield-2042.jpg",
    titulo : "Battefield 2042",
    descricao : "Promoção do dia!",
    preco : "R$100.00"
  },
  {
    imagem : "img/galeria/jogos/xbox/50/farcry-6.jpg",
    titulo : "Farcry 6",
    descricao : "Promoção do dia!",
    preco : "R$101.00"
  },
  {
    imagem : "img/galeria/jogos/xbox/50/hunting-2-simulator.jpg",
    titulo : "Hunting 2 Simulator",
    descricao : "Promoção do dia!",
    preco : "R$102.00"
  },
  {
    imagem : "img/galeria/jogos/xbox/50/little-hope.jpg",
    titulo : "Little hope",
    descricao : "Promoção do dia!",
    preco : "R$103.00"
  },
  {
    imagem : "img/galeria/jogos/xbox/50/minecraft-dungeons-hero.jpg",
    titulo : "Minecraft dungeons",
    descricao : "Promoção do dia!",
    preco : "R$104.00"
  }
]

let listaPlaystation = [
  {
    imagem : "img/galeria/jogos/psn/50/elden-ring.jpg",
    titulo : "Elden ring",
    descricao : "Promoção do dia!",
    preco : "R$200.00"
  },
  {
    imagem : "img/galeria/jogos/psn/50/ghost-of-tsushima.jpg",
    titulo : "Ghost of tsushima",
    descricao : "Promoção do dia!",
    preco : "R$201.00"
  },
  {
    imagem : "img/galeria/jogos/psn/50/ghostwire-tokio.jpg",
    titulo : "Ghostwire tokio",
    descricao : "Promoção do dia!",
    preco : "R$202.00"
  },
  {
    imagem : "img/galeria/jogos/psn/50/horizon-forbidden-west.jpg",
    titulo : "Horizon forbidden west",
    descricao : "Promoção do dia!",
    preco : "R$203.00"
  },
  {
    imagem : "img/galeria/jogos/psn/50/metro-exodus.jpg",
    titulo : "Metro exodus",
    descricao : "Promoção do dia!",
    preco : "R$204.00"
  }
]

let listaNintendo = [
  {
    imagem : "img/galeria/jogos/nintendo/50/american-fugitive.jpg",
    titulo : "American Fugitive",
    descricao : "Promoção do dia!",
    preco : "R$300.00"
  },
  {
    imagem : "img/galeria/jogos/nintendo/50/final-fantasy.jpg",
    titulo : "Final fantasy",
    descricao : "Promoção do dia!",
    preco : "R$301.00"
  },
  {
    imagem : "img/galeria/jogos/nintendo/50/fire-emblem-three-houses.jpg",
    titulo : "Fire emblem three houses",
    descricao : "Promoção do dia!",
    preco : "R$302.00"
  },
  {
    imagem : "img/galeria/jogos/nintendo/50/mariokart-deluxe-8.jpg",
    titulo : "Mariokart deluxe 8",
    descricao : "Promoção do dia!",
    preco : "R$303.00"
  },
  {
    imagem : "img/galeria/jogos/nintendo/50/metroid-dread.jpg",
    titulo : "Metroid dread",
    descricao : "Promoção do dia!",
    preco : "R$304.00"
  }
]

function renderizarGaleria() {

  let lista;

  for (let index = 0; index <= 2; index++) {

    if (index == 0) {
      lista = listaXbox;
      let linha1 = document.getElementById("linha1")
    }
   
    if (index == 1) {
      lista = listaPlaystation;
      let linha2 = document.getElementById("linha2")
    }

    if (index == 2) {
      lista = listaNintendo;
      let linha3 = document.getElementById("linha3")
    }

    let template = "";

    for (let index = 0; index < lista.length; index++) {
      const produto = lista[index];

      let visivel

      if (index == 0)
        visivel = "visivel-card-1"
      if (index == 1)
        visivel = "visivel-card-2"        
      if (index == 2)
        visivel = "visivel-card-3"        
      if (index == 3)
        visivel = "visivel-card-4"        
      if (index == 4)
        visivel = "visivel-card-5"        

      template +=
      `
      <div class="card ${visivel}" style="width: 18rem;">
        <img src="${produto.imagem}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${produto.titulo}</h5>
          <p class="card-text">${produto.descricao}.</p>
          <a href="#" class="btn btn-primary">${produto.preco}</a>
        </div>
      </div>
      `
    }

    if (index==0)
      linha1.innerHTML = template;
    if (index==1)
      linha2.innerHTML = template;
    if (index==2)
      linha3.innerHTML = template;      
  }
}

// destaque cliente

let listaCliente = [
  {
    cliente : "Pedro",
    opniao : "Bons preços."
  },
  {
    cliente : "Maria",
    opniao : "Entrega rápida"
  },
  {
    cliente : "João",
    opniao : "Recomendo!"
  },
  {
    cliente : "Ana paula",
    opniao : "Ótimo atendimento."
  } 
]

function renderizarCliente() {
  let lista = listaCliente;

  let opniao = document.getElementById("opniaoCliente")

  let template = "";

  template +=
  `
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <h2>${lista[0].cliente}</h2>
        <p>"${lista[0].opniao}"</p>
      </div>
      <div class="carousel-item">
        <h2>${lista[1].cliente}</h2>
        <p>"${lista[1].opniao}"</p>
      </div>
      <div class="carousel-item">
        <h2>${lista[2].cliente}</h2>
        <p>"${lista[2].opniao}"</p>
      </div>
      <div class="carousel-item">
        <h2>${lista[3].cliente}</h2>
        <p>"${lista[3].opniao}"</p>
      </div>      
    `    
  opniao.innerHTML = template;  
}

