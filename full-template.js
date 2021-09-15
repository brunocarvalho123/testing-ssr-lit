import {css, html, LitElement} from 'lit'


class IBCard extends LitElement {
  static get properties () { 
    return { 
      header: {
        type: String
      },
      description: {
        type: String
      },
      link: {
        type: String
      }
    };
  }

  static get styles () {
    return css`
      :host {
        border-radius: 10px;
        padding: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      div {
        margin-bottom: 60px;
      }

      h1 {
        margin: 0 0 20px 0;
      }

      a {
        background-color: rgb(26, 40, 62, .25);
        padding: 10px;
        border-radius: 5px;
        width: fit-content;
      }

      a::after {
        content: "→";
        padding-left: 5px;
      }

      :host([theme="invite-accountant"]) h1 {
        font-size: 24px;
      }

      :host([theme="invite-accountant"]) p {
        color: var(--secondary-text-color);
        font-weight: 300;
        font-size: 18px;
        line-height: 26px;
      }

      :host([theme="invite-accountant"]) a {
        color: var(--links-blue-color);
        background-color: rgb(26, 40, 62, 0);
      }
    `;
  }

  constructor () {
    super();
    
    this.link = 'Saiba mais';
  }

  render () {
    return html`
      <div>
        <slot name="media"></slot>
        <h1>${this.header}</h1>
        <p>${this.description}</p>
      </div>
      <a>${this.link}</a>
    `;
  }
}

customElements.define('ib-card', IBCard);


class IBFooter extends LitElement {
  static get styles () {
    return css`
      div {
        display: flex;
        justify-content: space-between;
        background-color: var(--footer-background-color); 
        padding: 20px 100px;
        font-size: 12px;
        font-weight: 600;
      }

      ul { 
        display: flex;
        width: 60%;
        text-transform: uppercase;
        list-style-type: none;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        color: var(--primary-text-color);
      }

      p {
        width: 25%;
        color: var(--footer-copyright-text-color);
        text-align: end;
      }
    `;
  }

  render () {
    return html`
      <img src="../images/buildings.png" width="1440">
      <div>
        <ul>
          <li>Termos & condições</li>
          <li>Política de privacidade</li>
          <li>Política de cookies</li>
          <li>Info legal</li>
        </ul>
        <p>Copyright &copy; ${new Date().getFullYear()} Placeholder<br>A Placeholder é uma marca do grupo Placeholder</p> 
      </div>
    `;
  }
}

customElements.define('ib-footer', IBFooter);


class IBHeader extends LitElement {
  static get styles () {
    return css`
      :host {
        color: var(--secondary-text-color);
      }

      #header-level1 {
        background-color: white;
        display: flex;
        justify-content: flex-end;
      }

      #header-level1 div.link-container {
        display: flex;
        align-items: center;
        padding: 15px 50px;
        margin-top: -0.2%;
      }

      #header-level1 div.link-container[status="selected"] {
        background-color: var(--blue-tone-background-color);
        color: var(--primary-text-color);
        transform: perspective(4px) rotateX(0.5deg);
        padding: 15px 80px;
      }

      #header-level1 div.link-container[status="selected"] a {
        border-bottom: solid 2px var(--primary-accent-color);
        padding: 5px;
        transform: perspective(4px) rotateX(-0.5deg);
      }

      #header-level2 {
        background-color: var(--blue-tone-background-color);
      }

      #header-level2 div.nav-container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
      }

      #header-level2 nav a {
        margin-left: 25px;
      }

      #header-level2 nav a:last-of-type {
        color: var(--links-blue-color);
        background-color: rgba(90, 155, 248, 0.1);
        padding: 15px 30px;
        border-radius: 5px;
        font-weight: 500;
      }

      #header-level2 nav a:last-of-type::after {
        content: "→";
        padding-left: 5px;
      }
    `;
  }

  render () {
    return html`
      <div id="header-level1">
        <div class="link-container" status="selected">
          <a>Placeholder</a>
        </div>
        <div class="link-container">
          <a>Placeholder Contabilistas</a>
        </div>
      </div>
      <div id="header-level2">
        <div class="nav-container">
          <div style="width:50px; height:50px; background-color: pink;"></div>
          <nav>
            <a>Sobre Nós</a>
            <a>Funcionalidades</a>
            <a>Preço</a>
            <a>Ajuda Negócios</a>
            <a>Log in</a>
          </nav>
        </div>
      </div>
    `; 
  }
}

customElements.define('ib-header', IBHeader);


class IBHomeContent extends LitElement {
  static get styles () {
    return css`
      :host {
        color: var(--primary-text-color);
      }

      section {
        padding: 100px 0;
      }

      section:nth-of-type(odd) {
        background-color: var(--blue-tone-background-color);
      }

      section:nth-of-type(even) {
        background-color: var(--grey-tone-background-color);
      }

      section:last-of-type {
        background-color: white;
      }

      section .section-container {
        width: 80%;
        margin: 0 auto;
      }

      section .section-container > h2 {
        font-size: 34px;
        text-align: center;
        margin: 0 0 60px 0;
      }

      section .section-container > h3,
      main section .section-container > p {
        text-align: center;
      }

      section#intro .section-container {
        display: flex;
        justify-content: space-between;
      }

      section#intro .section-container #intro-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40%;
      }

      section#intro .section-container #intro-content h1 {
        font-size: 45px;
        line-height: 65px;
        font-weight: 600;
        margin: 0;
      }

      section#invite-accountant h2 {
        margin: 0 0 25px 0;
      }

      section#invite-accountant p {
        color: var(--secondary-text-color);
        font-size: 20px;
        font-weight: 300;
      }

      section#invite-accountant button {
        background-color: var(--secondary-accent-color);
        color: white;
        border: none;
        padding: 15px 50px;
        border-radius: 30px;
        font-weight: 700;
        font-size: 18px;
      }

      section#know-more .cards-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
      }

      section#know-more ib-card {
        color: white;
      }

      section#know-more ib-card:first-of-type {
        background-color: var(--links-blue-color);
      }

      section#know-more ib-card:nth-of-type(2) {
        background-color: rgb(56, 120, 219);
      }

      section#know-more ib-card:nth-of-type(3) {
        background-color: var(--primary-accent-color);
      }

      section#know-more ib-card:last-of-type {
        background-color: var(--primary-text-color);
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
        color: var(--light-grey-text-color);
        font-weight: 600;
        margin-bottom: 30px;
      }

      section#more-info ul li {
        margin-bottom: 20px;
      } 
    `;
  }

  render () {
    return html`
      <section id="intro">
        <div class="section-container">
          <div id="intro-content">
            <h1>O seu Negócio, o seu Banco e o seu Contabilista, num único sítio.</h1>
            <p>Tempo é dinheiro. Poupe os dois.</p>
            <button>Saiba mais</button>
            <a>Veja como funciona</a>
          </div>
          <div style="width:550px; height:400px; background-color: lightpink;"></div>
        </div>
      </section>

      <section></section>

      <section id="invite-accountant">
        <div class="section-container">
          <h2>Convide o seu Contabilista</h2>
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
          <p>Conheça todas as vantagens que a Placeholder traz para os Contabilistas</p>
          <button>Sou Contabilista</button>
        </div>
      </section>

      <section id="news">
        <div class="section-container">
          <h2>Fique a par de todas as novidades importantes para o seu Negócio</h2>
          <div>
            <div>
              <div style="width:100px; height:100px; background-color: lightpink;"></div>
              <div style="width:100px; height:100px; background-color: lightpink;"></div>
              <div style="width:100px; height:100px; background-color: lightpink;"></div>
            </div>
            <div style="width:50px; height:50px; background-color: pink;"></div>
          </div>
          <h3>Não perca nenhuma atualização</h3>
          <div style="padding:10px; background-color: pink;">Quero receber newsletter</div>
        </div>
      </section>

      <section id="know-more">
        <div class="section-container">
          <h2>Esclareça todas as suas dúvidas. Nós ajudamos!</h2>
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
          <h2>FAQ</h2>
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
    `;
  }
}

customElements.define('ib-home-content', IBHomeContent);



class MyApp extends LitElement {
  static get styles () {
    return css`
      * {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
      }
    `;
  }

  render () {
    return html`
      <div>
        <header>
          <ib-header></ib-header>
        </header>

        <main>
          <ib-home-content></ib-home-content>
        </main>

        <footer>
          <ib-footer></ib-footer>
        </footer>
      </div>
    `;
  }
}
customElements.define('my-app', MyApp);

export const myFullTemplate = () => {
  return html`
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap');

      :root {
        /* background colors */
        --blue-tone-background-color: rgb(242, 244, 248);
        --grey-tone-background-color: rgb(250, 250, 250);
        --footer-background-color: rgb(238, 243, 249);

        /* text colors */
        --primary-text-color: rgb(26, 40, 62); /* blue */
        --secondary-text-color: rgb(112, 122, 136); /* grey */

        /* accent / links colors */
        --primary-accent-color: rgb(192, 41, 93); /* pink */
        --secondary-accent-color: rgb(104, 146, 200); /* blue */
        --links-blue-color: rgb(90, 155, 248);

        /* other colors */
        --footer-copyright-text-color: rgb(132, 142, 156);
        --light-grey-text-color: rgb(187, 191, 198);
      }

      body {
        margin: 0;
      }
    </style>
    <script>var process = {env: {NODE_ENV: ''}} ;</script>
    <script src="./imports.js"></script>

    <my-app></my-app>

    <script>
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
