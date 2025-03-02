/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* Preloader */
  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);

  /* Tooltip */
  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* Mouseover */
  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  /* Toggle sidebar */
  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  /* Product slider */
  $("#blogCarousel").carousel({
    interval: 5000,
  });

  /* Mudar cor do fundo conforme o slide */
  var colors = [
    "rgba(255, 255, 0, 0.3)",
    "rgba(7, 0, 110, 0.3)",
    "rgba(0, 128, 0, 0.3)",
  ];
  var $carousel = $("#carouselExampleIndicators");

  function updateBackground(slideIndex) {
    $("#ToChange").css({
      "background-color": colors[slideIndex],
      "border-radius": "20px",
    });
  }

  updateBackground(0);

  $carousel.on("slide.bs.carousel", function (event) {
    var slideIndex = $(event.relatedTarget).index();
    updateBackground(slideIndex);
  });
});

// Função para gerenciar a ativação de itens no menu, como "Para Sua Festa"
$(document).ready(function () {
  // Pega a URL atual
  var currentURL = window.location.pathname;

  // Remove 'active' de todos os links para evitar múltiplos ativos
  $(".navbar-nav .nav-item").removeClass("active");

  // Verifica qual link corresponde à URL atual
  $(".navbar-nav .nav-item a").each(function () {
    var linkURL = $(this).attr("href");

    // Se a URL do link estiver na URL atual, adiciona 'active'
    if (currentURL.includes(linkURL)) {
      $(this).parent().addClass("active");
    }
  });

  // Adiciona funcionalidade ao clicar no "Para Sua Festa"
  $(".dropdown-menu a").on("click", function () {
    // Marca "Para Sua Festa" como ativo quando qualquer item da dropdown é clicado
    $("#para-sua-festa").addClass("active");
  });
});

//dropwonList Para sua festa
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = document.getElementById("dropdownList");
  const dropdownIcon = document.getElementById("iconDropdown");

  // Alterna o menu ao clicar
  dropdown.addEventListener("click", function (event) {
    // Verifica se o clique foi no ícone ou no texto principal (e não em um link interno)
    if (!event.target.closest(".dropdown-menu a")) {
      event.preventDefault(); // Impede navegação no menu principal
      dropdown.classList.toggle("active");
      dropdownMenu.classList.toggle("show");
      dropdownIcon.classList.toggle("icon-rotate");
    }
  });

  // Fecha o menu ao clicar fora
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
      dropdownMenu.classList.remove("show");
      dropdownIcon.classList.remove("icon-rotate");
    }
  });
});
