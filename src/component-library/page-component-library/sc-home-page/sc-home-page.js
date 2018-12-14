
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {ScResumeEntry} from '../sc-resume-entry/sc-resume-entry.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import {ScMenuPageButton} from '../../sc-menu-page-button/sc-menu-page-button.js';
/**
 * @customElement
 * @polymer
 */


export class ScHomePage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 100%;
          background-color: grey;
        }
        :host:hover{
          top: -100px;
          left: -100px;
        }
      </style>

      <div id="frame">


        <!-- START -->
        <p>fdfdf</p>
        <!-- END -->
        <sc-menu-page-button id="homeButton" 
                             class="pageButton" 
                             text="Enter">
        </sc-menu-page-button>

      </div>

    `;
  }


  static get properties() {
    return {
      /**
       * Title of Resume Section
       */
      title:{
        type: String
      },

      sectionId: {
        type: String
      },



      isGeneralType:{
        type: Boolean,
        value: false,
      },
      
      selected:{
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * TODO: Replace with web service response
       */
      resumeSectionData:{
        type: Object,
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  ready(){
    super.ready();
    this.$.frame.addEventListener('buttontap', e => this._handlePageButtonClick(e))

  }

  _handlePageButtonClick(e){
    //this.selectedPage = e.detail;
    console.log("home");
    this.dispatchEvent(new CustomEvent('homeEnterTap', {bubbles: true, composed: true}));
  }


}

window.customElements.define('sc-home-page', ScHomePage);
