import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {} from '@polymer/iron-icon/iron-icon';
import {} from '@polymer/iron-icons/iron-icons';
import {MaButton} from '../../util-components/ma-button/ma-button.js';
import {MaCard} from '../../util-components/ma-card/ma-card.js';

export class MaMenuBar extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          position: var(--ma-menu-bar-position, fixed)
          width: 100%;
          --ma-menu-page-button-height: 40px;
          --ma-menu-page-button-width: 100%;
          --ma-card-padding: 0px;
          --ma-card-style:{
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
          line-height: 20px;
          font-weight: 700;
          top: -3px;
          position: relative;
          width: 45%;
          margin: 0 auto;
          margin-left: 0px;
        }
        #menuIcon{
          display: none;
        }
        
        #buttonsArea{
          display: flex;
        }
        .bttonsArea.normal{
          display: flex;
          /*visibility: visible !important;*/
        }
        /*.bttonsArea.small{
          display: block;
          visibility: hidden;
        }*/

        .menuButton{
          width: 76px;
          align-self: stretch;
          flex: 1;
          margin: 3px;
        }
        ma-card#menuBarCard{
          position: relative;
          width: 100%;
          --ma-background-color: white;
        }
        @media screen and (max-width: 970px){
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
          #menuIcon{
            position: absolute;
            top: 0px;
            display: block;
            padding: 8px;
          }
          #menuIcon:hover{
            color: var(--ma-accent-color);
          }
        }
      </style>
      
      <ma-card id="menuBarCard">
        <div slot="content" id="buttons">
          <div id="appTitle">
            <div id="lineOne">[[nameLineOne]]</div>
            <div id="lineTwo">[[nameLineTwo]]</div>
          </div>
          <iron-icon id="menuIcon" icon="menu" on-tap="_openMenu"></iron-icon>

          <div id="buttonsArea" class="bttonsArea">
          <dom-repeat id="repeat" items="{{pages}}">
            <template>
              <ma-button id="{{item.id}}" 
                         class="menuButton"
                         page="{{item.page}}"
                         text="{{item.name}}">
              </ma-button>
            </template>
          </dom-repeat>
          </div>

        </div>
      </ma-card>
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

  /**
   * Adjust menu bar buttons when resizing
   * @param {*} e 
   */
  _buttonsAreaAdjust(e){
    console.log("there");
    console.log(window.innerWidth);
    if(window.innerWidth > 970){
        this.$.buttonsArea.style.display = "flex";
        this.$.buttonsArea.style.visibility = "visible";
    }
    else { //<911
        this.$.buttonsArea.style.display = "none";
        this.$.buttonsArea.style.visibility = "hidden";
      }
  }

  /**
   * 
   * @param {*} e 
   */
  _openMenu(e){

    var menu = this.$.buttonsArea;
    if(menu.style.display == "none"){
      menu.style.display = "block";
      menu.style.visibility = "visible";
    }
    else if(menu.style.display == "block"){
      menu.style.display = "none";
      menu.style.visibility = "hidden";
    }
  }



  _handlePageButtonClick(e){
    this.set('selectedPage', e.detail);
    if(window.innerWidth < 970){
      if(this.$.buttonsArea.style.display == "block"){
        this.$.buttonsArea.style.display = 'none';
        this.$.buttonsArea.style.visibility = "hidden";
      }
    } 
  }

}

window.customElements.define('ma-menu-bar', MaMenuBar);
