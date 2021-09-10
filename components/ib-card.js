import {html, css, LitElement} from 'lit';

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
        color: rgb(110, 120, 134);
        font-weight: 300;
        font-size: 18px;
        line-height: 26px;
      }

      :host([theme="invite-accountant"]) a {
        color: rgb(97, 159, 248);
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