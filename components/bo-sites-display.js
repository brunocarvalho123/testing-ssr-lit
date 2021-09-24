import {html, css, LitElement} from 'lit';

export class BOSitesDisplay extends LitElement {
  static get styles () {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: rgb(140, 140, 140);
        width: 100%;
      }

      h1 {
        margin: 0 0 2rem 0;
        font-size: 1.2rem;
        font-weight: 600;
      }

      #sites-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        width: 90%;
      }

      #sites-container > div {
        height: 200px;
        cursor: pointer;
        border-radius: 5px;
      }

      #sites-container > div:not(#create-new-site) {
        background-color: lightblue;
      }

      #sites-container > #create-new-site {
        border: dashed 2px rgb(140, 140, 140);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.8;
      }

      button {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: rgb(140, 140, 140);
        border: none;
        color: white;
        align-self: center;
        justify-self: center;
        font-size: 50px;
        cursor: pointer;
      }
    `;
  }

  constructor () {
    super();

    this.sites = [
      { name:'Site IB', id: 'my-app' }, 
      { name: 'Site 2', id: 'S2' }, 
      { name: 'Site 3', id: 'S3'},
      { name: 'Site 4', id: 'S4'}
    ];
  }

  displaySite (event) {
    if (event && event.currentTarget && event.currentTarget.id) {
      this.style.display = 'none';

      const site = document.createElement(event.currentTarget.id);
      const mainContent = this.parentElement;
      const siteWrapper = mainContent.querySelector('#site-wrapper');
      siteWrapper.appendChild(site);
    }
  }

  render () {
    return html`
      <h1>Selecione o site que deseja editar</h1>
      <div id="sites-container">
        <div id="create-new-site">
          <button>+</button>
          <p>Criar novo site</p>
        </div>
        ${this.sites.map((site) => {        
          return html`<div id="${site.id}" @click="${this.displaySite}">${site.name}</div>`}
        )}
      </div>
    `;
  }
}

customElements.define('bo-sites-display', BOSitesDisplay);