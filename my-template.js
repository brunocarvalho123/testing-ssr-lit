import {html, css, LitElement} from 'lit';


export class MyApp extends LitElement {
  static get styles () {
    return css`
      * {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
      }
    `;
  }

  render () {
    return html`
      <div>
        <header>
          <ib-header></ib-header>
        </header>

        <main>
          <ib-home-content></ib-home-content>
        </main>

        <footer>
          <ib-footer></ib-footer>
        </footer>
      </div>
    `;
  }
}
customElements.define('my-app', MyApp);

export const myTemplate = () => {
  return html`
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap');

      :root {
        /* background colors */
        --blue-tone-background-color: rgb(242, 244, 248);
        --grey-tone-background-color: rgb(250, 250, 250);
        --footer-background-color: rgb(238, 243, 249);

        /* text colors */
        --primary-text-color: rgb(26, 40, 62); /* blue */
        --secondary-text-color: rgb(112, 122, 136); /* grey */

        /* accent / links colors */
        --primary-accent-color: rgb(192, 41, 93); /* pink */
        --secondary-accent-color: rgb(104, 146, 200); /* blue */
        --links-blue-color: rgb(90, 155, 248);

        /* other colors */
        --footer-copyright-text-color: rgb(132, 142, 156);
        --light-grey-text-color: rgb(187, 191, 198);

        /* font sizes */
        --main-section-font-size: 1rem;
        --h1-font-size: 2.8em;
        --h2-font-size: 2.1em;
        --bigger-p-font-size: 1.4em;
        --smaller-p-font-size: 1.1em;

        font-size: 100%;
      }

      body {
        margin: 0;
      }
    </style>

    <script type="module" src="./imports.js"></script>
    <script src="./node_modules/quill/dist/quill.js"></script>

    <my-app></my-app>

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