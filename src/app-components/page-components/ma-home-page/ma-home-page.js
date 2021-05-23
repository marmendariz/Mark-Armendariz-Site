
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';

import {MaCard} from '../../util-components/ma-card/ma-card.js';
import {MaIcon} from '../../util-components/ma-icon/ma-icon.js';

export class MaHomePage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --ma-card-background-image: none;
          --ma-card-background-color: none;
          --ma-card-box-shadow: none;
        }
        div[slot="subtitle"]{
          @apply --ma-subtitle-text;
        }
        .highlighted{
          color: var(--ma-main-theme-color);
        }
        #resumeAnchor>ma-button{
          --ma-menu-page-button-width: 150px;
          --ma-button-background-color: var(--ma-main-theme-color);
          --ma-button-color: white;
          display: inline-block;
          cursor: pointer;
        }
        #topMessage{
          line-height: 30px;
            font-size: 12pt;
        }
        @media(max-width: 600px){
          #resumeButton{
            display: flex !important;
            justify-content: center;
          }
        }
      </style>
      <div>
        <div style="margin-top: 10px;">
          <ma-card class="centeredCard">
            <div id="titleSlot" slot="title"><h1>Hi, I'm <span class="highlighted"> Mark.</span></h1></div>
            <div slot="subtitle">[[subtitle]]</div>
            <div slot ="content">
              <p id="topMessage">[[data.topMsg]]</p>
              <a id="resumeAnchor" href="src\\docs\\MarkArmendariz_Resume.pdf"><ma-button id="resumeButton" text="Resume"></ma-button></a>
            </div>
          </ma-card>
        </div>
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
      subtitle:{
        type: String
      },
      data:{
        type: Object
      }
    };
  }

  _handlePageButtonClick(e){
    this.dispatchEvent(new CustomEvent('homeEnterTap', {bubbles: true, composed: true}));
  }

  _toUpperCase(text){
    return text.toUpperCase();
  }
}

window.customElements.define('ma-home-page', MaHomePage);
