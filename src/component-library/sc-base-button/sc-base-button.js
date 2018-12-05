import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
 
export class ScBaseButton extends PolymerElement {
  
  /*static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

      </style>

    `;
  }*/

  static get properties() {
    return {
      tagName: {
        type: String,
        value: 'sc-base-button',
        readOnly: false
      },
      buttonProperties:{
        type: Object,
        value: {},
      }
    };
  }

  buttonTapped (e){
    this.dispatchEvent(new CustomEvent("buttonTapped", {detail: {properties: ''}}));
  }

}

window.customElements.define('sc-base-button', ScBaseButton);
