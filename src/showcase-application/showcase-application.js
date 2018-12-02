import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScMenuBar} from '../component_library/sc-menu-bar/sc-menu-bar.js';
import {IconToggle} from '../component_library/icon-toggle.js';


/**
 * @customElement
 * @polymer
 */
class ShowcaseApplication extends PolymerElement {
 
  static get template() {
    return html`
      
      <style>
        :host {
          display: block;
        }
      </style>

      <sc-menu-bar on-reset-clicked></sc-menu-bar>

      <h2>Hello [[prop1]]!</h2>
      <icon-toggle></icon-toggle>

    `;
  }

  
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'showcase-application'
      }
    };
  }
}

window.customElements.define('showcase-application', ShowcaseApplication);
