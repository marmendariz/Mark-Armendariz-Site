
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

import {MaCard} from '../../util-components/ma-card/ma-card.js';
import '../ma-skill-progress-bar/ma-skill-progress-bar.js';

/**
 * @customElement
 * @polymer
 */


export class MaSkillsPage extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: var(--ma-page-background-color ,white);
        }
        div[slot="subtitle"]{
          color: #0c4e8a;
          font-weight: bold;
          font-size: 15pt;
        }

        ma-skill-progress-bar:hover{
          box-shadow: var(--ma-card-box-shadow, 10px 10px 47px 20px #55555557);
          transform: translate(-1%, -2%) scale(1.0, 1.0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translate(-1%, -2%) scale(1.0, 1.0);
          --ma-skill-progress-bar-color: var(--ma-main-theme-color-lite);
        }

        ma-card{
          --ma-card-frame:{
            height: 95vh;
          }
        }

        ul{
          padding: 0px;
        }
        #skillsList{
          height: 80%;
          margin: 45px auto;
          width: 90%;
        }

        ma-skill-progress-bar{
            margin: 40px 0px 25px 0px;
        }
        @media (min-width: 320px) and (max-width: 480px) {
          #skillsList{
            width: 100%;
          }
          ma-card{
            --ma-card-padding: 10px;
          }
        }

      </style>

      <ma-card>
        <div id="titleSlot" slot="title"><h1>{{_toLowerCase(title)}}</h1></div>
        <div slot="subtitle">[[subtitle]]</div>

        <div slot="content" id="skillsList">
            <dom-repeat id="repeat" items="{{data}}" as="skill">
              <template>
                  <ma-skill-progress-bar id=[[skill.id]]
                                         class="progressBar"
                                         progress=[[skill.skillLevel]]
                                         title=[[skill.name]]
                                         comment=[[skill.comment]]>
                  </ma-skill-progress-bar>
              </template>
            </dom-repeat>
        </div>
      </ma-card>

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
      data:{
        type: Object,
        observer: "_test",
        notify: true,
      }
    };
  }

  ready(){
    super.ready();
  }

  _test(data){
    console.log(data);
  }

  /**
   * 
   * @param {*} sectionId 
   */
  _getPageData(sectionId){
    return this.data[parseInt(sectionId)].entries;
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

window.customElements.define('ma-skills-page', MaSkillsPage);
