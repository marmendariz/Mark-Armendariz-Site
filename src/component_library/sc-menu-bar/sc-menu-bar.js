import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScMenuTab} from '../sc-menu-tab/sc-menu-tab.js';

/**
 * @customElement
 * @polymer
 */
export class ScMenuBar extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        .MenuBar{
          width: 100%;
          height: 100px;
          background-color: blue;
        }

      </style>


      <div class="MenuBar">
        <h2>Hello [[name]]!</h2> 

        <sc-menu-tab></sc-menu-tab>
        
      </div>


    `;
  }


  static get properties() {
    return {
      name: {
        type: String,
        value: 'sc-menu-bar'
      }
    };
  }
}

window.customElements.define('sc-menu-bar', ScMenuBar);
