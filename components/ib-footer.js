import {html, css, LitElement} from 'lit';

export class IBFooter extends LitElement {
  static get styles () {
    return css`
      div {
        display: flex;
        justify-content: space-between;
        background-color: rgb(238, 243, 249); 
        padding: 20px 100px;
        font-size: 12px;
      }

      ul { 
        display: flex;
        width: 60%;
        text-transform: uppercase;
        list-style-type: none;
        justify-content: space-between;
        align-items: center;
        padding: 0;
      }

      p {
        width: 25%;
        color: rgb(132, 142, 156);
        text-align: end;
      }
    `;
  }

  render () {
    return html`
      <footer>
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
      </footer>
    `;
  }
}

customElements.define('ib-footer', IBFooter);