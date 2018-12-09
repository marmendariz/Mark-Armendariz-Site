
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */


export class ScResumeSectionEntry extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <div>
      
      
      </div>



    `;
  }

  static get properties() {
    return {
      title:{
        type: String
      },
    };
  }



}

window.customElements.define('sc-resume-section-entry', ScResumeSectionEntry);
