import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/legacy/polymer.dom';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

/**
 * @customElement
 * @polymer
 */
export class MaCard extends PolymerElement {
 
  static get template() {
    return html`
      
      <style>
        :host {
          display: block;
          @apply --ma-card-style;
        }
        slot[name='subtitle'], slot[name='title']{
          padding: 0 2%;
        }
        slot[name='title']{
          font-size: 1.4em;
          line-height: 0px;
        }
        slot[name='subtitle']{
          font-size: 15pt;
          font-weight: bold;
        }
        #cardFrame{
          background-image: var(--ma-card-background-image, linear-gradient(white, #fafafa));
          height: var(--ma-card-frame-height, 100%);
          box-shadow: var(--ma-card-box-shadow, 4px 2px 31px #55555557);
          padding: var(--ma-card-padding, 20px);
          background-color: var(--ma-card-background-color, white);
          @apply --ma-card-frame;
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
        value: 'ma-card'
      },
    };
  }

}

window.customElements.define('ma-card', MaCard);
