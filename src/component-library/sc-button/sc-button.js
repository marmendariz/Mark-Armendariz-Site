import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScBaseButton} from '../sc-base-button/sc-base-button.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

/**
 * @customElement
 * @polymer
 */


export class ScButton extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          @apply --sc-menu-button;
        }
        :host([selected]) button, button:hover{
          background-color: #555555;
          filter: drop-shadow(6px 6px 6px #555555);
          /*transform: scale(1.1);*/
          color: white;
        }
        button{
          height: var(--sc-menu-page-button-height, 40px);
          width: var(--sc-menu-page-button-width, 100px);
          background-color: white;
          color: black;
          border: none;
          font-weight: bold;
        }
          /*
          #4CAF50
          #008CBA
          #f44336
          #e7e7e7
          #555555
          */
      </style>


      <button on-click="buttonTapped" class="menuTab">
        {{text}}
      </button>


    `;
  }


  /*********************
   * PROPERTIES METHOD *
   *********************/
  static get properties() {
    return {
      text:{
        type: String,
        value: "Label"
      },
      selected:{
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      event:{
        type: Object,
        value: {
          buttonTapped: 'buttontap'
        }
      }
    };
  }

  buttonTapped(e){
    //this.selected = !this.selected;
    console.log("mark first");
    this.dispatchEvent(new CustomEvent(this.event.buttonTapped, {detail: {}, bubbles: true, composed: true}));
    //this.dispatchEvent(new CustomEvent(this.event.buttonTapped, 
    //                  {detail: {id: this.id, name: this.text, type: "type"}, bubbles: true, composed: true}));
  }
  


}

window.customElements.define('sc-button', ScButton);
