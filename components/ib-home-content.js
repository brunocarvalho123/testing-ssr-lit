import {html, css, LitElement} from 'lit';

export class IBHomeContent extends LitElement {
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