import {html, css, LitElement} from 'lit';


export class MyApp extends LitElement {
  static get styles () {
    return css`
      * {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        color: rgb(26, 40, 62);
      }

      section {
        padding: 100px 0;
      }

      section:nth-of-type(odd) {
        background-color: rgb(242, 244, 248);
      }

      section:nth-of-type(even) {
        background-color: rgb(250, 250, 250);
      }

      section:last-of-type {
        background-color: rgb(255, 255, 255);
      }

      section .section-container {
        width: 80%;
        margin: 0 auto;
      }

      section .section-container > h1 {
        font-size: 34px;
        text-align: center;
        margin: 0 0 60px 0;
      }

      section .section-container > h2,
      section .section-container > p {
        text-align: center;
      }

      section#invite-accountant h1 {
        margin: 0 0 25px 0;
      }

      section#invite-accountant p {
        color: rgb(110, 120, 134);
        font-size: 20px;
        font-weight: 300;
      }

      section#know-more .cards-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
      }

      section#know-more ib-card {
        color: rgb(255, 255, 255);
      }

      section#know-more ib-card:first-of-type {
        background-color: rgb(90, 155, 248);
      }

      section#know-more ib-card:nth-of-type(2) {
        background-color: rgb(56, 120, 219);
      }

      section#know-more ib-card:nth-of-type(3) {
        background-color: rgb(192, 41, 93);
      }

      section#know-more ib-card:last-of-type {
        background-color: rgb(26, 40, 62);
      }

      section#faq > div {
        width: 55%;
      }

      section#faq p {
        text-align: left;
        border-bottom: solid 1px rgb(205, 208, 212);
        padding-bottom: 20px;
      }

      section#more-info ul {
        list-style-type: none;
        padding: 0;
        margin-left: 100px;
      }

      section#more-info ul li:first-of-type {
        color: rgb(187, 191, 198);
        margin-bottom: 30px;
      }

      section#more-info ul li {
        margin-bottom: 20px;
      }
    `;
  }

  render () {
    return html`
      <div>
        <header>
          <div>
            <div>Placeholder</div>
            <div>Placeholder Contabilistas</div>
          </div>
          <nav>
            <!-- logo -->
            <a>Sobre Nós</a>
            <a>Funcionalidades</a>
            <a>Preço</a>
            <a>Ajuda Negócios</a>
            <a>Log in -></a>
          </nav>
        </header>
        <!-- main content -->
        <main>
          <section></section>
          <section></section>
          <section id="invite-accountant">
            <div class="section-container">
              <h1>Convide o seu Contabilista</h1>
              <p>Ao trabalhar juntamente com o seu Contabilista através da Placeholder, ambos ganham muito mais tempo!</p>
              <div style="display: flex;">
                <ib-card header="Chega de papel!" description="Com a Placeholder é mais fácil digitalizar as suas despesas e dar acesso ao seu Contabilista. O envio de papel virou coisa do passado!" link="Saiba como" theme="invite-accountant">
                  <img src="./images/ia-1.png" slot="media" width="180">
                </ib-card>
                <ib-card header="Articulação digital com o seu Contabilista" description="Na Placeholder, o seu Contabilista consegue aceder a todos os seus documentos e movimentos, já linkados com as faturas digitalizadas." link="Saiba como" theme="invite-accountant">
                  <img src="./images/ia-2.png" slot="media" width="180">
                </ib-card>
                <ib-card header="Ainda não tem um Contabilista?" description="Temos uma rede com mais de 20 mil Contabilistas certificados. Procure por localidade e conheça as vantagens de ter um Contabilista da rede Placeholder." link="Encontre um Contabilista" theme="invite-accountant">
                  <img src="./images/ia-3.png" slot="media" width="180">
                </ib-card>
              </div>
              <p>Conheça todas as vantagens que a <b>Placeholder</b> trás para os Contabilistas</p>
              <button type="button">Sou Contabilista</button>
            </div>
          </section>
          <section id="news">
            <div class="section-container">
              <h1>Fique a par de todas as novidades importantes para o seu Negócio</h1>
              <div>
                <div>
                  <div style="width:100px; height:100px; background-color: lightpink;"></div>
                  <div style="width:100px; height:100px; background-color: lightpink;"></div>
                  <div style="width:100px; height:100px; background-color: lightpink;"></div>
                </div>
                <div style="width:50px; height:50px; background-color: pink;"></div>
              </div>
              <h2>Não perca nenhuma atualização</h2>
              <div style="padding:10px; background-color: pink;">Quero receber newsletter</div>
            </div>
          </section>
          <section id="know-more">
            <div class="section-container">
              <h1>Esclareça todas as suas dúvidas. Nós ajudamos!</h1>
              <div class="cards-container">
                <ib-card header="Programa de estágios para empresas" description="Descubra como inscrever a sua Empresa"></ib-card>
                <ib-card header="PRR - Plano de Recuperação e Resiliência" description="Saiba como inscrever-se e acompanhar os seus projetos de investimento"></ib-card>
                <ib-card header="Lay-off simplificado" description="Saiba mais sobre as medidas excecionais e temporárias de resposta à epidemia COVID-19"></ib-card>
                <ib-card header="Como criar uma Empresa" description="Veja agora quais são todos os passos necessários para abrir uma Empresa em Portugal"></ib-card>
              </div>
            </div>
          </section>
          <section id="faq">
            <div class="section-container">
              <h1>FAQ</h1>
              <p>A Placeholder é um Banco?</p>
              <p>Eu só quero um sistema de faturação, esta solução é para mim?</p>
              <p>Empresas maiores também aproveitam as vantagens da Placeholder?</p>
            </div>
          </section>
          <section id="more-info">
            <div style="display: flex;" class="section-container">
              <div style="width:100px; height:100px; background-color: lightpink;"></div>
              <ul>
                <li>A Placeholder</li>
                <li>Sobre nós</li>
                <li>Funcionalidades</li>
                <li>Preço</li>
                <li>Ajuda negócios</li>
              </ul>
              <ul>
                <li>Suporte</li>
                <li>Fale connosco</li>
                <li>FAQ's</li>
              </ul>
              <ul>
                <li>Siga-nos</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </section>
        </main>
        <!-- footer -->
        <ib-footer slot="footer"></ib-footer>
      </div>
    `;
  }
}
customElements.define('my-app', MyApp);

export const myTemplate = () => {
  return html`
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap');
    </style>
    <script>var process = {env: {NODE_ENV: ''}} ;</script>
    <script type="module" src="./imports.js"></script>

    <my-app>
    </my-app>

    <script type="module">
      // Hydrate template-shadowroots eagerly after rendering (for browsers without
      // native declarative shadow roots)
      import { hydrateShadowRoots } from './node_modules/@webcomponents/template-shadowroot/template-shadowroot.js';

      var isChrome = !!window.chrome;
      if (!isChrome) {
        hydrateShadowRoots(document.body);
      }
    </script>
  `;
};