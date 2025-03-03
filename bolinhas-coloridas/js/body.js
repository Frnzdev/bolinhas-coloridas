class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <div class="header">
        <div class="container-fluid">
            <div class="row d_flex">
                <div class="col-md-2 col-sm-3 col logo_section">
                    <div class="full">
                        <div class="center-desk">
                            <div class="logo">
                                <a href="index.html"><img src="/src/LogoBolinhas.png" alt="#"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-sm-12">
                    <nav class="navigation navbar navbar-expand-md navbar-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="index.html">INÍCIO</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="para-sua-festa.html" id="dropdownMenu">
                                        PARA SUA FESTA <i class="bi bi-caret-down-fill" id="iconDropdown" style="cursor: pointer;"></i>
                                    </a>
                                    <ul class="dropdown-menu" id="dropdownList">
                                        <li><a class="dropdown-item" href="inflaveis-comum.html">Infláveis comuns</a></li>
                                        <li><a class="dropdown-item" href="barraquinha.html">Barraquinhas de Alimento</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="inflaveis-luxo.html">INFLÁVEIS DE LUXO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="cantinho-de-brincar.html">CANTINHO DE BRINCAR</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="lancamentos.html" >LANÇAMENTOS</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
               
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="footer">
        <div class="container">
          <div class="ToPutImage row">
            <div class="col-md-4">
              <div class="informations">
                <h3>Fale Conosco</h3>
                <ul class="conta">
                
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>Ligue: +01
                    1234567890
                  </li>
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i
                    ><a href="Javascript:void(0)"> demo@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="row border_left">
                <div class="col-md-12">
                  
                </div>
                <div class="col-md-9">
                  <div class="informations">
                    <h3>Links Usados</h3>
                    <ul class="all-links">
                      <li><a href="index.html" class="link-text">Início</a></li>
                      <li><a href="para-sua-festa.html">Para sua festa</a></li>
                      <li><a href="inflaveis-luxo.html">Infláveis de luxo</a></li>
                      <li><a href="cantinho-de-brincar.html">Cantinho de brincar</a></li>
                      <li><a href="lancamentos.html">Lançamentos</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="informations text_align_left">
                    <ul class="icon-social">
                      <li>
                        <a href="Javascript:void(0)"
                          ><i class="fa fa-facebook" aria-hidden="true"></i
                        ></a>
                      </li>
                      <li>
                        <a href="Javascript:void(0)"
                          ><i class="fa fa-twitter" aria-hidden="true"></i
                        ></a>
                      </li>
                      <li>
                        <a href="Javascript:void(0)"
                          ><i
                            class="fa fa-linkedin-square"
                            aria-hidden="true"
                          ></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/bolinhascoloridaslocacoes/" target="_blank" class ="instagram"
                          ><i class="fa fa-instagram" aria-hidden="true"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copy">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <p>
                  © 2025 All Rights Reserved. Design by Frnz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("my-footer", MyFooter);
