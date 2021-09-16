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
        padding: 15vh 0;
        font-size: var(--main-section-font-size);
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
        display: flex;
        flex-direction: column;
        align-items: center;
      }






      section .section-container h1,
      section .section-container h2,
      section .section-container p {
        margin: 0;
      }

      section .section-container > h2 {
        font-size: var(--h2-font-size);
        margin-bottom: 3vh;
      }

      section .section-container p.biggest-text {
        font-size: var(--bigger-p-font-size);
        font-weight: 300;
      }

      section .section-container > p.biggest-text:not(section#faq .section-container > p.biggest-text) {
        margin-bottom: 10vh;
      }




      section#intro {
        padding: 8vh 0;
      }

      section#intro .section-container {
        flex-direction: row;
        justify-content: space-between;
      }

      section#intro .section-container #intro-content {
        display: flex;
        flex-direction: column;
        width: 40%;
      }

      section#intro .section-container #intro-content > *:not(:last-child) {
        margin-bottom: 3.8vh;
      }

      section#intro .section-container #intro-content h1 {
        font-size: var(--h1-font-size);
        line-height: 1.5em;
        font-weight: 600;
      }

      section#intro .section-container #intro-content #intro-content-actions {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
      }

      section#intro .section-container #intro-content #intro-content-actions button {
        background-color: var(--primary-accent-color);
        color: white;
        border: none;
        padding: 15px 80px;
        border-radius: 30px;
        font-weight: 700;
        font-size: var(--bigger-p-font-size);
        align-self: flex-start;
        margin-bottom: 30px;
      }

      section#intro .section-container #intro-content #intro-content-actions a {
        color: var(--primary-accent-color);
        align-self: center;
      }






      section#invite-accountant p {
        color: var(--secondary-text-color);
        font-size: var(--bigger-p-font-size);
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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      section#know-more ib-card {
        color: white;
        max-width: 40%;
        margin: 1.8vh 1vw;
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






      section#faq .section-container {
        width: 55%;
      }

      section#faq .section-container p.biggest-text {
        border-bottom: solid 1px rgb(205, 208, 212);
        padding: 20px 0;
        align-self: stretch;
      }






      section#more-info .section-container {
        flex-direction: row;
      }

      section#more-info ul {
        list-style-type: none;
        padding: 0;
        margin-left: 7vw;
      }

      section#more-info ul li:first-of-type {
        color: var(--light-grey-text-color);
        font-weight: 600;
        margin-bottom: 30px;
      }

      section#more-info ul li {
        margin-bottom: 20px;
      } 



      ib-list-card {
        max-width: 30%;
      }
    `;
  }

  constructor () {
    super();
    this.list1 = [
      "Emissão de faturas e identificação automática de recebimentos", 
      "Integrado com serviços de apoio aos recebimentos: TPA, Moove, Débitos"
    ];
    this.list2 = [
      "Pagamento a fornecedores simplificado e integrado nas faturas", 
      "Processamento e pagamento de Salários, Impostos e Segurança Social",
      "Compras com ligação ao eFatura",
      "Partilha digital das despesas com o seu Contabilista"
    ];
    this.list3 = [
      "Evolução dos rendimentos, gastos e saldos bancários (open banking)", 
      "Agenda e alertas de eventos de pagamentos e recebimentos",
      "Apoio à tesouraria, com pedido de financiamento integrado (exclusivo Clientes Placeholder)"
    ]
  }

  render () {
    return html`
      <section id="intro">
        <div class="section-container">
          <div id="intro-content">
            <h1>O seu Negócio, o seu Banco e o seu Contabilista, num único sítio.</h1>
            <p class="biggest-text">Tempo é dinheiro. Poupe os dois.</p>
            <div id="intro-content-actions">
              <button>Saiba Mais</button>
              <a>Veja como funciona</a>
            </div>
          </div>
          <div style="width:550px; height:450px; background-color: lightpink;"></div>
        </div>
      </section>

      <section>
        <div class="section-container">
          <h2>All-in-one. Tudo para gerir o seu Negócio</h2>
          <p class="biggest-text">Software de Gestão e Faturação certificado pela AT com selo SVAT conta bancária integrada e acesso ao Contabilista. Não precisa de instalar nada.</p>
          <div style="display:flex; justify-content: space-between;">
            <ib-list-card 
              header1="Venda" 
              header2="Receba" 
              .list=${this.list1}>
            </ib-list-card>
            <ib-list-card 
              header1="Compre" 
              header2="Pague"
              .list=${this.list2}>
            </ib-list-card>
            <ib-list-card 
              header1="Analise" 
              header2="Controle" 
              .list=${this.list3}>
            </ib-list-card>
          </div>
        </div>
      </section>

      <!-- change bg color -->
      <section>
        <div class="section-container">
          <p>Comece a usar em 5 mins</p>
          <div style="display:flex;">
            <div style="width:600px; height:400px; background-color: lightpink; margin: 0 20px;"></div>
            <div style="width:600px; height:400px; background-color: lightpink; margin: 0 20px;"></div>
          </div>
        </div>
      </section>

      <section>
        <div class="section-container">
          <h2>A Susana já usa o Placeholder</h2>
          <p class="biggest-text">Faça como a Susana e encontre soluções para os problemas do seu dia-a-dia</p>
          <div style="display:flex;">
            <div style="width:600px; height:400px; background-color: lightpink; margin: 0 20px;"></div>
            <div style="width:600px; height:400px; background-color: lightpink; margin: 0 20px;"></div>
          </div>
        </div>
      </section>

      <section id="invite-accountant">
        <div class="section-container">
          <h2>Convide o seu Contabilista</h2>
          <p class="biggest-text">Ao trabalhar juntamente com o seu Contabilista através da Placeholder, ambos ganham muito mais tempo!</p>
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
          <p class="biggest-text">Conheça todas as vantagens que a Placeholder traz para os Contabilistas</p>
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
          <p class="biggest-text">Não perca nenhuma atualização</p>
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
          <p class="biggest-text">A Placeholder é um Banco?</p>
          <p class="biggest-text">Eu só quero um sistema de faturação, esta solução é para mim?</p>
          <p class="biggest-text">Empresas maiores também aproveitam as vantagens da Placeholder?</p>
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


class IBListCard extends LitElement {
  static get properties () { 
    return { 
      header1: {
        type: String
      },
      header2: {
        type: String
      },
      list: {
        type: Array
      }
    };
  }

  static get styles () {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px;
      }

      #title-container {
        display: flex;
        align-self: center;
        align-items: center;
        font-weight: 600;
        font-size: var(--bigger-p-font-size);
      }

      #title-container > span:first-of-type {
        color: var(--secondary-accent-color);
      }

      #title-container > span:last-of-type {
        color: var(--primary-accent-color);
      }

      ul li:not(ul li:last-of-type) {
        margin-bottom: 30px;
      }
    `;
  }

  render () {
    return html`
      <div id="title-container">
        <div style="width:50px; height:50px; background-color: lightpink; margin-right: 20px;"></div>
        <span>${this.header1}</span>
        &nbsp;&&nbsp;
        <span>${this.header2}</span>
      </div>
      
      <ul>
        ${this.list.map((listItem) => {        
          return html`<li>${listItem}</li>`}
        )}
      </ul>
    `;
  }
}

customElements.define('ib-list-card', IBListCard);




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

        /* font sizes */
        --main-section-font-size: 1rem;
        --h1-font-size: 2.8em;
        --h2-font-size: 2.1em;
        --bigger-p-font-size: 1.4em;
        --smaller-p-font-size: 1.1em;

        font-size: 100%;
      }

      body {
        margin: 0;
      }
    </style>
    <script>var process = {env: {NODE_ENV: ''}} ;</script>

    <my-app></my-app>

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
