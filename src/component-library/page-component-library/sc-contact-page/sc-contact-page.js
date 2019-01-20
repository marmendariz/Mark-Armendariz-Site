
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ScCard} from '../../sc-card/sc-card.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import {ScResumeEntry} from '../sc-resume-entry/sc-resume-entry.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import {ScIcon} from '../../sc-icon/sc-icon.js';


/**
 * @customElement
 * @polymer
 */


export class ScContactPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: var(--sc-page-padding, 0px);
          background-color: var(--sc-page-background-color ,white);
        }
        div[slot="subtitle"]{
          @apply --sc-subtitle-text;
        }
        div[slot="content"]{
          padding: 50px;
          @apply --sc-resume-page-style;
        }
        #pageContent{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin-top: 40px;
          --sc-card-frame:{
            height: 100% !important;
          }
        }
        sc-icon{
          width: 485px;
          padding: 20px;
          background-color: white;
          --sc-icon-box-shadow: none;
          --sc-icon-title:{
            font-weight: 700;
            color: black;
          }
          --sc-icon-background-color : white;
          /*--sc-icon-border-radius: 50%;*/
          --sc-icon-style:{
            width: 100px;
            height: 100px;
          }
          margin: 10px 43px;
        }
        sc-icon:hover{
          filter: drop-shadow(var(--sc-card-box-shadow, 10px 10px 10px #55555557));
          transform: translate(-1%, -2%);
        }
      </style>


<div>
      <sc-card>
        <div slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
        <div slot="subtitle">[[subtitle]]</div>
      </sc-card>

      <div id="pageContent">
        <a href="mailto:themarkarmendariz@gmail.com"><sc-icon title="My Gmail"
                    icon-name="gmail">
        </sc-icon></a>


        <a href="https://www.linkedin.com/in/mark-armendariz-b81256ba" target="_blank"><sc-icon title="My LinkedIn Profile"
                    icon-name="linkedin">
        </sc-icon></a>


        <a href="https://github.com/marmendariz" target="_blank"><sc-icon title=" My GitHub"
                    icon-name="github">
        </sc-icon></a>

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

window.customElements.define('sc-contact-page', ScContactPage);
