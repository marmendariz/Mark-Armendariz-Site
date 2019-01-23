
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {MaCard} from '../../util-components/ma-card/ma-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';
import {MaButton} from '../../util-components/ma-button/ma-button.js';
/**
 * @customElement
 * @polymer
 */


export class MaLandingPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-image:url('src/images/landingPage.jpg');
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        #landingFrame{
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 30pt;
          text-align: center;
          font-weight: 600;
        }
        #apptitle{
          font-size: 40pt;
          font-weight: 900;
          color: var(--ma-main-theme-color);
        }
        @media (min-width: 320px) and (max-width: 480px) {
          #apptitle{
            font-size: 30pt;
          }
        }
      </style>

      <div id="landingFrame">
        <div>Hi, I'm</div>
        <div id='apptitle'>Mark Armendariz</div>
        <ma-button text="Enter"></ma-button>
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
      }
    };
  }

  ready(){
    super.ready();
    this.$.landingFrame.addEventListener('buttontap', e => this._handlePageButtonClick(e))
  }

  _handlePageButtonClick(e){
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

window.customElements.define('ma-landing-page', MaLandingPage);
