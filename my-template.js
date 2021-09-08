import {html, css, LitElement} from 'lit';


export class SimpleGreeting extends LitElement {
  static get styles() {
    return css`p { color: blue }`;
  }
  static get properties() {
    return {
      name: {type: String}
    }
  }
  constructor() {
    super();
    this.name = 'Somebody';
  }
  render() {
    return html`
    <p>Hello, ${this.name}!</p>
    <casper-select-lit id="csl" highlight width=200>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </casper-select-lit>
    `;
  }
}
customElements.define('simple-greeting', SimpleGreeting);


export const myTemplate = () => {
  return html`
    <script>var process = {env: {NODE_ENV: ''}} ;</script>
    <script type="module" src="./imports.js"></script>

    <simple-greeting .name="${'pedro'}"></simple-greeting>

    <script type="module">
      // Hydrate template-shadowroots eagerly after rendering (for browsers without
      // native declarative shadow roots)
      import { hydrateShadowRoots } from './node_modules/@webcomponents/template-shadowroot/template-shadowroot.js';

      var isChrome = !!window.chrome;
      if (!isChrome) {
        hydrateShadowRoots(document.body);
      }
    </script>
  `;
};