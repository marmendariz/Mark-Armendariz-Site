
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import {MaCard} from '../../util-components/ma-card/ma-card.js';

/**
 * @customElement
 * @polymer
 */


export class MaResumePage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          border-bottom: 1px solid black;
        }
        #contentSlot{
          @apply --ma-resume-page-style;
        }
      </style>

      <!--<ma-card>-->

      <div id="titleSlot" slot="title"><h1>{{_toLowerCase(title)}}</h1></div>

      <div id="contentSlot" slot="content">
        <!-- START -->
        <dom-repeat id="repeat" items="{{resumeSectionData}}" as="section">
          <template>

              <p>{{_formatBusinessAndPosition(section.companyName, section.positionName)}}</p>
              <ul>
                <dom-repeat id="repeat2" items="{{section.points}}">
                  <template>
                      <li>{{item}}</li>
                  </template>
                </dom-repeat>
              </ul>
              
          </template>
        </dom-repeat>
        <!-- END -->
      </div>

      <!--</ma-card>-->

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

      pageId: {
        type: String,
        reflectToAttribute: true
      },



      isGeneralType:{
        type: Boolean,
        value: false,
      },
      
      /**
       * TODO: Replace with web service response
       */
      resumeSectionData:{
        type: Object,
        observer: "_test",
        notify: true,
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

window.customElements.define('ma-resume-page', MaResumePage);
