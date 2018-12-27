
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


export class ScLandingPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: grey;
        }
      </style>

      <div id="landingFrame">


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

      hidden:{
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      route: {
        type: String,
        notify: true,
        observer: "_checkRoute",
        reflectToAttribute: true
      },

      selected:{
        type: Boolean,
        value: false,
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
    //this.$.frame.addEventListener('buttontap', e => this._handlePageButtonClick(e))
  }

  _handlePageButtonClick(e){
    //this.selectedPage = e.detail;
    console.log("home");
    this.dispatchEvent(new CustomEvent('homeEnterTap', {bubbles: true, composed: true}));
  }

  _checkRoute(route){
    if(route.path=="/"){
      this.hidden = false;
    }
  }

  hide(){
    this.hidden=true;
  }

}

window.customElements.define('sc-landing-page', ScLandingPage);
