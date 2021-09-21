import {html, css, LitElement} from 'lit';

export class IBHomeContent extends LitElement {
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




      section#susana #susana-info {
        display: flex;
        position: relative;
        width: 100%;
        height: 80vh;
      }

      section#susana #susana-info ib-card {
        background-color: white;
        height: 55vh;
        align-self: flex-end;
        position: absolute;
        left: 48.5%;
        box-sizing: border-box;
        padding: 60px 40px;
        box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.1);
      }

      section#susana #susana-arrows {
        display: flex;
        align-self: flex-end;
        margin-top: 40px;
      }

      section#susana #susana-arrows > div:first-of-type {
        margin-right: 20px;
        opacity: 40%;
      }

      section#susana #susana-arrows > div {
        width: 70px;
        height: 50px;
        background-color: var(--primary-accent-color);
        border-radius: 5px;
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




      section#news ib-card {
        background-color: white;
        width: 22.5%;
      }

      section#news ib-card:nth-of-type(2) {
        width: 35%;
        box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.1);
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



      button#saveQuill {
        position: fixed;
        bottom: 3vh;
        right: 2.5vw;
        font-size: 25px;
        background-color: rgb(255,170,102);
        border: none;
        padding: 20px 30px;
        border-radius: 35px;
        color: white;
        font-weight: 600;
        cursor: pointer;
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

    this.susanaCardText = `
      <h2><span>"</span>Quanto tenho de pagar de IVA?</h2>
      <p><b>Susana Almeida</b><br>Empresária da Feliz é Quem Diz<br>@felizquemdiz</p>
      <p>Costumava passar tanto tempo a descobrir o que estava naquela pilha de papel na minha secretária. Já não!</p>
    `;

    this.inviteAccountantCardText1 = `
      <h1>Chega de papel!</h1>
      <p>Com a Placeholder é mais fácil digitalizar as suas despesas e dar acesso ao seu Contabilista. O envio de papel virou coisa do passado!</p>
    `;
    this.inviteAccountantCardText2 = `
      <h1>Articulação digital com o seu Contabilista</h1>
      <p>Na Placeholder, o seu Contabilista consegue aceder a todos os seus documentos e movimentos, já linkados com as faturas digitalizadas.</p>
    `;
    this.inviteAccountantCardText3 = `
      <h1>Ainda não tem um Contabilista?</h1>
      <p>Temos uma rede com mais de 20 mil Contabilistas certificados. Procure por localidade e conheça as vantagens de ter um Contabilista da rede Placeholder.</p>
    `;


    this.knowMoreCardText1 = `
      <h1>Programa de estágios para empresas</h1>
      <p>Descubra como inscrever a sua Empresa</p>
    `;
    this.knowMoreCardText2 = `
      <h1>PRR - Plano de Recuperação e Resiliência</h1>
      <p>Saiba como inscrever-se e acompanhar os seus projetos de investimento</p>
    `;
    this.knowMoreCardText3 = `
      <h1>Lay-off simplificado</h1>
      <p>Saiba mais sobre as medidas excecionais e temporárias de resposta à epidemia COVID-19</p>
    `;
    this.knowMoreCardText4 = `
      <h1>Como criar uma Empresa</h1>
      <p>Veja agora quais são todos os passos necessários para abrir uma Empresa em Portugal</p>
    `;

    this.newsCardText1 = `
      <h3>A partir de Janeiro de 2022 as faturas virão com QR code. E esta é uma ótima notícia.</h3>
      <p>Público</p>
    `;

    this.newsCardText2 = `
      <h3>Como registar uma compra: Controle os seus gastos</h3>
    `;

    this.newsCardText3 = `
      <h3>Como emitir uma fatura: saiba como vender sem complicações</h3>
    `;
  }

  getHtml (event) {
    // debugger;

    console.log(this.shadowRoot.querySelector('section#invite-accountant').children[0].children[2].children[0].quill.root.innerHTML);
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
      <section id="open-account">
        <div class="section-container">
          <p>Comece a usar em 5 mins</p>
          <div style="display:flex;">
            <div style="width:400px; height:400px; background-color: lightpink; margin: 0 20px;"></div>
            <div style="width:400px; height:400px; background-color: lightpink; margin: 0 20px;"></div>
          </div>
        </div>
      </section>

      <section id="susana">
        <div class="section-container">
          <h2>A Susana já usa o Placeholder</h2>
          <p class="biggest-text">Faça como a Susana e encontre soluções para os problemas do seu dia-a-dia</p>
          <div id="susana-info">
            <img src="./images/susana.png" style="height: 67vh;">
            <ib-card text=${this.susanaCardText} link="Veja como ajudamos na sua tesouraria" theme="susana"></ib-card>
          </div>
          <div id="susana-arrows">
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      <section id="invite-accountant">
        <div class="section-container">
          <h2>Convide o seu Contabilista</h2>
          <p class="biggest-text">Ao trabalhar juntamente com o seu Contabilista através da Placeholder, ambos ganham muito mais tempo!</p>
          <div style="display: flex;">
            <ib-card text=${this.inviteAccountantCardText1} link="Saiba como" theme="invite-accountant">
              <img src="./images/ia-1.png" slot="media" width="180">
            </ib-card>
            <ib-card text=${this.inviteAccountantCardText2} link="Saiba como" theme="invite-accountant">
              <img src="./images/ia-2.png" slot="media" width="180">
            </ib-card>
            <ib-card text=${this.inviteAccountantCardText3} link="Encontre um Contabilista" theme="invite-accountant">
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
          <div style="display: flex; align-self: flex-start; width: 112%; justify-content: space-between; margin-bottom: 100px;">
            <ib-card text=${this.newsCardText1} link="Ler mais" theme="susana">
              <img src="./images/news-1.png" height="215" slot="media">
            </ib-card>
            <ib-card text=${this.newsCardText2} link="Ver vídeo" theme="susana">
              <img src="./images/news-2.png" height="300" slot="media">
            </ib-card>
            <ib-card text=${this.newsCardText3} theme="susana">
              <img src="./images/news-3.png" height="215" slot="media">
            </ib-card>
          </div>
          <p class="biggest-text">Não perca nenhuma atualização</p>
          <div style="padding:10px; background-color: pink;">Quero receber newsletter</div>
        </div>
      </section>

      <section id="know-more">
        <div class="section-container">
          <h2>Esclareça todas as suas dúvidas. Nós ajudamos!</h2>
          <div class="cards-container">
            <ib-card text=${this.knowMoreCardText1} theme="know-more"></ib-card>
            <ib-card text=${this.knowMoreCardText2} theme="know-more"></ib-card>
            <ib-card text=${this.knowMoreCardText3} theme="know-more"></ib-card>
            <ib-card text=${this.knowMoreCardText4} theme="know-more"></ib-card>
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
        <div class="section-container">
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

      <button id="saveQuill" @click="${this.getHtml}" hidden>Guardar</button>
    `;
  }
}

customElements.define('ib-home-content', IBHomeContent);