import {html, css, LitElement} from 'lit';

export const myBackofficeTemplate = () => {
  return html`
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap');

      body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
      }

      #grid-container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-column-gap: 1vw;
        background-color: rgb(242, 242, 242);
        padding: 1.5%;
        height: 100vh;
        box-sizing: border-box;
      }

      #site-container {
        height: 81.41vh;
        overflow-y: scroll;
        align-self: center;
        box-shadow: 0px 0px 25px rgb(0, 0, 0, 0.2);
      }
    </style>

    <script type="module" src="./imports.js"></script>
    <script src="./node_modules/quill/dist/quill.js"></script>

    <div id="grid-container">
      <bo-sites-list></bo-sites-list>
      <div id="site-container">
        <my-app></my-app>
      </div>
    </div>

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