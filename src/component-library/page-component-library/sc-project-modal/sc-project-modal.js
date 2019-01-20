
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';
import '@polymer/paper-dialog/paper-dialog.js';


/**
 * @customElement
 * @polymer
 */


export class ScProjectModal extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <paper-dialog id="dialog" opened={{opened}}>
      <h2>Header</h2>

        <p>kjhkjhkjhkjh</p>
      </paper-dialog>

      `;
    }

  static get properties() {
    return {
      /**
       * Title of Resume Section
       */
      title:{
        type: String,
        //observer: "_titleProcess"
      },
      text:{
        type: String
      },
      opened:{
        type: Boolean,
        notify: true,
        observer:"here"
      }
      
    };
  }

  here(val){
    console.log("yessenia")

    if(this.val)
    this.$.dialog.open();
    else
    this.$.dialog.close();
  }

}

window.customElements.define('sc-project-modal', ScProjectModal);
