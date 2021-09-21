import {html, css, LitElement} from 'lit';

export class BOSitesList extends LitElement {
  static get styles () {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      ul li {
        padding: 1rem 0;
        color: rgb(140, 140, 140);
        border-bottom: solid 1px rgb(140, 140, 140);
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
        font-size: 50px;
      }
    `;
  }

  constructor () {
    super();

    this.pages = [
      { name:'Site IB', id: 'MyApp' }, 
      { name: 'Site 2', id: 'S2' }, 
      { name: 'Site 3', id: 'S3'}
    ];
  }

  displayPage (event) {
    if (event && event.currentTarget && event.currentTarget.id === 'MyApp') {
      const site = document.createElement('my-app');
      const container = this.parentElement.querySelector('#site-container').querySelector('#scalable-container');
      container.appendChild(site);
    }
  }

  render () {
    return html`
      <ul>
        ${this.pages.map((page) => {        
          return html`<li id="${page.id}" @click="${this.displayPage}">${page.name}</li>`}
        )}
      </ul>
      <button>+</button>
    `;
  }
}

customElements.define('bo-sites-list', BOSitesList);