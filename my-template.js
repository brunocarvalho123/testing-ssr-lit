import {html, css, LitElement} from 'lit';


export class MyApp extends LitElement {
  static get styles () {
    return css`
      * {
        font-family: Helvetica, sans-serif;
        box-sizing: border-box;
        color: rgb(26, 40, 62);
      }

      h1 {
        text-align: center;
        margin: 0 0 60px 0;
      }

      section {
        padding: 100px 0;
      }

      .grey-sec {
        background-color: rgb(250, 250, 250);
      }

      .blue-sec {
        background-color: rgb(242, 244, 248);
      }

      main section:last-of-type {
        background-color: rgb(255, 255, 255);
      }

      main section:last-of-type ul {
        list-style-type: none;
        padding: 0;
        margin-left: 100px;
      }

      main section:last-of-type ul li:first-of-type {
        color: rgb(187, 191, 198);
        margin-bottom: 30px;
      }

      main section:last-of-type ul li {
        margin-bottom: 20px;
      }

      #faq p {
        border-bottom: solid 1px rgb(205, 208, 212);
        padding-bottom: 20px;
      }

      #know-more-cards > div {
        display: grid;
        width: 80%;
        margin: 0 auto;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
      }

      #know-more-cards ib-text-card {
        color: rgb(255, 255, 255);
      }

      #know-more-cards ib-text-card:first-of-type {
        background-color: rgb(90, 155, 248);
      }

      #know-more-cards ib-text-card:nth-of-type(2) {
        background-color: rgb(56, 120, 219);
      }

      #know-more-cards ib-text-card:nth-of-type(3) {
        background-color: rgb(192, 41, 93);
      }

      #know-more-cards ib-text-card:last-of-type {
        background-color: rgb(26, 40, 62);
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
          <section class="blue-sec">
            <h1>Convide o seu Contabilista</h1>
            <p>Ao trabalhar juntamente com o seu Contabilista através da Placeholder, ambos ganham muito mais tempo!</p>
            <div style="display: flex;">
              <ib-text-card header="Chega de papel!" description="Com a Placeholder é mais fácil digitalizar as suas despesas e dar acesso ao seu Contabilista. O envio de papel virou coisa do passado!" link="Saiba como"></ib-text-card>
              <ib-text-card header="Articulação digital com o seu Contabilista" description="Na Placeholder, o seu Contabilista consegue aceder a todos os seus documentos e movimentos, já linkados com as faturas digitalizadas." link="Saiba como"></ib-text-card>
              <ib-text-card header="Ainda não tem um Contabilista?" description="Temos uma rede com mais de 20 mil Contabilistas certificados. Procure por localidade e conheça as vantagens de ter um Contabilista da rede Placeholder." link="Encontre um Contabilista"></ib-text-card>
            </div>
            <p>Conheça todas as vantagens que a <b>Placeholder</b> trás para os Contabilistas</p>
            <div style="padding:10px; background-color: lightblue;">Sou Contabilista</div>
          </section>
          <section class="grey-sec">
            <h1>Fique a par de todas as novidades importantes para o seu Negócio</h1>
            <div>
              <div>
                <div style="width:100px; height:100px; background-color: lightpink;"></div>
                <div style="width:100px; height:100px; background-color: lightpink;"></div>
                <div style="width:100px; height:100px; background-color: lightpink;"></div>
              </div>
              <div style="width:50px; height:50px; background-color: pink;"></div>
            </div>
            <div>
              <h2>Não perca nenhuma atualização</h2>
              <div style="padding:10px; background-color: pink;">Quero receber newsletter</div>
            </div>
          </section>
          <section class="blue-sec" id="know-more-cards">
            <h1>Esclareça todas as suas dúvidas. Nós ajudamos!</h1>
            <div>
              <ib-text-card header="Programa de estágios para empresas" description="Descubra como inscrever a sua Empresa"></ib-text-card>
              <ib-text-card header="PRR - Plano de Recuperação e Resiliência" description="Saiba como inscrever-se e acompanhar os seus projetos de investimento"></ib-text-card>
              <ib-text-card header="Lay-off simplificado" description="Saiba mais sobre as medidas excecionais e temporárias de resposta à epidemia COVID-19"></ib-text-card>
              <ib-text-card header="Como criar uma Empresa" description="Veja agora quais são todos os passos necessários para abrir uma Empresa em Portugal"></ib-text-card>
            </div>
          </section>
          <section class="grey-sec" id="faq">
            <div style="width: 55%; margin: 0 auto;">
              <h1>FAQ</h1>
              <p>A Placeholder é um Banco?</p>
              <p>Eu só quero um sistema de faturação, esta solução é para mim?</p>
              <p>Empresas maiores também aproveitam as vantagens da Placeholder?</p>
            </div>
          </section>
          <section style="width:80%; margin:0 auto;">
            <div style="display: flex;">
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