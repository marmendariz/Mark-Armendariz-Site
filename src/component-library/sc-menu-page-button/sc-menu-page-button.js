import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScBaseButton} from '../sc-base-button/sc-base-button.js';

/**
 * @customElement
 * @polymer
 */


export class ScMenuPageButton extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        :host([selected]) button, button:hover{
          background-color: #555555;
          filter: drop-shadow(6px 6px 6px #555555);
          /*transform: scale(1.1);*/
          color: white;
        }
        button{
          height: var(--sc-menu-page-button-height, 10px);
          width: var(--sc-menu-page-button-width, 10px);
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
        type: String
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
    this.dispatchEvent(new CustomEvent(this.event.buttonTapped, 
                      {detail: {id: this.id, name: this.text}, bubbles: true, composed: true}));
  }
  


}

window.customElements.define('sc-menu-page-button', ScMenuPageButton);
