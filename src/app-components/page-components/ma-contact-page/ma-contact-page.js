
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

import {MaIcon} from '../../util-components/ma-icon/ma-icon.js';
import {MaCard} from '../../util-components/ma-card/ma-card.js';


/**
 * @customElement
 * @polymer
 */


export class MaContactPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: var(--ma-page-padding, 0px);
          background-color: var(--ma-page-background-color ,white);
        }
        div[slot="subtitle"]{
          @apply --ma-subtitle-text;
        }
        div[slot="content"]{
          padding: 50px;
          @apply --ma-resume-page-style;
        }
        #pageContent{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin-top: 20px;
          --ma-card-frame:{
            height: 100% !important;
          }
        }

        a{
          width: 347px;
        }
        ma-icon{
          padding: 20px;
          background-color: white;
          --ma-icon-box-shadow: none;
          --ma-icon-title:{
            font-weight: 700;
            color: black;
          }
          --ma-icon-background-color : white;
          --ma-icon-style:{
            width: 100px;
            height: 100px;
          }
          margin: 10px 43px;
        }
        ma-icon:hover{
          filter: drop-shadow(var(--ma-card-box-shadow, 10px 10px 10px #55555557));
          transform: translate(-1%, -2%);
        }

        @media (min-width: 481px) and (max-width: 767px) {
          ma-icon{
            margin: 10px 0px;
          }
        }

        @media (min-width: 320px) and (max-width: 480px) {
          ma-icon{
            margin: 10px 0px;
          }
        }
      </style>

      <div id="contactPage">
        <ma-card>
          <div slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
          <div slot="subtitle">[[subtitle]]</div>
        </ma-card>

        <div id="pageContent">
          <a href="mailto:themarkarmendariz@gmail.com">
            <ma-icon title="My Gmail" icon-name="gmail"></ma-icon>
          </a>
          <a href="https://www.linkedin.com/in/mark-armendariz-b81256ba" target="_blank">
            <ma-icon title="My LinkedIn Profile" icon-name="linkedin"></ma-icon>
          </a>
          <a href="https://github.com/marmendariz" target="_blank">
            <ma-icon title=" My GitHub" icon-name="github"></ma-icon>
          </a>
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
        type: String,
        reflectToAttribute: true
      },

      subtitle:{
        type: String,
        reflectToAttribute: true
      },

      data:{

      }
    };
  }

  _test(data){
    console.log(data);
  }

  /**
   * 
   * @param {*} sectionId 
   */
  _getPageData(sectionId){
    return this.resumeSectionData[parseInt(sectionId)].entries;
  }

  /**
   * Utility method for converting text to lowercase
   * @param {*} title 
   */
  _toLowerCase(text){
    return text.toLowerCase();
  }

  /**
   * 
   * @param {*} businessName 
   * @param {*} positionName 
   */
  _formatBusinessAndPosition(businessName, positionName){
    var returnString = "";
    if(businessName && !positionName){
      returnString = businessName;
    }
    else if(businessName && positionName){
      returnString = businessName + " - " + positionName;
    }
    return returnString;
  }


}

window.customElements.define('ma-contact-page', MaContactPage);
