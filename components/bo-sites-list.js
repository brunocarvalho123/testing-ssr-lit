import {html, css, LitElement} from 'lit';

export class BOSitesList extends LitElement {
  static get styles () {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        padding: 50px 20px;
        justify-content: space-between;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      ul li {
        padding: 10px;
        background-color: rgb(140, 140, 140);
        color: white;
      }

      ul li:not(ul li:last-of-type) {
        margin-bottom: 10px;
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

    this.pages = ['MyApp', 'Site 2', 'Site 3'];
  }

  render () {
    return html`
      <ul>
        ${this.pages.map((page) => {        
          return html`<li>${page}</li>`}
        )}
      </ul>
      <button>+</button>
    `;
  }
}

customElements.define('bo-sites-list', BOSitesList);