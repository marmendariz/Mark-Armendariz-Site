import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';

export class IconToggle extends PolymerElement{

    static get template(){
        return html`
        <style>
        :host {
          display: block;
        }
        iron-icon{
            fill: var(--icon-toggle-color, rgba(0,0,0,0));
            stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon{
            fill: var(--icon-toggle-pressed-color, currentcolor);
        }

        </style>

        <iron-icon icon="{{toggleIcon}}"></iron-icon>

        `;
    }

    constructor(){
        super();
        this.addEventListener('click', this.toggle.bind(this));
    }

    static get properties(){
        return{
            toggleIcon: {
                type: String
            },
            pressed:{
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true
            }
            
        };
    }

    toggle() {
        this.pressed = !this.pressed;
    }


}

window.customElements.define('icon-toggle', IconToggle);
