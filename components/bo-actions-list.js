import {html, css, LitElement} from 'lit';

export class BOActionsList extends LitElement {
  static get styles () {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: rgb(140, 140, 140);
      }

      img {
        align-self: flex-start;
        cursor: pointer;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      ul li {
        padding: 1rem 0;
        border-bottom: solid 1px rgb(140, 140, 140);
        cursor: pointer;
      }
    `;
  }

  constructor () {
    super();

    this.actions = [
      { name:'Ação 1', id: 'A1' }, 
      { name: 'Ação 2', id: 'A2' }, 
      { name: 'Ação 3', id: 'A3'}
    ];

    this._isExpanded = true;
  }

  toggleWidth (event) {
    const gridContainer = this.parentElement;
    const mainContent = gridContainer.querySelector('#main-content');

    if (this._isExpanded) {
      gridContainer.style.gridTemplateColumns = '1fr 15fr';
      mainContent.style.height = '89.89%';
    } else {
      gridContainer.style.gridTemplateColumns = '1fr 4fr';
      mainContent.style.height = '76.52%';
    }

    // This fixes the scale of the site wrapper, whenever the available width of its parent changes
    const siteWrapper = mainContent.querySelector('#site-wrapper');
    if (siteWrapper.childElementCount > 0) {
      const scaleValue = mainContent.offsetWidth / siteWrapper.offsetWidth;
      siteWrapper.style.transform = `scale(${scaleValue})`;
    }

    this._isExpanded = !this._isExpanded;
  }

  render () {
    return html`
      <img src="./public/icons/bars.svg" height="24" @click="${this.toggleWidth}">
      <ul>
        ${this.actions.map((action) => {        
          return html`<li id="${action.id}">${action.name}</li>`}
        )}
      </ul>
    `;
  }
}

customElements.define('bo-actions-list', BOActionsList);