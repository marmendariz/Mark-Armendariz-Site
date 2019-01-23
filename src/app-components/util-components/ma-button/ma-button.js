import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

/**
 * @customElement
 * @polymer
 */


export class MaButton extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          @apply --ma-menu-button;
        }
        :host([selected]) button, button:hover{
          background-color: #555555;
          filter: drop-shadow(6px 6px 6px #555555);
          /*transform: scale(1.1);*/
          color: white;
        }
        button{
          height: var(--ma-menu-page-button-height, 40px);
          width: var(--ma-menu-page-button-width, 100px);
          background-color: white;
          color: black;
          border: none;
          font-weight: bold;
        }
      </style>

      <button on-click="buttonTapped">{{text}}</button>

    `;
  }

  static get properties() {
    return {
      text:{
        type: String,
        value: "Label"
      },
      page:{
        type: String,
        value: ""
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
    this.dispatchEvent(new CustomEvent(this.event.buttonTapped, {detail: {page: this.page}, bubbles: true, composed: true}));
    //this.dispatchEvent(new CustomEvent(this.event.buttonTapped, 
    //                  {detail: {id: this.id, name: this.text, type: "type"}, bubbles: true, composed: true}));
  }
  


}

window.customElements.define('ma-button', MaButton);
