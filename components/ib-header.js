import {html, css, LitElement} from 'lit';

export class IBHeader extends LitElement {
  static get styles () {
    return css`
      :host {
        color: var(--secondary-text-color);
      }

      #header-level1 {
        background-color: white;
        display: flex;
        justify-content: flex-end;
      }

      #header-level1 div.link-container {
        display: flex;
        align-items: center;
        padding: 15px 50px;
        margin-top: -0.2%;
      }

      #header-level1 div.link-container[status="selected"] {
        background-color: var(--blue-tone-background-color);
        color: var(--primary-text-color);
        transform: perspective(4px) rotateX(0.5deg);
        padding: 15px 80px;
      }

      #header-level1 div.link-container[status="selected"] a {
        border-bottom: solid 2px var(--primary-accent-color);
        padding: 5px;
        transform: perspective(4px) rotateX(-0.5deg);
      }

      #header-level2 {
        background-color: var(--blue-tone-background-color);
      }

      #header-level2 div.nav-container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
      }

      #header-level2 nav a {
        margin-left: 25px;
      }

      #header-level2 nav a:last-of-type {
        color: var(--links-blue-color);
        background-color: rgba(90, 155, 248, 0.1);
        padding: 15px 30px;
        border-radius: 5px;
        font-weight: 500;
      }

      #header-level2 nav a:last-of-type::after {
        content: "→";
        padding-left: 5px;
      }
    `;
  }

  render () {
    return html`
      <div id="header-level1">
        <div class="link-container" status="selected">
          <a>Placeholder</a>
        </div>
        <div class="link-container">
          <a>Placeholder Contabilistas</a>
        </div>
      </div>
      <div id="header-level2">
        <div class="nav-container">
          <div style="width:50px; height:50px; background-color: rgb(242, 244, 248);"></div>
          <nav>
            <a>Sobre Nós</a>
            <a>Funcionalidades</a>
            <a>Preço</a>
            <a>Ajuda Negócios</a>
            <a>Log in</a>
          </nav>
        </div>
      </div>
    `; 
  }
}

customElements.define('ib-header', IBHeader);