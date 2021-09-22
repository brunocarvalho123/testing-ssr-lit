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

    if (this._isExpanded) {
      gridContainer.style.gridTemplateColumns = '1fr 15fr';
    } else {
      gridContainer.style.gridTemplateColumns = '1fr 4fr';
    }

    this._isExpanded = !this._isExpanded;

    // This fixes the scale of the site container (scalableContainer), whenever the available width changes
    const scalableContainer = gridContainer.querySelector('#scalable-container');
    if (scalableContainer.childElementCount > 0) {
      const scaleValue = scalableContainer.parentElement.offsetWidth / scalableContainer.offsetWidth;
      scalableContainer.style.transform = `scale(${scaleValue})`;
    }
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