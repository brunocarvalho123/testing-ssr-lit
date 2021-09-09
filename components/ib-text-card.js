import {html, css, LitElement} from 'lit';

export class IBTextCard extends LitElement {
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
    `;
  }

  constructor () {
    super();
    
    this._header = this.getAttribute('header');
    this._description = this.getAttribute('description');

    this._link = 'Saiba mais';
    if (this.hasAttribute('link')) this._link = this.getAttribute('link');

  }

  render () {
    return html`
      <div>
        <!-- image / video -->
        <slot></slot>
        <h1>${this._header}</h1>
        <p>${this._description}</p>
      </div>
      <a>${this._link}</a>
    `;
  }
}

customElements.define('ib-text-card', IBTextCard);