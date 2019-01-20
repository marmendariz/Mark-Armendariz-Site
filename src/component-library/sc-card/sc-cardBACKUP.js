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
        slot[name='subtitle'], slot[name='title']{
          padding: 0 2%;
        }
        slot[name='title']{
          font-size: 20pt;
          line-height: 0px;
        }
        slot[name='subtitle']{
          font-size: 15pt;
          font-weight: bold;
        }
        #cardFrame{
          height: 100%;
          width: 100%;
          background-image: var(--sc-card-background-image);
          box-shadow: var(--sc-card-box-shadow, 4px 2px 31px #55555557);
          padding: var(--sc-card-padding, 20px);
          background-color: var(--sc-card-background-color, white);
          @apply --sc-card-frame;
        }
        @media screen and (max-width: 600px){
          slot[name='title']{
            font-size: 15pt;
          }
        }
      </style>

      <div id="cardFrame">
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
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