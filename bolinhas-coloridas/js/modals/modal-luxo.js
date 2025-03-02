// colocando modal para cada inflavel comum
function abrirModal(produto) {
  var modal = document.getElementById("modal");
  var modalImagem = document.getElementById("modal-imagem");
  var modalTitulo = document.getElementById("modal-titulo");
  var modalDescricao = document.getElementById("modal-descricao");

  // Definir os detalhes do produto com base no ID do produto
  if (produto === "produto1") {
    modalImagem.src = "/src/Catalogo-Locacao/ParqueDoMickey.jpg"; // Imagem do produto 1
    modalTitulo.textContent = "Parque do Mickey";
    modalDescricao.innerHTML =
      "Aqui está a descrição detalhada do Parque do Mickey...<br><br>Essa é a segunda linha da descrição.<br>Mais informações aqui.";
  } else if (produto === "produto2") {
    modalImagem.src = "/src/Catalogo-Locacao/chute-a-gol-01.jpg"; // Imagem do produto 2
    modalTitulo.textContent = "Chute a Gol";
    modalDescricao.innerHTML =
      "Aqui está a descrição <br>detalhada do Chute a Gol...";
  } else if (produto === "produto3") {
    modalImagem.src = "/src/Catalogo-Locacao/GiroMaluco.png"; // Imagem do produto 3
    modalTitulo.textContent = "Giro Maluco";
    modalDescricao.innerHTML =
      "Aqui está a descrição detalhada do Giro Maluco...";
  } else if (produto === "produto4") {
    modalImagem.src = "/src/Catalogo-Locacao/MegaplayTigre3em1.jpg"; // Imagem do produto 4
    modalTitulo.textContent = "MegaPlay Tigre 3 em 1";
    modalDescricao.innerHTML =
      "Aqui está a descrição detalhada do MegaPlay Tigre 3 em 1...";
  } else if (produto === "produto5") {
    modalImagem.src = "/src/Catalogo-Locacao/MiniAventuraRosaeAzul.png"; // Imagem do produto 5
    modalTitulo.textContent = "MiniAventura Rosa e Azul";
    modalDescricao.innerHTML =
      "Aqui está a descrição detalhada do MiniAventura Rosa e Azul...";
  } else if (produto === "produto6") {
    modalImagem.src = "/src/Catalogo-Locacao/MultFundoDoMar.png"; // Imagem do produto 6
    modalTitulo.textContent = "MultPlay Fundo do Mar";
    modalDescricao.innerHTML = "Aqui está a descrição detalhada do multmar..";
  }

  // Exibir o modal
  modal.style.display = "block";
}

function fecharModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Fecha o modal quando a tecla 'Esc' é pressionada
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" || event.keyCode === 27) {
    fecharModal();
  }
});
