import {html, css, LitElement} from 'lit';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

export class IBCard extends LitElement {
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
      },
      text: {
        type: String
      }
    };
  }

  static get styles () {
    return css`
      :host {
        padding: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      #text-container {
        margin-bottom: 60px;
      }

      h1 {
        margin: 0 0 20px 0;
      }

      a::after {
        content: "→";
        padding-left: 5px;
      }

      :host([theme="know-more"]) {
        border-radius: 10px;
      }

      :host([theme="know-more"]) a {
        background-color: rgb(26, 40, 62, .25);
        padding: 10px;
        border-radius: 5px;
        width: fit-content;
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
      }

      :host([theme="susana"]) {
        border-radius: 5px;
      }

      :host([theme="susana"]) #text-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0;
        height: 75%;
      }

      :host([theme="susana"]) #text-container * {
        margin: 0;
      }

      :host([theme="susana"]) #text-container p:last-of-type {
        font-size: var(--bigger-p-font-size);
      }

      :host([theme="susana"]) a {
        color: var(--primary-accent-color);
      }
    `;
  }

  constructor () {
    super();

    this.link = 'Saiba mais';
    this.quill = undefined;
  }

  moveEditor (event) {
    if (this.quill === undefined) {
      this.quill = new Quill(event.currentTarget, {
        theme: 'snow'
      });
    }
  }

  render () {
    return html`
      <link href="./node_modules/quill/dist/quill.snow.css" rel="stylesheet">
      <slot name="media"></slot>
      <div id="text-container" @click="${this.moveEditor}">
        ${unsafeHTML(this.text)}
      </div>
      <a>${this.link}</a>
    `;
  }
}

customElements.define('ib-card', IBCard);