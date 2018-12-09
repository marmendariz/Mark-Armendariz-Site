
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
/**
 * @customElement
 * @polymer
 */


export class ScResumeSection extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        #titleSlot{

        }
      </style>

      <sc-card>
        <div id="titleSlot" slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
        <div slot="content">
            <ul>
                <li>Sustained and modernized products in the Electronic Maintenance System...</li>
            </ul>
        </div>
      </sc-card>


    `;
  }

  static get properties() {
    return {
      title:{
        type: String
      },
      selected:{
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
    };
  }

  _toLowerCase(title){
    return title.toLowerCase();
  }



}

window.customElements.define('sc-resume-section', ScResumeSection);
