import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/legacy/polymer.dom';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

/**
 * @customElement
 * @polymer
 */
export class ScCard extends PolymerElement {
 
  static get template() {
    return html`
      
      <style>
        :host {
          display: block;
          @apply --sc-card-style;
        }

        #cardFrame{
          @apply --sc-card-frame;
          box-shadow: var(--sc-card-box-shadow, 4px 2px 31px #55555557);
          padding: var(--sc-card-padding, 20px);
          background-color: white;
        }
      </style>

      <div id="cardFrame">
        <slot name="title"></slot>
        <slot name="content"></slot>
        <slot name="controls"></slot>
      </div>
      

    `;
  }

  
  static get properties() {
    return {
      name: {
        type: String,
        value: 'sc-card'
      },
    };
  }

}

window.customElements.define('sc-card', ScCard);
