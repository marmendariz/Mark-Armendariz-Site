import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScMenuPageButton} from '../sc-menu-page-button/sc-menu-page-button.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {ScCard} from '../sc-card/sc-card.js';
import {} from '@polymer/iron-icon/iron-icon';
import {} from '@polymer/iron-icons/iron-icons';

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
          position: fixed;
          width: 100%;
          --sc-menu-page-button-height: 45px;
          --sc-menu-page-button-width: 100%;
          --sc-card-padding: 0px;
          --sc-card-style:{
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
          }
        }
        #buttons{
          display: flex;
          flex-wrap: wrap;
        }
        .pageButton{
          align-self: stretch;
          flex: 1;
          margin: 3px;
        }
        #appTitle{
          height: 10px;
          padding: 6px 18px;
          font-size: 20pt;
          line-height: 22px;
          font-weight: 700;
          top: -3px;
          position: relative;
          width: 45%;
          margin: 0 auto;
        }
        #menuIcon{
          display: none;
        }

        @media screen and (max-width: 900px){
          #appTitle{
            width: fit-content;
            height: auto;
            display: block;
            margin: 0 auto;
            padding: 20px;
            top: -10px;
          }
          #buttons{
            display: block;
          }
          #lineOne{
            float: left;
            margin-right: 10px;
          }
          #lineTwo{
            float: left;
          }
          .pageButton{
            display: none;
          }
          #menuIcon{
            position: absolute;
            top: 0px;
            display: block;
            padding: 8px;
          }
          #menuIcon:hover{
            color: blue;
          }
          
        }
      </style>
      
      <sc-card id="menuBarCard">
        <div slot="content" id="buttons">
          <div id="appTitle">
            <div id="lineOne">[[nameLineOne]]</div>
            <div id="lineTwo">[[nameLineTwo]]</div>
          </div>
          <iron-icon id="menuIcon" icon="menu"></iron-icon>
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
      nameLineOne: {
        type: String,
      },
      nameLineTwo:{
        type: String
      },

      
      pages: {
        type: Array,
        notify: true
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
