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

      #sites-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        width: 90%;
      }

      #sites-container > div {
        height: 200px;
        background-color: lightblue;
        cursor: pointer;
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

      p {
        margin: 0 0 2rem 0;
        font-size: 1.2rem;
        font-weight: 600;
      }
    `;
  }

  constructor () {
    super();

    this.sites = [
      { name:'Site IB', id: 'MyApp' }, 
      { name: 'Site 2', id: 'S2' }, 
      { name: 'Site 3', id: 'S3'},
      { name: 'Site 4', id: 'S4'}
    ];
  }

  displaySite (event) {
    if (event && event.currentTarget && event.currentTarget.id === 'MyApp') {
      this.style.display = 'none';

      const site = document.createElement('my-app');
      const container = this.parentElement.querySelector('#scalable-container');
      container.appendChild(site);
    }
  }

  render () {
    return html`
      <p>Selecione o site que deseja editar</p>
      <div id="sites-container">
        <button>+</button>
        ${this.sites.map((site) => {        
          return html`<div id="${site.id}" @click="${this.displaySite}">${site.name}</div>`}
        )}
      </div>
    `;
  }
}

customElements.define('bo-sites-display', BOSitesDisplay);