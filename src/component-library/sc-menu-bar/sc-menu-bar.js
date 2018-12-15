import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScMenuPageButton} from '../sc-menu-page-button/sc-menu-page-button.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {ScCard} from '../sc-card/sc-card.js';

/**
 * @customElement
 * @polymer
 */
export class ScMenuBar extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --sc-menu-page-button-height: 50px;
          --sc-menu-page-button-width: 100%;
          --sc-card-padding: 0px;
        }
        #menuPageButtons{
          display: flex;
          flex-wrap: wrap;
        }
        .pageButton{
          align-self: stretch;
          flex: 1;
          margin: 3px;
        }
      </style>
      
      <sc-card id="menuBarCard">
        <div slot="content" id="menuPageButtons">
          <dom-repeat id="repeat" items="{{pages}}">
            <template>
              <sc-menu-page-button id="{{item.id}}" 
                                   class="pageButton" 
                                   text="{{item.name}}">
              </sc-menu-page-button>
            </template>
          </dom-repeat>
        </div>
      </sc-card>
    `;
  }


  static get properties() {
    return {
      name: {
        type: String,
        value: 'sc-menu-bar'
      },
      
      pages: {
        type: Array,
        notify: true,
        reflectToAttribute: true,
      },

      selectedPage: {
        type: Object,
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  connectedCallback(){
    super.connectedCallback();
    this.$.menuBarCard.addEventListener('buttontap', e => this._handlePageButtonClick(e))
  }

  _handlePageButtonClick(e){
    this.set('selectedPage', e.detail);
    //this.selectedPage = e.detail;
  }

}

window.customElements.define('sc-menu-bar', ScMenuBar);
