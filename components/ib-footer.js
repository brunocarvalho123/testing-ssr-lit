import {html, css, LitElement} from 'lit';

export class IBFooter extends LitElement {
  static get styles () {
    return css`
      div {
        display: flex;
        justify-content: space-between;
        background-color: var(--footer-background-color); 
        padding: 20px 100px;
        font-size: 12px;
        font-weight: 600;
      }

      ul { 
        display: flex;
        width: 60%;
        text-transform: uppercase;
        list-style-type: none;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        color: var(--primary-text-color);
      }

      p {
        width: 25%;
        color: var(--footer-copyright-text-color);
        text-align: end;
      }
    `;
  }

  render () {
    return html`
      <img src="../images/buildings.png" width="1440">
      <div>
        <ul>
          <li>Termos & condições</li>
          <li>Política de privacidade</li>
          <li>Política de cookies</li>
          <li>Info legal</li>
        </ul>
        <p>Copyright &copy; ${new Date().getFullYear()} Placeholder<br>A Placeholder é uma marca do grupo Placeholder</p> 
      </div>
    `;
  }
}

customElements.define('ib-footer', IBFooter);