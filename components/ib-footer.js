import {html, css, LitElement} from 'lit';

export class IBFooter extends LitElement {
  static get styles () {
    return css`
      div {
        display: flex;
        background-color: rgb(238, 243, 249); 
        padding: 20px;
        font-family: sans-serif;
      }

      ul { 
        display: flex;
        width: 70%;
        color: rgb(26, 40, 62);
        text-transform: uppercase;
        list-style-type: none;
        justify-content: space-between;
        padding: 0;
      }
    `;
  }

  render () {
    return html`
      <div>
        <ul>
          <li>Termos & condições</li>
          <li>Política de privacidade</li>
          <li>Política de cookies</li>
          <li>Info legal</li>
        </ul>
      </div>
    `;
  }
}

customElements.define('ib-footer', IBFooter);