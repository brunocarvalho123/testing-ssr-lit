import {html, css, LitElement} from 'lit';

export class BOActionsList extends LitElement {
  static get styles () {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      ul li {
        padding: 1rem 0;
        color: rgb(140, 140, 140);
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
  }

  render () {
    return html`
      <ul>
        ${this.actions.map((action) => {        
          return html`<li id="${action.id}">${action.name}</li>`}
        )}
      </ul>
    `;
  }
}

customElements.define('bo-actions-list', BOActionsList);