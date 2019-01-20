import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScButton} from '../sc-button/sc-button.js';
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
          position: var(--sc-menu-bar-position, fixed)
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

        .bttonsArea.normal{
          display: contents !important;
          visibility: visible !important; 
        }
        .bttonsArea.hidden{
          display: none;
          visibility: hidden;
        }

        .menuButton{
          align-self: stretch;
          flex: 1;
          margin: 3px;
        }

        #menuBarCard{
          position: relative;
          width: 100%;
        }

        @media screen and (max-width: 910px){
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


        /*
          #buttonsArea{
            display: none;
          }*/

          
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
          <iron-icon id="menuIcon" icon="menu" on-click="_openMenu"></iron-icon>

          <div id="buttonsArea" class="bttonsArea hidden">
          <dom-repeat id="repeat" items="{{pages}}">
            <template>
              <sc-button id="{{item.id}}" 
                                   class="menuButton" 
                                   text="{{item.name}}">
              </sc-button>
            </template>
          </dom-repeat>
          </div>

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

    window.addEventListener('load', function(e){
        this._buttonsAreaAdjust(e);
      }.bind(this));
      
    window.addEventListener('resize', function(e){
      this._buttonsAreaAdjust(e);
    }.bind(this));

  }

  _buttonsAreaAdjust(e){
    if(window.innerWidth > 911){
      if(this.$.buttonsArea.classList.contains('hidden')){
        this.$.buttonsArea.classList.remove('hidden');
        this.$.buttonsArea.classList.add("normal");
      }
    }
    else {
       if(this.$.buttonsArea.classList.contains('normal')){
        this.$.buttonsArea.classList.remove('normal');
        this.$.buttonsArea.classList.add("hidden");
      }
    }
  }

  _handlePageButtonClick(e){
    this.set('selectedPage', e.detail);
    //this.selectedPage = e.detail;
  }

  _openMenu(e){
    /*if(this.$.buttons.style.display == 'none'){
      this.$.buttonsArea.style.display = 'block';
    }
      else{
        this.$.buttonsArea.style.display = 'none';

      }*/
    //var this.$.buttons = this.$.buttons;
    if(this.$.buttonsArea.classList.contains('normal')){
      this.$.buttonsArea.classList.remove('normal');
      this.$.buttonsArea.classList.add('hidden');
    }
    else if(this.$.buttonsArea.classList.contains('hidden')){
      this.$.buttonsArea.classList.add('normal');
      this.$.buttonsArea.classList.remove('hidden');
    }
    this.updateStyles();

  }

}

window.customElements.define('sc-menu-bar', ScMenuBar);
