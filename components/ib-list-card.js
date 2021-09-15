import {html, css, LitElement} from 'lit';

export class IBListCard extends LitElement {
  static get styles () {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        background-color: white;
      }

      #title-container {
        display: flex;
        align-self: center;
        align-items: center;
        font-weight: 600;
      }

      #title-container > span:first-of-type {
        color: var(--secondary-accent-color);
      }

      #title-container > span:last-of-type {
        color: var(--primary-accent-color);
      }
    `;
  }

  render () {
    return html`
    <div id="title-container">
      <div style="width:50px; height:50px; background-color: lightpink;"></div>
      <span>Venda</span>
      &nbsp;&&nbsp;
      <span>Receba</span>
    </div>
    <ul>
      <li>Emissão de faturas e identificação automática de recebimentos</li>
      <li>Integrado com serviços de apoio aos recebimentos: TPA, Moove, Débitos</li>
    </ul>
    `;
  }
}

customElements.define('ib-list-card', IBListCard);