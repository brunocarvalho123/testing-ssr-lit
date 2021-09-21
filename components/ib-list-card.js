import {html, css, LitElement} from 'lit';

export class IBListCard extends LitElement {
  static get properties () { 
    return { 
      header1: {
        type: String
      },
      header2: {
        type: String
      },
      list: {
        type: Array
      }
    };
  }

  static get styles () {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 30px 10px;
        box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.1);
      }

      #title-container {
        display: flex;
        align-self: center;
        align-items: center;
        font-weight: 600;
        font-size: var(--bigger-p-font-size);
      }

      #title-container > span:first-of-type {
        color: var(--secondary-accent-color);
      }

      #title-container > span:last-of-type {
        color: var(--primary-accent-color);
      }

      ul li:not(ul li:last-of-type) {
        margin-bottom: 30px;
      }
    `;
  }

  render () {
    return html`
      <div id="title-container">
        <div style="width:50px; height:50px; background-color: white; margin-right: 20px;"></div>
        <span>${this.header1}</span>
        &nbsp;&&nbsp;
        <span>${this.header2}</span>
      </div>
      
      <ul>
        ${this.list.map((listItem) => {        
          return html`<li>${listItem}</li>`}
        )}
      </ul>
    `;
  }
}

customElements.define('ib-list-card', IBListCard);

