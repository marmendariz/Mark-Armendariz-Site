import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
export class ScMenuTab extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

      </style>


      <div class="MenuBar">
        <h2>Hello [[name]]!</h2> 
      </div>


    `;
  }


  static get properties() {
    return {
      name: {
        type: String,
        value: 'sc-menu-tab'
      }
    };
  }
}

window.customElements.define('sc-menu-tab', ScMenuTab);
