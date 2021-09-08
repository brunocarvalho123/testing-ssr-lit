import {html, css, LitElement} from 'lit';


export class MyApp extends LitElement {
  static get styles () {
    return css`
      .teste { background-color: lightpink }
    `;
  }

  render () {
    return html`
      <div>
        <div class="teste">
          <slot name="teste"></slot>
        </div>
        <slot name="teste2"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
customElements.define('my-app', MyApp);

export class SimpleGreeting extends LitElement {
  static get styles () {
    return css`p { color: blue }`;
  }
  static get properties () {
    return {
      name: {type: String}
    }
  }
  constructor () {
    super();
    this.name = 'Somebody';
  }
  render () {
    return html`
    <p>Hello h, ${this.name}!</p>
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

    <my-app>
      <simple-greeting .name="${'pedro'}" slot="teste"></simple-greeting>
      <simple-greeting .name="${'teste'}" slot="teste2"></simple-greeting>
      <ib-footer slot="footer"></ib-footer>
    </my-app>

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